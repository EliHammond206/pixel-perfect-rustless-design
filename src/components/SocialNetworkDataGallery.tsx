
import React from "react";

const SOCIAL_NETWORKS = [
  {
    name: "Meta (Facebook)",
    img: "/lovable-uploads/2aecef10-0caf-4702-8872-8e6db88e12d9.png",
    data: [
      "Name, email, phone",
      "Location & device info",
      "Browsing activity",
    ],
  },
  {
    name: "Instagram",
    img: "/lovable-uploads/8922f240-d23a-4728-a292-4c9f5b3e3103.png",
    data: [
      "Contacts, camera, photos",
      "Messages, location",
      "Ad & usage data",
    ],
  },
  {
    name: "Telegram",
    img: "/lovable-uploads/a5ee20c4-051c-473f-9f29-59a36c62163e.png",
    data: [
      "Contacts & phone number",
      "Metadata about messages",
      "Cloud chats/phone info",
    ],
  },
  {
    name: "TikTok",
    img: "/lovable-uploads/7c463ba4-3f87-404b-b05b-7b3d1c5fc3e3.png",
    data: [
      "Device/Application data",
      "Usage patterns",
      "Location & clipboard data",
    ],
  },
];

const SocialNetworkDataGallery = () => (
  <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 md:mb-8">
        What other social networks collect from you
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {SOCIAL_NETWORKS.map((network) => (
          <div
            key={network.name}
            className="flex flex-col items-center rounded-2xl bg-gray-50 border border-gray-200 shadow-md p-4 md:p-6 transition-all hover:shadow-xl"
          >
            <div className="relative w-32 h-64 md:w-36 md:h-72 mb-3">
              <img
                src={network.img}
                alt={network.name}
                className="w-full h-full object-cover rounded-xl border border-gray-200"
                style={{ boxShadow: "0 4px 24px 0 #0001" }}
              />
              <div className="absolute left-0 top-0 w-full bg-black/70 text-white font-bold text-xl shadow-lg rounded-t-xl py-1 text-center">
                {network.name}
              </div>
            </div>
            <ul className="text-left text-gray-700 text-sm font-medium flex flex-col gap-1 mt-2">
              {network.data.map((d, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-gray-500 text-sm text-center mt-6">
        Rustless is committed to privacy: What you share here, stays here.
      </div>
    </div>
  </section>
);

export default SocialNetworkDataGallery;

