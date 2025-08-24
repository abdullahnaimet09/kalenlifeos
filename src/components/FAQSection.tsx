import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "Is this only for solopreneurs?",
    answer: "While it is designed for solopreneurs because of Content OS, Freelance OS, and Product OS, Life OS works for anyone who wants to organize and optimize their life systems."
  },
  {
    question: "Can I use this if I'm not a solopreneur?",
    answer: "Absolutely. Even if you are a student, professional, or business owner, Life OS helps you bring structure, clarity, and focus to your daily life."
  },
  {
    question: "Is this just another Notion template?",
    answer: "No. While it is built inside Notion, Life OS is a full operating system. It includes identity work, mindset training, and interconnected systems. Most templates solve one problem, Life OS transforms your whole life."
  },
  {
    question: "What if I'm not a Notion User ?",
    answer: "No problem! Life OS comes with everything you need to get started. You'll learn Notion as you use the system, and we include guides to help you master the basics quickly."
  },
  {
    question: "How long does setup take?",
    answer: "Initial setup takes around 2–3 hours. After that, the system grows and evolves with you. You can also customize it fully for your own needs."
  },
  {
    question: "Is Life OS licensed and official?",
    answer: "Yes. Life OS is licensed by Kalen Life OS and created with high standards. All rights to sell this product are owned by Kalen Frost."
  }
];

const FAQCard = ({ question, answer, isOpen, onToggle }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <div className="bg-amber-50/80 rounded-lg sm:rounded-xl p-4 sm:p-6 cursor-pointer transition-all duration-200 hover:bg-amber-50/90">
      <div onClick={onToggle} className="flex items-center justify-between">
        <h3 className="text-gray-800 font-medium text-left pr-3 sm:pr-4 text-sm sm:text-base">{question}</h3>
        <ChevronDown 
          className={`h-4 w-4 text-gray-600 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      {isOpen && (
        <div className="mt-3 sm:mt-4 text-gray-700 text-xs sm:text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="pt-4 sm:pt-6 pb-6 sm:pb-8 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-6 sm:w-16 sm:h-8 bg-red-600/20 border border-red-600 rounded-full">
            <span className="text-red-400 text-xs sm:text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 mt-6 sm:mt-8 px-4 sm:px-0">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
            {faqData.map((faq, index) => (
              <div key={index} className="self-start">
                <FAQCard
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems.includes(index)}
                  onToggle={() => toggleItem(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;