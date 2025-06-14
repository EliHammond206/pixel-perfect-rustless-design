
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

const JoinUs = () => {
  const [activeSection, setActiveSection] = useState('approach');
  const [openFAQ, setOpenFAQ] = useState<{ [key: string]: number | null }>({
    approach: null,
    opportunities: null,
    application: null,
    benefits: null,
    culture: null,
    growth: null
  });

  const toggleFAQ = (section: string, index: number) => {
    setOpenFAQ(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index
    }));
  };

  const sections = [
    { id: 'approach', label: 'our approach to careers' },
    { id: 'opportunities', label: 'current opportunities' },
    { id: 'application', label: 'application process' },
    { id: 'benefits', label: 'benefits & perks' },
    { id: 'culture', label: 'company culture' },
    { id: 'growth', label: 'growth & development' }
  ];

  const joinContent = {
    approach: [
      {
        question: "Why should you join Rustless?",
        answer: "Join us in building the future of authentic connections. At Rustless, we're creating a platform where meaningful relationships thrive, and every team member plays a crucial role in this mission."
      },
      {
        question: "What makes Rustless different as an employer?",
        answer: "We prioritize authenticity, innovation, and work-life balance. Our team is passionate about creating positive impact while maintaining a supportive and inclusive work environment."
      },
      {
        question: "What kind of people do we look for?",
        answer: "We seek individuals who are passionate about technology, care about user experience, and want to make a positive impact on how people connect online."
      }
    ],
    opportunities: [
      {
        question: "What positions are currently available?",
        answer: "We're actively hiring for engineering, product, design, marketing, and customer success roles. Check our careers page for the most up-to-date openings."
      },
      {
        question: "Do you offer remote work opportunities?",
        answer: "Yes, we offer flexible remote and hybrid work arrangements. We believe in hiring the best talent regardless of location."
      },
      {
        question: "Are internships available?",
        answer: "We offer internship programs for students and recent graduates. These provide hands-on experience with real projects and mentorship from senior team members."
      },
      {
        question: "What about freelance or contract work?",
        answer: "We occasionally work with freelancers and contractors for specific projects. Feel free to reach out with your portfolio and areas of expertise."
      }
    ],
    application: [
      {
        question: "How do I apply for a position?",
        answer: "Submit your application through our careers page with your resume, cover letter, and any relevant portfolio work. We review all applications carefully."
      },
      {
        question: "What's the interview process like?",
        answer: "Our process typically includes an initial screening, technical/skills assessment, team interviews, and a final interview with leadership. We aim to make it collaborative and informative."
      },
      {
        question: "How long does the hiring process take?",
        answer: "Our hiring process usually takes 2-3 weeks from application to offer. We'll keep you updated throughout and respect your time."
      },
      {
        question: "What should I prepare for interviews?",
        answer: "Come ready to discuss your experience, share examples of your work, and ask questions about the role and company. We value curiosity and authentic conversation."
      }
    ],
    benefits: [
      {
        question: "What benefits do you offer?",
        answer: "We provide comprehensive health insurance, unlimited PTO, equity participation, professional development budget, and flexible work arrangements."
      },
      {
        question: "Do you support professional development?",
        answer: "Yes! We offer a generous learning budget, conference attendance, mentorship programs, and opportunities to work on diverse projects."
      },
      {
        question: "What about work-life balance?",
        answer: "We strongly believe in sustainable work practices. Our flexible schedules, unlimited PTO, and remote work options support healthy work-life integration."
      },
      {
        question: "Are there equity opportunities?",
        answer: "All full-time employees receive equity as part of our compensation package. We believe everyone should share in the company's success."
      }
    ],
    culture: [
      {
        question: "What's the company culture like?",
        answer: "Our culture values authenticity, collaboration, innovation, and kindness. We foster an environment where everyone can do their best work and grow professionally."
      },
      {
        question: "How do you support diversity and inclusion?",
        answer: "D&I is core to who we are. We actively work to build diverse teams, create inclusive practices, and ensure everyone feels valued and heard."
      },
      {
        question: "What are the team dynamics like?",
        answer: "We have small, cross-functional teams that work closely together. Communication is open, feedback is constructive, and collaboration is encouraged."
      },
      {
        question: "How do you handle remote team collaboration?",
        answer: "We use modern collaboration tools and have established practices for async communication, regular check-ins, and virtual team building activities."
      }
    ],
    growth: [
      {
        question: "What growth opportunities are available?",
        answer: "We support career advancement through mentorship, stretch assignments, leadership training, and opportunities to take on increasing responsibilities."
      },
      {
        question: "Do you promote from within?",
        answer: "Absolutely! We prioritize internal promotions and career progression. Many of our senior roles have been filled by team members who grew with the company."
      },
      {
        question: "What about skill development?",
        answer: "We encourage continuous learning through courses, workshops, conferences, and hands-on projects. Your growth is an investment in our shared success."
      },
      {
        question: "How do you support career transitions?",
        answer: "We help team members explore different roles and departments within the company. Internal mobility is encouraged and supported with proper training."
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
          join<br />
          <span className="block">us</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col xl:grid xl:grid-cols-4 gap-8 md:gap-12 px-4 md:px-20 pb-20">
        {/* Sidebar */}
        <div className="xl:col-span-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">careers</h2>
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
          {Object.entries(joinContent).map(([sectionKey, items]) => (
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
          <h2 className="text-2xl md:text-4xl font-bold mb-6">apply</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Submit Application</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Ready to join our team? Send us your resume and cover letter.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Career Inquiries</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Questions about roles or company culture? Reach out to <a href="mailto:careers@rustlessapp.com" className="text-black underline">careers@rustlessapp.com</a>.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Internships</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Interested in internship opportunities? Contact our talent team.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Freelance Work</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Send your portfolio and expertise to: freelance@rustlessapp.com
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

export default JoinUs;
