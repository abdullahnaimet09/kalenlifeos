import { Button } from "@/components/ui/button";
import { useAffiliateTracking } from "@/hooks/useAffiliateTracking";
import { Clock, CheckCircle2 } from "lucide-react";

const PricingSection = () => {
  const { getCheckoutUrl } = useAffiliateTracking();
  const checkoutUrl = getCheckoutUrl("https://kalenlifeos.gumroad.com/l/LifeOS");

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-200">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                Limited Time Offer - Only 47 Spots Left!
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-2 sm:px-0">
                Special Launch Pricing
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                For the first 200 people only
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">Regular Price</p>
                  <span className="text-xl sm:text-2xl text-gray-400 line-through font-bold">$499</span>
                </div>
                <div className="text-4xl sm:text-6xl text-orange-500 font-bold">→</div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm text-orange-600 font-semibold mb-1">Launch Price</p>
                  <span className="text-3xl sm:text-4xl text-orange-600 font-bold">$297</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  <span className="text-green-800 font-semibold text-base sm:text-lg">You Save $202!</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-green-700">
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Instant Access</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Complete System</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>30-Day Guarantee</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <a 
                  href={checkoutUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto"
                >
                  <Button 
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                  >
                    Get Kalen Life OS - $297
                  </Button>
                </a>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6 leading-relaxed px-2 sm:px-0">
                <strong>Commit to the system and in just 30-Days your life will be changed - Guaranteed!</strong>
                <br />
                Join the community of high-achievers transforming their lives with Life OS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;