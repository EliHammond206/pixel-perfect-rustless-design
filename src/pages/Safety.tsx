
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const Safety = () => {
  const [activeSection, setActiveSection] = useState('approach');
  const [openFAQ, setOpenFAQ] = useState('block-users');

  const showSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? '' : faqId);
  };

  return (
    <div className="bg-white text-black min-h-screen" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-4 relative z-20">
        <h1 className="text-xl md:text-2xl font-bold text-black">Rustless</h1>
        <div className="flex items-center space-x-2 md:space-x-4">
          <a href="#" className="text-black text-base md:text-base align-middle font-medium hover:scale-105 transition-transform duration-300 ease-in-out flex items-center">
            <span>Partner With Us</span>
            <span className="ml-1 text-xs">👋</span>
          </a>
          <button className="bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-base md:text-base font-medium">
            Get The App
          </button>
        </div>
      </header>

      {/* Title Section */}
      <div className="px-4 md:px-20 py-10 md:py-10 text-left">
        <h1 className="text-4xl md:text-6xl xl:text-[96px] font-extrabold leading-none m-0">
          safety
          <span className="block">center</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col xl:grid xl:grid-cols-[1fr_2fr_1fr] gap-5 xl:gap-8 px-4 md:px-20 pb-20 xl:items-start">
        {/* Sidebar */}
        <div className="order-1 xl:order-none">
          <h2 className="text-2xl md:text-3xl xl:text-[38px] font-extrabold mb-4">safety</h2>
          <ul className="list-none p-0 m-0">
            <li 
              className={`mb-4 font-extrabold text-base cursor-pointer ${activeSection === 'approach' ? 'text-pink-600' : 'text-black hover:text-black'}`}
              onClick={() => showSection('approach')}
            >
              {activeSection === 'approach' && <span className="text-pink-600 mr-2">•</span>}
              our approach to safety
            </li>
            <li 
              className={`mb-4 font-extrabold text-base cursor-pointer ${activeSection === 'guide' ? 'text-pink-600' : 'text-black hover:text-black'}`}
              onClick={() => showSection('guide')}
            >
              {activeSection === 'guide' && <span className="text-pink-600 mr-2">•</span>}
              our guide to online safety
            </li>
            <li 
              className={`mb-4 font-extrabold text-base cursor-pointer ${activeSection === 'guidelines' ? 'text-pink-600' : 'text-black hover:text-black'}`}
              onClick={() => showSection('guidelines')}
            >
              {activeSection === 'guidelines' && <span className="text-pink-600 mr-2">•</span>}
              our community guidelines
            </li>
            <li 
              className={`mb-4 font-extrabold text-base cursor-pointer ${activeSection === 'tools' ? 'text-pink-600' : 'text-black hover:text-black'}`}
              onClick={() => showSection('tools')}
            >
              {activeSection === 'tools' && <span className="text-pink-600 mr-2">•</span>}
              our safety tools
            </li>
            <li 
              className={`mb-4 font-extrabold text-base cursor-pointer ${activeSection === 'resources' ? 'text-pink-600' : 'text-black hover:text-black'}`}
              onClick={() => showSection('resources')}
            >
              {activeSection === 'resources' && <span className="text-pink-600 mr-2">•</span>}
              our resources
            </li>
            <li 
              className={`mb-4 font-extrabold text-base cursor-pointer ${activeSection === 'contact' ? 'text-pink-600' : 'text-black hover:text-black'}`}
              onClick={() => showSection('contact')}
            >
              {activeSection === 'contact' && <span className="text-pink-600 mr-2">•</span>}
              contact us
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="order-2 xl:order-none max-w-none xl:max-w-[600px]">
          {activeSection === 'approach' && (
            <div>
              <h2 className="text-3xl md:text-4xl xl:text-[48px] font-extrabold mt-0">our approach to safety</h2>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">At NGL, safety is our highest priority. We made NGL as a place where you can foster meaningful and authentic connections with your friends, and we are committed to cultivating a community rooted in kindness and understanding. We take our responsibility to protect the community seriously, and we are constantly improving our safety features to stay up-to-date with an ever-changing online world.</p>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">NGL has built an extensive ecosystem of security tools, safety infrastructure, community guidelines, and user policies that make us a leading voice amongst our peers when it comes to user safety. You can also further control your NGL experience by pausing your link at any time, hiding specific words from your messages, blocking specific users, and reporting unwanted behavior.</p>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">In addition to these features, our Community Team works around the clock to monitor user reports and support tickets, providing the NGL community with 24/7 help and guidance. No concern is too small for us; reach out to <a href="mailto:help@nglapp.com" className="text-pink-600 no-underline">help@nglapp.com</a> with any questions. We're happy to help!</p>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">Additionally, NGL leverages Hive Moderation's automated moderation solution as the first line of defense to scan messages for inappropriate content.</p>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">Continue reading our Safety Center to learn more about these resources for a safe and fun experience on NGL.</p>
              <h3 className="text-2xl md:text-3xl xl:text-[38px] font-extrabold mt-10">moderation</h3>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">We take any cases of bullying, hate, or violence very seriously. Our Community Team monitors user reports and support tickets 24/7 to ensure the safety and integrity of our platform and our users.</p>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">NGL leverages Hive Moderation's automated moderation solution as the first line of defense to scan messages for inappropriate content. Hive employs cutting-edge deep learning technology to help safeguard our virtual space and filter out potentially harmful language before it hits users' inboxes. Its advanced algorithm detects the semantic meaning of emojis, and its web scraper pulls specific examples of contextual emoji use. This evolving technology helps to keep us on trend, deciphering slang and helping ensure NGL users are complying with our Community Guidelines.</p>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">By combining human expertise and advanced technology, we've created a content moderation system that's both effective and able to understand and adapt to modern human behavior. Our Community Team brings their real-world experience and understanding to the process, while Hive Moderation's complex AI algorithms provide invaluable insights and support.</p>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">Together, our Community Team and Hive Moderation act as a safety shield for the NGL community, constantly reviewing our platform for objectionable content and taking action.</p>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">We understand that content moderation is a delicate balance between protecting our community and preserving our users' freedom of expression. Our Community Team and Hive Moderation work diligently to strike this balance, ensuring that our platform remains a place where diverse voices can thrive while maintaining a respectful and inclusive environment, free of any forms of hate or abuse.</p>
              <h3 className="text-2xl md:text-3xl xl:text-[38px] font-extrabold mt-10">reporting</h3>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">When you receive a message on NGL that you find inappropriate, offensive, or harmful, you can report it directly within the app. Simply locate the message, tap on the Report button (⚠), select your Report reason, and tap "Tell NGL Team." This will flag the message for further review.</p>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">Our moderation team carefully assesses each reported message against the app's Community Guidelines and Terms of Service. They take into account the content of the message, its potential impact on the recipient, and any relevant context surrounding it.</p>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">If the reported message is found to violate NGL's Community Guidelines, appropriate action will be taken. This can range from blocking the sender to permanently banning them from the platform.</p>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">By reporting messages that you deem harmful, you play a crucial role in maintaining a safe and respectful environment on NGL. Your actions help protect yourself and other users from harassment, bullying, and other forms of online abuse. Don't hesitate to report any message that you feel deserves reporting.</p>
            </div>
          )}

          {activeSection === 'guide' && (
            <div>
              <h2 className="text-3xl md:text-4xl xl:text-[48px] font-extrabold mt-0">our guide to online safety</h2>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          )}

          {activeSection === 'guidelines' && (
            <div>
              <h2 className="text-3xl md:text-4xl xl:text-[48px] font-extrabold mt-0">our community guidelines</h2>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          )}

          {activeSection === 'tools' && (
            <div>
              <h2 className="text-3xl md:text-4xl xl:text-[48px] font-extrabold mt-0">our safety tools</h2>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          )}

          {activeSection === 'resources' && (
            <div>
              <h2 className="text-3xl md:text-4xl xl:text-[48px] font-extrabold mt-0">our resources</h2>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          )}

          {activeSection === 'contact' && (
            <div>
              <h2 className="text-3xl md:text-4xl xl:text-[48px] font-extrabold mt-0">contact us</h2>
              <p className="text-lg md:text-xl xl:text-[22px] font-extrabold leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          )}

          {/* FAQ Section */}
          <div className="mt-10">
            <h2 className="text-lg md:text-xl xl:text-[22px] font-extrabold">faq</h2>
            
            <div className="border border-gray-200 p-4 mt-4 rounded-lg bg-pink-50">
              <div 
                className="font-extrabold text-lg md:text-xl xl:text-[22px] cursor-pointer flex items-center gap-2"
                onClick={() => toggleFAQ('ngl-allowed')}
              >
                {openFAQ === 'ngl-allowed' ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                Q: What is and isn't allowed on NGL?
              </div>
              {openFAQ === 'ngl-allowed' && (
                <div className="mt-2 text-lg md:text-xl xl:text-[22px] font-extrabold">
                  A: Our Community Guidelines and Terms of Service provide an overview of behaviors and content that are and are not permitted on NGL. In general, NGL is a place for you to have fun, be kind, and make connections; we recommend keeping your communications positive and lighthearted to uplift your NGL community.
                </div>
              )}
            </div>

            <div className="border border-gray-200 p-4 mt-4 rounded-lg bg-pink-50">
              <div 
                className="font-extrabold text-lg md:text-xl xl:text-[22px] cursor-pointer flex items-center gap-2"
                onClick={() => toggleFAQ('block-users')}
              >
                {openFAQ === 'block-users' ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                Q: Can I block message senders on NGL?
              </div>
              {openFAQ === 'block-users' && (
                <div className="mt-2 text-lg md:text-xl xl:text-[22px] font-extrabold">
                  A: Yes; to block an individual, just tap the Report button (▲), report the message, and tap 'Block user'. The message will be deleted from your inbox and the user will be forbidden from sending you any further messages.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="order-3 xl:order-none max-w-none xl:max-w-[250px]">
          <h2 className="text-2xl md:text-3xl xl:text-[38px] font-extrabold mb-5">contact</h2>
          
          <div className="bg-pink-50 border border-gray-200 rounded-xl p-5 mb-5">
            <h3 className="text-lg md:text-xl xl:text-[22px] font-extrabold mb-2 text-black">Contact Support</h3>
            <p className="text-sm md:text-base font-extrabold mb-0 text-gray-800">Get help from our team for any issues or questions.</p>
          </div>

          <div className="bg-pink-50 border border-gray-200 rounded-xl p-5 mb-5">
            <h3 className="text-lg md:text-xl xl:text-[22px] font-extrabold mb-2 text-black">Legal Requests</h3>
            <p className="text-sm md:text-base font-extrabold mb-0 text-gray-800">For legal inquiries, please email <a href="mailto:legalrequests@kodex.com" className="text-pink-600 no-underline">legalrequests@kodex.com</a>.</p>
          </div>

          <div className="bg-pink-50 border border-gray-200 rounded-xl p-5 mb-5">
            <h3 className="text-lg md:text-xl xl:text-[22px] font-extrabold mb-2 text-black">Account Issues</h3>
            <p className="text-sm md:text-base font-extrabold mb-0 text-gray-800">Contact support inside the app for account-related queries.</p>
          </div>

          <div className="bg-pink-50 border border-gray-200 rounded-xl p-5 mb-5">
            <h3 className="text-lg md:text-xl xl:text-[22px] font-extrabold mb-2 text-black">Physical Papers</h3>
            <p className="text-sm md:text-base font-extrabold mb-0 text-gray-800">Send letters to our agent at: 123 Safety Lane, Secure City, SC 12345.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center p-6 md:p-8 relative z-10 space-y-3">
        <div className="text-lg md:text-xl font-medium text-black">
          Where You Matter ❤︎
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-base font-medium">
          <a href="/safety" className="hover:opacity-70 text-black underline underline-offset-4 decoration-1">Safety</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:opacity-70 text-black underline underline-offset-4 decoration-1">Help</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:opacity-70 flex items-center text-black">
            <span className="underline underline-offset-4 decoration-1">Join Us</span>
            <span className="ml-1 text-xs">👋</span>
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:opacity-70 text-black underline underline-offset-4 decoration-1">Guidelines</a>
        </div>
        
        <div className="text-base font-medium text-black">
          2025 - till forever Rustless/Unlimited
        </div>
      </footer>
    </div>
  );
};

export default Safety;
