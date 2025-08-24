const VideoSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-4 sm:px-0">
            See Kalen Life OS v2 in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Watch how this system will help you build products your customer love, create content, manage clients, shape your identity, mindset and run other aspects of life with focus, alignment, and fun.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gradient-to-br from-orange-100 to-amber-100 p-1 sm:p-2">
            <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black">
              {/* YouTube Video Embed */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5q5HyYwTN8k?rel=0&modestbranding=1&showinfo=0&vq=hd720"
                title="Kalen Life OS v2 Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Video decorative elements */}
          <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-orange-400 rounded-full opacity-70"></div>
          <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-amber-400 rounded-full opacity-50"></div>
          <div className="absolute top-1/2 -left-4 sm:-left-8 w-4 h-4 sm:w-6 sm:h-6 bg-orange-300 rounded-full opacity-60"></div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;