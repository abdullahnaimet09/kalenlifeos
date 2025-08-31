export const LocalBusinessSchema = () => {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kalen Life OS",
    "description": "Digital life operating system and productivity tools",
    "url": "https://kalenlifeos.app",
    "logo": "https://kalenlifeos.app/lovable-uploads/logo.png",
    "image": "https://kalenlifeos.app/social-preview.png",
    "telephone": "+1-555-0123",
    "email": "hello@kalenlifeos.app",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressLocality": "Digital",
      "addressRegion": "Online"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7128",
      "longitude": "-74.0060"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$",
    "paymentAccepted": "Credit Card, PayPal, Stripe",
    "currenciesAccepted": "USD",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Life OS Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Kalen Life OS Template",
            "description": "Complete life operating system for Notion"
          },
          "price": "47.00",
          "priceCurrency": "USD"
        }
      ]
    },
    "sameAs": [
      "https://twitter.com/kalenlifeos",
      "https://linkedin.com/company/kalenlifeos"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData)
      }}
    />
  );
};
