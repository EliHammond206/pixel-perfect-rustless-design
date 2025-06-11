
import React from 'react';

const Index = () => {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Hashtag Bar */}
      <div className="w-full text-center py-3 border-b border-gray-800">
        <div className="flex justify-center items-center space-x-8 text-sm font-medium">
          <span className="text-white">#Everyday</span>
          <span className="text-white">#Everyone</span>
          <span className="text-white">#Everytime</span>
        </div>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center p-6 relative z-20">
        <h1 className="text-2xl font-bold">Rustless</h1>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white text-sm flex items-center">
            Ads
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-2">New</span>
          </a>
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium">
            Get The App
          </button>
        </div>
      </header>

      {/* Main Hero Section with Glass Bubble */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 relative">
        {/* Glass Bubble Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div 
            className="relative w-full h-[500px] rounded-[3rem] border border-gray-600/30 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.3)'
            }}
          >
            {/* Floating Elements */}
            {/* Waving Hand - Top Left */}
            <div className="absolute top-16 left-16 text-6xl animate-bounce">
              👋
            </div>

            {/* Photo 1 - Left Side */}
            <div className="absolute top-32 left-8 w-32 h-40 rounded-2xl overflow-hidden transform -rotate-12 shadow-2xl">
              <img 
                src="https://raw.githubusercontent.com/EliHammond206/rustless/main/pictures/bce4a4b6cd43e7a78a98d8795508fc27.jpg"
                alt="Photo 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Brain/Cloud - Top Right */}
            <div className="absolute top-20 right-20 text-5xl">
              🧠
            </div>

            {/* Photo 2 - Right Side */}
            <div className="absolute top-40 right-8 w-32 h-40 rounded-2xl overflow-hidden transform rotate-12 shadow-2xl">
              <img 
                src="https://raw.githubusercontent.com/EliHammond206/rustless/main/pictures/bce4a4b6cd43e7a78a98d8795508fc27.jpg"
                alt="Photo 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Coffee Cup - Bottom Left */}
            <div className="absolute bottom-16 left-20 text-5xl">
              ☕
            </div>

            {/* Central Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h2 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                <span className="block">Live It</span>
                <span className="block">Your Way</span>
                <span className="block text-5xl lg:text-6xl">#Now</span>
              </h2>

              {/* App Store Buttons */}
              <div className="flex space-x-4 mt-8">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* As Soon On Section */}
      <section className="text-center py-12 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12">
          As Soon On
        </h2>
        
        {/* First Row of Logos */}
        <div className="flex justify-center items-center gap-8 mb-8 flex-wrap px-6">
          <div className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded">
            The Drum
          </div>
          <span className="text-white text-xl font-bold">Mashable</span>
          <span className="text-white text-xl font-bold">Forbes</span>
          <div className="bg-blue-600 text-white px-2 py-1 text-sm font-bold">
            FOX NEWS
          </div>
          <div className="bg-orange-500 text-white px-2 py-1 text-sm font-bold">
            NPR
          </div>
          <div className="text-white text-xl font-bold">NBC NEWS</div>
        </div>

        {/* Second Row of Logos */}
        <div className="flex justify-center items-center gap-8 flex-wrap px-6">
          <span className="text-white text-lg" style={{ fontFamily: 'serif' }}>The Telegraph</span>
          <span className="text-white text-lg" style={{ fontFamily: 'serif' }}>The Washington Post</span>
          <span className="text-white text-xl font-bold tracking-wider">NEW YORK POST</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-wrap justify-between items-center p-6 text-sm relative z-10 border-t border-gray-800">
        <div className="flex flex-wrap items-center space-x-6">
          <span>© 2026 Rustless</span>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Get Help</a>
          <a href="#" className="hover:underline">Join Rustless Family</a>
          <a href="#" className="hover:underline">Community Guidelines</a>
        </div>
        <div className="text-right">
          <span>Made for those who already know</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
