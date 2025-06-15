import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicHashtag from '../components/DynamicHashtag';
import FloatingPhoto from '../components/FloatingPhoto';
import ImageModal from '../components/ImageModal';
import RegistrationStepsCarousel from '../components/RegistrationStepsCarousel';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import StartRegisteringSection from '../components/StartRegisteringSection';
import SocialNetworkDataGallery from "../components/SocialNetworkDataGallery";

// Hero section from Join Us copied for Download page
const HeroSection = () => (
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
          <div className="mb-1">Get Started</div>
          <div className="mb-1">With Rustless</div>
          {/* Increase hashtag size on mobile */}
          <div className="text-4xl font-black mt-1">
            <DynamicHashtag isWhiteTheme={true} />
          </div>
        </h1>

        {/* Download Button - Mobile */}
        <div className="flex justify-center mt-6">
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">
            Download the App
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
        <div className="mb-1">Get Started</div>
        <div className="mb-1">With Rustless</div>
        <div className="text-5xl md:text-7xl font-black mt-2">
          <DynamicHashtag isWhiteTheme={true} />
        </div>
      </h1>

      {/* Download Button - Main difference */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-80 transition-opacity">
          Download the App
        </button>
      </div>
    </div>
  </div>
);

// All other sections copied from Join Us

const BalanceFreeSpeechSection = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    currentIndex: number;
    images: Array<{ src: string; alt: string }>;
  }>({
    isOpen: false,
    currentIndex: 0,
    images: []
  });

  const galleryImages = [
    { src: "/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png", alt: "Community member" },
    { src: "/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png", alt: "Community safety" },
    { src: "/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png", alt: "Community moderation" },
    { src: "/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png", alt: "Community growth" },
    { src: "/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png", alt: "Community expression" },
    { src: "/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png", alt: "Community engagement" },
    { src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=400&fit=crop", alt: "Community nature" },
    { src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop", alt: "Community pets" },
    { src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop", alt: "Community wildlife" },
    { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=400&fit=crop", alt: "Community landscape" },
    { src: "https://images.unsplash.com/photo-1469474038136-46273834b3fb?w=400&h=400&fit=crop", alt: "Community inspiration" },
    { src: "https://images.unsplash.com/photo-1506744038136-46273f02e42e?w=400&h=400&fit=crop", alt: "Community peace" }
  ];

  const handleImageClick = (src: string, alt: string) => {
    const imageIndex = galleryImages.findIndex(img => img.src === src);
    setModalState({
      isOpen: true,
      currentIndex: imageIndex,
      images: galleryImages
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleNavigate = (index: number) => {
    setModalState(prev => ({ ...prev, currentIndex: index }));
  };

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title updated to two lines */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6 md:mb-8">
          <div>First of All,</div>
          <div>Download the app</div>
        </h2>
        
        {/* Explanatory Text - Updated to a single short paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-semibold">
            You won't be able to use your account, register, browse etc from our browser, for security reasons and to prevent stealings of accounts and botted views etc, you can join us only from downloaded app from the official store!
          </p>
        </div>
        
        {/* Updated Title Before Gallery - Changed from #Rustless to security message */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            <div>We've implemented</div>
            <div>all security measures and</div>
            <div>audited our codes by all</div>
            <div>possible platforms for you to</div>
            <div className="text-primary font-black">#Stay Safe</div>
          </h3>
        </div>
        
        {/* Scrollable Image Gallery */}
        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="aspect-square">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => handleImageClick(image.src, image.alt)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <ImageModal
          images={modalState.images}
          currentIndex={modalState.currentIndex}
          isOpen={modalState.isOpen}
          onClose={closeModal}
          onNavigate={handleNavigate}
        />
      </div>
    </section>
  );
};

const ContentReportingSection = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    currentIndex: number;
    images: Array<{ src: string; alt: string }>;
  }>({
    isOpen: false,
    currentIndex: 0,
    images: []
  });

  const galleryImages = [
    { src: "/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png", alt: "Reportable content example" },
    { src: "/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png", alt: "Harassment example" },
    { src: "/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png", alt: "Spam content example" },
    { src: "/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png", alt: "Misinformation example" },
    { src: "/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png", alt: "Inappropriate content example" },
    { src: "/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png", alt: "Hate speech example" },
    { src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=400&fit=crop", alt: "Violation example" },
    { src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop", alt: "Community violation" }
  ];

  const handleImageClick = (src: string, alt: string) => {
    const imageIndex = galleryImages.findIndex(img => img.src === src);
    setModalState({
      isOpen: true,
      currentIndex: imageIndex,
      images: galleryImages
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleNavigate = (index: number) => {
    setModalState(prev => ({ ...prev, currentIndex: index }));
  };

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6 md:mb-8">
          #Designers #Devs and just #Good People
        </h2>
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-semibold">
            Want to join Rustless? Applying is easy! From your account, just navigate to <span className="font-bold">Settings</span>, scroll to the <span className="font-bold">Careers & Opportunities</span> section, and tap <span className="font-bold">Apply to Join</span>. Fill out your details, tell us what makes you awesome, and submit your application directly from there. If you stand out or have that special spark, we’ll reach out!
          </p>

          <section className="py-8 md:py-12 px-4 md:px-8 bg-white relative overflow-hidden">
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
              <h2 className="font-bold text-black leading-tight mb-6 md:mb-8">
                <div className="mb-1 text-4xl md:text-7xl lg:text-8xl">No Resume, No Cv</div>
                <div className="mb-1 text-4xl md:text-7xl lg:text-8xl">No Lettcode</div>
                <div className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px] mt-2 text-primary font-black tracking-tight inline-block">#Forever</div>
              </h2>
            </div>
          </section>

          <div className="flex justify-center my-6">
            <img
              src="/lovable-uploads/d9a9df94-5f46-4adc-a01d-0bc88ae0ae68.png"
              alt="How to apply on Rustless app – iPhone screenshot"
              className="w-52 sm:w-64 md:w-72 rounded-2xl shadow-xl border border-gray-200"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>

          <section className="py-8 md:py-12 px-4 md:px-8 bg-white relative overflow-hidden">
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
              <h2 className="font-bold text-black leading-tight mb-6 md:mb-8">
                <div className="mb-1 text-4xl md:text-7xl lg:text-8xl">We score high</div>
                <div className="mb-1 text-4xl md:text-7xl lg:text-8xl">and will score</div>
                <div className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px] mt-2 text-primary font-black tracking-tight inline-block">#Higher</div>
              </h2>
            </div>
          </section>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold">
            You don’t need referrals or fancy resumes—show us your passion, creativity, and drive. We’re always looking for Rustless souls: designers, devs, creators, and genuinely good people. If you’re the one, our team will spot your application (and yes, we read every single one). Show us why you belong!
          </p>
        </div>
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black">
            If you are #Rustless - We will find you!
          </h3>
        </div>
        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="aspect-square">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => handleImageClick(image.src, image.alt)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <ImageModal
          images={modalState.images}
          currentIndex={modalState.currentIndex}
          isOpen={modalState.isOpen}
          onClose={closeModal}
          onNavigate={handleNavigate}
        />
      </div>
    </section>
  );
};

const SecondSafetyMeasuresSection = () => (
  <section className="py-8 md:py-12 px-4 md:px-8 bg-white relative overflow-hidden">
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
      <h2 className="font-bold text-black leading-tight mb-6 md:mb-8">
        <div className="mb-1 text-4xl md:text-7xl lg:text-8xl">
          Next part
        </div>
        <div className="mb-1 text-4xl md:text-7xl lg:text-8xl">
          Grab the coffee
        </div>
        <div className="mb-1 text-4xl md:text-7xl lg:text-8xl">
          and prepare
        </div>
        <div className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px] mt-2 text-primary font-black tracking-tight inline-block">
          #Start Registering
        </div>
      </h2>
      
      {/* Added explanatory text paragraph */}
      <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8 relative z-10">
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold">
          Ready to join? Download the app, create your account, and become part of the Rustless community where your voice truly matters!
        </p>
      </div>
    </div>
  </section>
);

const GetTheApp = () => {
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
      <HeroSection />
      <BalanceFreeSpeechSection />
      <SecondSafetyMeasuresSection />
      <RegistrationStepsCarousel />
      {/* Inserted start registering section below RegistrationStepsCarousel */}
      <StartRegisteringSection />
      {/* REMOVE old SecondSecurityFeaturesSection, REPLACE with SocialNetworkDataGallery */}
      <SocialNetworkDataGallery />
      <ContentReportingSection />
      <YouCanDoItSection />
      <MentionsSection />
      <Footer />
    </div>
  );
};

export default GetTheApp;
