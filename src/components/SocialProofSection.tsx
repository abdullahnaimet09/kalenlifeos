import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { Star } from "lucide-react";

const socialProofs = [
  {
    name: "David Clarke",
    title: "SaaS Founder",
    quote: "Earlier my day was full of random tasks and I was always confused what to do first. Life OS gave me a clear structure, now I start with focus and finish more in less time. Any founder dealing with chaos should try this.",
    rating: 5
  },
  {
    name: "Sophia Turner",
    title: "VC Investor", 
    quote: "I see many founders wasting energy because they don't follow any system. Life OS works like a backbone and helps them take better decisions. I always tell my startups to start using it from the first day.",
    rating: 5
  },
  {
    name: "Ravi Patel",
    title: "Digital Agency Owner",
    quote: "Before, my agency projects were slipping and deadlines were missed. After I started using the 11 pillars in Life OS, the work runs smoother and team accountability is strong. It made a big difference, I recommend it to all agency owners.",
    rating: 4
  },
  {
    name: "Emily Ross",
    title: "Product Manager",
    quote: "I handle many tasks daily and often lost track. Life OS keeps me on track without extra effort. The flow is simple but very effective. I already suggested it to my colleagues in product teams.",
    rating: 5
  },
  {
    name: "James Bennett",
    title: "Startup Mentor",
    quote: "Most founders I guide struggle with structure and discipline. Life OS gives them everything in one place. It helps them build good habits early. I now tell all my mentees to make it part of their startup toolkit.",
    rating: 5
  },
  {
    name: "Laura White",
    title: "Consultant",
    quote: "My work and personal goals were scattered across many tools. Life OS tied everything together in one system. Now I can focus better and plan clearly. I recommend it to busy professionals like me.",
    rating: 4
  },
  {
    name: "Daniel Green",
    title: "SaaS CTO",
    quote: "Technical teams need clarity, but we often waste time in overthinking. Life OS helped me cut the noise and just execute. It gave me and my team better focus. I recommend it to tech leaders.",
    rating: 5
  },
  {
    name: "Nina Cooper",
    title: "Marketing Coach",
    quote: "I tried many tools before, but this is the first that feels like a complete system. It is easy to start, yet very deep when you explore. I tell all my clients to use it because it makes their work easier.",
    rating: 5
  },
  {
    name: "Michael Evans",
    title: "Venture Partner",
    quote: "Time management is the biggest edge for any founder. Life OS builds that edge by giving daily clarity and structure. I recommend it to every entrepreneur I meet.",
    rating: 5
  },
  {
    name: "Olivia Smith",
    title: "Agency Founder",
    quote: "We use Life OS for managing client projects as well as team learning. Earlier it was confusing, now it feels simple and smooth. It works like magic. I recommend it for agencies of any size.",
    rating: 4
  },
  {
    name: "Henry Walker",
    title: "SaaS Builder",
    quote: "I was looking for a system to connect product roadmaps with daily habits. Life OS gave me exactly that. It is not just a planner, it feels like a full business system. Strongly recommended.",
    rating: 5
  },
  {
    name: "Ava Lewis",
    title: "Educator",
    quote: "I run online courses and always struggled with prep and student progress. Life OS keeps everything organised in one place. Now I can focus on teaching. I already told my friends in education to try it.",
    rating: 5
  },
  {
    name: "Jack Anderson",
    title: "Startup Founder",
    quote: "Scaling a business without a proper system is very risky. Life OS gave me the missing structure and helped me grow faster. Every solopreneur should start with it.",
    rating: 5
  },
  {
    name: "Grace Miller",
    title: "Brand Strategist",
    quote: "My creativity improves when my routine is structured. Life OS gave me that structure and balance between work and life. I now recommend it to other strategists and creatives.",
    rating: 4
  },
  {
    name: "Ethan Hughes",
    title: "Venture Scout",
    quote: "I meet new startups every week. The ones with systems always move faster. Life OS is that kind of system. I recommend founders to use it early, before they scale.",
    rating: 5
  },
  {
    name: "Chloe Adams",
    title: "Content Creator",
    quote: "I was jumping between too many tools and losing time. Life OS brought everything into one flow. Now I save hours daily. I've already told my creator friends to use it.",
    rating: 5
  },
  {
    name: "Matthew Scott",
    title: "Angel Investor",
    quote: "I like to invest in founders who value time. Life OS helps them manage time better and focus on priorities. I recommend it during my founder workshops.",
    rating: 5
  },
  {
    name: "Hannah Baker",
    title: "Business Coach",
    quote: "My clients don't just need advice, they need a working tool. Life OS fills that gap by giving them a daily system. That's why I recommend it to almost all of them.",
    rating: 4
  },
  {
    name: "Ryan Phillips",
    title: "SaaS Growth Lead",
    quote: "I track KPIs, tasks, and habits in one place now. It feels natural, not forced. Life OS became part of my daily routine. I've already recommended it to my growth network.",
    rating: 5
  },
  {
    name: "Ella Parker",
    title: "Startup Operator",
    quote: "As an operator I handle multiple roles daily. It was stressful before. Life OS keeps me sane and helps me manage smoothly. I recommend it to every operator I know.",
    rating: 5
  },
  {
    name: "Thomas Reed",
    title: "Agency Partner",
    quote: "Our systems were messy and we kept losing track of things. Life OS gave us clarity and structure. I now recommend it to other agency owners.",
    rating: 4
  },
  {
    name: "Isabella Foster",
    title: "Wellness Coach",
    quote: "For my work, balance is everything. Life OS gave me balance in both personal and business life. I've already recommended it to my community.",
    rating: 5
  },
  {
    name: "Benjamin Cole",
    title: "Tech Advisor",
    quote: "Almost every founder I advise struggles with structure. Life OS solves that problem very well. That's why I strongly recommend it in my sessions.",
    rating: 5
  },
  {
    name: "Mia Johnson",
    title: "Freelancer",
    quote: "I wanted freedom in freelancing but not chaos. Life OS gave me that balance. It became my business HQ. I always tell other freelancers to use it.",
    rating: 4
  },
  {
    name: "Christopher Hall",
    title: "VC Associate",
    quote: "I recommend Life OS to founders raising capital. Investors like clarity, and this system gives exactly that. It makes founders look more prepared.",
    rating: 5
  },
  {
    name: "Amelia Wood",
    title: "HR Consultant",
    quote: "I manage clients, documents, and habits together in one place now. Life OS is easy to use but still very powerful. I suggest it to busy HR professionals like me.",
    rating: 5
  },
  {
    name: "George Mitchell",
    title: "SaaS Marketer",
    quote: "My campaigns were scattered earlier. With Life OS I track leads, results, and habits in one flow. It brought everything together. I recommend it to all growth teams.",
    rating: 5
  }
];

