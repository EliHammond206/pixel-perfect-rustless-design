
import React from 'react';

const Index = () => {
  return (
    <div className="bg-black text-white flex flex-col min-h-screen relative">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold">Rustless</h1>
        <div className="flex items-center space-x-2 md:space-x-4">
          <a href="#" className="text-white text-xs md:text-sm align-middle">
            <span className="hidden md:inline">Advertise with Rustless</span>
            <span className="md:hidden">Ads</span>
            <span className="bg-red-500 text-white text-xs px-1 py-0.5 rounded ml-1">New</span>
          </a>
          <button className="bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
            Get The App
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        <main className="flex flex-col md:flex-row items-center justify-center px-6 md:px-10 lg:px-20 max-w-7xl mx-auto w-full">
          {/* Mobile Top Text */}
          <div className="block md:hidden text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="block">Live It</span>
              <span className="block">Your Way</span>
            </h2>
          </div>

          {/* Left Text Section (Desktop Only) */}
          <div className="hidden md:block md:flex-1 text-right pr-4 lg:pr-8">
            <h2 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-none">
              <span className="block">Live</span>
              <span className="block">It</span>
            </h2>
          </div>

          {/* Center Section with Hashtag and Post */}
          <div className="flex-shrink-0 flex flex-col items-center relative">
            {/* Neon Hashtag */}
            <div className="mb-6 md:mb-8">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                <span 
                  className="inline-block"
                  style={{
                    color: '#00ffff',
                    textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff',
                    filter: 'brightness(1.2)'
                  }}
                >
                  #
                </span>
              </div>
            </div>

            {/* Post Container */}
            <div className="post-container relative w-[260px] h-[325px] sm:w-[280px] sm:h-[350px] md:w-[320px] md:h-[400px] lg:w-[384px] lg:h-[480px] z-[3] rounded-3xl" 
                 style={{ boxShadow: '0 0 12px 20px rgba(0, 0, 0, 0.5)' }}>
              <div 
                className="post relative w-full h-full bg-cover bg-center rounded-3xl"
                style={{
                  backgroundImage: "url('https://raw.githubusercontent.com/EliHammond206/rustless/main/pictures/bce4a4b6cd43e7a78a98d8795508fc27.jpg')"
                }}
              >
                <div className="gradient-overlay absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-black/60 to-transparent z-[1] pointer-events-none rounded-t-3xl"></div>
                <div className="gradient-overlay-bottom absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black/60 to-transparent z-[1] pointer-events-none rounded-b-3xl"></div>
              </div>
            </div>
          </div>

          {/* Right Text Section (Desktop Only) */}
          <div className="hidden md:block md:flex-1 text-left pl-4 lg:pl-8">
            <h2 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-none">
              <span className="block">Your</span>
              <span className="block">Way</span>
            </h2>
          </div>
        </main>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="blur-gradient absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent to-black/1 pointer-events-none z-[5]"></div>

      {/* Mentions Section */}
      <section className="text-center py-8 md:py-12">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-8 md:mb-12">
          Soon In Mentions
        </h2>
        <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-12 flex-wrap px-6 md:px-12">
          {[
            '1.png', '11.png', '12.png', '2.png', '4.png', 
            '6.png', '7.png', '8.png', '9.png'
          ].map((logo, index) => (
            <div key={index} className="flex items-center">
              <img 
                src={`https://raw.githubusercontent.com/EliHammond206/rustless/main/pictures/${logo}`} 
                alt={`Logo ${index + 1}`}
                className="h-6 md:h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap justify-center items-center p-4 md:p-6 text-xs md:text-sm space-x-2 md:space-x-4 relative z-10">
        <span>© 2026 Rustless</span>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Get Help</a>
        <a href="#" className="hover:underline">Join Rustless Family</a>
        <a href="#" className="hover:underline">Community Guidelines</a>
      </footer>
    </div>
  );
};

export default Index;
