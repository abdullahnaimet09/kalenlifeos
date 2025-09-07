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
    quote: "I replaced 14 apps and now save 12 hours every week with Life OS. Before, I was lost in too many tools. Now all my work connects to my main goals. It’s not just about being organised — it’s about building the future I want."
  },
  {
    image: ananyaSharma,
    name: "Ananya Sharma", 
    title: "Entrepreneur, India",
    quote: "Life OS saved me 10 hours a week and replaced 18 tools. It brings my habits, reviews, and business plans into one place. I feel less stressed and more focused. Now I’m not just running my business — I’m building my dream life."
  },
  {
    image: liamMurphy,
    name: "Liam Murphy",
    title: "Freelancer, Ireland", 
    quote: "I was using 15 apps and wasting time. With Life OS, I got back 8 hours every week. It connects today’s small tasks with my 5-year goals. For the first time, I feel consistent and clear in both work and life."
  },
  {
    image: sophiaMiller,
    name: "Sophia Miller",
    title: "Educator, Canada",
    quote: "I spent 10 hours a week managing 12 apps and still felt confused. Life OS put my work, health, and family goals in one system. Now my life feels like one clear story instead of random parts."
  },
  {
    image: omarAlHassan,
    name: "Omar Al-Hassan", 
    title: "Startup Founder, UAE",
    quote: "Life OS replaced 20 tools and saved me 15 hours every week. It makes work simple instead of harder. My tasks, money, and even free time now match the life I want. I finally have both clarity and peace."
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