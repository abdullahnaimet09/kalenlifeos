import { Button } from "@/components/ui/button";
import { useAffiliateTracking } from "@/hooks/useAffiliateTracking";

const Header = () => {
  const { getCheckoutUrl } = useAffiliateTracking();
  const checkoutUrl = getCheckoutUrl("https://kalenlifeos.gumroad.com/l/LifeOS");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/logo.png" 
            alt="Kalen Life OS Logo" 
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
          <span className="text-sm sm:text-lg font-semibold text-text-primary">Kalen Life OS</span>
        </div>
        <a 
          href={checkoutUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button 
            variant="outline" 
            size="sm"
            className="border-orange-glow text-orange-glow hover:bg-orange-glow hover:text-background transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2"
          >
            <span className="hidden sm:inline">Get Kalen Life OS</span>
            <span className="sm:hidden">Get Life OS</span>
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;