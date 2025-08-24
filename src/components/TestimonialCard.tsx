
interface TestimonialCardProps {
  image: string;
  name: string;
  title: string;
  quote: string;
}

const TestimonialCard = ({ image, name, title, quote }: TestimonialCardProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-[260px] sm:h-[280px] flex flex-col justify-between border border-gray-700 hover:border-orange-glow/40 transition-all duration-500 hover:shadow-lg hover:shadow-orange-glow/20 group">
      <div className="flex-1 mb-3 sm:mb-4">
        <p className="text-gray-300 leading-relaxed text-xs sm:text-sm line-clamp-6">
          {quote}
        </p>
      </div>
      
      <div className="flex items-center space-x-2 sm:space-x-3 mt-auto">
        <img 
          src={image} 
          alt={name}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
        />
        <div className="min-w-0">
          <h4 className="text-white font-semibold text-xs sm:text-sm truncate">
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

export default TestimonialCard;
