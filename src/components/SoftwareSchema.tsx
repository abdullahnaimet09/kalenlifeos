export const SoftwareSchema = () => {
  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kalen Life OS",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "Web Browser, Notion",
    "description": "The world's most powerful Notion-based life operating system for building products, creating content, managing clients, and running all aspects of life with focus, alignment, and fun.",
    "url": "https://kalenlifeos.app",
    "downloadUrl": "https://kalenlifeos.app/download",
    "installUrl": "https://kalenlifeos.app/install",
    "softwareVersion": "2.0",
    "releaseNotes": "Enhanced with 25 comprehensive life modules",
    "screenshot": "https://kalenlifeos.app/social-preview.png",
    "softwareRequirements": "Notion account, modern web browser",
    "permissions": "Read/Write access to Notion workspace",
    "featureList": [
      "Mindset & Identity Sculpting",
      "Freelance OS",
      "Content OS", 
      "Health Management",
      "Finance Tracking",
      "Life Insight Dashboard",
      "25 comprehensive modules"
    ],
    "offers": {
      "@type": "Offer",
      "price": "47.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://kalenlifeos.app"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Kalen Life OS"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kalen Life OS"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(softwareData)
      }}
    />
  );
};
