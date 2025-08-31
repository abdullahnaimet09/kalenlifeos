export const BreadcrumbSchema = () => {
  const breadcrumbData = {
    "@context": "https://schema.org",
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Notion Template",
        "item": "https://kalenlifeos.app/#template"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData)
      }}
    />
  );
};
