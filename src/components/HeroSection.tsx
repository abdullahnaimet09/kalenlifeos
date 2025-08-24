import { Button } from "@/components/ui/button";
import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";
import person3 from "@/assets/person-3.jpg";
import person4 from "@/assets/person-4.jpg";
import person5 from "@/assets/person-5.jpg";
import person6 from "@/assets/person-6.jpg";
import person7 from "@/assets/person-7.jpg";
import person8 from "@/assets/person-8.jpg";
import person9 from "@/assets/person-9.jpg";
import person10 from "@/assets/person-10.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-background pt-16 sm:pt-20">
      {/* Subtle grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-4xl">
        {/* Main heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-3 tracking-tight leading-tight">
            Build Your Ideal Life
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Leverage Notion's most powerful Life Operating System to build your ideal life
          </p>
        </div>
        
        {/* Elegant CTA Card */}
        <div className="max-w-lg mx-auto mb-8 sm:mb-10 px-4 sm:px-0">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 sm:p-6 hover:border-primary/20 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full opacity-80"></div>
            </div>
            
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
              Kalen Life Operating System
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3">
              Built upon Pillars, Pipelines & Vaults
            </p>
            <div className="pt-2 border-t border-border/30">
              <p className="text-xs text-muted-foreground/80">
                Presented by <span className="text-foreground font-medium">Kalen Frost</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Minimal social proof */}
        <div className="flex flex-col items-center space-y-3 px-4 sm:px-0">
          <div className="flex items-center -space-x-2">
            {[person1, person2, person3, person4, person5, person6].map((person, index) => (
              <img 
                key={index}
                src={person} 
                alt="User testimonial"
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border-2 border-background/80 hover:scale-110 transition-transform duration-200"
                style={{ zIndex: 10 + index }}
              />
            ))}
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-muted border-2 border-background/80 flex items-center justify-center ml-1">
              <span className="text-xs font-medium text-muted-foreground">+147</span>
            </div>
          </div>
          <p className="text-muted-foreground/70 text-xs text-center">
            150+ Solopreneurs Successfully Transformed
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;