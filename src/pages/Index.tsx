import React from 'react';
import { Link } from 'react-router-dom';
import DynamicHashtag from '../components/DynamicHashtag';
import FloatingPhoto from '../components/FloatingPhoto';

const Index = () => {
  return (
    <div className="bg-white text-black flex flex-col min-h-screen relative overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-4 relative z-20">
        <Link to="/" className="text-xl md:text-2xl font-bold text-black hover:opacity-80 transition-opacity">
          Rustless
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link to="/partner-with-us" className="text-black text-base md:text-base align-middle font-medium hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
            <span className="hidden md:inline">Partner With Us</span>
            <span className="md:hidden">For Partners</span>
            <span className="ml-1 text-sm">👋</span>
          </Link>
          <Link to="/get-the-app" className="bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-base md:text-base font-medium">
            Get The App
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center relative px-4 py-4 sm:py-6 md:py-8">
        {/* Floating Photos - Desktop Layout */}
        <div className="hidden lg:block">
          <FloatingPhoto
            src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
            size="desktop-round"
            style={{ left: '15%', top: '10%' }}
            className=""
          />
          
          <FloatingPhoto
            src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
            size="desktop-tiktok"
            style={{ left: '8%', top: '35%', transform: 'rotate(15deg)' }}
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
            style={{ left: '78%', top: '40%', transform: 'rotate(-15deg)' }}
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
          <FloatingPhoto
            src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
            size="tablet-round"
            style={{ left: '15%', top: '10%' }}
            className=""
          />
          
          <FloatingPhoto
            src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
            size="tablet-tiktok"
            style={{ left: '8%', top: '35%', transform: 'rotate(15deg)' }}
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
            style={{ left: '78%', top: '40%', transform: 'rotate(-15deg)' }}
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

        {/* Mobile Layout - Better balanced spacing and fixed iPhone 14 Plus positioning */}
        <div className="block md:hidden w-full max-w-sm mx-auto">
          <div className="relative h-44 mb-6">
            <div 
              className="absolute text-[30px] z-20"
              style={{ left: '30px', top: '10px' }}
            >
              🥰
            </div>
            
            <FloatingPhoto
              src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
              size="mobile-tiktok"
              style={{ left: '60px', top: '35px', transform: 'rotate(15deg)' }}
              className=""
              isRectangular={true}
            />

            <FloatingPhoto
              src="/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png"
              size="mobile-tiktok"
              style={{ left: '180px', top: '5px', transform: 'rotate(-15deg)' }}
              className=""
              isRectangular={true}
            />
            
            <FloatingPhoto
              src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
              size="mobile-round"
              style={{ left: '200px', top: '120px' }}
              className=""
            />
          </div>

          <div className="text-center relative z-10 mb-8">
            <h1 className="text-4xl font-bold text-black leading-tight mb-4">
              <div className="mb-1">Live It</div>
              <div className="mb-1">Your Way</div>
              <div className="text-3xl">
                <DynamicHashtag isWhiteTheme={true} />
              </div>
            </h1>

            {/* App Store Buttons - Mobile (slightly larger gap) */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="w-[60px] h-[45px] bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7">
                  <path d="M 15.967 9.072 C 15.967 9.072 15.608 7.492 17.011 5.644 C 18.587 3.567 20.778 3.555 20.778 3.555 C 20.778 3.555 21.105 5.51 19.536 7.389 C 17.866 9.403 15.967 9.072 15.967 9.072 Z M 22.543 16.271 C 22.543 13.052 25.136 11.728 25.136 11.728 C 25.136 11.728 23.808 9.328 20.439 9.328 C 18.48 9.328 16.975 10.443 16.164 10.443 C 15.218 10.443 13.811 9.395 11.991 9.395 C 9.201 9.395 6.222 11.897 6.222 16.665 C 6.222 21.511 9.741 27.544 12.527 27.544 C 13.5 27.544 14.993 26.563 16.499 26.563 C 17.976 26.563 19.064 27.508 20.466 27.508 C 23.516 27.508 25.778 21.149 25.778 21.149 C 25.778 21.149 22.543 19.9 22.543 16.271 Z" fill="white"/>
                </svg>
              </button>
              <button className="w-[60px] h-[45px] bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7">
                  <path d="M 9.723 12.93 L 7.437 8.83 C 7.308 8.599 7.388 8.307 7.605 8.173 C 7.823 8.039 8.11 8.116 8.234 8.347 L 10.55 12.502 C 12.318 11.665 14.306 11.2 16.446 11.2 C 18.586 11.2 20.574 11.665 22.341 12.502 L 24.658 8.347 C 24.787 8.116 25.069 8.039 25.292 8.173 C 25.515 8.307 25.59 8.599 25.46 8.83 L 23.174 12.93 C 27.112 15.14 29.781 19.271 30.222 24.107 L 2.667 24.107 C 3.108 19.271 5.777 15.14 9.723 12.93 Z M 22.771 20.102 C 23.411 20.102 23.927 19.565 23.927 18.906 C 23.927 18.243 23.408 17.709 22.771 17.709 C 22.132 17.709 21.616 18.246 21.616 18.906 C 21.613 19.562 22.132 20.102 22.771 20.102 Z M 10.12 20.102 C 10.76 20.102 11.276 19.565 11.276 18.906 C 11.276 18.243 10.757 17.709 10.12 17.709 C 9.481 17.709 8.965 18.246 8.965 18.906 C 8.962 19.562 9.483 20.102 10.12 20.102 Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom section with remaining photos - Better centered positioning */}
          <div className="relative h-32 mb-2 flex justify-center">
            <div className="relative w-full max-w-[300px]">
              <FloatingPhoto
                src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
                size="mobile-large-round"
                style={{ left: '20px', top: '5px' }}
                className=""
              />
              
              <div 
                className="absolute text-[30px] z-20"
                style={{ left: '140px', top: '10px' }}
              >
                😮‍💨
              </div>
              
              <FloatingPhoto
                src="/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png"
                size="mobile-round"
                style={{ left: '200px', top: '5px' }}
                className=""
              />
              
              <FloatingPhoto
                src="/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png"
                size="mobile-round"
                style={{ left: '160px', top: '65px' }}
                className=""
              />
            </div>
          </div>
        </div>

        {/* Main Content - Desktop and Tablet - Reduced text size for MacBook Air */}
        <div className="text-center relative z-10 hidden md:block mt-8 sm:mt-8 md:mt-0">
          <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-[96px] font-bold text-black leading-tight mb-4 sm:mb-6">
            <div className="mb-1">Live It</div>
            <div className="mb-1">Your Way</div>
            <div className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px]">
              <DynamicHashtag isWhiteTheme={true} />
            </div>
          </h1>

          {/* App Store Buttons - Desktop/Tablet (slightly larger gap) */}
          <div className="flex justify-center gap-4 mt-6 sm:mt-8">
            <button className="w-[60px] h-[45px] md:w-[88px] md:h-[65px] bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 md:w-10 md:h-10">
                <path d="M 15.967 9.072 C 15.967 9.072 15.608 7.492 17.011 5.644 C 18.587 3.567 20.778 3.555 20.778 3.555 C 20.778 3.555 21.105 5.51 19.536 7.389 C 17.866 9.403 15.967 9.072 15.967 9.072 Z M 22.543 16.271 C 22.543 13.052 25.136 11.728 25.136 11.728 C 25.136 11.728 23.808 9.328 20.439 9.328 C 18.48 9.328 16.975 10.443 16.164 10.443 C 15.218 10.443 13.811 9.395 11.991 9.395 C 9.201 9.395 6.222 11.897 6.222 16.665 C 6.222 21.511 9.741 27.544 12.527 27.544 C 13.5 27.544 14.993 26.563 16.499 26.563 C 17.976 26.563 19.064 27.508 20.466 27.508 C 23.516 27.508 25.778 21.149 25.778 21.149 C 25.778 21.149 22.543 19.9 22.543 16.271 Z" fill="white"/>
              </svg>
            </button>
            <button className="w-[60px] h-[45px] md:w-[88px] md:h-[65px] bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 md:w-10 md:h-10">
                <path d="M 9.723 12.93 L 7.437 8.83 C 7.308 8.599 7.388 8.307 7.605 8.173 C 7.823 8.039 8.11 8.116 8.234 8.347 L 10.55 12.502 C 12.318 11.665 14.306 11.2 16.446 11.2 C 18.586 11.2 20.574 11.665 22.341 12.502 L 24.658 8.347 C 24.787 8.116 25.069 8.039 25.292 8.173 C 25.515 8.307 25.59 8.599 25.46 8.83 L 23.174 12.93 C 27.112 15.14 29.781 19.271 30.222 24.107 L 2.667 24.107 C 3.108 19.271 5.777 15.14 9.723 12.93 Z M 22.771 20.102 C 23.411 20.102 23.927 19.565 23.927 18.906 C 23.927 18.243 23.408 17.709 22.771 17.709 C 22.132 17.709 21.616 18.246 21.616 18.906 C 21.613 19.562 22.132 20.102 22.771 20.102 Z M 10.12 20.102 C 10.76 20.102 11.276 19.565 11.276 18.906 C 11.276 18.243 10.757 17.709 10.12 17.709 C 9.481 17.709 8.965 18.246 8.965 18.906 C 8.962 19.562 9.483 20.102 10.12 20.102 Z" fill="white"/>
              </svg>
            </button>
            </div>
        </div>
      </div>

      {/* Mentions Section - Reduced spacing on mobile */}
      <section className="text-center py-2 md:py-8 relative z-10 mt-0 sm:mt-4 md:mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">
          As Soon On
        </h2>
        <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-12 flex-wrap px-6 md:px-12">
          {[
            { img: '/lovable-uploads/c0cd4508-0f48-4ece-86ba-c5e2d5c361ab.png', alt: 'Forbes' },
            { img: '/lovable-uploads/dd483b2f-3008-46a0-9d42-5e99462c5167.png', alt: 'Fox News' },
            { img: '/lovable-uploads/3d71d499-f6f5-48cd-9695-6046673adeed.png', alt: 'NPR' },
            { img: '/lovable-uploads/96739e19-11c7-4ca8-b8c5-6b86e6eeb10c.png', alt: 'The Telegraph' },
            { img: '/lovable-uploads/cdf18690-f2a5-4b51-8828-5b0e7165f261.png', alt: 'Mashable' },
            { img: '/lovable-uploads/30d21f25-d0c7-4849-ab2e-1b5905512506.png', alt: 'NBC News' },
            { img: '/lovable-uploads/777cea27-78c5-42a0-930e-c563e4fcfbb4.png', alt: 'New York Post' },
            { img: '/lovable-uploads/b8e5cc35-6185-4a41-b830-369e5f25c2c0.png', alt: 'The Washington Post' },
            { img: '/lovable-uploads/147745ae-af17-480b-aefa-8e105ce4fa2a.png', alt: 'The Drum' }
          ].map((logo, index) => (
            <div key={index} className="flex items-center">
              <img 
                src={logo.img} 
                alt={logo.alt}
                className="h-6 md:h-8 w-auto object-contain opacity-90 contrast-125 brightness-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* New Footer Design */}
      <footer className="text-center p-6 md:p-8 relative z-10 space-y-3">
        {/* First Line - Where You Matter ❤︎ */}
        <div className="text-lg md:text-xl font-medium text-black">
          Where You Matter ❤︎
        </div>
        
        {/* Second Line - Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-base font-medium">
          <Link to="/safety" className="hover:opacity-70 text-black underline underline-offset-4 decoration-1">Safety</Link>
          <span className="text-gray-400">|</span>
          <Link to="/help" className="hover:opacity-70 text-black underline underline-offset-4 decoration-1">Help</Link>
          <span className="text-gray-400">|</span>
          <Link to="/join-us" className="hover:opacity-70 flex items-center text-black">
            <span className="underline underline-offset-4 decoration-1">Join Us</span>
            <span className="ml-1 text-sm">👋</span>
          </Link>
          <span className="text-gray-400">|</span>
          <Link to="/guidelines" className="hover:opacity-70 text-black underline underline-offset-4 decoration-1">Guidelines</Link>
        </div>
        
        {/* Third Line - Copyright */}
        <div className="text-base font-medium text-black">
          2025 - till forever Rustless/Unlimited
        </div>
      </footer>
    </div>
  );
};

export default Index;
