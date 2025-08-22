import { Button } from "@/components/ui/button";
import { useAffiliateTracking } from "@/hooks/useAffiliateTracking";
import { X, CheckCircle2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PriceComparisonSection = () => {
  const { getCheckoutUrl } = useAffiliateTracking();
  const checkoutUrl = getCheckoutUrl("https://kalenlifeos.gumroad.com/l/LifeOS");

  const comparisonData = [
    {
      item: "Scattered apps (monthly)",
      currentCost: "$200/month",
      lifeosCost: "One-time"
    },
    {
      item: "Productivity courses", 
      currentCost: "$1,000+",
      lifeosCost: "Implemented insights from over 100 books."
    },
    {
      item: "Wasted time & frustration",
      currentCost: "Priceless", 
      lifeosCost: "Infinite"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-amber-50 to-stone-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800 mb-4 px-4 sm:px-0">
              The Real Price Comparison
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto px-4 sm:px-0">
              As a solopreneur, you're already spending far more than this — and getting way less in return.
            </p>
          </div>

          {/* Mobile-First Comparison Cards */}
          <div className="sm:hidden space-y-4 mb-8">
            {comparisonData.map((row, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-stone-200 p-4">
                <h3 className="font-medium text-stone-800 mb-3">{row.item}</h3>
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <X className="w-3 h-3 text-red-500" />
                      <span className="text-xs text-stone-600">Current</span>
                    </div>
                    <span className="text-red-600 font-semibold text-sm">{row.currentCost}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <CheckCircle2 className="w-3 h-3 text-green-600" />
                      <span className="text-xs text-stone-600">Life OS</span>
                    </div>
                    <span className="text-green-700 font-semibold text-sm">{row.lifeosCost}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Mobile Total */}
            <div className="bg-stone-50 rounded-xl border border-stone-200 p-4">
              <h3 className="font-bold text-stone-800 mb-3">Total Annual Cost</h3>
              <div className="space-y-3">
                <div className="bg-red-100 border border-red-200 rounded-lg p-3 text-center">
                  <span className="text-red-700 font-bold text-base">$2,400+ per year</span>
                  <p className="text-red-600 text-xs mt-1">For scattered, incomplete solutions</p>
                </div>
                <div className="bg-green-100 border border-green-200 rounded-lg p-3 text-center">
                  <span className="text-green-700 font-bold text-base">$297 (Limited Time)</span>
                  <p className="text-green-600 text-xs mt-1">Complete life transformation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden sm:block bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden mb-8">
            <Table>
              <TableHeader>
                <TableRow className="bg-stone-50 border-stone-200">
                  <TableHead className="text-stone-700 font-semibold text-base py-4 px-6">
                    Item
                  </TableHead>
                  <TableHead className="text-center text-stone-700 font-semibold text-base py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span>The Scattered Approach</span>
                    </div>
                    <p className="text-sm font-normal text-stone-500 mt-1">What You're Doing Now</p>
                  </TableHead>
                  <TableHead className="text-center text-stone-700 font-semibold text-base py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>The Kalen Life OS Way</span>
                    </div>
                    <p className="text-sm font-normal text-stone-500 mt-1">Complete System</p>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index} className="border-stone-200 hover:bg-stone-50/50">
                    <TableCell className="font-medium text-stone-800 py-4 px-6 border-r border-stone-200">
                      {row.item}
                    </TableCell>
                    <TableCell className="text-center py-4 px-6 border-r border-stone-200">
                      <span className="text-red-600 font-semibold">{row.currentCost}</span>
                    </TableCell>
                    <TableCell className="text-center py-4 px-6">
                      <span className="text-green-700 font-semibold">{row.lifeosCost}</span>
                    </TableCell>
                  </TableRow>
                ))}
                
                {/* Total Row */}
                <TableRow className="border-stone-200 bg-stone-50">
                  <TableCell className="font-bold text-stone-800 py-4 px-6 border-r border-stone-200">
                    <strong>Total Annual Cost</strong>
                  </TableCell>
                  <TableCell className="text-center py-4 px-6 border-r border-stone-200">
                    <div className="bg-red-100 border border-red-200 rounded-lg p-3">
                      <span className="text-red-700 font-bold text-lg">$2,400+ per year</span>
                      <p className="text-red-600 text-xs mt-1">For scattered, incomplete solutions</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center py-4 px-6">
                    <div className="bg-green-100 border border-green-200 rounded-lg p-3">
                      <span className="text-green-700 font-bold text-lg">$297 (Limited Time)</span>
                      <p className="text-green-600 text-xs mt-1">Complete life transformation</p>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Hard Truth Section */}
          <div className="mt-12 sm:mt-16">
            <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-2xl border border-stone-700">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-red-400 font-medium text-xs sm:text-sm uppercase tracking-wide">The Hard Truth About Inaction</span>
              </div>

              {/* Main Heading */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
                If you don't get a proper Life Operating System, here's what happens:
              </h3>

              {/* Problems Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-stone-200 text-sm sm:text-base">You'll keep cycling through overwhelm and chaos</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-stone-200 text-sm sm:text-base">You'll miss opportunities because you can't focus</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-stone-200 text-sm sm:text-base">Your relationships will suffer while you chase "productivity"</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-stone-200 text-sm sm:text-base">You'll burn out and potentially give up on your dreams</p>
                </div>
                <div className="sm:col-span-2 flex items-start gap-3">
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-stone-200 text-sm sm:text-base">You'll waste months jumping between scattered tools</p>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-amber-400 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-400 text-xs sm:text-sm font-bold">⚠</span>
                  </div>
                  <p className="text-amber-100 leading-relaxed text-sm sm:text-base">
                    This system is only for those who are serious about their life and want to grow 
                    exponentially in every area — so they can spend more time with their loved ones.
                  </p>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-4 sm:mb-6">
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-relaxed">
                  The question is: Can you afford to spend another year feeling scattered, 
                  overwhelmed, and unfulfilled?
                </p>
              </div>

              {/* Final Statement */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-lg px-4 sm:px-6 py-3">
                  <span className="text-xl sm:text-2xl">👉</span>
                  <p className="text-amber-200 font-medium text-sm sm:text-base">
                    The cost of inaction is infinitely higher than this investment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Truth Section */}
          <div className="mt-12 sm:mt-16">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-2xl border border-slate-700">
              {/* Main Heading */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
                And here's the truth:
              </h3>

              {/* Truth Points */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-200 text-sm sm:text-lg leading-relaxed">
                    Kalen Life OS cost is less than what you spend every year on all those scattered apps, tools, and templates.
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-200 text-sm sm:text-lg leading-relaxed">
                    Less than the cost of one weekend trip.
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-200 text-sm sm:text-lg leading-relaxed">
                    Less than one productivity course that only fixes a small part of your life.
                  </p>
                </div>
              </div>

              {/* Highlight Statement */}
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400 leading-relaxed">
                  But Kalen Life OS will change your life forever.
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg shadow-lg rounded-xl w-full sm:w-auto"
                >
                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">
                    Get Kalen Life OS
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PriceComparisonSection;