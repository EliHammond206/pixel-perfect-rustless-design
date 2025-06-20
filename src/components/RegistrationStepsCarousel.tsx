import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import ImageModal from './ImageModal';

const RegistrationStepsCarousel = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    currentIndex: number;
    images: Array<{ src: string; alt: string }>;
  }>({
    isOpen: false,
    currentIndex: 0,
    images: []
  });

  const [walletModalState, setWalletModalState] = useState<{
    isOpen: boolean;
    currentIndex: number;
    images: Array<{ src: string; alt: string }>;
  }>({
    isOpen: false,
    currentIndex: 0,
    images: []
  });

  // Registration steps with iPhone mockups
  const registrationSteps = [
    {
      step: 1,
      title: "Download Rustless",
      description: "Get the app from the App Store or Google Play",
      image: "/lovable-uploads/2aecef10-0caf-4702-8872-8e6db88e12d9.png"
    },
    {
      step: 2,
      title: "Create Account",
      description: "Sign up with your email or phone number",
      image: "/lovable-uploads/2aecef10-0caf-4702-8872-8e6db88e12d9.png"
    },
    {
      step: 3,
      title: "Verify Identity",
      description: "Complete our simple verification process",
      image: "/lovable-uploads/2aecef10-0caf-4702-8872-8e6db88e12d9.png"
    },
    {
      step: 4,
      title: "Set Up Profile",
      description: "Add your photo and basic information",
      image: "/lovable-uploads/2aecef10-0caf-4702-8872-8e6db88e12d9.png"
    },
    {
      step: 5,
      title: "Join Community",
      description: "Start connecting and sharing your voice",
      image: "/lovable-uploads/2aecef10-0caf-4702-8872-8e6db88e12d9.png"
    }
  ];

  // Wallet tutorial steps
  const walletTutorialSteps = [
    {
      step: 1,
      title: "Download Wallet App",
      description: "Install a compatible crypto wallet from your app store",
      image: "/lovable-uploads/2aecef10-0caf-4702-8872-8e6db88e12d9.png"
    },
    {
      step: 2,
      title: "Connect to Rustless",
      description: "Link your wallet to your Rustless account safely",
      image: "/lovable-uploads/2aecef10-0caf-4702-8872-8e6db88e12d9.png"
    },
    {
      step: 3,
      title: "Age Verification",
      description: "Complete the secure age verification process",
      image: "/lovable-uploads/2aecef10-0caf-4702-8872-8e6db88e12d9.png"
    },
    {
      step: 4,
      title: "Data Confirmation",
      description: "Review what information is shared with Rustless",
      image: "/lovable-uploads/2aecef10-0caf-4702-8872-8e6db88e12d9.png"
    }
  ];

  const handleImageClick = (src: string, alt: string) => {
    const images = registrationSteps.map(step => ({ src: step.image, alt: step.title }));
    const imageIndex = images.findIndex(img => img.src === src);
    setModalState({
      isOpen: true,
      currentIndex: imageIndex,
      images: images
    });
  };

  const handleWalletImageClick = (src: string, alt: string) => {
    const images = walletTutorialSteps.map(step => ({ src: step.image, alt: step.title }));
    const imageIndex = images.findIndex(img => img.src === src);
    setWalletModalState({
      isOpen: true,
      currentIndex: imageIndex,
      images: images
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const closeWalletModal = () => {
    setWalletModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleNavigate = (index: number) => {
    setModalState(prev => ({ ...prev, currentIndex: index }));
  };

  const handleWalletNavigate = (index: number) => {
    setWalletModalState(prev => ({ ...prev, currentIndex: index }));
  };

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* iPhone Mockups Carousel */}
        <div className="relative">
          <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {registrationSteps.map((step, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Step Number Badge */}
                    <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-2">
                      {step.step}
                    </div>
                    
                    {/* iPhone Mockup */}
                    <div 
                      className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => handleImageClick(step.image, step.title)}
                    >
                      <img 
                        src={step.image}
                        alt={`${step.title} - Registration Step ${step.step}`}
                        className="w-48 h-auto mx-auto rounded-3xl shadow-lg"
                      />
                    </div>
                    
                    {/* Step Info */}
                    <div className="space-y-2 max-w-xs">
                      <h3 className="text-lg md:text-xl font-bold text-black">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Title and Text Below Carousel */}
        <div className="text-center mt-8 md:mt-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6 md:mb-8">
            <div>Now once you registered and created</div>
            <div>your account you've 5 days to</div>
            <div>connect your wallet to</div>
            <div className="text-primary font-black">#Prove Your Age</div>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold">
              We require age verification to ensure a safe environment for all users and comply with global regulations. By connecting your wallet, we can verify your age securely without storing sensitive personal information. This process protects minors and creates a trusted community where everyone can share their voice safely.
            </p>
          </div>
        </div>

        {/* Wallet Tutorial Section */}
        <div className="mt-12 md:mt-16">
          
          <div className="relative">
            <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-5xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {walletTutorialSteps.map((step, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {/* Step Number Badge */}
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-2">
                        {step.step}
                      </div>
                      
                      {/* iPhone Mockup */}
                      <div 
                        className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => handleWalletImageClick(step.image, step.title)}
                      >
                        <img 
                          src={step.image}
                          alt={`${step.title} - Wallet Step ${step.step}`}
                          className="w-48 h-auto mx-auto rounded-3xl shadow-lg"
                        />
                      </div>
                      
                      {/* Step Info */}
                      <div className="space-y-2 max-w-xs">
                        <h3 className="text-lg md:text-xl font-bold text-black">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <ImageModal
          images={modalState.images}
          currentIndex={modalState.currentIndex}
          isOpen={modalState.isOpen}
          onClose={closeModal}
          onNavigate={handleNavigate}
        />

        <ImageModal
          images={walletModalState.images}
          currentIndex={walletModalState.currentIndex}
          isOpen={walletModalState.isOpen}
          onClose={closeWalletModal}
          onNavigate={handleWalletNavigate}
        />
      </div>
    </section>
  );
};

export default RegistrationStepsCarousel;
