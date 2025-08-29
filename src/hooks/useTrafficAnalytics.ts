import { useEffect, useState, useCallback } from 'react';

export interface TrafficSource {
  type: 'search' | 'social' | 'direct' | 'referral' | 'affiliate' | 'email' | 'unknown';
  source: string;
  medium: string;
  campaign?: string;
  term?: string;
  content?: string;
  affiliateId?: string;
  timestamp: Date;
  userAgent: string;
  referrer: string;
  url: string;
  platform?: string; // Specific platform (e.g., 'facebook', 'google')
  searchEngine?: string; // Specific search engine
  socialPlatform?: string; // Specific social platform
}

export interface TrafficStats {
  totalVisits: number;
  sources: {
    search: number;
    social: number;
    direct: number;
    referral: number;
    affiliate: number;
    email: number;
    unknown: number;
  };
  topSources: Array<{
    source: string;
    count: number;
    percentage: number;
  }>;
  topSearchEngines: Array<{
    engine: string;
    count: number;
  }>;
  topSocialPlatforms: Array<{
    platform: string;
    count: number;
  }>;
  topAffiliates: Array<{
    affiliateId: string;
    count: number;
    platforms: string[];
  }>;
  dateWiseStats: {
    daily: Array<{
      date: string;
      visits: number;
      sources: Record<string, number>;
    }>;
    weekly: Array<{
      week: string;
      visits: number;
      sources: Record<string, number>;
    }>;
    monthly: Array<{
      month: string;
      visits: number;
      sources: Record<string, number>;
    }>;
  };
  platformBreakdown: Record<string, number>;
  searchEngineBreakdown: Record<string, number>;
}

export interface AffiliateLink {
  id: string;
  name: string;
  code: string;
  url: string;
  createdAt: Date;
  totalClicks: number;
  platforms: string[];
}

