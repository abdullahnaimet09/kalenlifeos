export const WebPageSchema = () => {
  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Kalen Life OS - Build Your Ideal Life with Notion",
    "description": "Kalen Life OS helps you build products, create content, manage clients, shape your identity, mindset and run all aspects of life with focus, alignment, and fun.",
    "url": "https://kalenlifeos.app/",
    "mainEntity": {
      "@type": "Product",
      "name": "Kalen Life OS",
      "description": "The world's most powerful Notion-based life operating system"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://kalenlifeos.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Life OS",
          "item": "https://kalenlifeos.app/#life-os"
        }
      ]
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", "p"]
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "Kalen Life OS",
      "url": "https://kalenlifeos.app"
    },
    "about": {
      "@type": "Thing",
      "name": "Life Operating System",
      "description": "Productivity and life management system"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Entrepreneurs, Content Creators, Freelancers"
    },
    "keywords": "life os, notion template, productivity system, life management, mindset, freelance os, content os, health management, finance tracking"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(webPageData)
      }}
    />
  );
};
