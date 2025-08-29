import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface GoogleAnalyticsConfig {
  measurementId: string;
  debugMode?: boolean;
}

export const useGoogleAnalytics = (config: GoogleAnalyticsConfig) => {
  useEffect(() => {
    // Initialize Google Analytics
    const initGA = () => {
      // Create dataLayer if it doesn't exist
      if (!window.dataLayer) {
        window.dataLayer = [];
      }

      // Define gtag function
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };

      // Set timestamp
      window.gtag('js', new Date());

      // Configure GA4
      window.gtag('config', config.measurementId, {
        debug_mode: config.debugMode || false,
        send_page_view: true,
        custom_map: {
          'traffic_source': 'traffic_source',
          'affiliate_id': 'affiliate_id',
          'search_term': 'search_term',
          'social_platform': 'social_platform'
        }
      });

      // Add GA4 script to head
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${config.measurementId}`;
      document.head.appendChild(script);

      console.log('Google Analytics initialized with ID:', config.measurementId);
    };

    // Initialize if not already done
    if (!window.gtag) {
      initGA();
    }
  }, [config.measurementId, config.debugMode]);

  // Track page view
  const trackPageView = (pageTitle?: string, pageLocation?: string) => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageTitle || document.title,
        page_location: pageLocation || window.location.href,
        page_referrer: document.referrer
      });
    }
  };

  // Track custom event
  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  // Track traffic source
  const trackTrafficSource = (source: {
    type: string;
    source: string;
    medium: string;
    campaign?: string;
    term?: string;
    affiliateId?: string;
  }) => {
    trackEvent('traffic_source', {
      traffic_source: source.type,
      source: source.source,
      medium: source.medium,
      campaign: source.campaign,
      search_term: source.term,
      affiliate_id: source.affiliateId
    });
  };

  // Track conversion
  const trackConversion = (conversionId: string, conversionLabel?: string, value?: number) => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: `${conversionId}/${conversionLabel}`,
        value: value
      });
    }
  };

  // Track affiliate click
  const trackAffiliateClick = (affiliateId: string, source: string, medium: string) => {
    trackEvent('affiliate_click', {
      affiliate_id: affiliateId,
      source: source,
      medium: medium,
      timestamp: new Date().toISOString()
    });
  };

  // Track social media engagement
  const trackSocialEngagement = (platform: string, action: string, content?: string) => {
    trackEvent('social_engagement', {
      social_platform: platform,
      action: action,
      content: content
    });
  };

  return {
    trackPageView,
    trackEvent,
    trackTrafficSource,
    trackConversion,
    trackAffiliateClick,
    trackSocialEngagement
  };
};
