import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Mindset & Identity Sculpting",
      kalenOS: "Yes — full system for shaping identity and mindset",
      otherOS: "No — mindset and identity sculpting is not present",
      included: true
    },
    {
      feature: "11 Pillars",
      kalenOS: "Yes — 11 distinct life areas with complete systems",
      otherOS: "No — mostly just basic pages or notes without full systems",
      included: true
    },
    {
      feature: "Goal Setting & Alignment",
      kalenOS: "Yes — advanced multi-layered goal pipelines",
      otherOS: "No — simple or no structured goal systems",
      included: true
    },
    {
      feature: "Routine Builder",
      kalenOS: "Yes — design routines linked to goals",
      otherOS: "No — generally simple habit lists or not included",
      included: true
    },
    {
      feature: "Habits Builder",
      kalenOS: "Yes — habit creation, breaking, streaks, and outcome links",
      otherOS: "No — basic habit tracking or missing",
      included: true
    },
    {
      feature: "Knowledge Management",
      kalenOS: "Yes — full vault system for organizing all resources",
      otherOS: "No — basic note storage without deep organization",
      included: true
    },
    {
      feature: "Knowledge Foundation",
      kalenOS: "Yes — built on insights from more than 100 books",
      otherOS: "No — no such extensive knowledge foundation",
      included: true
    },
    {
      feature: "Skill Builder",
      kalenOS: "Yes — track skills from beginner to expert",
      otherOS: "No — usually not included",
      included: true
    },
    {
      feature: "AI Prompts Builder",
      kalenOS: "Yes — organized prompts for writing, coding, marketing",
      otherOS: "No — typically absent",
      included: true
    },
    {
      feature: "Tools & Resources",
      kalenOS: "Yes — manage apps, contractors, templates, people",
      otherOS: "No — simple or no management systems",
      included: true
    },
    {
      feature: "Adventure Zone",
      kalenOS: "Yes — gamified life with quests, streaks, XP, and rewards",
      otherOS: "No — gamification very rare or missing",
      included: true
    },
    {
      feature: "Alignment Zone",
      kalenOS: "Yes — visualize how daily tasks connect to big goals",
      otherOS: "No — usually no visualization of alignment",
      included: true
    },
    {
      feature: "Review Cycles",
      kalenOS: "Yes — daily to yearly reviews for clarity and control",
      otherOS: "No — irregular or minimal review processes",
      included: true
    },
    {
      feature: "Life Pulse Dashboard",
      kalenOS: "Yes — visual charts showing balance and trends",
      otherOS: "No — dashboards are basic or absent",
      included: true
    },
    {
      feature: "System Implementation Guide",
      kalenOS: "Yes — detailed setup and usage guide",
      otherOS: "No — no formal or detailed guide",
      included: true
    },
    {
      feature: "Community",
      kalenOS: "Yes — solopreneur focused support community",
      otherOS: "No — absent or generic communities",
      included: true
    },
    {
      feature: "Best Internet Course to Learn Notion Fast",
      kalenOS: "Yes — recommended courses included with expert guidance",
      otherOS: "No — generally no official or recommended learning resources",
      included: true
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <span>⚡</span>
            <span>The Complete Comparison</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Kalen Life OS Stands Apart<br />
            <span className="text-orange-400">From Every Other System</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            See exactly what makes Kalen Life OS the most comprehensive life management system available. 
            Compare feature by feature against other popular "second brain" systems.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700 hover:bg-slate-800">
                <TableHead className="text-orange-400 font-semibold text-base py-6 px-6">
                  Feature / System
                </TableHead>
                <TableHead className="text-green-400 font-semibold text-base py-6 px-6 text-center">
                  ✅ Kalen Life OS
                </TableHead>
                <TableHead className="text-red-400 font-semibold text-base py-6 px-6 text-center">
                  ❌ Other OS (Second Brain, etc.)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow 
                  key={index} 
                  className="border-slate-700 hover:bg-slate-750 transition-colors duration-200"
                >
                  <TableCell className="font-medium text-white py-6 px-6 border-r border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      {row.feature}
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-6 border-r border-slate-700">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200 text-sm leading-relaxed">
                        {row.kalenOS}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-6 px-6">
                    <div className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {row.otherOS}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span>🚀</span>
            <span>Experience the Complete System Today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;