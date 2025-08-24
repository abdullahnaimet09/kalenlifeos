import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ContentSections = () => {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-6 max-w-5xl space-y-12">
          
          {/* Section 1 - Do you on LEFT */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 border border-amber-200">
              <h3 className="text-xl md:text-2xl font-normal text-gray-800 leading-relaxed">
                Do you feel life is moving fast, but you are stuck in the same place? The quiet frustration of knowing{" "}
                <span className="text-orange-600 font-medium">you're capable of more?</span>
              </h3>
            </div>
            
            <div className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-3xl p-8 text-white border border-orange-700">
              <div className="space-y-3 text-sm leading-relaxed">
                <p>Your home feels heavy instead of peaceful. The clutter drains your energy every morning.</p>
                <p>You keep saying "I'm busy," but slowly your family and relationships are slipping away.</p>
                <p>You cut off friends to focus on work, but now you feel lonely and disconnected.</p>
                <p>Your money keeps disappearing. Since you don't track or plan, you are always stressed about where it goes.</p>
                <p>Your body is giving signs tiredness, poor sleep, cravings but you keep pushing it aside.</p>
                <p>You love the idea of travel or fun, but guilt stops you. Rest feels like wasting time.</p>
              </div>
            </div>
          </div>

          {/* Section 2 - Do you on RIGHT */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-3xl p-8 text-white border border-orange-700">
              <div className="space-y-3 text-sm leading-relaxed">
                <p>Your best content ideas never come out because there is no system to generate, capture, and publish them.</p>
                <p>Client work is spread in chats, notes, and apps, so you are always running behind deadlines.</p>
                <p>You dream of building products, but without a system you feel stuck. You don't define your audience, don't study competitors, and your goals stay unclear.</p>
                <p>Ideas keep piling up, but without a plan nothing gets finished, nothing gets launched.</p>
                <p>When you finally sit down to relax, guilt takes over. Instead of feeling refreshed, you feel like you're losing time.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 border border-amber-200">
              <h3 className="text-xl md:text-2xl font-normal text-gray-800 leading-relaxed">
                Do you feel you work all day, but still nothing really moves forward?
              </h3>
            </div>
          </div>

          {/* Section 3 - Do you on LEFT */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 border border-amber-200">
              <h3 className="text-xl md:text-2xl font-normal text-gray-800 leading-relaxed">
                Do you feel busy all the time, but not truly growing?
              </h3>
            </div>
            
            <div className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-3xl p-8 text-white border border-orange-700">
              <div className="space-y-3 text-sm leading-relaxed">
                <p>You try to set goals or build habits, but they feel boring and heavy.</p>
                <p>There is no reward, no excitement, and no feedback.</p>
                <p>Today's actions don't feel connected to your bigger purpose or long-term vision.</p>
                <p>This leads to guilt when resting, stress while working, and doubts like "Why am I not consistent?"</p>
                <p>You collect tools, notes, and bookmarks everywhere but when you need them, they are lost.</p>
                <p>You learn new things, but without a plan or structure, the skills don't build up.</p>
                <p>You keep consuming books,courses, podcasts,articles, videos, but nothing sticks because there is no structure to turn learning into action.</p>
                <p>If you're tired of making plans that never happen and watching others race ahead while you stand still, you're in the right place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Full Width Black Section */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-black py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-10 border border-amber-200 max-w-4xl mx-auto">
              <div className="space-y-6 text-gray-800">
                <h3 className="text-2xl md:text-3xl font-semibold text-amber-900 leading-relaxed">
                  We help solopreneurs who feel stuck, overwhelmed, and lost in daily chaos. If you feel life is not moving forward no matter how hard you try, this system is for you.
                </h3>
                
                <p className="text-lg leading-relaxed">
                  Our solution is <span className="font-semibold">Kalen Life OS</span>, built on the Pillars, Pipelines & Vaults (PPV) framework, designed specifically for solopreneurs. Pillars are different areas of your life in which you break your life so you can focus on them individually and also you define your life aspiration in the pillar, pipelines is a system to achieve goal related to pillar and vaults are resources to achieve those goals. 
                </p>
                
                <p className="text-lg leading-relaxed bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
                  <span className="font-semibold">It helps you build products your customers love, create distribution, manage clients, shape your identity, mindset and run other aspects of life with focus, alignment, and fun.</span>
                </p>
                
                <p className="text-lg leading-relaxed">
                  The Kalen Life OS works as a software layer on top of Notion, using its full power. Together, Kalen Life OS and Notion create a powerful system for growth and performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Create the Life You Want Section */}
      <section className="py-20" style={{backgroundColor: '#F5F1E8'}}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
              Create the Life You Want
            </h2>
            
            <div className="space-y-6 text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
              <p>
                Stop reacting to the world around you, perpetually bouncing all over.
              </p>
              <p>
                Shape your own path and direct your actions toward it.
              </p>
              
              <p className="mt-12">
                An erratic, impulsive approach leads nowhere.
              </p>
              
              <p>
                You know what to do, but don't do it.
              </p>
              
              <p>
                You need a <span className="text-orange-600 font-semibold">structured system</span> to guide you and hold you accountable.
              </p>
            </div>
          </div>

          {/* Three Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {/* What Matters Most */}
            <div className="bg-amber-50 rounded-2xl p-8 shadow-sm">
              <div className="mb-6">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-4">What Matters Most</h3>
              </div>
              <ul className="space-y-2 text-amber-800 text-sm">
                <li>• Identify Purpose</li>
                <li>• Set Your Compass</li>
                <li>• Define Meaning & Value</li>
              </ul>
            </div>

            {/* Reaching Milestones */}
            <div className="bg-amber-50 rounded-2xl p-8 shadow-sm">
              <div className="mb-6">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-4">Reaching Milestones</h3>
              </div>
              <ul className="space-y-2 text-amber-800 text-sm">
                <li>• How to Focus</li>
                <li>• How to Prioritize</li>
                <li>• How to Align Your Life</li>
              </ul>
            </div>

            {/* Growth That Lasts */}
            <div className="bg-amber-50 rounded-2xl p-8 shadow-sm">
              <div className="mb-6">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 17L17 7"/>
                    <path d="M17 7H7"/>
                    <path d="M17 7V17"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-4">Growth That Lasts</h3>
              </div>
              <ul className="space-y-2 text-amber-800 text-sm">
                <li>• Consistency Achieved</li>
                <li>• Routines Implemented</li>
                <li>• Knowledge Organized</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Profile Picture */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <img
                src="/lovable-uploads/profile image.png"
                alt="Kalen - Creator of Kalen Life OS"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-xl object-cover border-4 border-white"
              />
            </div>
          </div>

          {/* Story Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ✨ My Story
            </h2>
          </div>

          {/* Story Paragraphs */}
          <div className="space-y-6 text-white leading-relaxed mb-16">
            <p>
              My name is Kalen. I am the person behind Kalen Life OS. For the past three years, I have been building systems that help people live better, more focused, and more aligned lives. In these years, <span className="underline decoration-red-500 decoration-2 font-semibold">I have created more than 30 different systems for different purposes, each one designed to solve a real problem</span>. My work combines my background in coding, design, system development, and system thinking skills that allow me to build something practical, useful, and truly transformative. But this is not where my story began. Just three years ago, I was in a very different place.
            </p>
            
            <p>
              I was burnt out. Every day I felt overwhelmed and scattered. I kept telling myself I was working hard, but deep down I knew I was just stuck in the same cycle. My money was a complete mess I spent without thinking, and I was always broke. My health was no better I stayed up late, woke up tired, my back hurt, my head felt heavy, and I ignored all the warning signs. My relationships started breaking apart. I cut off friends, stopped answering messages, and even missed birthdays, thinking that isolating myself would help me focus. But instead, I just felt more alone.
            </p>
            
            <p>
              I was chasing new ideas every week, getting excited for a few days, and then quitting halfway. I had no real plan, just noise and confusion. And at night, I scrolled through social media, watching others grow while I felt like I was falling behind. For six months, I was trapped in this painful cycle learning something new, making big plans, and then quitting. I even tried using Notion after watching Ali Abdaal's videos. I built fancy pages, and for a short time, I felt organized. But soon, it became overwhelming again. Too many pages, no clarity, no real progress. I realized I was just copying templates that were never made for me.
            </p>
          </div>

          {/* Toggle Sections */}
          <div className="space-y-4">
            {/* Toggle 1 - The Turning Point */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <Collapsible>
                <CollapsibleTrigger className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group">
                  <span className="text-lg font-semibold text-gray-800">🔽 The Turning Point & My System</span>
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </CollapsibleTrigger>
                <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                  <div className="px-8 pb-6 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Then one day, I came across a quote by James Clear: <em>"You don't rise to the level of your goals. You fall to the level of your systems."</em> That one line changed everything for me. I understood that I didn't need more goals I needed better systems. Systems that could shape my daily actions, my habits, my mindset, and even my identity.
                    </p>
                    
                    <p>
                      Then I started studying top performers people like Muhammad Ali, Steve Jobs, Naval Ravikant, and Warren Buffett I realized they all had something in common. They were not relying on willpower or motivation. They were relying on systems. Systems that shaped how they thought, how they acted, and even how they saw themselves. They didn't just set goals; they had system to achieve them. That's when I began to design what I call a Kalen Life Operating System which will give me focus, alignment and fun.
                    </p>
                    
                    <p>
                      I learned PPV framework Pillars, Pipelines, and Vaults and I started applying it in my own life. But I went further. I added two key elements that most systems ignore: Identity and Mindset. I asked myself, "Who do I want to become?" and then I built systems to become that person, step by step. I studied how top performers think and trained myself to adopt the same mindset. I broke my life into connected areas health, family, money, learning, and content creation and built systems for each of them.
                    </p>
                    
                    <p>
                      For every area, I designed clear pathways: long-term vision yearly goals projects weekly steps daily tasks. I connected everything so that no action was random. I also created a knowledge system where every article, video, or note had its place and could be found later. I added regular review cycles, including daily check-ins, weekly reflections, monthly reviews, quarterly realignments, and yearly audits. These gave me both clarity and direction. To make it fun, I even gamified the process, turning tasks into quests and rewarding myself with points I could spend on things I enjoyed, like movies or outings.
                    </p>
                    
                    <p>
                      And the results were shocking. In just thirty days, I went from being scattered and confused to being clear and focused. My health improved. My money was under control. My relationships became stronger. I finally felt peace inside my mind.
                    </p>
                    
                    <p>
                      After 3 years of living with this system, my life looks completely different. I have more focus, more energy, and more freedom. I am no longer stressed because my system runs my life in the background. I even have more free time than before because everything is organized and aligned. For the first time in years, I feel truly present with my family and friends.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Toggle 2 - Why I Built Kalen Life OS v2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <Collapsible>
                <CollapsibleTrigger className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group">
                  <span className="text-lg font-semibold text-gray-800">🔽 Why I Built Kalen Life OS v2</span>
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </CollapsibleTrigger>
                <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                  <div className="px-8 pb-6 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      In January 2025, I realised I wasn't the only one. Almost every solopreneur around me was dealing with the same problems. They were trying to handle everything by themselves, thinking about too many things at once, and always feeling like they were falling behind in most areas of their life.
                    </p>
                    
                    <p>
                      Every day, I see brilliant solopreneurs struggling with the same 11 problems:
                    </p>
                    
                    <p>
                      <strong>Home chaos</strong> – Their home should recharge them, but instead it drains their energy every day. The clutter and chaos make them feel overwhelmed the moment they wake up.
                    </p>
                    
                    <p>
                      <strong>Family guilt</strong> – They keep saying "I'm busy," but relationships are silently falling apart. Their mind is always elsewhere, even when they're with loved ones.
                    </p>
                    
                    <p>
                      <strong>Social isolation</strong> – They cut off friends thinking it will help them focus, but now they just feel lonely. They're disconnected from others, and even more from themselves.
                    </p>
                    
                    <p>
                      <strong>Financial stress</strong> – They have no idea where their money goes, it feels like it just disappears. No budgeting, no planning, just constant stress and surprises.
                    </p>
                    
                    <p>
                      <strong>Health decline</strong> – Their body keeps giving warning signs like fatigue, cravings, and poor sleep, but they ignore it. They want to take care of themselves but never "find the time."
                    </p>
                    
                    <p>
                      <strong>Travel guilt</strong> – They love the idea of travel but feel guilty every time they try to plan it. Without systems, even taking a break feels like falling behind.
                    </p>
                    
                    <p>
                      <strong>Entertainment shame</strong> – They want to relax, but feel guilty about it, like they're wasting time. Fun has turned into guilt, not rest.
                    </p>
                    
                    <p>
                      <strong>Scattered learning</strong> – They consume endless content like books, podcasts,courses, video, articles but nothing sticks.
                    </p>
                    
                    <p>
                      <strong>Content struggle</strong> – They have great ideas, but no system to capture, create, and develop them. Most ideas die in their mind before they ever reach the world.
                    </p>
                    
                    <p>
                      <strong>Freelance chaos</strong> – Client work is scattered across notes, apps, and memory because freelancers don't have a system to manage clients, deals, proposals, tasks, meetings, payments, and testimonials.
                    </p>
                    
                    <p>
                      <strong>Product paralysis</strong> – They have amazing product ideas but struggle to bring them to life. Most of the time, they start building without doing proper research. They don't have a system to:
                    </p>
                    
                    <ul className="list-disc ml-6 space-y-1">
                      <li>define their audience</li>
                      <li>study competitors</li>
                      <li>set clear goals</li>
                      <li>validate ideas before building</li>
                      <li>track resources and progress</li>
                      <li>collect and act on feedback</li>
                      <li>structure launches step by step</li>
                    </ul>
                    
                    <p>
                      Without this structure, they either get stuck in perfectionism or waste time building something nobody actually wants. They feel busy, but not productive.
                    </p>
                    
                    <hr className="my-6 border-gray-300" />
                    
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Goal setting problem</h4>
                    
                    <p>
                      Even when they try to set goals or build habits, there's no reward for taking action. No excitement. No feedback. Work starts feeling boring and heavy. There's no motivation to stay consistent. Their actions don't feel connected to any purpose. It's just another long to-do list. And slowly, they stop trying.
                    </p>
                    
                    <p>
                      Mentally, this hits hard. They overthink everything. They feel guilty while resting. They feel stressed while working. They burn out silently and start doubting themselves. Questions like "Why am I not consistent?" or "Why does nothing work for me?" keep coming back.
                    </p>
                    
                    <p>
                      One of the biggest problems is that they don't have a way to track their progress. They don't know what they did today, how their week went, or if they're improving month by month. There's no structure to review life, reflect, or adjust. So they keep going in circles, busy but not growing.
                    </p>
                    
                    <hr className="my-6 border-gray-300" />
                    
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Resource management problem</h4>
                    
                    <p>
                      They don't have a proper way to manage their resources, the things that could actually help them achieve their goals. Their knowledge is scattered in random bookmarks, notes, and YouTube videos they never revisit. They keep jumping between tools and platforms without knowing which ones actually support their goals.
                    </p>
                    
                    <p>
                      They want to build new skills, but there's no plan, no structure, just watching random tutorials and hoping something sticks. Even when they meet helpful people or learn something valuable, it gets forgotten or lost. There's no system to store, organise, and use these resources when they need them.
                    </p>
                    
                    <p>
                      So even though they have potential and access to powerful tools, they can't use them well. These resources are meant to help them grow, but without a system, they stay unused and wasted.
                    </p>
                    
                    <hr className="my-6 border-gray-300" />
                    
                    <p>
                      That is why I built <strong>Kalen Life OS v2</strong>. It's not just a template, but a complete Life Operating System, built especially for solopreneurs by using Notion's advanced capabilities. Notion has improved so much with its latest automations, charts, and new features, and I've used them to create a system that actually works.
                    </p>
                    
                    <p className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
                      <span className="font-semibold">This system helps you build products your customers love, create distribution, manage clients, shape your identity, mindset and run other aspects of life with focus, alignment, and fun.</span>
                    </p>
                    
                    <p>
                      Today, my mission is to share this system with others. Because I know exactly how it feels to be stuck, overwhelmed, and lost. And I also know the power of having a system that gives you focus, alignment and fun in both life and business because if you don't have a focus you can't achieve any goal in your life, and if your goal is not aligned with your purpose you will feels empty all the time and if you are not enjoying the process you can't sustain it for long term.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Toggle 3 - Much More Than A Template */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <Collapsible>
                <CollapsibleTrigger className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between group">
                  <span className="text-lg font-semibold text-gray-800">🔽 Why Templates Fail & Why You Need a Full Life OS</span>
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </CollapsibleTrigger>
                <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                  <div className="px-8 pb-6 text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Most people buy scattered Notion templates hoping to fix their life. One for tasks, another for goals, maybe one for content. Very quickly, everything feels messy because these templates don't work together.
                    </p>
                    
                    <p>
                      Templates are like small plugins useful for tiny tasks, but never designed to run your whole life. They don't shape your identity, keep you focused, or help you grow into the kind of person who can achieve big goals.
                    </p>
                    
                    <p>
                      What you really need is a complete Life Operating System.
                    </p>
                    
                    <p>
                      Most Notion templates in the market only show off design skills, not life-changing skills. But we are different. We don't just build templates we build Life Systems.
                    </p>
                    
                    <p>
                      Yes, Notion is part of our system, but it's only the tool. The real power comes from the system itself. A system is not just about linking databases or connecting pages, it's about creating something bigger where every part supports and strengthens the other.
                    </p>
                    
                    <p>
                      And the most important part of this system is you. It's about rewiring your brain, breaking old habits, and building new ones. It's about changing the way you think, act, and live.
                    </p>
                    
                    <p>
                      We start by understanding your life story, your values, and what truly matters to you. Then we align your daily actions, weekly plans, and long-term goals with those values. This way, you don't just stay busy you move forward in the right direction.
                    </p>
                    
                    <p className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
                      <span className="font-semibold">Our system helps you build products your customers love, create distribution, manage clients, shape your identity, mindset and run other aspects of life with focus, alignment, and fun.</span>
                    </p>
                    
                    <p>
                      While the market is full of "quick-fix templates," we're offering something much deeper a guided journey to lasting change. A system that brings clarity, confidence, and peace of mind.
                    </p>
                    
                    <p>
                      ✨ Now, let's explore what's inside Kalen Life OS v2.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;