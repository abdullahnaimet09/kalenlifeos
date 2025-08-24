import { CheckCircle2 } from "lucide-react";

const ValueStackingSection = () => {
  const valueItems = [
    { name: "Mindset & Identity Sculpting", value: 300 },
    { name: "11 Pillars Life Management", value: 2500 },
    { name: "Goal Setting & Alignment Pipelines", value: 400 },
    { name: "Routine Builder", value: 200 },
    { name: "Habits Builder", value: 200 },
    { name: "Knowledge Management Vault", value: 300 },
    { name: "Skill Builder", value: 200 },
    { name: "AI Prompts Builder", value: 200 },
    { name: "Tools & Resources Manager", value: 200 },
    { name: "Adventure Zone (Gamification)", value: 300 },
    { name: "Alignment Zone", value: 200 },
    { name: "Review Cycles System", value: 200 },
    { name: "Life Insights Dashboard", value: 200 },
    { name: "System Implementation Guide", value: 300 },
    { name: "Community Access", value: 300 }
  ];

  const totalValue = valueItems.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Value Stacking
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            What You're Really Getting
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Kalen Life OS</h3>
                <p className="text-gray-300">Complete Life Operating System</p>
              </div>

              <div className="space-y-4 mb-8">
                {valueItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-200 text-sm font-medium">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-orange-400 font-semibold text-sm">
                      ${item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-600 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white font-bold text-xl">
                    Total Real Value:
                  </span>
                  <span className="text-orange-400 font-bold text-2xl">
                    ${totalValue.toLocaleString()}
                  </span>
                </div>

                <div className="text-center">
                  <p className="text-gray-300 text-sm mb-4">
                    Everything you need to transform your life
                  </p>
                  <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold">
                    Complete System Worth ${totalValue.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStackingSection;