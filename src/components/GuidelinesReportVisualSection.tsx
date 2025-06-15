
import React from "react";
import FloatingPhoto from "./FloatingPhoto";

const GuidelinesReportVisualSection: React.FC = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-center items-center py-10 md:py-16">
      {/* Photos Left */}
      <div className="relative w-full lg:w-2/5 flex justify-center lg:justify-end mb-8 lg:mb-0">
        <div className="relative h-[300px] w-[260px]">
          <FloatingPhoto
            src="/lovable-uploads/d501b21d-28ca-414b-a3c7-b882b8a23b68.png"
            size="desktop-round"
            style={{ left: "0px", top: "40px", zIndex: 2 }}
            className=""
          />
          <FloatingPhoto
            src="/lovable-uploads/eeaf3c37-5a5c-4445-b465-f899f46cb853.png"
            size="desktop-round"
            style={{ left: "80px", top: "0px", zIndex: 2 }}
            className=""
          />
          <FloatingPhoto
            src="/lovable-uploads/e9e6b1c7-1505-461a-990d-b8245b537a53.png"
            size="desktop-tiktok"
            style={{ left: "120px", top: "110px", transform: "rotate(8deg)", zIndex: 2 }}
            className=""
            isRectangular={true}
          />
        </div>
      </div>

      {/* iPhone Mockup */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-xs lg:w-[350px] mx-auto lg:mx-12">
        <div className="w-[220px] h-[440px] rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-gray-100 bg-white mb-4">
          <img
            src="/lovable-uploads/7c463ba4-3f87-404b-b05b-7b3d1c5fc3e3.png"
            alt="Rustless app on phone"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Section beneath the mockup */}
        <div className="mt-3 text-center space-y-3">
          <div className="text-2xl md:text-3xl font-bold text-black">
            Report Instantly<br />
            <span className="text-base md:text-lg font-normal text-gray-700 block">Tap the three dots, choose "Report", and you're done — it’s that easy.</span>
          </div>
        </div>
      </div>

      {/* Photos Right */}
      <div className="relative w-full lg:w-2/5 flex justify-center lg:justify-start mt-8 lg:mt-0">
        <div className="relative h-[280px] w-[220px]">
          <FloatingPhoto
            src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
            size="desktop-round"
            style={{ left: "70px", top: "0px", zIndex: 2 }}
            className=""
          />
          <FloatingPhoto
            src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
            size="desktop-round"
            style={{ left: "0px", top: "140px", zIndex: 2 }}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default GuidelinesReportVisualSection;
