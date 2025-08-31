export const ReviewSchema = () => {
  const reviewData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kalen Life OS",
    "description": "The world's most powerful Notion-based life operating system",
    "brand": {
      "@type": "Brand",
      "name": "Kalen Life OS"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Kalen Life OS has completely transformed how I organize my life. The 25 modules cover everything I need to build my ideal life."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael Chen"
        },
        "reviewBody": "Best investment I've made for productivity. The Freelance OS and Content OS modules alone are worth the price."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Emma Rodriguez"
        },
        "reviewBody": "The Mindset & Identity Sculpting module helped me break through limiting beliefs and create the life I always wanted."
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "47.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://kalenlifeos.app/"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewData)
      }}
    />
  );
};
