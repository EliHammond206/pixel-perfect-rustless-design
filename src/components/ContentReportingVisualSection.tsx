
import React from "react";

const LEFT_TEXT = (
  <>
    <div className="text-2xl md:text-3xl font-bold text-black mb-3 text-left">
      How reporting works
    </div>
    <p className="text-base md:text-lg text-gray-700 font-medium text-left">
      If you come across content that makes you feel unsafe or violates our guidelines, tap the three dots menu, select “Report”, and let us know what happened. Every submission is reviewed carefully—by AI first, then real people—so you can trust your concerns will be heard and acted on quickly.
    </p>
  </>
);

const RIGHT_TEXT = (
  <>
    <div className="text-2xl md:text-3xl font-bold text-black mb-3 text-left">
      Why it matters
    </div>
    <p className="text-base md:text-lg text-gray-700 font-medium text-left">
      Your reports help keep our community a safe and fun place for everyone. Reporting inappropriate content empowers both you and your fellow members, protecting the spaces we all care about. Thank you for speaking up!
    </p>
  </>
);

const IPHONE_MOCKUP =
  "https://res.cloudinary.com/lovable/image/upload/v1689243496/guidelines-iphone-mockup.png";

export default function ContentReportingVisualSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 py-10">
      <div className="flex-1 max-w-xl w-full">{LEFT_TEXT}</div>
      <div className="flex justify-center items-center flex-shrink-0 mb-8 lg:mb-0">
        <div className="relative drop-shadow-xl">
          <img
            src={IPHONE_MOCKUP}
            alt="iPhone showing report flow"
            className="w-52 h-auto md:w-64 lg:w-72 rounded-2xl border border-gray-200 shadow-2xl mx-auto"
            draggable={false}
          />
        </div>
      </div>
      <div className="flex-1 max-w-xl w-full">{RIGHT_TEXT}</div>
    </div>
  );
}
