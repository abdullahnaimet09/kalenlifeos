import TestimonialCard from "./TestimonialCard";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import jamesParker from "@/assets/james-parker.jpg";
import ananyaSharma from "@/assets/ananya-sharma.jpg";
import liamMurphy from "@/assets/liam-murphy.jpg";
import sophiaMiller from "@/assets/sophia-miller.jpg";
import omarAlHassan from "@/assets/omar-al-hassan.jpg";

const testimonials = [
  {
    image: jamesParker,
    name: "James Parker",
    title: "Consultant, USA",
    quote: "I tried PARA, GTD, and Second Brain — but they all felt like scattered tools. Kalen's Life OS is the first system that connects my daily tasks to my highest goals. Before, I was drowning in to-do lists. Now, every small action feels like a step toward the future I want. It's not just productivity, it's direction."
  },
  {
    image: ananyaSharma,
    name: "Ananya Sharma", 
    title: "Entrepreneur, India",
    quote: "I always read self-help books but never managed to apply them. With Life OS, I finally see how my morning habits, weekly reviews, and big dreams tie together. I no longer feel like I'm living two lives — one for survival and one for dreams. Everything is aligned."
  },
  {
    image: liamMurphy,
    name: "Liam Murphy",
    title: "Freelancer, Ireland", 
    quote: "GTD helped me capture tasks, but I still felt lost. PARA helped me organize, but I didn't stick with it. Life OS is different because it guides me toward who I want to become. I can literally see the connection between brushing up a skill today and my 5-year vision. That gave me consistency I never had before."
  },
  {
    image: sophiaMiller,
    name: "Sophia Miller",
    title: "Educator, Canada",
    quote: "For years, I felt like I was achieving random things without purpose. With Life OS, my work, health, and even relationships now point in the same direction. It's like I finally stitched my life together into one story instead of scattered chapters."
  },
  {
    image: omarAlHassan,
    name: "Omar Al-Hassan", 
    title: "Startup Founder, UAE",
    quote: "Most systems felt like more work on top of my work. Life OS feels like the opposite — it makes life easier because it aligns everything. My tasks, my projects, my finances, even my downtime all support the bigger picture of who I want to be. That shift gave me clarity and peace I didn't know I was missing."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-darker-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-text-primary mb-4 px-4 sm:px-0">
            People Building Their Ideal Lives
          </h2>
          <p className="text-text-secondary text-base sm:text-lg px-4 sm:px-0">
            Stories from people who transformed their lives with the Kalen Life OS
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1.2,
              stopOnMouseEnter: true,
              stopOnInteraction: false
            })
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-1 sm:-ml-2">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-1 sm:pl-2 basis-[90%] sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TestimonialCard
                    image={testimonial.image}
                    name={testimonial.name}
                    title={testimonial.title}
                    quote={testimonial.quote}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;