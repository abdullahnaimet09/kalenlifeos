import { useEffect, useState } from 'react';

export const useAffiliateTracking = () => {
  const [affiliateId, setAffiliateId] = useState<string | null>(null);

  useEffect(() => {
    // Check for affiliate ID in URL parameters (for Gumroad affiliate links)
    const urlParams = new URLSearchParams(window.location.search);
    const affiliateFromUrl = urlParams.get('a') || urlParams.get('affiliate') || urlParams.get('affiliate_id');
    
    // Check for stored affiliate ID
    const storedAffiliate = localStorage.getItem('affiliate_id');
    
    if (affiliateFromUrl) {
      // Store new affiliate ID
      localStorage.setItem('affiliate_id', affiliateFromUrl);
      setAffiliateId(affiliateFromUrl);
    } else if (storedAffiliate) {
      // Use existing stored affiliate ID
      setAffiliateId(storedAffiliate);
    }
  }, []);

  const getCheckoutUrl = (baseUrl: string) => {
    if (affiliateId) {
      const separator = baseUrl.includes('?') ? '&' : '?';
      return `${baseUrl}${separator}affiliate_id=${affiliateId}`;
    }
    return baseUrl;
  };

  return { affiliateId, getCheckoutUrl };
};