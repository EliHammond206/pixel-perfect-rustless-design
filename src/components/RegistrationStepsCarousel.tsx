
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

  const handleImageClick = (src: string, alt: string) => {
    const images = registrationSteps.map(step => ({ src: step.image, alt: step.title }));
    const imageIndex = images.findIndex(img => img.src === src);
    setModalState({
      isOpen: true,
      currentIndex: imageIndex,
      images: images
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

export default RegistrationStepsCarousel;
