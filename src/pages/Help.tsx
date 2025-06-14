
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Help = () => {
  const faqItems = [
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
    },
    {
      question: "How do I change my profile picture?",
      answer: "Go to your profile by tapping your avatar in the top left corner. Tap on your current profile picture and select 'Change Photo'. You can choose from your camera roll or take a new photo."
    },
    {
      question: "I forgot my password. How can I reset it?",
      answer: "On the login screen, tap 'Forgot Password?' and enter your email address. We'll send you a secure link to reset your password. Check your spam folder if you don't see the email within a few minutes."
    },
    {
      question: "How do I send photos and videos?",
      answer: "In any chat, tap the camera icon next to the message box. You can take a new photo/video or select from your camera roll. You can also send multiple photos at once by selecting them in your gallery."
    },
    {
      question: "Can I edit or delete messages after sending?",
      answer: "Yes! Long press on any message you've sent to see options to edit or delete it. Edited messages will show an 'edited' indicator, and deleted messages will be removed for everyone in the chat."
    },
    {
      question: "The app is crashing. What should I do?",
      answer: "First, try force-closing and reopening the app. If that doesn't work, restart your device. Make sure you have the latest version of Rustless installed. If problems persist, contact our support team with your device model and operating system version."
    },
    {
      question: "Messages aren't sending. How can I fix this?",
      answer: "Check your internet connection - try switching between WiFi and mobile data. Ensure Rustless has permission to use your device's network. If you're in a low-signal area, messages will send automatically when connection improves."
    },
    {
      question: "How does Rustless protect my privacy?",
      answer: "All messages are encrypted end-to-end, meaning only you and the recipient can read them. We don't store your messages on our servers after they're delivered, and we never sell your data to third parties."
    },
    {
      question: "Who can see my profile information?",
      answer: "By default, only your friends can see your full profile. You can adjust these settings in Privacy > Profile Visibility. You can also control who can message you and add you to groups."
    },
    {
      question: "What premium features does Rustless offer?",
      answer: "Rustless Premium includes unlimited cloud storage, advanced chat customization, priority customer support, exclusive themes, and early access to new features. Check the Premium tab in settings for current features."
    },
    {
      question: "How much does Rustless Premium cost?",
      answer: "Rustless Premium is available for $4.99/month or $49.99/year. We occasionally offer promotional pricing for new subscribers. You can see current pricing in the app under Settings > Premium."
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

      {/* FAQ Accordion */}
      <div className="px-4 md:px-20 py-8">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-bold text-lg md:text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg font-medium text-gray-800">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Help;
