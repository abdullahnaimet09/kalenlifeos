import { useCallback } from 'react';

interface CTATrackingOptions {
  eventName?: string;
  category?: string;
  label?: string;
  value?: number;
}

export const useCTATracking = () => {
  const trackCTA = useCallback((action: string, options: CTATrackingOptions = {}) => {
    // Google Analytics 4 event tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: options.category || 'CTA',
        event_label: options.label || action,
        value: options.value,
        custom_parameter: options.eventName || action
      });
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('CTA Tracked:', { action, ...options });
    }
  }, []);

  const trackPurchaseClick = useCallback((productName: string, price?: string) => {
    trackCTA('purchase_click', {
      eventName: 'purchase_click',
      category: 'Ecommerce',
      label: productName,
      value: price ? parseFloat(price) : undefined
    });
  }, [trackCTA]);

  const trackLeadGeneration = useCallback((source: string) => {
    trackCTA('lead_generation', {
      eventName: 'lead_generation',
      category: 'Lead',
      label: source
    });
  }, [trackCTA]);

  return {
    trackCTA,
    trackPurchaseClick,
    trackLeadGeneration
  };
};