const SocialProofCard = ({ name, title, quote, rating }: { name: string; title: string; quote: string; rating: number }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-3 h-[280px] flex flex-col justify-between border border-gray-700 hover:border-orange-glow/40 transition-all duration-500 hover:shadow-lg hover:shadow-orange-glow/20 group">
      <div className="flex-1 mb-2">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
              }`}
            />
          ))}
        </div>
        <p className="text-gray-300 leading-relaxed text-sm line-clamp-5">
          {quote}
        </p>
      </div>
      
      <div className="flex items-center space-x-3 mt-auto">
        <div className="min-w-0">
          <h4 className="text-white font-semibold text-sm truncate">
            {name}
          </h4>
          <p className="text-gray-400 text-xs truncate">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

const SocialProofSection = () => {
  return (
    <div className="py-24 overflow-hidden" style={{ backgroundColor: 'hsl(40 20% 92%)' }}>
      <div className="text-center mb-16 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          See How Others Built Their Ideal Life
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Join Hundreds of founders, creators, freelancers and professionals who transformed their productivity with Kalen Life OS
        </p>
      </div>

      {/* Single Row - Complete Full Width Carousel */}
      <Carousel
        className="w-full"
        plugins={[
          AutoScroll({
            speed: 1,
            direction: "forward",
            stopOnInteraction: false,
            stopOnFocusIn: false,
            stopOnMouseEnter: false,
          })
        ]}
      >
        <CarouselContent className="-ml-4">
          {[...socialProofs, ...socialProofs].map((proof, index) => (
            <CarouselItem key={`proof-${index}`} className="pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <SocialProofCard
                name={proof.name}
                title={proof.title}
                quote={proof.quote}
                rating={proof.rating}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SocialProofSection;