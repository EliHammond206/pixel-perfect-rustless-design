
import React from 'react';

const Index = () => {
  return (
    <div className="bg-black text-white flex flex-col min-h-screen relative overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 relative z-20">
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

      {/* Hashtag Announcement Bar */}
      <div className="text-center py-2 md:py-4 relative z-20">
        <div className="text-sm md:text-base text-white/80 space-x-2 md:space-x-4">
          <span className="text-pink-400">#Everyday</span>
          <span className="text-orange-400">#Everyone</span>
          <span className="text-purple-400">#Everywhere</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 md:px-6 relative">
        {/* Glass Bubble Hero Section */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Glass Bubble Container */}
          <div className="relative mx-auto w-[300px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[500px] lg:h-[700px]">
            {/* Main Glass Bubble */}
            <div className="absolute inset-0 rounded-[3rem] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 rounded-[3rem]"></div>
              
              {/* Content inside bubble */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-6">
                {/* Main Text */}
                <div className="text-center z-10">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                    <span className="block">real</span>
                    <span className="block">friends</span>
                    <span className="block">real fun</span>
                  </h2>
                </div>

                {/* Photo Collage */}
                <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                  {/* Hand */}
                  <img 
                    src="/lovable-uploads/4f6b97e1-4b7c-4ef6-9dfd-5c89fb7ff8c5.png" 
                    alt="Hand gesture"
                    className="absolute top-8 left-4 w-16 h-16 md:w-20 md:h-20 object-contain opacity-80"
                  />
                  
                  {/* Donut */}
                  <img 
                    src="/lovable-uploads/a6ca5277-0a08-4bde-8c9b-ddb87ecc9d55.png" 
                    alt="Donut"
                    className="absolute top-16 right-6 w-12 h-12 md:w-16 md:h-16 object-contain opacity-80"
                  />
                  
                  {/* Drink */}
                  <img 
                    src="/lovable-uploads/0913613f-a962-40ba-875b-aaf92e155c29.png" 
                    alt="Drink"
                    className="absolute bottom-20 left-6 w-14 h-20 md:w-18 md:h-24 object-contain opacity-80"
                  />
                  
                  {/* Paw Keychain */}
                  <img 
                    src="/lovable-uploads/aa5bbe95-9e83-43fd-9f9a-ee6a169689d0.png" 
                    alt="Paw keychain"
                    className="absolute bottom-32 right-4 w-16 h-16 md:w-20 md:h-20 object-contain opacity-80"
                  />
                  
                  {/* Real photo frames */}
                  <div className="absolute top-24 right-8 w-20 h-24 md:w-24 md:h-28 rounded-2xl overflow-hidden border-2 border-white/30 backdrop-blur-sm">
                    <img 
                      src="/lovable-uploads/2bf3c7d6-0704-4acc-879c-3d65c35d6abe.png" 
                      alt="Person with stuffed animal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute bottom-40 left-8 w-20 h-24 md:w-24 md:h-28 rounded-2xl overflow-hidden border-2 border-white/30 backdrop-blur-sm">
                    <img 
                      src="/lovable-uploads/47011ffe-49c0-4ddf-b374-884b01c8b2ef.png" 
                      alt="Person with monkey"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute top-1/2 left-2 w-18 h-22 md:w-22 md:h-26 rounded-2xl overflow-hidden border-2 border-white/30 backdrop-blur-sm">
                    <img 
                      src="/lovable-uploads/a8d26a43-4d70-4d20-a50b-08e036f3a81b.png" 
                      alt="Person with toy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Download buttons */}
                <div className="flex space-x-4 z-10 mt-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                    <span className="text-white text-sm font-medium">🍎 iOS</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
                    <span className="text-white text-sm font-medium">🤖 Android</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* As Soon On Section */}
      <section className="text-center py-8 md:py-12 relative z-10">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-8 md:mb-12">
          As Soon On
        </h2>
        <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-12 flex-wrap px-6 md:px-12">
          {[
            '1.png', '11.png', '12.png', '2.png', '4.png', 
            '6.png', '7.png', '8.png', '9.png'
          ].map((logo, index) => (
            <div key={index} className="flex items-center opacity-60 hover:opacity-100 transition-opacity">
              <img 
                src={`https://raw.githubusercontent.com/EliHammond206/rustless/main/pictures/${logo}`} 
                alt={`Publication ${index + 1}`}
                className="h-6 md:h-8 w-auto object-contain filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 p-4 md:p-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          {/* Left Side */}
          <div className="text-left">
            <div className="text-sm text-white/80">© 2026 Rustless</div>
          </div>
          
          {/* Center Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Get Help</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Join Rustless Family</a>
            <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">Community Guidelines</a>
          </div>
          
          {/* Right Side */}
          <div className="text-right">
            <div className="text-sm text-white/80">Crafted for those who already know</div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden text-center space-y-4">
          <div className="text-xs text-white/80">© 2026 Rustless</div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#" className="text-xs text-white/80 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-xs text-white/80 hover:text-white transition-colors">Help</a>
            <a href="#" className="text-xs text-white/80 hover:text-white transition-colors">Family</a>
            <a href="#" className="text-xs text-white/80 hover:text-white transition-colors">Guidelines</a>
          </div>
          <div className="text-xs text-white/80">Crafted for those who already know</div>
        </div>
      </footer>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        
        {/* Floating glass bubbles for ambiance */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Index;
