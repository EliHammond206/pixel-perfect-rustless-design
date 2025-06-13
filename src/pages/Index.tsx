
import React from 'react';
import DynamicHashtag from '../components/DynamicHashtag';
import FloatingPhoto from '../components/FloatingPhoto';

const Index = () => {
  return (
    <div className="bg-black text-white flex flex-col min-h-screen relative overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 relative z-20">
        <h1 className="text-xl md:text-2xl font-bold text-white">Rustless</h1>
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

      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center relative px-4 py-12">
        {/* Floating Photos - Desktop Layout */}
        <div className="hidden md:block">
          {/* Left side of "Live It Your Way" */}
          <FloatingPhoto
            src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
            size="desktop-round"
            style={{ left: '15%', top: '10%' }}
            className=""
          />
          
          <FloatingPhoto
            src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
            size="desktop-tiktok"
            style={{ left: '8%', top: '35%', transform: 'rotate(9deg)' }}
            className=""
            isRectangular={true}
            rotation="left"
          />
          
          <div 
            className="absolute text-[60px] z-10"
            style={{ left: '20%', top: '65%' }}
          >
            🥰
          </div>
          
          <FloatingPhoto
            src="/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png"
            size="desktop-round"
            style={{ left: '25%', top: '75%' }}
            className=""
          />

          {/* Right side of "Live It Your Way" */}
          <FloatingPhoto
            src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
            size="desktop-round"
            style={{ left: '70%', top: '8%' }}
            className=""
          />
          
          <div 
            className="absolute text-[60px] z-10"
            style={{ left: '75%', top: '25%' }}
          >
            😮‍💨
          </div>
          
          <FloatingPhoto
            src="/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png"
            size="desktop-tiktok"
            style={{ left: '78%', top: '40%', transform: 'rotate(-9deg)' }}
            className=""
            isRectangular={true}
          />
          
          <FloatingPhoto
            src="/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png"
            size="desktop-round"
            style={{ left: '65%', top: '78%' }}
            className=""
          />
        </div>

        {/* Floating Photos - Mobile Layout */}
        <div className="block md:hidden">
          {/* Above "Live It Your Way" */}
          <div 
            className="absolute text-[36px] z-10"
            style={{ left: '10%', top: '5%' }}
          >
            🥰
          </div>
          
          <FloatingPhoto
            src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
            size="mobile-tiktok"
            style={{ left: '15%', top: '8%', transform: 'rotate(9deg)' }}
            className=""
            isRectangular={true}
          />
          
          <FloatingPhoto
            src="/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png"
            size="mobile-tiktok"
            style={{ left: '65%', top: '3%', transform: 'rotate(-9deg)' }}
            className=""
            isRectangular={true}
          />
          
          <FloatingPhoto
            src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
            size="mobile-round"
            style={{ left: '70%', top: '25%' }}
            className=""
          />

          {/* Below "Live It Your Way" */}
          <FloatingPhoto
            src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
            size="mobile-large-round"
            style={{ left: '10%', top: '85%' }}
            className=""
          />
          
          <div 
            className="absolute text-[36px] z-10"
            style={{ left: '40%', top: '88%' }}
          >
            😮‍💨
          </div>
          
          <FloatingPhoto
            src="/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png"
            size="mobile-round"
            style={{ left: '70%', top: '95%' }}
            className=""
          />
          
          <FloatingPhoto
            src="/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png"
            size="mobile-round"
            style={{ left: '60%', top: '110%' }}
            className=""
          />
        </div>

        {/* Main Content - Centered */}
        <div className="text-center relative z-10 mt-16 md:mt-0">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none mb-8">
            <div className="mb-2">Live It</div>
            <div className="mb-2">Your Way</div>
            <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              <DynamicHashtag />
            </div>
          </h1>

          {/* App Store Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button className="w-[60px] h-[45px] md:w-[88px] md:h-[65px] bg-white text-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src="/lovable-uploads/7c463ba4-3f87-404b-b05b-7b3d1c5fc3e3.png" alt="Apple" className="w-5 h-5 md:w-8 md:h-8" />
            </button>
            <button className="w-[60px] h-[45px] md:w-[88px] md:h-[65px] bg-white text-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src="/lovable-uploads/a5ee20c4-051c-473f-9f29-59a36c62163e.png" alt="Android" className="w-5 h-5 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mentions Section */}
      <section className="text-center py-16 md:py-20 relative z-10 mt-20 md:mt-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-8 md:mb-12">
          As Soon On
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
        <a href="#" className="hover:underline text-white">Terms of Service</a>
        <a href="#" className="hover:underline text-white">Get Help</a>
        <a href="#" className="hover:underline text-white">Join Rustless Family</a>
        <a href="#" className="hover:underline text-white">Community Guidelines</a>
      </footer>
    </div>
  );
};

export default Index;
