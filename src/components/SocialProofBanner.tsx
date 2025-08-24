const SocialProofBanner = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center -space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="w-3 h-3 text-primary">★</div>
              ))}
            </div>
            <span>5/5 from 100+ users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBanner;