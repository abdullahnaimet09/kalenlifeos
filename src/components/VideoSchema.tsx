export const VideoSchema = () => {
  const videoData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Kalen Life OS - Complete Life Operating System Demo",
    "description": "See how Kalen Life OS helps you build products, create content, manage clients, and run all aspects of life with focus, alignment, and fun.",
    "thumbnailUrl": "https://kalenlifeos.app/social-preview.png",
    "uploadDate": "2025-01-31",
    "duration": "PT5M30S",
    "contentUrl": "https://kalenlifeos.app/demo-video.mp4",
    "embedUrl": "https://kalenlifeos.app/embed/demo",
    "publisher": {
      "@type": "Organization",
      "name": "Kalen Life OS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kalenlifeos.app/lovable-uploads/logo.png"
      }
    },
    "creator": {
      "@type": "Organization",
      "name": "Kalen Life OS"
    },
    "keywords": "life os, notion template, productivity system, life management, mindset, freelance os, content os"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(videoData)
      }}
    />
  );
};
