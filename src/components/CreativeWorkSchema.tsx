export const CreativeWorkSchema = () => {
  const creativeWorkData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Kalen Life OS - Complete Life Management System",
    "description": "A comprehensive digital life operating system designed to help entrepreneurs, freelancers, and content creators manage every aspect of their life with focus, alignment, and fun.",
    "author": {
      "@type": "Organization",
      "name": "Kalen Life OS",
      "url": "https://kalenlifeos.app"
    },
    "creator": {
      "@type": "Organization",
      "name": "Kalen Life OS"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kalen Life OS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kalenlifeos.app/lovable-uploads/logo.png"
      }
    },
    "dateCreated": "2025-01-31",
    "dateModified": "2025-01-31",
    "datePublished": "2025-01-31",
    "genre": "Productivity Software",
    "keywords": "life os, notion template, productivity system, life management, mindset, freelance os, content os, health management, finance tracking, personal development",
    "inLanguage": "en-US",
    "isAccessibleForFree": false,
    "license": "https://kalenlifeos.app/license",
    "url": "https://kalenlifeos.app",
    "image": "https://kalenlifeos.app/social-preview.png",
    "thumbnailUrl": "https://kalenlifeos.app/social-preview.png",
    "contentLocation": {
      "@type": "Place",
      "name": "Digital Platform"
    },
    "contentRating": "General",
    "audience": {
      "@type": "Audience",
      "audienceType": "Entrepreneurs, Freelancers, Content Creators, Productivity Enthusiasts"
    },
    "educationalUse": "Self-Improvement",
    "learningResourceType": "Digital Template",
    "teaches": [
      "Life Management",
      "Productivity Systems",
      "Goal Setting",
      "Habit Building",
      "Mindset Development"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(creativeWorkData)
      }}
    />
  );
};
