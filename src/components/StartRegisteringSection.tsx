
import React from "react";
import FloatingPhoto from "./FloatingPhoto";

const StartRegisteringSection = () => (
  <section className="py-8 md:py-12 px-4 md:px-8 bg-white relative overflow-hidden">
    {/* Background floating photos for this section - Desktop */}
    <div className="hidden lg:block">
      <FloatingPhoto
        src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
        size="desktop-round"
        style={{ left: "10%", top: "20%" }}
        className=""
      />
      <FloatingPhoto
        src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
        size="desktop-round"
        style={{ right: "10%", top: "30%" }}
        className=""
      />
    </div>

    {/* Background floating photos - Tablet */}
    <div className="hidden md:block lg:hidden">
      <FloatingPhoto
        src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
        size="tablet-round"
        style={{ left: "10%", top: "20%" }}
        className=""
      />
      <FloatingPhoto
        src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
        size="tablet-round"
        style={{ right: "10%", top: "30%" }}
        className=""
      />
    </div>

    {/* Background floating photos - Mobile */}
    <div className="block md:hidden">
      <FloatingPhoto
        src="/lovable-uploads/ddcd62c6-f4e6-4dee-952a-fe62a99ef504.png"
        size="mobile-round"
        style={{ left: "10%", top: "10%" }}
        className=""
      />
      <FloatingPhoto
        src="/lovable-uploads/a2a7aef1-b7bb-4052-83a5-40f26ac72b59.png"
        size="mobile-round"
        style={{ right: "10%", top: "15%" }}
        className=""
      />
    </div>

    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="font-bold text-black leading-tight mb-6 md:mb-8">
        <div className="mb-1 text-4xl md:text-7xl lg:text-8xl">Is it legal?</div>
        <div className="mb-1 text-4xl md:text-7xl lg:text-8xl">Are we safe?</div>
        <div className="text-3xl md:text-6xl lg:text-7xl xl:text-[72px] mt-2 text-primary font-black tracking-tight inline-block">
          #More Then Ever
        </div>
      </h2>
      <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8 relative z-10">
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold">
          We require you to verify your age because we are determined to protect our community and avoid tragedies similar to what happened on Discord &mdash; where minors on the platform led to lawsuits and serious consequences. By making sure everyone is old enough to join, we keep Rustless both legal and safe for everyone. Your safety is our priority!
        </p>
      </div>
    </div>
  </section>
);

export default StartRegisteringSection;
