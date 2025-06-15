import React from 'react';
import { Link } from 'react-router-dom';
import DynamicHashtag from '../components/DynamicHashtag';
import FloatingPhoto from '../components/FloatingPhoto';

const JoinUs = () => {
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

        {/* Mobile Layout */}
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
              <div className="mb-1">Get Known</div>
              <div className="mb-1">Your Way</div>
              <div className="text-3xl">
                <DynamicHashtag isWhiteTheme={true} />
              </div>
            </h1>

            {/* Business Button - Mobile */}
            <div className="flex justify-center mt-6">
              <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">
                Start Now ↗
              </button>
            </div>
          </div>

          {/* Bottom section with remaining photos */}
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

        {/* Main Content - Desktop and Tablet */}
        <div className="text-center relative z-10 hidden md:block mt-8 sm:mt-8 md:mt-0">
          <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-[96px] font-bold text-black leading-tight mb-4 sm:mb-6">
            <div className="mb-1">Get Known</div>
            <div className="mb-1">Your Way</div>
            <div className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px]">
              <DynamicHashtag isWhiteTheme={true} />
            </div>
          </h1>

          {/* Business Button - Desktop/Tablet */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-80 transition-opacity">
              Start Now ↗
            </button>
          </div>
        </div>
      </div>

      {/* We Speak Your Language Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-12 md:mb-16">
            We Speak<br />Your Language
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Perk 1 - E2EE Messages */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl mb-4">🔐</div>
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">E2EE</div>
              <p className="text-gray-700 text-sm md:text-base">
                End-to-end encrypted messages ensuring your private conversations stay private.
              </p>
            </div>

            {/* Perk 2 - Passport Verification */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl mb-4">🛂</div>
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">Verified</div>
              <p className="text-gray-700 text-sm md:text-base">
                Passport verification system for authentic user profiles and enhanced trust.
              </p>
            </div>

            {/* Perk 3 - 18+ Content */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl mb-4">🔞</div>
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">18+</div>
              <p className="text-gray-700 text-sm md:text-base">
                Age-verified adult content areas with proper restrictions and controls.
              </p>
            </div>

            {/* Perk 4 - Coastal Media Features */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl mb-4">🌊</div>
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">Coastal</div>
              <p className="text-gray-700 text-sm md:text-base">
                Advanced media sharing with location-based discovery and social features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white relative overflow-hidden">
        {/* Background floating photos for this section - Desktop */}
        <div className="hidden lg:block">
          <FloatingPhoto
            src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
            size="desktop-round"
            style={{ left: '10%', top: '20%' }}
            className=""
          />
          
          <FloatingPhoto
            src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
            size="desktop-round"
            style={{ right: '10%', top: '30%' }}
            className=""
          />
        </div>

        {/* Background floating photos - Tablet */}
        <div className="hidden md:block lg:hidden">
          <FloatingPhoto
            src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
            size="tablet-round"
            style={{ left: '10%', top: '20%' }}
            className=""
          />
          
          <FloatingPhoto
            src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
            size="tablet-round"
            style={{ right: '10%', top: '30%' }}
            className=""
          />
        </div>

        {/* Background floating photos - Mobile */}
        <div className="block md:hidden">
          <FloatingPhoto
            src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
            size="mobile-round"
            style={{ left: '10%', top: '10%' }}
            className=""
          />
          
          <FloatingPhoto
            src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
            size="mobile-round"
            style={{ right: '10%', top: '15%' }}
            className=""
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-4 md:mb-6">
            <div className="mb-2">We have implemented</div>
            <div className="mb-2">unprecedented maximum</div>
            <div className="mb-2">security measures that was</div>
            <div className="mb-4">never seen before.</div>
            <div className="text-2xl md:text-5xl lg:text-6xl text-black">
              #Unprecedented
            </div>
          </h2>
        </div>
      </section>

      {/* Updated Security Features Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Feature 1 - E2EE Messages */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl mb-4">🔐</div>
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">E2EE</div>
              <p className="text-gray-700 text-sm md:text-base">
                Military-grade end-to-end encryption for all communications and media sharing.
              </p>
            </div>

            {/* Feature 2 - Passport Verification */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl mb-4">🛂</div>
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">ID Verified</div>
              <p className="text-gray-700 text-sm md:text-base">
                Government-grade passport and ID verification for maximum user authenticity.
              </p>
            </div>

            {/* Feature 3 - 18+ Content Control */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl mb-4">🔞</div>
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">Age Control</div>
              <p className="text-gray-700 text-sm md:text-base">
                Strict 18+ verification with biometric age confirmation technology.
              </p>
            </div>

            {/* Feature 4 - Advanced Security */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-4xl md:text-5xl mb-4">🛡️</div>
              <div className="text-2xl md:text-3xl font-bold text-black mb-2">Secured</div>
              <p className="text-gray-700 text-sm md:text-base">
                Multi-layer security protocols with real-time threat detection and prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Compliance Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Government-Demanded Moderation Measures
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Our platform implements all moderation measures required by governments worldwide to ensure compliance and user safety.
            </p>
          </div>
          
          {/* Scrollable Gallery would go here - keeping existing gallery code */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {/* Gallery images will be added here */}
          </div>
        </div>
      </section>

      {/* You Can Do It Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px] font-bold text-black">
            #You Can Do It!
          </h2>
        </div>
      </section>

      {/* Mentions Section */}
      <section className="text-center py-8 md:py-12 relative z-10 bg-white">
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

      {/* Footer */}
      <footer className="text-center p-6 md:p-8 space-y-3 bg-white border-t border-gray-100">
        <div className="text-lg md:text-xl font-medium text-black">
          Where You Matter ❤︎
        </div>
        
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
        
        <div className="text-base font-medium text-black">
          2025 - till forever Rustless/Unlimited
        </div>
      </footer>
    </div>
  );
};

export default JoinUs;
