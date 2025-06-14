
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Help = () => {
  const [activeSection, setActiveSection] = useState('approach');

  const sections = [
    { id: 'approach', label: 'our approach to help' },
    { id: 'moderation', label: 'moderation help' },
    { id: 'reporting', label: 'reporting help' },
    { id: 'account', label: 'account help' },
    { id: 'technical', label: 'technical help' },
    { id: 'billing', label: 'billing help' }
  ];

  const helpContent = {
    approach: {
      miniParagraphs: [
        {
          title: "general help",
          questions: [
            {
              question: "How can we help you today?",
              answer: "We're here to help you get the most out of Rustless. Browse through our help sections or contact our support team directly for personalized assistance."
            },
            {
              question: "What support options are available?",
              answer: "We offer multiple support channels including in-app help, email support, and our comprehensive help center. Our team is available 24/7 to assist you."
            },
            {
              question: "How quickly can I expect a response?",
              answer: "We typically respond to support requests within 2-4 hours during business hours, and within 24 hours for all other times."
            }
          ]
        },
        {
          title: "getting started",
          questions: [
            {
              question: "How can we help you today?",
              answer: "We're here to help you get the most out of Rustless. Browse through our help sections or contact our support team directly for personalized assistance."
            },
            {
              question: "What support options are available?",
              answer: "We offer multiple support channels including in-app help, email support, and our comprehensive help center. Our team is available 24/7 to assist you."
            }
          ]
        },
        {
          title: "basic features",
          questions: [
            {
              question: "How quickly can I expect a response?",
              answer: "We typically respond to support requests within 2-4 hours during business hours, and within 24 hours for all other times."
            },
            {
              question: "What support options are available?",
              answer: "We offer multiple support channels including in-app help, email support, and our comprehensive help center. Our team is available 24/7 to assist you."
            }
          ]
        }
      ]
    },
    moderation: {
      miniParagraphs: [
        {
          title: "moderation",
          questions: [
            {
              question: "What is and isn't allowed on Rustless?",
              answer: "Our Community Guidelines and Terms of Service provide an overview of behaviors and content that are and are not permitted on Rustless. In general, Rustless is a place for you to have fun, be kind, and make connections; we recommend keeping your communications positive and lighthearted to uplift your Rustless community."
            },
            {
              question: "Can I block message senders on Rustless?",
              answer: "Yes; to block an individual, just tap the Report button (▲), report the message, and tap 'Block user'. The message will be deleted from your inbox and the user will be forbidden from sending you any further messages."
            },
            {
              question: "How does content moderation work on Rustless?",
              answer: "We use a combination of AI-powered moderation and human review to ensure content meets our community guidelines. Messages are scanned for inappropriate content before delivery."
            }
          ]
        },
        {
          title: "reporting",
          questions: [
            {
              question: "What is and isn't allowed on Rustless?",
              answer: "Our Community Guidelines and Terms of Service provide an overview of behaviors and content that are and are not permitted on Rustless. In general, Rustless is a place for you to have fun, be kind, and make connections; we recommend keeping your communications positive and lighthearted to uplift your Rustless community."
            },
            {
              question: "Can I block message senders on Rustless?",
              answer: "Yes; to block an individual, just tap the Report button (▲), report the message, and tap 'Block user'. The message will be deleted from your inbox and the user will be forbidden from sending you any further messages."
            }
          ]
        },
        {
          title: "content guidelines",
          questions: [
            {
              question: "How does content moderation work on Rustless?",
              answer: "We use a combination of AI-powered moderation and human review to ensure content meets our community guidelines. Messages are scanned for inappropriate content before delivery."
            },
            {
              question: "What happens when content is flagged?",
              answer: "Flagged content is reviewed by our moderation team. Depending on the severity, actions may include content removal, user warnings, or account restrictions."
            }
          ]
        }
      ]
    },
    reporting: {
      miniParagraphs: [
        {
          title: "reporting",
          questions: [
            {
              question: "What is and isn't allowed on Rustless?",
              answer: "Our Community Guidelines and Terms of Service provide an overview of behaviors and content that are and are not permitted on Rustless. In general, Rustless is a place for you to have fun, be kind, and make connections; we recommend keeping your communications positive and lighthearted to uplift your Rustless community."
            },
            {
              question: "Can I block message senders on Rustless?",
              answer: "Yes; to block an individual, just tap the Report button (▲), report the message, and tap 'Block user'. The message will be deleted from your inbox and the user will be forbidden from sending you any further messages."
            }
          ]
        },
        {
          title: "how to report",
          questions: [
            {
              question: "How do I report inappropriate content or behavior?",
              answer: "You can report content by tapping the Report button (⚠) on any message. Select the appropriate reason and provide additional details if needed."
            },
            {
              question: "What types of content should I report?",
              answer: "Report any content that violates our community guidelines, including harassment, spam, inappropriate images, or threatening behavior."
            }
          ]
        },
        {
          title: "after reporting",
          questions: [
            {
              question: "What happens after I submit a report?",
              answer: "Reports are reviewed by our moderation team within 24 hours. We'll take appropriate action and may follow up with you if additional information is needed."
            },
            {
              question: "Can I report someone anonymously?",
              answer: "Yes, all reports are handled confidentially. The reported user will not know who submitted the report."
            }
          ]
        }
      ]
    },
    account: {
      miniParagraphs: [
        {
          title: "account management",
          questions: [
            {
              question: "How do I create a Rustless account?",
              answer: "Download the Rustless app and follow the signup process. You'll need a valid email address and phone number for verification."
            },
            {
              question: "I forgot my password. How can I reset it?",
              answer: "Use the 'Forgot Password' link on the login screen. We'll send a reset link to your registered email address."
            }
          ]
        },
        {
          title: "profile settings",
          questions: [
            {
              question: "How do I delete my account?",
              answer: "You can delete your account from the Settings menu in the app. This action is permanent and cannot be undone."
            },
            {
              question: "Can I change my username?",
              answer: "Usernames can be changed once every 30 days from your profile settings. Choose carefully as frequent changes may confuse your connections."
            }
          ]
        },
        {
          title: "privacy & security",
          questions: [
            {
              question: "How do I create a Rustless account?",
              answer: "Download the Rustless app and follow the signup process. You'll need a valid email address and phone number for verification."
            },
            {
              question: "I forgot my password. How can I reset it?",
              answer: "Use the 'Forgot Password' link on the login screen. We'll send a reset link to your registered email address."
            }
          ]
        }
      ]
    },
    technical: {
      miniParagraphs: [
        {
          title: "troubleshooting",
          questions: [
            {
              question: "The app is crashing. What should I do?",
              answer: "Try restarting the app and your device. If issues persist, check for app updates or contact support with your device details."
            },
            {
              question: "Messages aren't sending. How can I fix this?",
              answer: "Check your internet connection and app permissions. Try switching between WiFi and mobile data to isolate the issue."
            }
          ]
        },
        {
          title: "notifications",
          questions: [
            {
              question: "I'm not receiving notifications. What's wrong?",
              answer: "Ensure notifications are enabled in your device settings and within the Rustless app. Check if Do Not Disturb mode is active."
            },
            {
              question: "The app is running slowly. How can I improve performance?",
              answer: "Clear the app cache, close other running apps, and ensure you have sufficient storage space on your device."
            }
          ]
        },
        {
          title: "connectivity",
          questions: [
            {
              question: "Messages aren't sending. How can I fix this?",
              answer: "Check your internet connection and app permissions. Try switching between WiFi and mobile data to isolate the issue."
            },
            {
              question: "The app is crashing. What should I do?",
              answer: "Try restarting the app and your device. If issues persist, check for app updates or contact support with your device details."
            }
          ]
        }
      ]
    },
    billing: {
      miniParagraphs: [
        {
          title: "billing",
          questions: [
            {
              question: "How much does Rustless cost?",
              answer: "Rustless offers both free and premium plans. Check our pricing page in the app for current subscription options and features."
            },
            {
              question: "How do I cancel my subscription?",
              answer: "Cancel your subscription through your app store (iOS App Store or Google Play Store) or contact our billing support team."
            }
          ]
        },
        {
          title: "payments",
          questions: [
            {
              question: "I was charged incorrectly. How do I get a refund?",
              answer: "Contact our billing support team with your transaction details. We'll review your case and process refunds for eligible charges."
            },
            {
              question: "When will my subscription renew?",
              answer: "Subscription renewal dates are shown in the app settings under 'Subscription'. You'll also receive reminder notifications before renewal."
            }
          ]
        },
        {
          title: "subscriptions",
          questions: [
            {
              question: "How much does Rustless cost?",
              answer: "Rustless offers both free and premium plans. Check our pricing page in the app for current subscription options and features."
            },
            {
              question: "How do I cancel my subscription?",
              answer: "Cancel your subscription through your app store (iOS App Store or Google Play Store) or contact our billing support team."
            }
          ]
        }
      ]
    }
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
          help<br />
          <span className="block">center</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col xl:grid xl:grid-cols-4 gap-8 md:gap-12 px-4 md:px-20 pb-20">
        {/* Sidebar */}
        <div className="xl:col-span-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">help</h2>
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
          {helpContent[activeSection] && (
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {sections.find(s => s.id === activeSection)?.label}
              </h2>
              
              {/* Mini Paragraphs */}
              <div className="space-y-8">
                {helpContent[activeSection].miniParagraphs.map((miniParagraph, paragraphIndex) => (
                  <div key={paragraphIndex}>
                    <h3 className="text-2xl md:text-4xl font-bold mb-4">
                      {miniParagraph.title}
                    </h3>
                    <div className="space-y-4">
                      {miniParagraph.questions.map((item, index) => (
                        <Collapsible key={index}>
                          <CollapsibleTrigger className="w-full">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                              <Plus className="w-5 h-5 flex-shrink-0 group-data-[state=open]:hidden" />
                              <Minus className="w-5 h-5 flex-shrink-0 hidden group-data-[state=open]:block" />
                              <span className="text-left font-bold text-lg md:text-xl">
                                Q: {item.question}
                              </span>
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="p-4 ml-8 text-lg md:text-xl font-bold bg-gray-50 border-l border-r border-b border-gray-200 rounded-b-lg">
                              A: {item.answer}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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

export default Help;
