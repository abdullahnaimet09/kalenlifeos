import { useState } from "react";
import { 
  Brain, 
  Home, 
  Users, 
  MessageCircle, 
  DollarSign, 
  Heart, 
  Plane, 
  BookOpen, 
  Gamepad2, 
  PencilLine, 
  Briefcase, 
  Package, 
  Target, 
  Clock, 
  CheckCircle, 
  Database, 
  TrendingUp, 
  Bot, 
  Wrench, 
  BarChart3, 
  Shield, 
  Zap,
  Compass, 
  Calendar,
  Activity
} from "lucide-react";

const FlashcardsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const flashcards = [
    {
      title: "Mindset & Identity Sculpting",
      description: "Shape identity, beliefs, and self-talk that drive your actions. Build confidence, resilience, etc.",
      icon: Brain
    },
    {
      title: "Home & Household",
      description: "Track groceries, broken items, restocks, tools, storage, recipes, outfits, plants, etc.",
      icon: Home
    },
    {
      title: "Family",
      description: "Save birthdays, love languages, values, habits, memories, and support systems, etc.",
      icon: Users
    },
    {
      title: "Social Circle",
      description: "Manage friends, priorities, shared memories, energy levels, conversations, events, etc.",
      icon: MessageCircle
    },
    {
      title: "Personal & Business Finance",
      description: "Track budgets, expenses, income, subscriptions, savings, investments, and cashflow, etc.",
      icon: DollarSign
    },
    {
      title: "Character Development",
      description: "Build character attributes like discipline, patience, focus, empathy, integrity, etc.",
      icon: Shield
    },
    {
      title: "Health",
      description: "Log workouts, meals, sleep, steps, streaks, progress graphs, and routines, etc.",
      icon: Heart
    },
    {
      title: "Travel",
      description: "Plan bookings, packing, visas, itineraries, memories, and trip budgets, etc.",
      icon: Plane
    },
    {
      title: "Mind Expansion",
      description: "Track learning in subjects and skills. Save articles, books, videos, podcasts, code, images, audios, quotes, tweets & threads, documents, etc.",
      icon: BookOpen
    },
    {
      title: "Entertainment",
      description: "Save and rate movies, shows, games, audios, sort by genre, or platform, etc.",
      icon: Gamepad2
    },
    {
      title: "Content OS",
      description: "Generate ideas and create content for 9 platforms (Twitter, LinkedIn, Reddit, Medium, Newsletter, YouTube, TikTok, Instagram, Threads). Manage drafts, publishing, analytics, etc.",
      icon: PencilLine
    },
    {
      title: "Freelance OS",
      description: "Manage clients, proposals, deals, tasks, payments, meetings, testimonials, etc.",
      icon: Briefcase
    },
    {
      title: "Product OS",
      description: "Turn ideas into products. Define audience, research competitors, set goals, track launches, etc.",
      icon: Package
    },
    {
      title: "Goal Setting & Alignment",
      description: "Break goals into yearly, quarterly, monthly, and daily steps. Align tasks, projects, habits, etc.",
      icon: Target
    },
    {
      title: "Routine Builder",
      description: "Design intentional routines linked to life goals. Add habits, energy rhythms, time blocks, etc.",
      icon: Clock
    },
    {
      title: "Habits Builder",
      description: "Build good habits, break bad ones, track streaks, link habits to pillars and outcome goals, etc.",
      icon: CheckCircle
    },
    {
      title: "Knowledge Management",
      description: "Capture info from all sources (articles, books, podcasts, videos, etc.) and link them into Knowledge Vaults. Each subject gathers everything in one place so you can learn deeply and fast.",
      icon: Database
    },
    {
      title: "Skill Builder",
      description: "Track skill progress step by step. Move from beginner → expert with projects, milestones, etc.",
      icon: TrendingUp
    },
    {
      title: "AI Prompts Builder",
      description: "Organize, test, and store AI prompts. Build directories for writing, coding, marketing, etc.",
      icon: Bot
    },
    {
      title: "Tools & Resources",
      description: "Manage platforms, apps, contractors, templates, people, and other key resources, etc.",
      icon: Wrench
    },
    {
      title: "Personal & Business Growth",
      description: "Track progress in business and life. Growth metrics, milestones, new strategies, etc.",
      icon: BarChart3
    },
    {
      title: "Adventure Zone",
      description: "Gamify life—quests, streaks, XP, levels and rewards. Make growth addictive, etc.",
      icon: Zap
    },
    {
      title: "Alignment Zone",
      description: "Connect daily actions with long-term goals. Visualize how tasks push big projects forward, etc.",
      icon: Compass
    },
    {
      title: "Review Cycles",
      description: "Daily check-ins, weekly reviews, monthly reflections, quarterly resets, yearly audits, etc.",
      icon: Calendar
    },
    {
      title: "Life Insight Dashboard",
      description: "See your life in charts—balance, energy, focus, progress, trends, and habits at a glance, etc.",
      icon: Activity
    }
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <span>🎯</span>
            <span>Master Your Life</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Complete Life Management<br />
            System Components
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            These elements are more powerful when learned & brought together in a cohesive system, 
            rather than as isolated silos. Holistic integration is at the core of what we do.
          </p>
        </div>

        {/* Flashcards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {flashcards.map((card, index) => {
            const IconComponent = card.icon;
            const isFlipped = hoveredCard === index;
            return (
              <div
                key={index}
                className="group relative h-56 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                  {/* Front of card */}
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 hover:border-orange-300 transition-all duration-300 hover:shadow-lg backface-hidden">
                    <div className="flex flex-col items-center text-center h-full justify-center">
                      <div className="mb-4 p-3 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 bg-orange-50 backdrop-blur-sm rounded-2xl p-4 border border-orange-300 transition-all duration-300 shadow-lg backface-hidden rotate-y-180">
                    <div className="flex flex-col h-full justify-center">
                      <div className="text-center mb-3">
                        <div className="inline-flex p-2 bg-orange-200 rounded-lg mb-2">
                          <IconComponent className="w-4 h-4 text-orange-700" />
                        </div>
                        <h4 className="font-semibold text-gray-800 text-xs mb-2 line-clamp-2">
                          {card.title}
                        </h4>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <p className="text-gray-700 text-xs leading-relaxed text-center line-clamp-6 overflow-hidden">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlashcardsSection;