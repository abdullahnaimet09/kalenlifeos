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
  }>;
}

export const useTrafficAnalytics = () => {
  const [currentTraffic, setCurrentTraffic] = useState<TrafficSource | null>(null);
  const [trafficHistory, setTrafficHistory] = useState<TrafficSource[]>([]);

  // Detect search engines
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

    return null;
  }, []);

  // Detect social media platforms
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

    return null;
  }, []);

  // Detect affiliate links
  const detectAffiliateLink = useCallback((url: string): string | null => {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Common affiliate parameters
    const affiliateParams = [
      'a', 'affiliate', 'affiliate_id', 'ref', 'ref_id', 'partner', 
      'campaign', 'source', 'utm_source', 'utm_medium', 'utm_campaign'
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

  // Determine traffic source type
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
        url: currentUrl
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
        url: currentUrl
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
        url: currentUrl
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
    
    // Keep only last 1000 visits
    if (history.length > 1000) {
      history.splice(0, history.length - 1000);
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
        social_platform: trafficSource.type === 'social' ? trafficSource.source : undefined
      });
    }
  }, [determineTrafficType]);

  // Get traffic statistics
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

    // Top affiliates
    const affiliates = allTraffic
      .filter(t => t.affiliateId)
      .reduce((acc, traffic) => {
        acc[traffic.affiliateId!] = (acc[traffic.affiliateId!] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    const topAffiliates = Object.entries(affiliates)
      .map(([affiliateId, count]) => ({ affiliateId, count }))
      .sort((a, b) => b.count - a.count);

    return {
      totalVisits,
      sources,
      topSources,
      topSearchEngines,
      topSocialPlatforms,
      topAffiliates
    };
  }, [trafficHistory, currentTraffic]);

  // Load history from localStorage on mount
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
  }, []);

  // Track visit on mount
  useEffect(() => {
    trackVisit();
  }, [trackVisit]);

  return {
    currentTraffic,
    trafficHistory,
    trackVisit,
    getTrafficStats,
    detectSearchEngine,
    detectSocialPlatform,
    detectAffiliateLink
  };
};
