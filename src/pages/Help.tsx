
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

const Help = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [openFAQ, setOpenFAQ] = useState<{ [key: string]: number | null }>({
    'getting-started': null,
    'account': null,
    'messaging': null,
    'technical': null,
    'privacy': null,
    'billing': null
  });

  const toggleFAQ = (section: string, index: number) => {
    setOpenFAQ(prev => ({
      ...prev,
      [section]: prev[section] === index ? null : index
    }));
  };

  const sections = [
    { id: 'getting-started', label: 'getting started' },
    { id: 'account', label: 'account help' },
    { id: 'messaging', label: 'messaging help' },
    { id: 'technical', label: 'technical help' },
    { id: 'privacy', label: 'privacy & safety' },
    { id: 'billing', label: 'billing help' }
  ];

  const helpContent = {
    'getting-started': [
      {
        question: "How do I create a Rustless account?",
        answer: "Download the Rustless app from the App Store or Google Play Store. Open the app and follow the signup process - you'll need a valid email address and phone number for verification. The whole process takes less than 2 minutes!"
      },
      {
        question: "How do I add friends on Rustless?",
        answer: "You can add friends by searching for their username, scanning their QR code, or importing contacts from your phone. Go to the 'Friends' tab and tap the '+' button to see all available options for connecting with people."
      },
      {
        question: "What makes Rustless different from other messaging apps?",
        answer: "Rustless focuses on authentic connections and meaningful conversations. We prioritize your privacy, have no ads, and use advanced features to help you stay connected with the people who matter most to you."
      },
      {
        question: "Is Rustless free to use?",
        answer: "Yes! Rustless is free to download and use. We also offer premium features through our subscription plans for users who want additional functionality and customization options."
      }
    ],
    'account': [
      {
        question: "How do I change my profile picture?",
        answer: "Go to your profile by tapping your avatar in the top left corner. Tap on your current profile picture and select 'Change Photo'. You can choose from your camera roll or take a new photo."
      },
      {
        question: "I forgot my password. How can I reset it?",
        answer: "On the login screen, tap 'Forgot Password?' and enter your email address. We'll send you a secure link to reset your password. Check your spam folder if you don't see the email within a few minutes."
      },
      {
        question: "How do I change my username?",
        answer: "Go to Settings > Account > Username. You can change your username once every 30 days. Choose carefully as frequent changes may confuse your friends and connections."
      },
      {
        question: "How do I delete my account?",
        answer: "Go to Settings > Account > Delete Account. This action is permanent and cannot be undone. All your messages, photos, and data will be permanently removed from our servers."
      }
    ],
    'messaging': [
      {
        question: "How do I send photos and videos?",
        answer: "In any chat, tap the camera icon next to the message box. You can take a new photo/video or select from your camera roll. You can also send multiple photos at once by selecting them in your gallery."
      },
      {
        question: "Can I edit or delete messages after sending?",
        answer: "Yes! Long press on any message you've sent to see options to edit or delete it. Edited messages will show an 'edited' indicator, and deleted messages will be removed for everyone in the chat."
      },
      {
        question: "How do group chats work?",
        answer: "Create a group chat by tapping the '+' button in your chats list and selecting 'New Group'. Add friends, give your group a name, and start chatting! Group admins can add/remove members and change group settings."
      },
      {
        question: "What are Rustless reactions?",
        answer: "You can react to messages by double-tapping them or long-pressing and selecting a reaction. We have a variety of emoji reactions to help you express yourself quickly without typing a response."
      }
    ],
    'technical': [
      {
        question: "The app is crashing. What should I do?",
        answer: "First, try force-closing and reopening the app. If that doesn't work, restart your device. Make sure you have the latest version of Rustless installed. If problems persist, contact our support team with your device model and operating system version."
      },
      {
        question: "Messages aren't sending. How can I fix this?",
        answer: "Check your internet connection - try switching between WiFi and mobile data. Ensure Rustless has permission to use your device's network. If you're in a low-signal area, messages will send automatically when connection improves."
      },
      {
        question: "I'm not receiving notifications. What's wrong?",
        answer: "Go to Settings > Notifications and make sure they're enabled. Also check your device's system settings to ensure Rustless has notification permissions. Make sure Do Not Disturb mode isn't blocking notifications."
      },
      {
        question: "How do I backup my chats?",
        answer: "Go to Settings > Chats > Backup. You can backup to iCloud (iOS) or Google Drive (Android). We recommend enabling automatic daily backups to never lose your important conversations."
      }
    ],
    'privacy': [
      {
        question: "How does Rustless protect my privacy?",
        answer: "All messages are encrypted end-to-end, meaning only you and the recipient can read them. We don't store your messages on our servers after they're delivered, and we never sell your data to third parties."
      },
      {
        question: "Who can see my profile information?",
        answer: "By default, only your friends can see your full profile. You can adjust these settings in Privacy > Profile Visibility. You can also control who can message you and add you to groups."
      },
      {
        question: "How do I block someone?",
        answer: "Go to the person's profile and tap 'Block User'. Blocked users cannot message you, see your profile, or add you to groups. You can unblock users anytime from Settings > Privacy > Blocked Users."
      },
      {
        question: "Can I report inappropriate content?",
        answer: "Yes, long-press on any message and select 'Report'. Choose the appropriate reason and provide additional details. Our moderation team reviews all reports within 24 hours and takes appropriate action."
      }
    ],
    'billing': [
      {
        question: "What premium features does Rustless offer?",
        answer: "Rustless Premium includes unlimited cloud storage, advanced chat customization, priority customer support, exclusive themes, and early access to new features. Check the Premium tab in settings for current features."
      },
      {
        question: "How much does Rustless Premium cost?",
        answer: "Rustless Premium is available for $4.99/month or $49.99/year. We occasionally offer promotional pricing for new subscribers. You can see current pricing in the app under Settings > Premium."
      },
      {
        question: "How do I cancel my subscription?",
        answer: "For iOS: Go to Settings > Subscriptions in your iPhone settings. For Android: Open Google Play Store > Subscriptions. You can also contact our support team for assistance with cancellation."
      },
      {
        question: "I was charged incorrectly. How do I get a refund?",
        answer: "Contact our billing support team at billing@rustless.com with your transaction details and account information. We'll review your case and process refunds for eligible charges within 3-5 business days."
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
          help<br />
          <span className="block">center</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col xl:grid xl:grid-cols-4 gap-8 md:gap-12 px-4 md:px-20 pb-20">
        {/* Sidebar */}
        <div className="xl:col-span-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">help topics</h2>
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
          {sections.map((section) => (
            activeSection === section.id && (
              <div key={section.id}>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">{section.label}</h2>
                <div className="space-y-4">
                  {helpContent[section.id as keyof typeof helpContent].map((item, index) => (
                    <div
                      key={index}
                      className={`border border-gray-200 rounded-lg p-4 bg-gray-50 transition-colors ${
                        openFAQ[section.id] === index ? 'bg-gray-100' : 'hover:bg-gray-75'
                      }`}
                    >
                      <div
                        className="flex items-start gap-3 cursor-pointer"
                        onClick={() => toggleFAQ(section.id, index)}
                      >
                        <div className="flex-shrink-0 mt-1">
                          {openFAQ[section.id] === index ? (
                            <X className="w-5 h-5" />
                          ) : (
                            <Plus className="w-5 h-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg md:text-xl mb-1">
                            {item.question}
                          </h3>
                          {openFAQ[section.id] === index && (
                            <div className="text-base md:text-lg font-medium text-gray-800 mt-3 leading-relaxed">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* Contact Form */}
        <div className="xl:col-span-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">need more help?</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Contact Support</h3>
              <p className="text-sm md:text-base font-medium text-gray-700 mb-3">
                Get help from our team for any issues or questions.
              </p>
              <button className="w-full bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Open Support Chat
              </button>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Email Us</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Send us an email at <a href="mailto:help@rustless.com" className="text-black underline">help@rustless.com</a>
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Community Forum</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Connect with other users and get tips in our community forum.
              </p>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="text-lg md:text-xl font-bold mb-2">Video Tutorials</h3>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Watch step-by-step guides on our YouTube channel.
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

export default Help;
