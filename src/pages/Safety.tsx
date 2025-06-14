
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

const Safety = () => {
  const [activeSection, setActiveSection] = useState('approach');
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const sections = [
    { id: 'approach', label: 'our approach to safety' },
    { id: 'guide', label: 'our guide to online safety' },
    { id: 'guidelines', label: 'our community guidelines' },
    { id: 'tools', label: 'our safety tools' },
    { id: 'resources', label: 'our resources' },
    { id: 'contact', label: 'contact us' }
  ];

  const faqItems = [
    {
      question: "What is and isn't allowed on Rustless?",
      answer: "Our Community Guidelines and Terms of Service provide an overview of behaviors and content that are and are not permitted on Rustless. In general, Rustless is a place for you to have fun, be kind, and make connections; we recommend keeping your communications positive and lighthearted to uplift your Rustless community."
    },
    {
      question: "Can I block message senders on Rustless?",
      answer: "Yes; to block an individual, just tap the Report button (▲), report the message, and tap 'Block user'. The message will be deleted from your inbox and the user will be forbidden from sending you any further messages."
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen font-bold">
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

      {/* Title Section */}
      <div className="px-4 md:px-20 py-8 md:py-10">
        <h1 className="text-5xl md:text-8xl lg:text-[96px] font-bold leading-none">
          safety<br />
          <span className="block">center</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col xl:grid xl:grid-cols-4 gap-8 md:gap-12 px-4 md:px-20 pb-20">
        {/* Sidebar */}
        <div className="xl:col-span-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">safety</h2>
          <ul className="space-y-3 md:space-y-4">
            {sections.map((section) => (
              <li
                key={section.id}
                className={`text-base md:text-lg font-bold cursor-pointer transition-colors ${
                  activeSection === section.id 
                    ? 'text-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                {activeSection === section.id && (
                  <span className="text-black mr-2">•</span>
                )}
                {section.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="xl:col-span-2">
          {activeSection === 'approach' && (
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">our approach to safety</h2>
              <div className="space-y-4 text-lg md:text-xl font-bold leading-relaxed">
                <p>At Rustless, safety is our highest priority. We made Rustless as a place where you can foster meaningful and authentic connections with your friends, and we are committed to cultivating a community rooted in kindness and understanding. We take our responsibility to protect the community seriously, and we are constantly improving our safety features to stay up-to-date with an ever-changing online world.</p>
                <p>Rustless has built an extensive ecosystem of security tools, safety infrastructure, community guidelines, and user policies that make us a leading voice amongst our peers when it comes to user safety. You can also further control your Rustless experience by pausing your link at any time, hiding specific words from your messages, blocking specific users, and reporting unwanted behavior.</p>
                <p>In addition to these features, our Community Team works around the clock to monitor user reports and support tickets, providing the Rustless community with 24/7 help and guidance. No concern is too small for us; reach out to <a href="mailto:help@rustlessapp.com" className="text-black underline">help@rustlessapp.com</a> with any questions. We're happy to help!</p>
                <p>Additionally, Rustless leverages Hive Moderation's automated moderation solution as the first line of defense to scan messages for inappropriate content.</p>
                <p>Continue reading our Safety Center to learn more about these resources for a safe and fun experience on Rustless.</p>
                
                <h3 className="text-2xl md:text-4xl font-bold mt-10 mb-4">moderation</h3>
                <p>We take any cases of bullying, hate, or violence very seriously. Our Community Team monitors user reports and support tickets 24/7 to ensure the safety and integrity of our platform and our users.</p>
                <p>Rustless leverages Hive Moderation's automated moderation solution as the first line of defense to scan messages for inappropriate content. Hive employs cutting-edge deep learning technology to help safeguard our virtual space and filter out potentially harmful language before it hits users' inboxes. Its advanced algorithm detects the semantic meaning of emojis, and its web scraper pulls specific examples of contextual emoji use. This evolving technology helps to keep us on trend, deciphering slang and helping ensure Rustless users are complying with our Community Guidelines.</p>
                <p>By combining human expertise and advanced technology, we've created a content moderation system that's both effective and able to understand and adapt to modern human behavior. Our Community Team brings their real-world experience and understanding to the process, while Hive Moderation's complex AI algorithms provide invaluable insights and support.</p>
                <p>Together, our Community Team and Hive Moderation act as a safety shield for the Rustless community, constantly reviewing our platform for objectionable content and taking action.</p>
                <p>We understand that content moderation is a delicate balance between protecting our community and preserving our users' freedom of expression. Our Community Team and Hive Moderation work diligently to strike this balance, ensuring that our platform remains a place where diverse voices can thrive while maintaining a respectful and inclusive environment, free of any forms of hate or abuse.</p>
                
                <h3 className="text-2xl md:text-4xl font-bold mt-10 mb-4">reporting</h3>
                <p>When you receive a message on Rustless that you find inappropriate, offensive, or harmful, you can report it directly within the app. Simply locate the message, tap on the Report button (⚠), select your Report reason, and tap "Tell Rustless Team." This will flag the message for further review.</p>
                <p>Our moderation team carefully assesses each reported message against the app's Community Guidelines and Terms of Service. They take into account the content of the message, its potential impact on the recipient, and any relevant context surrounding it.</p>
                <p>If the reported message is found to violate Rustless's Community Guidelines, appropriate action will be taken. This can range from blocking the sender to permanently banning them from the platform.</p>
                <p>By reporting messages that you deem harmful, you play a crucial role in maintaining a safe and respectful environment on Rustless. Your actions help protect yourself and other users from harassment, bullying, and other forms of online abuse. Don't hesitate to report any message that you feel deserves reporting.</p>
              </div>
            </div>
          )}

          {activeSection === 'guide' && (
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">our guide to online safety</h2>
              <p className="text-lg md:text-xl font-bold leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}

          {activeSection === 'guidelines' && (
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">our community guidelines</h2>
              <p className="text-lg md:text-xl font-bold leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}

          {activeSection === 'tools' && (
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">our safety tools</h2>
              <p className="text-lg md:text-xl font-bold leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}

          {activeSection === 'resources' && (
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">our resources</h2>
              <p className="text-lg md:text-xl font-bold leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}

          {activeSection === 'contact' && (
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">contact us</h2>
              <p className="text-lg md:text-xl font-bold leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          )}

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6">faq</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 rounded-lg p-4 bg-gray-50 ${
                    openFAQ === index ? 'bg-gray-100' : ''
                  }`}
                >
                  <div
                    className="flex items-center gap-2 cursor-pointer font-bold text-lg md:text-xl"
                    onClick={() => toggleFAQ(index)}
                  >
                    {openFAQ === index ? (
                      <X className="w-6 h-6 flex-shrink-0" />
                    ) : (
                      <Plus className="w-6 h-6 flex-shrink-0" />
                    )}
                    <span>Q: {item.question}</span>
                  </div>
                  {openFAQ === index && (
                    <div className="mt-2 text-lg md:text-xl font-bold ml-8">
                      A: {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="xl:col-span-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">contact</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Contact Support</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Get help from our team for any issues or questions.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Legal Requests</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                For legal inquiries, please email <a href="mailto:legalrequests@kodex.com" className="text-black underline">legalrequests@kodex.com</a>.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Account Issues</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Contact support inside the app for account-related queries.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Physical Papers</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Send letters to our agent at: 123 Safety Lane, Secure City, SC 12345.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center p-6 md:p-8 space-y-3 bg-white border-t border-gray-100">
        <div className="text-lg md:text-xl font-medium text-black">
          Where You Matter ❤︎
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-base font-medium">
          <Link to="/safety" className="hover:opacity-70 text-black underline underline-offset-4 decoration-1">Safety</Link>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:opacity-70 text-black underline underline-offset-4 decoration-1">Help</a>
          <span className="text-gray-400">|</span>
          <a href="#" className="hover:opacity-70 flex items-center text-black">
            <span className="underline underline-offset-4 decoration-1">Join Us</span>
            <span className="ml-1 text-sm">👋</span>
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
