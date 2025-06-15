import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicHashtag from '../components/DynamicHashtag';
import FloatingPhoto from '../components/FloatingPhoto';
import ImageModal from '../components/ImageModal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';

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
          <div className="mb-1">Community</div>
          <div className="mb-1">Guidelines</div>
          <div className="text-3xl">
            <DynamicHashtag isWhiteTheme={true} />
          </div>
        </h1>

        {/* Business Button - Mobile */}
        <div className="flex justify-center mt-6">
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-80 transition-opacity">
            Decentralised Ecosystem ↗
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
        <div className="mb-1">Community</div>
        <div className="mb-1">Guidelines</div>
        <div className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px]">
          <DynamicHashtag isWhiteTheme={true} />
        </div>
      </h1>

      {/* Business Button - Desktop/Tablet */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-80 transition-opacity">
          Decentralised Ecosystem ↗
        </button>
      </div>
    </div>
  </div>
);

const BalanceFreeSpeechSection = () => {
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6 md:mb-8">
          Balance Free Speech<br />With Moderation
        </h2>
        
        {/* Explanatory Text - Same consistent gap */}
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-semibold">
            At Rustless, we believe in creating a space where authentic expression thrives while maintaining a safe and respectful environment for everyone. Our community guidelines are designed to protect free speech while preventing harmful content that could damage our vibrant ecosystem.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold">
            We use a combination of AI-powered moderation tools and human review to ensure content meets our standards. Our approach focuses on transparency, fairness, and giving creators the freedom to express themselves within reasonable boundaries that protect our community.
          </p>
        </div>
        
        {/* New Title Before Gallery - Same consistent gap */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black">
            A Hello From Your Government
          </h3>
        </div>
        
        {/* Scrollable Image Gallery */}
        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
                    alt="Community member"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png", "Community member")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
                    alt="Community safety"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png", "Community safety")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png"
                    alt="Community moderation"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png", "Community moderation")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png"
                    alt="Community growth"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png", "Community growth")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
                    alt="Community expression"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png", "Community expression")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png"
                    alt="Community engagement"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png", "Community engagement")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=400&fit=crop"
                    alt="Community nature"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=400&fit=crop", "Community nature")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop"
                    alt="Community pets"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop", "Community pets")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop"
                    alt="Community wildlife"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=400&fit=crop", "Community wildlife")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=400&fit=crop"
                    alt="Community landscape"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=400&fit=crop", "Community landscape")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1469474038136-46273834b3fb?w=400&h=400&fit=crop"
                    alt="Community inspiration"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1469474038136-46273834b3fb?w=400&h=400&fit=crop", "Community inspiration")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273f02e42e?w=400&h=400&fit=crop"
                    alt="Community peace"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1506744038136-46273f02e42e?w=400&h=400&fit=crop", "Community peace")}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <ImageModal
          src={modalImage?.src || ''}
          alt={modalImage?.alt || ''}
          isOpen={!!modalImage}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

const ContentReportingSection = () => {
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6 md:mb-8">
          Report Content That<br />Violates Our Guidelines
        </h2>
        
        {/* Explanatory Text - Same consistent gap */}
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-semibold">
            When you encounter content that violates our community guidelines, reporting it helps us maintain a safe environment for everyone. You can report harassment, spam, hate speech, misinformation, inappropriate content, or anything that makes you feel unsafe on our platform.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold">
            Simply tap the three dots menu on any post or profile, select "Report," choose the violation type, and provide additional context if needed. Our moderation team reviews every report within 24 hours and takes appropriate action, from content removal to account restrictions. We'll notify you of the outcome and thank you for helping keep Rustless safe.
          </p>
        </div>
        
        {/* New Title Before Gallery - Same consistent gap */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black">
            Examples of Reportable Content
          </h3>
        </div>
        
        {/* Scrollable Image Gallery - Placeholder for bad content examples */}
        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
                    alt="Reportable content example"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png", "Reportable content example")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
                    alt="Harassment example"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png", "Harassment example")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png"
                    alt="Spam content example"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png", "Spam content example")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png"
                    alt="Misinformation example"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png", "Misinformation example")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
                    alt="Inappropriate content example"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png", "Inappropriate content example")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png"
                    alt="Hate speech example"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png", "Hate speech example")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=400&fit=crop"
                    alt="Violation example"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=400&fit=crop", "Violation example")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop"
                    alt="Community violation"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop", "Community violation")}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <ImageModal
          src={modalImage?.src || ''}
          alt={modalImage?.alt || ''}
          isOpen={!!modalImage}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

const SocialNetworkFinesSection = () => {
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);

  const handleImageClick = (src: string, alt: string) => {
    setModalImage({ src, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6 md:mb-8">
          Why We Take Moderation<br />Seriously: Industry Fines
        </h2>
        
        {/* Explanatory Text - Same consistent gap */}
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-semibold">
            Major social media platforms have faced billions in fines for inadequate content moderation. Meta has been fined over $2 billion by the EU for privacy violations and content issues. TikTok received $368 million in fines for child safety violations. Discord faced penalties for failing to remove harmful content quickly enough.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold">
            These regulatory actions show why proactive moderation isn't optional—it's essential for user safety and platform sustainability. At Rustless, we've learned from these industry failures and built robust systems from day one to prevent harmful content and protect our community, ensuring we never face such penalties.
          </p>
        </div>
        
        {/* New Title Before Gallery - Same consistent gap */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black">
            News Headlines About Platform Failures
          </h3>
        </div>
        
        {/* Scrollable Image Gallery - Placeholder for news about fines */}
        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
                    alt="Meta fine news"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png", "Meta fine news")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
                    alt="TikTok penalty news"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png", "TikTok penalty news")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png"
                    alt="Discord violation news"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png", "Discord violation news")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png"
                    alt="Instagram fine headlines"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png", "Instagram fine headlines")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
                    alt="Social media regulation news"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png", "Social media regulation news")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png"
                    alt="Platform accountability news"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/lovable-uploads/2e42b2e2-8671-42c0-8ba1-982d15e5fbf2.png", "Platform accountability news")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=400&fit=crop"
                    alt="Regulatory action news"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400&h=400&fit=crop", "Regulatory action news")}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop"
                    alt="Tech company fines"
                    className="w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop", "Tech company fines")}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <ImageModal
          src={modalImage?.src || ''}
          alt={modalImage?.alt || ''}
          isOpen={!!modalImage}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

const SafetyMeasuresSection = () => (
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
      <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-black leading-tight mb-6 md:mb-8">
        <div className="mb-2">We've Implemented</div>
        <div className="mb-2">Maximum Measures</div>
        <div className="mb-2">To Keep You Safe</div>
        <div className="mb-2">As Much As We Can</div>
        <div className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px] mt-4">
          #Unprecedented
        </div>
      </h2>
    </div>
  </section>
);

const SecurityFeaturesSection = () => (
  <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* E2EE Encrypted Messages */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
          <div className="text-4xl md:text-5xl mb-4">🔐</div>
          <div className="text-2xl md:text-3xl font-bold text-black mb-2">E2EE</div>
          <p className="text-gray-700 text-sm md:text-base">
            End-to-end encrypted messages. Only you and recipient can read them.
          </p>
        </div>

        {/* Crustless Communication */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
          <div className="text-4xl md:text-5xl mb-4">🦀</div>
          <div className="text-2xl md:text-3xl font-bold text-black mb-2">Crustless</div>
          <p className="text-gray-700 text-sm md:text-base">
            Communication without shells or barriers, pure and direct connection.
          </p>
        </div>

        {/* Decentralized */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
          <div className="text-4xl md:text-5xl mb-4">🌐</div>
          <div className="text-2xl md:text-3xl font-bold text-black mb-2">Decentralized</div>
          <p className="text-gray-700 text-sm md:text-base">
            No single point of control. Your data stays distributed and secure.
          </p>
        </div>

        {/* Vote Power */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
          <div className="text-4xl md:text-5xl mb-4">🗳️</div>
          <div className="text-2xl md:text-3xl font-bold text-black mb-2">10% Vote</div>
          <p className="text-gray-700 text-sm md:text-base">
            Every member gets 10% voting power in community decisions and governance.
          </p>
        </div>
      </div>
    </div>
  </section>
);

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
      <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-black leading-tight mb-6 md:mb-8">
        <div className="mb-2">We've done everything to ensure</div>
        <div className="mb-2">taht you will never see</div>
        <div className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px] mt-4">
          #shamewall
        </div>
      </h2>
    </div>
  </section>
);

const SecondSecurityFeaturesSection = () => (
  <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Bored Views */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
          <div className="text-4xl md:text-5xl mb-4">😴</div>
          <div className="text-2xl md:text-3xl font-bold text-black mb-2">Bored Views</div>
          <p className="text-gray-700 text-sm md:text-base">
            No more mindless scrolling through unengaging content that wastes your time.
          </p>
        </div>

        {/* Fake Comments */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
          <div className="text-4xl md:text-5xl mb-4">💬</div>
          <div className="text-2xl md:text-3xl font-bold text-black mb-2">Fake Comments</div>
          <p className="text-gray-700 text-sm md:text-base">
            Authentic conversations only. No bot-generated or purchased engagement.
          </p>
        </div>

        {/* Fake Overnight Influencers */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
          <div className="text-4xl md:text-5xl mb-4">⭐</div>
          <div className="text-2xl md:text-3xl font-bold text-black mb-2">Fake Influencers</div>
          <p className="text-gray-700 text-sm md:text-base">
            Real creators with genuine followings, not manufactured overnight celebrities.
          </p>
        </div>

        {/* Toxic Culture */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
          <div className="text-4xl md:text-5xl mb-4">🚫</div>
          <div className="text-2xl md:text-3xl font-bold text-black mb-2">Toxic Culture</div>
          <p className="text-gray-700 text-sm md:text-base">
            Building a positive community free from harassment and negative behavior.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ThirdSafetyMeasuresSection = () => (
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
      <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-black leading-tight mb-6 md:mb-8">
        <div className="mb-2">And we're saying taht we've</div>
        <div className="mb-2">done everything possible</div>
        <div className="mb-2">to keep you on our</div>
        <div className="mb-2">platform safe - we mean it!</div>
        <div className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px] mt-4">
          #Stay Safe
        </div>
      </h2>
    </div>
  </section>
);

const ModerationStatsSection = () => {
  const [selectedQuartile, setSelectedQuartile] = useState('Q4 2024');
  
  const quartiles = ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'];

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Quartile Selector and Subtitle */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4 font-semibold">
            You can watch our stats from moderated content for the past quartile here (and on this boxes actually stats, how much moderated content and regard what we deleted)
          </p>
          
          <div className="flex justify-center items-center gap-2 md:gap-3 text-base font-medium">
            <span className="text-lg font-medium text-black">View stats for:</span>
            <select 
              value={selectedQuartile}
              onChange={(e) => setSelectedQuartile(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-lg font-medium text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            >
              {quartiles.map((quartile) => (
                <option key={quartile} value={quartile}>
                  {quartile}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Spam Removed */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
            <div className="text-4xl md:text-5xl mb-4">🚫</div>
            <div className="text-2xl md:text-3xl font-bold text-black mb-2">2,847</div>
            <p className="text-gray-700 text-sm md:text-base">
              Spam posts removed and accounts suspended for violations.
            </p>
          </div>

          {/* Harassment Stopped */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
            <div className="text-4xl md:text-5xl mb-4">🛡️</div>
            <div className="text-2xl md:text-3xl font-bold text-black mb-2">1,293</div>
            <p className="text-gray-700 text-sm md:text-base">
              Harassment cases resolved and users protected from toxic behavior.
            </p>
          </div>

          {/* Fake Accounts Detected */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
            <div className="text-4xl md:text-5xl mb-4">🤖</div>
            <div className="text-2xl md:text-3xl font-bold text-black mb-2">592</div>
            <p className="text-gray-700 text-sm md:text-base">
              Fake accounts and bots detected and permanently banned.
            </p>
          </div>

          {/* Content Flagged */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 text-center">
            <div className="text-4xl md:text-5xl mb-4">⚠️</div>
            <div className="text-2xl md:text-3xl font-bold text-black mb-2">4,721</div>
            <p className="text-gray-700 text-sm md:text-base">
              Inappropriate content flagged and reviewed by our moderation team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const YouCanDoItSection = () => (
  <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px] font-bold text-black">
        #You Can Do It!
      </h2>
    </div>
  </section>
);

const MentionsSection = () => (
  <section className="text-center py-6 md:py-8 relative z-10 bg-white">
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
);

const Footer = () => (
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
);

const Guidelines = () => {
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
      <HeroSection />

      {/* Balance Free Speech Section - Original */}
      <BalanceFreeSpeechSection />

      {/* Updated Safety Measures Section */}
      <SafetyMeasuresSection />

      {/* Updated Security Features Boxes Section */}
      <SecurityFeaturesSection />

      {/* Second Safety Measures Section - Updated with shamewall messaging */}
      <SecondSafetyMeasuresSection />

      {/* Second Security Features Boxes Section - Updated with shamewall features */}
      <SecondSecurityFeaturesSection />

      {/* FIRST DUPLICATE: Content Reporting Section */}
      <ContentReportingSection />

      {/* SECOND DUPLICATE: Social Network Fines Section */}
      <SocialNetworkFinesSection />

      {/* MOVED TO END: Third Safety Measures Section - For moderation stats */}
      <ThirdSafetyMeasuresSection />

      {/* MOVED TO END: Moderation Statistics Section */}
      <ModerationStatsSection />

      {/* You Can Do It Section */}
      <YouCanDoItSection />

      {/* Mentions Section */}
      <MentionsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Guidelines;
