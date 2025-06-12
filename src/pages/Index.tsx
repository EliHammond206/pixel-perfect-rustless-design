
import React from 'react';
import { Apple } from 'lucide-react';
import DynamicHashtag from '../components/DynamicHashtag';
import FloatingPhoto from '../components/FloatingPhoto';

const Index = () => {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen relative overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 relative z-20">
        <h1 className="text-xl md:text-2xl font-bold text-foreground">Rustless</h1>
        <div className="flex items-center space-x-2 md:space-x-4">
          <a href="#" className="text-foreground text-xs md:text-sm align-middle">
            <span className="hidden md:inline">Advertise with Rustless</span>
            <span className="md:hidden">Ads</span>
            <span className="bg-red-500 text-white text-xs px-1 py-0.5 rounded ml-1">New</span>
          </a>
          <button className="bg-foreground text-background px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
            Get The App
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center relative px-4 py-12">
        {/* Floating Photos - Desktop Layout */}
        <div className="hidden md:block">
          {/* Top Left Area */}
          <FloatingPhoto
            src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
            size="medium"
            className="top-32 left-32"
          />
          
          {/* Top Right Area */}
          <FloatingPhoto
            src="/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png"
            emoji="😮‍💨"
            size="medium"
            className="top-24 right-32"
            emojiPosition="bottom-right"
          />
          
          {/* Left Side */}
          <FloatingPhoto
            src="/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png"
            emoji="🥰"
            size="large"
            className="top-1/2 left-16 -translate-y-1/2"
            emojiPosition="bottom-left"
          />
          
          {/* Right Side */}
          <FloatingPhoto
            src="/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png"
            size="large"
            className="top-1/2 right-16 -translate-y-1/2"
          />
          
          {/* Bottom Left */}
          <FloatingPhoto
            src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
            size="medium"
            className="bottom-32 left-40"
          />
          
          {/* Bottom Right */}
          <FloatingPhoto
            src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
            size="medium"
            className="bottom-24 right-40"
          />
        </div>

        {/* Floating Photos - Mobile Layout */}
        <div className="block md:hidden">
          {/* Top Photos */}
          <FloatingPhoto
            src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
            emoji="🥰"
            size="small"
            className="top-8 left-4"
            emojiPosition="top-right"
          />
          
          <FloatingPhoto
            src="/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png"
            size="small"
            className="top-16 right-8"
          />
          
          {/* Bottom Photos */}
          <FloatingPhoto
            src="/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png"
            emoji="😮‍💨"
            size="small"
            className="bottom-20 left-8"
            emojiPosition="bottom-left"
          />
          
          <FloatingPhoto
            src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
            size="small"
            className="bottom-32 right-4"
          />
        </div>

        {/* Main Content - Centered */}
        <div className="text-center relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground leading-none mb-8">
            <div className="mb-2">Live It</div>
            <div className="mb-2">Your Way</div>
            <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
              <DynamicHashtag />
            </div>
          </h1>

          {/* App Store Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button className="w-[88px] h-[65px] bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <Apple className="w-6 h-6" />
            </button>
            <button className="w-[88px] h-[65px] bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5665-.0159-1.4148-.2458-2.384-.8034-.9693-.5576-1.8745-1.263-2.7158-2.1155C11.5831 11.6217 10.7338 10.6234 10.1428 9.4844 9.5518 8.3454 9.1953 7.1775 9.0732 6.0977c-.1221-1.0798.0244-2.0781.4395-3.0059.4151-.9278 1.1084-1.7852 2.0801-2.5713 1.0952-.8862 2.5171-1.328 4.2656-1.3262h.4658c1.7485-.0018 3.1704.4399 4.2656 1.3261.9717.7862 1.665 1.6436 2.0801 2.5714.4151.9278.5616 1.9261.4395 3.0059-.1221 1.0798-.4786 2.2477-1.0696 3.3867-.5911 1.1389-1.4405 2.1372-2.5405 2.936-.9413.6824-1.8465 1.388-2.7158 2.1155-.9692.5576-1.8175.7875-2.384.8034z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mentions Section */}
      <section className="text-center py-8 md:py-12 relative z-10">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 md:mb-12">
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
        <a href="#" className="hover:underline text-foreground">Terms of Service</a>
        <a href="#" className="hover:underline text-foreground">Get Help</a>
        <a href="#" className="hover:underline text-foreground">Join Rustless Family</a>
        <a href="#" className="hover:underline text-foreground">Community Guidelines</a>
      </footer>
    </div>
  );
};

export default Index;
