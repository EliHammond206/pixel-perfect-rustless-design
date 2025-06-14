
import React, { useState } from 'react';
import DynamicHashtag from '../components/DynamicHashtag';
import FloatingPhoto from '../components/FloatingPhoto';

const Index = () => {
  const [isWhiteTheme, setIsWhiteTheme] = useState(false);

  const themeClasses = isWhiteTheme 
    ? "bg-white text-black" 
    : "bg-black text-white";

  const headerTextColor = isWhiteTheme ? "text-black" : "text-white";
  const buttonBgColor = isWhiteTheme ? "bg-black text-white" : "bg-white text-black";

  return (
    <div className={`${themeClasses} flex flex-col min-h-screen relative overflow-hidden`}>
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsWhiteTheme(!isWhiteTheme)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            isWhiteTheme 
              ? "bg-black text-white hover:bg-gray-800" 
              : "bg-white text-black hover:bg-gray-200"
          }`}
        >
          {isWhiteTheme ? "Dark" : "Light"}
        </button>
      </div>

      {/* Header - reduced padding */}
      <header className="flex justify-between items-center p-3 md:p-4 relative z-20">
        <h1 className={`text-xl md:text-2xl font-bold ${headerTextColor}`}>Rustless</h1>
        <div className="flex items-center space-x-2 md:space-x-4">
          <a href="#" className={`${headerTextColor} text-xs md:text-sm align-middle`}>
            <span className="hidden md:inline">Advertise with Rustless</span>
            <span className="md:hidden">Ads</span>
            <span className="bg-red-500 text-white text-xs px-1 py-0.5 rounded ml-1">New</span>
          </a>
          <button className={`${buttonBgColor} px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium`}>
            Get The App
          </button>
        </div>
      </header>

      {/* Hero Section - significantly reduced padding and spacing */}
      <div className="flex-1 flex flex-col justify-center items-center relative px-4 py-2 sm:py-4 md:py-6">
        {/* Floating Photos - Desktop Layout */}
        <div className="hidden lg:block">
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

        {/* Floating Photos - Tablet Layout (iPad) */}
        <div className="hidden md:block lg:hidden">
          {/* Left side of "Live It Your Way" */}
          <FloatingPhoto
            src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
            size="tablet-round"
            style={{ left: '15%', top: '10%' }}
            className=""
          />
          
          <FloatingPhoto
            src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
            size="tablet-tiktok"
            style={{ left: '8%', top: '35%', transform: 'rotate(9deg)' }}
            className=""
            isRectangular={true}
            rotation="left"
          />
          
          <div 
            className="absolute text-[50px] z-10"
            style={{ left: '20%', top: '65%' }}
          >
            🥰
          </div>
          
          <FloatingPhoto
            src="/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png"
            size="tablet-round"
            style={{ left: '18%', top: '75%', zIndex: '5' }}
            className=""
          />

          {/* Right side of "Live It Your Way" */}
          <FloatingPhoto
            src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
            size="tablet-round"
            style={{ left: '70%', top: '8%' }}
            className=""
          />
          
          <div 
            className="absolute text-[50px] z-10"
            style={{ left: '75%', top: '25%' }}
          >
            😮‍💨
          </div>
          
          <FloatingPhoto
            src="/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png"
            size="tablet-tiktok"
            style={{ left: '78%', top: '40%', transform: 'rotate(-9deg)' }}
            className=""
            isRectangular={true}
          />
          
          <FloatingPhoto
            src="/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png"
            size="tablet-round"
            style={{ left: '65%', top: '78%' }}
            className=""
          />
        </div>

        {/* Mobile Layout - Much tighter spacing */}
        <div className="block md:hidden w-full max-w-sm mx-auto">
          {/* Top section with photos - reduced height */}
          <div className="relative h-36 mb-2">
            {/* emoji 🥰 */}
            <div 
              className="absolute text-[30px] z-20"
              style={{ left: '20px', top: '5px' }}
            >
              🥰
            </div>
            
            {/* tiktok picture (rotated 9 degree) */}
            <FloatingPhoto
              src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
              size="mobile-tiktok"
              style={{ left: '40px', top: '25px', transform: 'rotate(9deg)' }}
              className=""
              isRectangular={true}
            />

            {/* tiktok pictures (rotated negative 9 degree) */}
            <FloatingPhoto
              src="/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png"
              size="mobile-tiktok"
              style={{ left: '200px', top: '0px', transform: 'rotate(-9deg)' }}
              className=""
              isRectangular={true}
            />
            
            {/* circled picture */}
            <FloatingPhoto
              src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
              size="mobile-round"
              style={{ left: '220px', top: '100px' }}
              className=""
            />
          </div>

          {/* Main Content - "Live It Your Way" with buttons - much tighter spacing */}
          <div className="text-center relative z-10 mb-3">
            <h1 className={`text-4xl font-bold ${headerTextColor} leading-tight mb-3`}>
              <div className="mb-1">Live It</div>
              <div className="mb-1">Your Way</div>
              <div className="text-3xl">
                <DynamicHashtag isWhiteTheme={isWhiteTheme} />
              </div>
            </h1>

            {/* App Store Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <button className={`w-[60px] h-[45px] ${buttonBgColor} rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}>
                <img src="/lovable-uploads/7c463ba4-3f87-404b-b05b-7b3d1c5fc3e3.png" alt="Apple" className="w-5 h-5" />
              </button>
              <button className={`w-[60px] h-[45px] ${buttonBgColor} rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}>
                <img src="/lovable-uploads/a5ee20c4-051c-473f-9f29-59a36c62163e.png" alt="Android" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom section with remaining photos - reduced height and spacing */}
          <div className="relative h-24 mb-2">
            {/* big circled image */}
            <FloatingPhoto
              src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
              size="mobile-large-round"
              style={{ left: '20px', top: '0px' }}
              className=""
            />
            
            {/* emoji 😮‍💨 */}
            <div 
              className="absolute text-[30px] z-20"
              style={{ left: '150px', top: '0px' }}
            >
              😮‍💨
            </div>
            
            {/* circle */}
            <FloatingPhoto
              src="/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png"
              size="mobile-round"
              style={{ left: '220px', top: '0px' }}
              className=""
            />
            
            {/* circle */}
            <FloatingPhoto
              src="/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png"
              size="mobile-round"
              style={{ left: '180px', top: '50px' }}
              className=""
            />
          </div>
        </div>

        {/* Main Content - Desktop and Tablet - reduced top margin */}
        <div className="text-center relative z-10 hidden md:block mt-8 sm:mt-8 md:mt-0">
          <h1 className={`text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold ${headerTextColor} leading-tight mb-4 sm:mb-6`}>
            <div className="mb-1">Live It</div>
            <div className="mb-1">Your Way</div>
            <div className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl">
              <DynamicHashtag isWhiteTheme={isWhiteTheme} />
            </div>
          </h1>

          {/* App Store Buttons */}
          <div className="flex justify-center gap-4 mt-6 sm:mt-8">
            <button className={`w-[60px] h-[45px] md:w-[88px] md:h-[65px] ${buttonBgColor} rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}>
              <img src="/lovable-uploads/7c463ba4-3f87-404b-b05b-7b3d1c5fc3e3.png" alt="Apple" className="w-5 h-5 md:w-8 md:h-8" />
            </button>
            <button className={`w-[60px] h-[45px] md:w-[88px] md:h-[65px] ${buttonBgColor} rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}>
              <img src="/lovable-uploads/a5ee20c4-051c-473f-9f29-59a36c62163e.png" alt="Android" className="w-5 h-5 md:w-8 md:h-8" />
            </button>
            </div>
        </div>
      </div>

      {/* Mentions Section - significantly reduced padding and margins */}
      <section className="text-center py-4 md:py-8 relative z-10 mt-2 sm:mt-4 md:mt-4">
        <h2 className={`text-xl md:text-2xl font-bold ${headerTextColor} mb-4 md:mb-6`}>
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
                className={`h-6 md:h-8 w-auto object-contain ${isWhiteTheme ? 'opacity-80' : ''}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer - reduced padding */}
      <footer className={`flex flex-wrap justify-center items-center p-3 md:p-4 text-xs md:text-sm space-x-2 md:space-x-4 relative z-10`}>
        <span>© 2026 Rustless</span>
        <a href="#" className={`hover:underline ${headerTextColor}`}>Terms of Service</a>
        <a href="#" className={`hover:underline ${headerTextColor}`}>Get Help</a>
        <a href="#" className={`hover:underline ${headerTextColor}`}>Join Rustless Family</a>
        <a href="#" className={`hover:underline ${headerTextColor}`}>Community Guidelines</a>
      </footer>
    </div>
  );
};

export default Index;
