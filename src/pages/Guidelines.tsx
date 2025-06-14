
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

const Guidelines = () => {
  const [activeSection, setActiveSection] = useState('approach');
  const [openFAQ, setOpenFAQ] = useState<{ [key: string]: number | null }>({
    approach: null,
    respect: null,
    content: null,
    behavior: null,
    enforcement: null,
    reporting: null
  });

  const toggleFAQ = (section: string, index: number) => {
    setOpenFAQ(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index
    }));
  };

  const sections = [
    { id: 'approach', label: 'our community approach' },
    { id: 'respect', label: 'respect & kindness' },
    { id: 'content', label: 'content guidelines' },
    { id: 'behavior', label: 'acceptable behavior' },
    { id: 'enforcement', label: 'enforcement policy' },
    { id: 'reporting', label: 'reporting violations' }
  ];

  const guidelinesContent = {
    approach: [
      {
        question: "What are Rustless Community Guidelines?",
        answer: "Our Community Guidelines are the foundation of how we interact on Rustless. They ensure everyone feels safe, respected, and valued while fostering authentic connections."
      },
      {
        question: "Why do we need community guidelines?",
        answer: "Guidelines help create a positive environment where meaningful relationships can flourish. They protect all users and maintain the quality of interactions on our platform."
      },
      {
        question: "How were these guidelines developed?",
        answer: "Our guidelines were created with input from our community, safety experts, and reflect our core values of authenticity, kindness, and respect."
      }
    ],
    respect: [
      {
        question: "What does respect mean on Rustless?",
        answer: "Respect means treating others with kindness, understanding different perspectives, and communicating in ways that make others feel valued and heard."
      },
      {
        question: "How should I handle disagreements?",
        answer: "Disagreements are natural, but handle them constructively. Focus on the topic, not personal attacks. Listen actively and try to understand different viewpoints."
      },
      {
        question: "What about cultural differences?",
        answer: "We celebrate diversity and encourage learning from different cultures. Be open-minded, ask respectful questions, and avoid making assumptions about others."
      },
      {
        question: "How do I show kindness in my interactions?",
        answer: "Use encouraging language, offer support when appropriate, celebrate others' achievements, and approach conversations with empathy and understanding."
      }
    ],
    content: [
      {
        question: "What content is allowed on Rustless?",
        answer: "We welcome content that is authentic, positive, and contributes to meaningful connections. Share your interests, experiences, and genuine thoughts."
      },
      {
        question: "What content should I avoid sharing?",
        answer: "Avoid sharing content that is hateful, threatening, sexually explicit, involves illegal activities, or could harm others. When in doubt, err on the side of caution."
      },
      {
        question: "Can I share personal information?",
        answer: "Be cautious with personal information. Avoid sharing sensitive details like full addresses, financial information, or passwords. Protect your privacy and others'."
      },
      {
        question: "What about copyrighted material?",
        answer: "Only share content you own or have permission to use. Respect intellectual property rights and give credit where appropriate."
      }
    ],
    behavior: [
      {
        question: "What behaviors are encouraged on Rustless?",
        answer: "We encourage authentic communication, supportive interactions, constructive feedback, celebrating others, and contributing positively to conversations."
      },
      {
        question: "What behaviors are not acceptable?",
        answer: "Harassment, bullying, hate speech, threats, spam, impersonation, and any behavior that makes others feel unsafe or unwelcome is not acceptable."
      },
      {
        question: "How should I handle unwanted contact?",
        answer: "Use our blocking and reporting features if someone makes you uncomfortable. You have the right to control your interactions and feel safe on our platform."
      },
      {
        question: "What about privacy and consent?",
        answer: "Always respect others' privacy. Don't share someone's personal information without consent, and respect boundaries when they're communicated."
      }
    ],
    enforcement: [
      {
        question: "How are guidelines enforced?",
        answer: "We use a combination of automated moderation, community reporting, and human review to enforce our guidelines fairly and consistently."
      },
      {
        question: "What happens if I violate the guidelines?",
        answer: "Depending on the severity, actions may include content removal, warnings, temporary restrictions, or account suspension. We aim to be fair and educational."
      },
      {
        question: "Can I appeal enforcement actions?",
        answer: "Yes, you can appeal any enforcement action you believe was made in error. Contact our support team with details about your case for review."
      },
      {
        question: "How do you ensure fair enforcement?",
        answer: "Our moderation team receives regular training, we have clear policies, and we continuously review and improve our enforcement processes based on community feedback."
      }
    ],
    reporting: [
      {
        question: "How do I report guideline violations?",
        answer: "Use the report button on any content or message that violates our guidelines. Provide specific details to help our team understand the issue."
      },
      {
        question: "What information should I include in reports?",
        answer: "Include specific details about what happened, when it occurred, and why you believe it violates our guidelines. Screenshots can be helpful but aren't required."
      },
      {
        question: "What happens after I submit a report?",
        answer: "Our moderation team reviews all reports promptly. We'll take appropriate action and may follow up with you if we need additional information."
      },
      {
        question: "Will the reported person know I reported them?",
        answer: "No, all reports are confidential. The person you report will not know who submitted the report, protecting your privacy and safety."
      }
    ]
  };

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
          community<br />
          <span className="block">guidelines</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col xl:grid xl:grid-cols-4 gap-8 md:gap-12 px-4 md:px-20 pb-20">
        {/* Sidebar */}
        <div className="xl:col-span-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">guidelines</h2>
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
          {Object.entries(guidelinesContent).map(([sectionKey, items]) => (
            activeSection === sectionKey && (
              <div key={sectionKey}>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  {sections.find(s => s.id === sectionKey)?.label}
                </h2>
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className={`border border-gray-200 rounded-lg p-4 bg-gray-50 ${
                        openFAQ[sectionKey] === index ? 'bg-gray-100' : ''
                      }`}
                    >
                      <div
                        className="flex items-center gap-2 cursor-pointer font-bold text-lg md:text-xl"
                        onClick={() => toggleFAQ(sectionKey, index)}
                      >
                        {openFAQ[sectionKey] === index ? (
                          <X className="w-6 h-6 flex-shrink-0" />
                        ) : (
                          <Plus className="w-6 h-6 flex-shrink-0" />
                        )}
                        <span>Q: {item.question}</span>
                      </div>
                      {openFAQ[sectionKey] === index && (
                        <div className="mt-2 text-lg md:text-xl font-bold ml-8">
                          A: {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Contact Form */}
        <div className="xl:col-span-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">support</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Report Violations</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                See something that violates our guidelines? Report it directly in the app.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Guidelines Questions</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Have questions about our guidelines? Contact <a href="mailto:community@rustlessapp.com" className="text-black underline">community@rustlessapp.com</a>.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Appeal Process</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Think we made a mistake? You can appeal enforcement actions through our support system.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Community Feedback</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Help us improve our guidelines by sharing your feedback and suggestions.
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
    </div>
  );
};

export default Guidelines;
