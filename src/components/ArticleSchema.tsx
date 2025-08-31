export const ArticleSchema = () => {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kalen Life OS - Build Your Ideal Life with Notion",
    "description": "Transform your life with Kalen Life OS — the world's most powerful Notion-based life operating system featuring Mindset & Identity Sculpting, Freelance OS, Content OS, Health Management, Finance Tracking, and Life Insight Dashboard.",
    "image": "https://kalenlifeos.app/social-preview.png",
    "author": {
      "@type": "Organization",
      "name": "Kalen Life OS",
      "url": "https://kalenlifeos.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kalen Life OS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kalenlifeos.app/lovable-uploads/logo.png"
      }
    },
    "datePublished": "2025-01-31",
    "dateModified": "2025-01-31",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://kalenlifeos.app/"
    },
    "keywords": "life os, notion template, life operating system, productivity system, mindset identity sculpting, freelance os, content os, health management, finance tracking, life dashboard"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleData)
      }}
    />
  );
};
