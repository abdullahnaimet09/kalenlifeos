export const HowToSchema = () => {
  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Build Your Ideal Life with Kalen Life OS",
    "description": "Step-by-step guide to implementing the world's most powerful life operating system in Notion",
    "image": "https://kalenlifeos.app/social-preview.png",
    "totalTime": "PT2H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "47.00"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Notion Account"
      },
      {
        "@type": "HowToSupply",
        "name": "Kalen Life OS Template"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Notion"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Purchase Kalen Life OS",
        "text": "Get instant access to the complete life operating system for $47",
        "url": "https://kalenlifeos.app/"
      },
      {
        "@type": "HowToStep",
        "name": "Import Template",
        "text": "Download and import the Notion template into your workspace"
      },
      {
        "@type": "HowToStep",
        "name": "Customize Modules",
        "text": "Personalize the 25 Life OS modules to fit your specific goals and needs"
      },
      {
        "@type": "HowToStep",
        "name": "Start with Mindset",
        "text": "Begin with the Mindset & Identity Sculpting module to establish your foundation"
      },
      {
        "@type": "HowToStep",
        "name": "Build Routines",
        "text": "Use the Routine Builder and Habits Builder to create sustainable systems"
      },
      {
        "@type": "HowToStep",
        "name": "Track Progress",
        "text": "Monitor your growth using the Life Insight Dashboard and Review Cycles"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(howToData)
      }}
    />
  );
};
