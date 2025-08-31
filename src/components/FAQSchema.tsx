export const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Kalen Life OS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kalen Life OS is the world's most powerful Notion-based life operating system that helps you organize every aspect of your life including mindset, health, finance, career, and personal development."
        }
      },
      {
        "@type": "Question",
        "name": "How does Kalen Life OS work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kalen Life OS provides 25 comprehensive modules including Mindset & Identity Sculpting, Freelance OS, Content OS, Health Management, Finance Tracking, and Life Insight Dashboard to help you build your ideal life."
        }
      },
      {
        "@type": "Question",
        "name": "Is Kalen Life OS compatible with Notion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Kalen Life OS is specifically designed for Notion and provides templates, databases, and systems that integrate seamlessly with your Notion workspace."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Kalen Life OS different from other productivity systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kalen Life OS is the only comprehensive life operating system that covers all 25 life areas including mindset transformation, freelance management, content creation, health tracking, and financial planning in one integrated system."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Kalen Life OS cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kalen Life OS is available for $47 and includes lifetime access to all 25 modules, templates, and the complete life operating system."
        }
      },
      {
        "@type": "Question",
        "name": "What are the 25 Life OS components included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kalen Life OS includes Mindset & Identity Sculpting, Home & Household, Family, Social Circle, Personal & Business Finance, Character Development, Health, Travel, Mind Expansion, Entertainment, Content OS, Freelance OS, Product OS, Goal Setting & Alignment, Routine Builder, Habits Builder, Knowledge Management, Skill Builder, AI Prompts Builder, Tools & Resources, Personal & Business Growth, Adventure Zone, Alignment Zone, Review Cycles, and Life Insight Dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get started with Kalen Life OS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "After purchase, you'll receive instant access to download the complete Notion template. Simply import it into your Notion workspace and start customizing the 25 modules to fit your specific life goals and needs."
        }
      },
      {
        "@type": "Question",
        "name": "Is there customer support available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive customer support and documentation to help you get the most out of your Kalen Life OS system. Our team is committed to your success."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use Kalen Life OS on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Since Kalen Life OS is built in Notion, you can access and use all 25 modules on any device - desktop, tablet, or mobile - through the Notion app or web browser."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData)
      }}
    />
  );
};
