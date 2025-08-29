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

  // Enhanced search engine detection
  const detectSearchEngine = useCallback((referrer: string): { engine: string; term?: string } | null => {
    if (!referrer) return null;

    const url = new URL(referrer);
    const hostname = url.hostname.toLowerCase();

    // Google
    if (hostname.includes('google')) {
      const term = url.searchParams.get('q') || url.searchParams.get('query');
      return { engine: 'Google', term };
    }

    // Bing
    if (hostname.includes('bing')) {
      const term = url.searchParams.get('q');
      return { engine: 'Bing', term };
    }

    // Yahoo
    if (hostname.includes('yahoo')) {
      const term = url.searchParams.get('p') || url.searchParams.get('q');
      return { engine: 'Yahoo', term };
    }

    // DuckDuckGo
    if (hostname.includes('duckduckgo')) {
      const term = url.searchParams.get('q');
      return { engine: 'DuckDuckGo', term };
    }

    // Baidu
    if (hostname.includes('baidu')) {
      const term = url.searchParams.get('wd');
      return { engine: 'Baidu', term };
    }

    // Yandex
    if (hostname.includes('yandex')) {
      const term = url.searchParams.get('text');
      return { engine: 'Yandex', term };
    }

    // Ecosia
    if (hostname.includes('ecosia')) {
      const term = url.searchParams.get('q');
      return { engine: 'Ecosia', term };
    }

    // Qwant
    if (hostname.includes('qwant')) {
      const term = url.searchParams.get('q');
      return { engine: 'Qwant', term };
    }

    return null;
  }, []);

  // Enhanced social media platform detection
  const detectSocialPlatform = useCallback((referrer: string): { platform: string; content?: string } | null => {
    if (!referrer) return null;

    const url = new URL(referrer);
    const hostname = url.hostname.toLowerCase();

    // Facebook
    if (hostname.includes('facebook') || hostname.includes('fb.com')) {
      return { platform: 'Facebook' };
    }

    // Twitter/X
    if (hostname.includes('twitter') || hostname.includes('x.com')) {
      return { platform: 'Twitter/X' };
    }

    // Instagram
    if (hostname.includes('instagram')) {
      return { platform: 'Instagram' };
    }

    // LinkedIn
    if (hostname.includes('linkedin')) {
      return { platform: 'LinkedIn' };
    }

    // YouTube
    if (hostname.includes('youtube') || hostname.includes('youtu.be')) {
      return { platform: 'YouTube' };
    }

    // TikTok
    if (hostname.includes('tiktok')) {
      return { platform: 'TikTok' };
    }

    // Pinterest
    if (hostname.includes('pinterest')) {
      return { platform: 'Pinterest' };
    }

    // Reddit
    if (hostname.includes('reddit')) {
      return { platform: 'Reddit' };
    }

    // WhatsApp
    if (hostname.includes('whatsapp')) {
      return { platform: 'WhatsApp' };
    }

    // Telegram
    if (hostname.includes('t.me') || hostname.includes('telegram')) {
      return { platform: 'Telegram' };
    }

    // Snapchat
    if (hostname.includes('snapchat')) {
      return { platform: 'Snapchat' };
    }

    // Discord
    if (hostname.includes('discord')) {
      return { platform: 'Discord' };
    }

    // Twitch
    if (hostname.includes('twitch')) {
      return { platform: 'Twitch' };
    }

    // Medium
    if (hostname.includes('medium')) {
      return { platform: 'Medium' };
    }

    // Quora
    if (hostname.includes('quora')) {
      return { platform: 'Quora' };
    }

    return null;
  }, []);

  // Enhanced affiliate link detection
  const detectAffiliateLink = useCallback((url: string): string | null => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Check for custom affiliate parameter first
    const affiliateId = urlParams.get('affiliate_id') || urlParams.get('aff');
    
    if (affiliateId) {
      return affiliateId;
    }

    // Check for other common affiliate parameters
    const affiliateParams = [
      'a', 'ref', 'ref_id', 'partner', 'campaign', 'source'
    ];

    for (const param of affiliateParams) {
      const value = urlParams.get(param);
      if (value) {
        return value;
      }
    }

    return null;
  }, []);

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

  // Determine traffic source type with enhanced detection
  const determineTrafficType = useCallback((referrer: string, url: string): TrafficSource => {
    const currentUrl = window.location.href;
    const userAgent = navigator.userAgent;
    const timestamp = new Date();

    // Check for UTM parameters first
    const utmParams = parseUTMParameters(currentUrl);
    
    // Check for affiliate links
    const affiliateId = detectAffiliateLink(currentUrl);

    // If UTM parameters exist, use them
    if (utmParams.source) {
      return {
        type: 'referral',
        source: utmParams.source,
        medium: utmParams.medium || 'referral',
        campaign: utmParams.campaign,
        term: utmParams.term,
        content: utmParams.content,
        affiliateId: affiliateId || undefined,
        timestamp,
        userAgent,
        referrer,
        url: currentUrl,
        platform: utmParams.source
      };
    }

    // Check for search engines
    const searchEngine = detectSearchEngine(referrer);
    if (searchEngine) {
      return {
        type: 'search',
        source: searchEngine.engine,
        medium: 'organic',
        term: searchEngine.term,
        affiliateId: affiliateId || undefined,
        timestamp,
        userAgent,
        referrer,
        url: currentUrl,
        searchEngine: searchEngine.engine
      };
    }

    // Check for social media
    const socialPlatform = detectSocialPlatform(referrer);
    if (socialPlatform) {
      return {
        type: 'social',
        source: socialPlatform.platform,
        medium: 'social',
        affiliateId: affiliateId || undefined,
        timestamp,
        userAgent,
        referrer,
        url: currentUrl,
        socialPlatform: socialPlatform.platform
      };
    }

    // Check for affiliate links without referrer
    if (affiliateId) {
      return {
        type: 'affiliate',
        source: 'affiliate',
        medium: 'affiliate',
        affiliateId,
        timestamp,
        userAgent,
        referrer,
        url: currentUrl
      };
    }

    // Check for email (common email domains)
    if (referrer && (referrer.includes('mail.google.com') || referrer.includes('outlook') || referrer.includes('yahoo.com/mail'))) {
      return {
        type: 'email',
        source: 'email',
        medium: 'email',
        affiliateId: affiliateId || undefined,
        timestamp,
        userAgent,
        referrer,
        url: currentUrl
      };
    }

    // Check for direct traffic (no referrer or same domain)
    if (!referrer || referrer === '' || referrer.includes(window.location.hostname)) {
      return {
        type: 'direct',
        source: 'direct',
        medium: 'none',
        affiliateId: affiliateId || undefined,
        timestamp,
        userAgent,
        referrer,
        url: currentUrl
      };
    }

    // Referral traffic
    return {
      type: 'referral',
      source: new URL(referrer).hostname,
      medium: 'referral',
      affiliateId: affiliateId || undefined,
      timestamp,
      userAgent,
      referrer,
      url: currentUrl
    };
  }, [detectSearchEngine, detectSocialPlatform, detectAffiliateLink, parseUTMParameters]);

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
    const trafficSource = determineTrafficType(referrer, window.location.href);
    
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
    
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        traffic_source: trafficSource.type,
        source: trafficSource.source,
        medium: trafficSource.medium,
        campaign: trafficSource.campaign,
        affiliate_id: trafficSource.affiliateId,
        search_term: trafficSource.term,
        social_platform: trafficSource.socialPlatform,
        search_engine: trafficSource.searchEngine
      });
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

  // Load history and affiliate links from localStorage on mount
  useEffect(() => {
    const storedHistory = localStorage.getItem('traffic_history');
    if (storedHistory) {
      try {
        const history = JSON.parse(storedHistory).map((item: any) => ({
          ...item,
          timestamp: new Date(item.timestamp)
        }));
        setTrafficHistory(history);
      } catch (error) {
        console.error('Error loading traffic history:', error);
      }
    }

    const storedLinks = localStorage.getItem('affiliate_links');
    if (storedLinks) {
      try {
        const links = JSON.parse(storedLinks).map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt)
        }));
        setAffiliateLinks(links);
      } catch (error) {
        console.error('Error loading affiliate links:', error);
      }
    }
  }, []);

  // Track visit on mount
  useEffect(() => {
    trackVisit();
  }, [trackVisit]);

  return {
    currentTraffic,
    trafficHistory,
    affiliateLinks,
    trackVisit,
    getTrafficStats,
    createAffiliateLink,
    detectSearchEngine,
    detectSocialPlatform,
    detectAffiliateLink
  };
};
