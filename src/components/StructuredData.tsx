import { siteConfig } from '../../site.seo.config.js';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'product' | 'faq' | 'breadcrumb';
  data?: any;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": siteConfig.organization.name,
          "url": siteConfig.organization.url,
          "logo": siteConfig.organization.logo,
          "sameAs": siteConfig.organization.sameAs,
          "description": siteConfig.description
        };
      
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteConfig.name,
          "url": siteConfig.url,
          "description": siteConfig.description,
          "publisher": {
            "@type": "Organization",
            "name": siteConfig.organization.name,
            "logo": siteConfig.organization.logo
          }
        };
      
      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": siteConfig.productName,
          "description": siteConfig.description,
          "url": siteConfig.url,
          "brand": {
            "@type": "Brand",
            "name": siteConfig.organization.name
          },
          "offers": {
            "@type": "Offer",
            "price": siteConfig.price,
            "priceCurrency": siteConfig.currency,
            "url": siteConfig.productUrl,
            "availability": "https://schema.org/InStock"
          },
          "category": "Software Application",
          "applicationCategory": "ProductivityApplication"
        };
      
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.questions || []
        };
      
      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.items || []
        };
      
      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
};
