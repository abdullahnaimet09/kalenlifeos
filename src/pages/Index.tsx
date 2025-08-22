import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBanner from "@/components/SocialProofBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContentSections from "@/components/ContentSections";
import VideoSection from "@/components/VideoSection";
import FlashcardsSection from "@/components/FlashcardsSection";
import ComparisonSection from "@/components/ComparisonSection";
import ValueStackingSection from "@/components/ValueStackingSection";
import PricingSection from "@/components/PricingSection";
import PriceComparisonSection from "@/components/PriceComparisonSection";
import FAQSection from "@/components/FAQSection";
import SolutionSection from "@/components/SolutionSection";
import ImagineSection from "@/components/ImagineSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SocialProofBanner />
      <TestimonialsSection />
      <ContentSections />
      <VideoSection />
      <FlashcardsSection />
      <ComparisonSection />
      <ImagineSection />
      <ValueStackingSection />
      <PricingSection />
      <PriceComparisonSection />
      <FAQSection />
      <SolutionSection />
      <Footer />
    </div>
  );
};

export default Index;