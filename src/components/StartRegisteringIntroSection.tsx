
import React from "react";
import DynamicHashtag from "./DynamicHashtag";

const StartRegisteringIntroSection: React.FC = () => (
  <section className="py-8 md:py-12 px-4 md:px-8 bg-white text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
        <div>Next part</div>
        <div>Grab the coffee</div>
        <div>and prepare</div>
        <span className="text-primary font-black mt-2 block">
          <DynamicHashtag text="#Start Registering" />
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-700 font-semibold mt-4">
        Ready to join? Download the app, create your account, and become part of the Rustless community where your voice truly matters!
      </p>
    </div>
  </section>
);

export default StartRegisteringIntroSection;