export const useTrafficAnalytics = () => {
  const [currentTraffic, setCurrentTraffic] = useState<TrafficSource | null>(null);
  const [trafficHistory, setTrafficHistory] = useState<TrafficSource[]>([]);
  const [affiliateLinks, setAffiliateLinks] = useState<AffiliateLink[]>([]);

  const detectSearchEngine = (referrer: string): string | null => {
    const lowerReferrer = referrer.toLowerCase();
    
    if (lowerReferrer.includes('google.com') || lowerReferrer.includes('google.')) return 'Google';
    if (lowerReferrer.includes('bing.com') || lowerReferrer.includes('bing.')) return 'Bing';
    if (lowerReferrer.includes('yahoo.com') || lowerReferrer.includes('yahoo.')) return 'Yahoo';
    if (lowerReferrer.includes('duckduckgo.com') || lowerReferrer.includes('duckduckgo.')) return 'DuckDuckGo';
    if (lowerReferrer.includes('baidu.com') || lowerReferrer.includes('baidu.')) return 'Baidu';
    if (lowerReferrer.includes('yandex.com') || lowerReferrer.includes('yandex.')) return 'Yandex';
    if (lowerReferrer.includes('ecosia.org') || lowerReferrer.includes('ecosia.')) return 'Ecosia';
    if (lowerReferrer.includes('qwant.com') || lowerReferrer.includes('qwant.')) return 'Qwant';

    return null;
  };

  const detectSocialPlatform = (referrer: string): string | null => {
    const lowerReferrer = referrer.toLowerCase();
    
    if (lowerReferrer.includes('facebook.com') || lowerReferrer.includes('fb.com') || lowerReferrer.includes('fb.me')) return 'Facebook';
    if (lowerReferrer.includes('twitter.com') || lowerReferrer.includes('x.com') || lowerReferrer.includes('t.co')) return 'Twitter/X';
    if (lowerReferrer.includes('instagram.com') || lowerReferrer.includes('ig.me')) return 'Instagram';
    if (lowerReferrer.includes('linkedin.com') || lowerReferrer.includes('lnkd.in')) return 'LinkedIn';
    if (lowerReferrer.includes('youtube.com') || lowerReferrer.includes('youtu.be')) return 'YouTube';
    if (lowerReferrer.includes('tiktok.com') || lowerReferrer.includes('vm.tiktok.com')) return 'TikTok';
    if (lowerReferrer.includes('pinterest.com') || lowerReferrer.includes('pin.it')) return 'Pinterest';
    if (lowerReferrer.includes('reddit.com') || lowerReferrer.includes('redd.it')) return 'Reddit';
    if (lowerReferrer.includes('whatsapp.com') || lowerReferrer.includes('wa.me')) return 'WhatsApp';
    if (lowerReferrer.includes('telegram.me') || lowerReferrer.includes('t.me')) return 'Telegram';
    if (lowerReferrer.includes('snapchat.com') || lowerReferrer.includes('snap.com')) return 'Snapchat';
    if (lowerReferrer.includes('discord.com') || lowerReferrer.includes('discord.gg')) return 'Discord';
    if (lowerReferrer.includes('twitch.tv')) return 'Twitch';
    if (lowerReferrer.includes('medium.com')) return 'Medium';
    if (lowerReferrer.includes('quora.com')) return 'Quora';

    return null;
  };

  const detectAffiliateLink = (url: string): string | null => {
    const urlParams = new URLSearchParams(url.split('?')[1] || '');
    
    // Check for affiliate parameters
    const affiliateId = urlParams.get('affiliate_id') || urlParams.get('aff') || urlParams.get('ref');
    
    // Check for Gumroad affiliate link pattern
    if (url.includes('gumroad.com/a/') && url.includes('/')) {
      const gumroadMatch = url.match(/gumroad\.com\/a\/([^\/]+)/);
      if (gumroadMatch) {
        return gumroadMatch[1] || 'gumroad';
      }
    }
    
    return affiliateId;
  };

  // Parse UTM parameters
  const parseUTMParameters = useCallback((url: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    
    return {
      source: urlParams.get('utm_source'),
      medium: urlParams.get('utm_medium'),
      campaign: urlParams.get('utm_campaign'),
      term: urlParams.get('utm_term'),
      content: urlParams.get('utm_content')
    };
  }, []);

  const determineTrafficType = (referrer: string, url: string): TrafficSource => {
    const urlParams = new URLSearchParams(url.split('?')[1] || '');
    const affiliateId = detectAffiliateLink(url);
    const searchEngine = detectSearchEngine(referrer);
    const socialPlatform = detectSocialPlatform(referrer);
    const userAgent = navigator.userAgent;
    
    // Enhanced UTM parameter detection
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');
    const utmTerm = urlParams.get('utm_term');
    const utmContent = urlParams.get('utm_content');
    
    // If affiliate link is detected
    if (affiliateId) {
      return {
        type: 'affiliate',
        source: affiliateId,
        medium: 'affiliate',
        campaign: utmCampaign || 'affiliate_campaign',
        term: utmTerm || '',
        content: utmContent || '',
        affiliateId: affiliateId,
        searchEngine: searchEngine,
        socialPlatform: socialPlatform,
        platform: socialPlatform || searchEngine || 'affiliate',
        timestamp: new Date(),
        userAgent,
        referrer,
        url
      };
    }
    
    // If social platform is detected
    if (socialPlatform) {
      return {
        type: 'social',
        source: socialPlatform,
        medium: 'social',
        campaign: utmCampaign || 'social_campaign',
        term: utmTerm || '',
        content: utmContent || '',
        affiliateId: null,
        searchEngine: null,
        socialPlatform: socialPlatform,
        platform: socialPlatform,
        timestamp: new Date(),
        userAgent,
        referrer,
        url
      };
    }

    // If search engine is detected
    if (searchEngine) {
      return {
        type: 'search',
        source: searchEngine,
        medium: 'organic',
        campaign: utmCampaign || 'organic_search',
        term: utmTerm || '',
        content: utmContent || '',
        affiliateId: null,
        searchEngine: searchEngine,
        socialPlatform: null,
        platform: searchEngine,
        timestamp: new Date(),
        userAgent,
        referrer,
        url
      };
    }

    // If UTM parameters are present
    if (utmSource) {
      return {
        type: utmMedium === 'social' ? 'social' : utmMedium === 'search' ? 'search' : 'referral',
        source: utmSource,
        medium: utmMedium || 'referral',
        campaign: utmCampaign || '',
        term: utmTerm || '',
        content: utmContent || '',
        affiliateId: null,
        searchEngine: searchEngine,
        socialPlatform: socialPlatform,
        platform: utmSource,
        timestamp: new Date(),
        userAgent,
        referrer,
        url
      };
    }
    
    // If referrer exists but not recognized
    if (referrer && referrer !== '') {
      try {
        const referrerUrl = new URL(referrer);
      return {
          type: 'referral',
          source: referrerUrl.hostname,
          medium: 'referral',
          campaign: utmCampaign || 'referral_campaign',
          term: utmTerm || '',
          content: utmContent || '',
          affiliateId: null,
          searchEngine: searchEngine,
          socialPlatform: socialPlatform,
          platform: referrerUrl.hostname,
          timestamp: new Date(),
        userAgent,
        referrer,
          url
      };
      } catch {
      return {
          type: 'referral',
          source: referrer,
          medium: 'referral',
          campaign: utmCampaign || 'referral_campaign',
          term: utmTerm || '',
          content: utmContent || '',
          affiliateId: null,
          searchEngine: searchEngine,
          socialPlatform: socialPlatform,
          platform: referrer,
          timestamp: new Date(),
        userAgent,
        referrer,
          url
      };
      }
    }

    // Default to direct traffic
      return {
        type: 'direct',
        source: 'direct',
        medium: 'none',
      campaign: utmCampaign || 'direct_campaign',
      term: utmTerm || '',
      content: utmContent || '',
      affiliateId: null,
      searchEngine: null,
      socialPlatform: null,
      platform: 'direct',
      timestamp: new Date(),
        userAgent,
        referrer,
      url
    };
  };

  // Generate date-wise statistics
  const generateDateWiseStats = useCallback((traffic: TrafficSource[]) => {
    const dailyStats: Record<string, { visits: number; sources: Record<string, number> }> = {};
    const weeklyStats: Record<string, { visits: number; sources: Record<string, number> }> = {};
    const monthlyStats: Record<string, { visits: number; sources: Record<string, number> }> = {};

    traffic.forEach(visit => {
      const date = new Date(visit.timestamp);
      const dateStr = date.toISOString().split('T')[0];
      const weekStr = getWeekString(date);
      const monthStr = date.toISOString().slice(0, 7); // YYYY-MM

      // Daily stats
      if (!dailyStats[dateStr]) {
        dailyStats[dateStr] = { visits: 0, sources: {} };
      }
      dailyStats[dateStr].visits++;
      dailyStats[dateStr].sources[visit.type] = (dailyStats[dateStr].sources[visit.type] || 0) + 1;

      // Weekly stats
      if (!weeklyStats[weekStr]) {
        weeklyStats[weekStr] = { visits: 0, sources: {} };
      }
      weeklyStats[weekStr].visits++;
      weeklyStats[weekStr].sources[visit.type] = (weeklyStats[weekStr].sources[visit.type] || 0) + 1;

      // Monthly stats
      if (!monthlyStats[monthStr]) {
        monthlyStats[monthStr] = { visits: 0, sources: {} };
      }
      monthlyStats[monthStr].visits++;
      monthlyStats[monthStr].sources[visit.type] = (monthlyStats[monthStr].sources[visit.type] || 0) + 1;
    });

    return {
      daily: Object.entries(dailyStats)
        .map(([date, stats]) => ({ date, ...stats }))
        .sort((a, b) => a.date.localeCompare(b.date)),
      weekly: Object.entries(weeklyStats)
        .map(([week, stats]) => ({ week, ...stats }))
        .sort((a, b) => a.week.localeCompare(b.week)),
      monthly: Object.entries(monthlyStats)
        .map(([month, stats]) => ({ month, ...stats }))
        .sort((a, b) => a.month.localeCompare(b.month))
    };
  }, []);

  // Helper function to get week string
  const getWeekString = (date: Date): string => {
    const year = date.getFullYear();
    const week = Math.ceil((date.getTime() - new Date(year, 0, 1).getTime()) / (7 * 24 * 60 * 60 * 1000));
    return `${year}-W${week.toString().padStart(2, '0')}`;
  };

  // Track current visit
  const trackVisit = useCallback(() => {
    const referrer = document.referrer;
    const currentUrl = window.location.href;
    const sessionId = sessionStorage.getItem('analytics_session_id');
    const currentSessionId = `${Date.now()}-${Math.random()}`;
    
    // Only track if this is a new session or different page
    const lastTrackedUrl = sessionStorage.getItem('last_tracked_url');
    const shouldTrack = !sessionId || lastTrackedUrl !== currentUrl;
    
    if (shouldTrack) {
      const trafficSource = determineTrafficType(referrer, currentUrl);
      
      setCurrentTraffic(trafficSource);
      
      // Add to history
      setTrafficHistory(prev => [...prev, trafficSource]);
      
      // Store in localStorage for persistence
      const storedHistory = localStorage.getItem('traffic_history');
      const history = storedHistory ? JSON.parse(storedHistory) : [];
      history.push({
        ...trafficSource,
        timestamp: trafficSource.timestamp.toISOString()
      });
      
      // Keep only last 10000 visits
      if (history.length > 10000) {
        history.splice(0, history.length - 10000);
      }
      
      localStorage.setItem('traffic_history', JSON.stringify(history));
      
      // Update session tracking
      sessionStorage.setItem('analytics_session_id', currentSessionId);
      sessionStorage.setItem('last_tracked_url', currentUrl);
      
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: currentUrl,
          traffic_source: trafficSource.type,
          traffic_medium: trafficSource.medium,
          traffic_campaign: trafficSource.campaign,
          social_platform: trafficSource.socialPlatform,
          search_engine: trafficSource.searchEngine,
          affiliate_id: trafficSource.affiliateId
        });
      }
    }
  }, [determineTrafficType]);

  // Get traffic statistics with enhanced data
  const getTrafficStats = useCallback((): TrafficStats => {
    const allTraffic = [...trafficHistory];
    
    if (currentTraffic) {
      allTraffic.push(currentTraffic);
    }

    const sources = {
      search: allTraffic.filter(t => t.type === 'search').length,
      social: allTraffic.filter(t => t.type === 'social').length,
      direct: allTraffic.filter(t => t.type === 'direct').length,
      referral: allTraffic.filter(t => t.type === 'referral').length,
      affiliate: allTraffic.filter(t => t.type === 'affiliate').length,
      email: allTraffic.filter(t => t.type === 'email').length,
      unknown: allTraffic.filter(t => t.type === 'unknown').length,
    };

    const totalVisits = allTraffic.length;

    // Top sources
    const sourceCounts = allTraffic.reduce((acc, traffic) => {
      acc[traffic.source] = (acc[traffic.source] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const topSources = Object.entries(sourceCounts)
      .map(([source, count]) => ({
        source,
        count,
        percentage: totalVisits > 0 ? (count / totalVisits) * 100 : 0
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Top search engines
    const searchEngines = allTraffic
      .filter(t => t.type === 'search')
      .reduce((acc, traffic) => {
        acc[traffic.source] = (acc[traffic.source] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    const topSearchEngines = Object.entries(searchEngines)
      .map(([engine, count]) => ({ engine, count }))
      .sort((a, b) => b.count - a.count);

    // Top social platforms
    const socialPlatforms = allTraffic
      .filter(t => t.type === 'social')
      .reduce((acc, traffic) => {
        acc[traffic.source] = (acc[traffic.source] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    const topSocialPlatforms = Object.entries(socialPlatforms)
      .map(([platform, count]) => ({ platform, count }))
      .sort((a, b) => b.count - a.count);

    // Top affiliates with platform breakdown
    const affiliates = allTraffic
      .filter(t => t.affiliateId)
      .reduce((acc, traffic) => {
        if (!acc[traffic.affiliateId!]) {
          acc[traffic.affiliateId!] = { count: 0, platforms: new Set<string>() };
        }
        acc[traffic.affiliateId!].count++;
        if (traffic.socialPlatform) acc[traffic.affiliateId!].platforms.add(traffic.socialPlatform);
        if (traffic.searchEngine) acc[traffic.affiliateId!].platforms.add(traffic.searchEngine);
        if (traffic.platform) acc[traffic.affiliateId!].platforms.add(traffic.platform);
        return acc;
      }, {} as Record<string, { count: number; platforms: Set<string> }>);

    const topAffiliates = Object.entries(affiliates)
      .map(([affiliateId, data]) => ({ 
        affiliateId, 
        count: data.count,
        platforms: Array.from(data.platforms)
      }))
      .sort((a, b) => b.count - a.count);

    // Platform breakdown
    const platformBreakdown = allTraffic.reduce((acc, traffic) => {
      const platform = traffic.socialPlatform || traffic.searchEngine || traffic.platform || traffic.source;
      acc[platform] = (acc[platform] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Search engine breakdown
    const searchEngineBreakdown = allTraffic
      .filter(t => t.type === 'search')
      .reduce((acc, traffic) => {
        acc[traffic.source] = (acc[traffic.source] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    // Generate date-wise stats
    const dateWiseStats = generateDateWiseStats(allTraffic);

    return {
      totalVisits,
      sources,
      topSources,
      topSearchEngines,
      topSocialPlatforms,
      topAffiliates,
      dateWiseStats,
      platformBreakdown,
      searchEngineBreakdown
    };
  }, [trafficHistory, currentTraffic, generateDateWiseStats]);

  // Create affiliate link
  const createAffiliateLink = useCallback((name: string) => {
    const code = generateAffiliateCode();
    const affiliateLink: AffiliateLink = {
      id: Date.now().toString(),
      name,
      code,
      url: `${window.location.origin}?affiliate_id=${code}`,
      createdAt: new Date(),
      totalClicks: 0,
      platforms: []
    };

    setAffiliateLinks(prev => [...prev, affiliateLink]);
    
    // Store in localStorage
    const storedLinks = localStorage.getItem('affiliate_links');
    const links = storedLinks ? JSON.parse(storedLinks) : [];
    links.push({
      ...affiliateLink,
      createdAt: affiliateLink.createdAt.toISOString()
    });
    localStorage.setItem('affiliate_links', JSON.stringify(links));

    return affiliateLink;
  }, []);

  // Generate unique affiliate code
  const generateAffiliateCode = (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Clear session data (useful for testing)
  const clearSessionData = useCallback(() => {
    sessionStorage.removeItem('analytics_session_id');
    sessionStorage.removeItem('last_tracked_url');
  }, []);

  // Force track a visit (for testing purposes)
  const forceTrackVisit = useCallback(() => {
    clearSessionData();
    trackVisit();
  }, [clearSessionData, trackVisit]);

  // Load traffic history from localStorage
  useEffect(() => {
    const storedHistory = localStorage.getItem('traffic_history');
    if (storedHistory) {
      try {
        const history = JSON.parse(storedHistory);
        const parsedHistory = history.map((item: any) => ({
          ...item,
          timestamp: new Date(item.timestamp)
        }));
        setTrafficHistory(parsedHistory);
      } catch (error) {
        console.error('Error parsing traffic history:', error);
      }
    }

    // Load affiliate links
    const storedAffiliateLinks = localStorage.getItem('affiliate_links');
    if (storedAffiliateLinks) {
      try {
        const links = JSON.parse(storedAffiliateLinks);
        const parsedLinks = links.map((link: any) => ({
          ...link,
          createdAt: new Date(link.createdAt)
        }));
        setAffiliateLinks(parsedLinks);
      } catch (error) {
        console.error('Error parsing affiliate links:', error);
      }
    }
  }, []);

  // Track visit on component mount
  useEffect(() => {
    trackVisit();
  }, [trackVisit]);

  return {
    currentTraffic,
    trafficHistory,
    getTrafficStats,
    trackVisit,
    clearSessionData,
    forceTrackVisit,
    createAffiliateLink,
    affiliateLinks
  };
};
