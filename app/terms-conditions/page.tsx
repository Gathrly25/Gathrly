// src/app/terms-conditions/page.tsx
"use client";

import { FileText, Shield, AlertCircle, Mail, MapPin, ArrowLeft, Users, Calendar, CreditCard, Scale, X, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Footer } from "../components/footer";

// Acknowledgment Component
function TermsAndConditionsAcknowledgment() {
  const [showAlert, setShowAlert] = useState(false);
  
  useEffect(() => {
    const hasAcknowledged = localStorage.getItem("gathrlyTermsAcknowledged");
    if (!hasAcknowledged) {
      const timer = setTimeout(() => setShowAlert(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAcknowledge = () => {
    localStorage.setItem("gathrlyTermsAcknowledged", "true");
    setShowAlert(false);
  };
  
  const handleClose = () => setShowAlert(false);
  
  if (!showAlert) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md">
        <div className="bg-gradient-to-r from-[#00143f] to-[#071F4F] text-white p-8 rounded-2xl shadow-2xl">
          <button onClick={handleClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center mb-4">Welcome to Gathrly</h3>
          
          <div className="space-y-4 text-center mb-8">
            <p className="text-lg font-medium">Please read and acknowledge our Terms & Conditions before using the platform.</p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-white/90">By clicking "I Agree", you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={handleAcknowledge} className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
              <CheckCircle className="w-5 h-5" />
              I Agree to Terms
            </button>
            <button onClick={handleClose} className="flex-1 border border-white/30 text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors">
              Read First
            </button>
          </div>
          
          <p className="text-center text-white/60 text-sm mt-6">You can review our Terms at any time in the footer section.</p>
        </div>
      </div>
    </div>
  );
}

export default function TermsAndConditions() {
  const router = useRouter();
  
  const sections = [
    {
      title: "Acceptance of Terms",
      content: (
        <div className="space-y-3">
          <p>By accessing or using Gathrly's website, mobile application, or any related services (collectively, the "Platform"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, please do not use our Platform.</p>
          <p>These Terms constitute a legally binding agreement between you ("User", "you", "your") and Gathrly ("we", "us", "our"). These Terms should be read together with our <Link href="/privacy-policy" className="text-amber-600 hover:text-amber-700 underline">Privacy Policy</Link>.</p>
        </div>
      )
    },
    {
      title: "Service Description",
      content: (
        <div className="space-y-3">
          <p>Gathrly is a social event discovery and management platform that enables users to:</p>
          <ul className="space-y-2 ml-6">
            {[
              "Discover and find local events, activities, and gatherings",
              "Create and host your own events",
              "RSVP and manage event attendance",
              "Connect with other users who share similar interests",
              "Receive personalized event recommendations",
              "Join communities and interest-based groups"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Eligibility and Account Registration",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Eligibility Requirements</h4>
            <p>To use Gathrly, you must:</p>
            <ul className="space-y-1 mt-2 ml-4">
              {[
                "Be at least 18 years of age (or the age of majority in your jurisdiction)",
                "Have the capacity to enter into a binding legal agreement",
                "Not be prohibited from using the Platform by applicable laws",
                "Provide accurate, current, and complete registration information"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Account Security</h4>
            <p>You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:</p>
            <ul className="space-y-1 mt-2 ml-4">
              {[
                "Notify us immediately of any unauthorized use of your account",
                "Ensure you log out of your account after each session",
                "Use a strong, unique password for your account"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "User Conduct and Platform Rules",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">You agree to:</h4>
            <ul className="space-y-1 ml-4">
              {[
                "Use the Platform lawfully and responsibly",
                "Respect the rights and privacy of other users",
                "Provide accurate information about events you create",
                "Comply with all applicable laws and regulations"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">You must NOT:</h4>
            <ul className="space-y-2 ml-4">
              {[
                "Post or promote illegal, harmful, threatening, abusive, harassing, defamatory, or discriminatory content",
                "Impersonate any person or entity or falsely state your affiliation",
                "Use the Platform for any unauthorized commercial purposes",
                "Interfere with or disrupt the Platform or its servers",
                "Attempt to gain unauthorized access to any portion of the Platform",
                "Collect user information without consent",
                "Create fraudulent, misleading, or deceptive events",
                "Use automated systems (bots, scrapers) to access the Platform"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Event Hosting and Participation",
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800">Important Disclaimer for Events</p>
                <p className="text-sm text-amber-700 mt-1">Gathrly is a platform for event discovery and management. We do not organize, vet, endorse, or supervise events. Users attend events at their own risk.</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">For Event Hosts</h4>
            <ul className="space-y-1 ml-4">
              {[
                "You are solely responsible for your events, including all information, safety protocols, and legal compliance",
                "You must provide accurate event details (date, time, location, description)",
                "You agree to comply with all applicable laws regarding event organization",
                "You are responsible for handling any issues or disputes that arise from your events",
                "We reserve the right to remove any event that violates these Terms"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">For Event Participants</h4>
            <ul className="space-y-1 ml-4">
              {[
                "You attend events at your own risk",
                "You should exercise reasonable judgment when attending events",
                "You agree to respect hosts and other participants",
                "You are responsible for your own safety and well-being",
                "You should report any inappropriate behavior or safety concerns"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Intellectual Property",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Our Intellectual Property</h4>
            <p>The Platform and its original content, features, functionality, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are owned by Gathrly and protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Limited License</h4>
            <p>We grant you a limited, revocable, non-exclusive, non-transferable license to access and use the Platform for personal, non-commercial purposes. You may not:</p>
            <ul className="space-y-1 mt-2 ml-4">
              {[
                "Copy, modify, distribute, sell, or lease any part of our Platform",
                "Reverse engineer or attempt to extract the source code",
                "Use our trademarks or branding without permission"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">User Content</h4>
            <p>You retain ownership of content you post on Gathrly (event descriptions, photos, reviews, etc.). By posting content, you grant Gathrly a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and distribute such content for the purpose of operating and improving the Platform.</p>
          </div>
        </div>
      )
    },
    {
      title: "Prohibited Activities",
      content: (
        <div className="space-y-3">
          <p>The following activities are strictly prohibited on Gathrly:</p>
          <ul className="space-y-2 ml-6">
            {[
              "Creating fake events or misleading event information",
              "Using the Platform to promote illegal activities",
              "Harassing, bullying, or threatening other users",
              "Posting spam or unauthorized commercial content",
              "Attempting to bypass event fees or payment systems",
              "Sharing account credentials with others",
              "Using the Platform to collect data for competitive purposes"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-red-50 p-3 rounded-lg mt-3">
            <p className="text-sm text-red-700">Violation of these prohibitions may result in immediate account termination and legal action.</p>
          </div>
        </div>
      )
    },
    {
      title: "Payments and Subscriptions",
      content: (
        <div className="space-y-4">
          <p>Gathrly currently offers free access to core features. In the future, we may introduce:</p>
          <ul className="space-y-1 ml-6">
            {[
              "Premium subscription plans with enhanced features",
              "Paid event creation for commercial hosts",
              "Ticket sales and payment processing for events"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Payment Terms</h4>
            <p>If paid features are introduced:</p>
            <ul className="space-y-1 mt-2 ml-4">
              {[
                "You agree to pay all applicable fees and taxes",
                "Fees are non-refundable unless otherwise stated",
                "We reserve the right to change pricing with advance notice",
                "Subscription auto-renewal terms will be clearly disclosed"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Termination",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Termination by You</h4>
            <p>You may delete your account at any time through your account settings or by contacting us at <a href="mailto:support@gathrly.com" className="text-amber-600 hover:text-amber-700">support@gathrly.com</a>. Upon deletion, your personal data will be removed within 90 days.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Termination by Us</h4>
            <p>We may terminate or suspend your account immediately, without prior notice, for any reason including:</p>
            <ul className="space-y-1 mt-2 ml-4">
              {[
                "Violation of these Terms",
                "Fraudulent or deceptive behavior",
                "Harassment or harm to other users",
                "Unauthorized commercial use",
                "Legal requirements or court orders"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Effect of Termination</h4>
            <p>Upon termination, your right to use the Platform ceases immediately. Provisions regarding intellectual property, liability, indemnification, and dispute resolution shall survive termination.</p>
          </div>
        </div>
      )
    },
    {
      title: "Disclaimer of Warranties",
      content: (
        <div className="space-y-3">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold text-gray-800">THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.</p>
            <p className="mt-2">Gathrly makes no representations or warranties of any kind, express or implied, regarding:</p>
            <ul className="space-y-1 mt-2 ml-6">
              {[
                "The operation or availability of the Platform",
                "The accuracy, reliability, or completeness of any information",
                "The safety, quality, or legality of events listed",
                "The conduct of event hosts or participants"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p>To the fullest extent permitted by law, we disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
        </div>
      )
    },
    {
      title: "Limitation of Liability",
      content: (
        <div className="space-y-3">
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800">TO THE MAXIMUM EXTENT PERMITTED BY LAW, GATHRLY SHALL NOT BE LIABLE FOR:</p>
                <ul className="space-y-1 mt-2 ml-4">
                  {[
                    "Any indirect, incidental, special, consequential, or punitive damages",
                    "Loss of profits, data, use, goodwill, or other intangible losses",
                    "Personal injury, property damage, or any harm arising from events",
                    "Unauthorized access to or alteration of your data",
                    "Conduct or content of third parties on the Platform"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p>If we are found liable, our total liability shall not exceed £100 GBP or the amount you paid to use the Service in the preceding 12 months, whichever is greater.</p>
        </div>
      )
    },
    {
      title: "Indemnification",
      content: (
        <div className="space-y-3">
          <p>You agree to indemnify, defend, and hold harmless Gathrly, its owner, affiliates, employees, agents, and licensors from any claims, damages, obligations, losses, liabilities, costs, or expenses arising from:</p>
          <ul className="space-y-1 ml-6">
            {[
              "Your use of the Platform",
              "Your violation of these Terms",
              "Your violation of any third-party rights",
              "Your conduct at events organized through Gathrly",
              "Any content you post or share"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Governing Law and Dispute Resolution",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Governing Law</h4>
            <p>These Terms are governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Dispute Resolution</h4>
            <p>Before initiating any legal action, you agree to contact us at <a href="mailto:legal@gathrly.com" className="text-amber-600 hover:text-amber-700">legal@gathrly.com</a> to attempt informal resolution. Any disputes not resolved informally will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </div>
        </div>
      )
    },
    {
      title: "Changes to Terms",
      content: (
        <div className="space-y-3">
          <p>We reserve the right to modify these Terms at any time. If we make material changes:</p>
          <ul className="space-y-1 ml-6">
            {[
              "We will update the 'Last Updated' date at the top",
              "We will notify registered users via email or in-app notification",
              "Material changes will be effective 30 days after notice"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>Your continued use of Gathrly after changes take effect constitutes acceptance of the revised Terms.</p>
        </div>
      )
    },
    {
      title: "General Provisions",
      content: (
        <div className="space-y-3">
          <ul className="space-y-2 ml-6">
            {[
              "These Terms, together with our Privacy Policy, constitute the entire agreement between you and Gathrly",
              "If any provision is found invalid or unenforceable, the remaining provisions remain in effect",
              "Our failure to enforce any right does not waive that right",
              "We are not liable for failure to perform obligations due to causes beyond our reasonable control",
              "You may not transfer your rights or obligations under these Terms without our written consent"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-[#00143f] rounded-full mt-2"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: "Contact Us",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-[#00143f]/5 to-amber-50/50 p-6 rounded-xl">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="w-6 h-6 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#00143f] text-lg">Gathrly Support</h3>
                <p className="text-[#00143f]/80">We're here to help with any questions</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <a href="mailto:support@gathrly.com" className="text-amber-600 hover:text-amber-700 font-medium">
                  support@gathrly.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <a href="mailto:legal@gathrly.com" className="text-amber-600 hover:text-amber-700 font-medium">
                  legal@gathrly.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-[#00143f]/80">Gathrly HQ, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <TermsAndConditionsAcknowledgment />
      <section className="min-h-screen bg-white pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button 
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-[#00143f] hover:text-amber-600 transition-colors mb-6 px-3 py-2 bg-gradient-to-r from-[#EAF1FF] to-[#EAF1FF]/80 rounded-lg hover:from-amber-50 hover:to-amber-50/50 border border-[#EAF1FF] hover:border-amber-500 w-max shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold">Back to Home</span>
          </button>

          {/* Title Section */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#00143f] mb-3">
              Terms and Conditions
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Effective Date</p>
                <p className="font-semibold text-[#00143f]">1 December 2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Updated</p>
                <p className="font-semibold text-[#00143f]">1 December 2024</p>
              </div>
            </div>
            <p className="text-gray-600">
              Please read these terms carefully before using Gathrly. By accessing or using our platform, you agree to be bound by these Terms and Conditions.
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8 p-4 bg-amber-50 rounded-lg">
            <p>Welcome to Gathrly ("we", "us", "our"). These Terms and Conditions ("Terms") govern your access to and use of the Gathrly website, mobile application, and related services (the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, you must not use the Platform. These Terms should be read together with our <Link href="/privacy-policy" className="text-amber-600 hover:text-amber-700 underline">Privacy Policy</Link>.</p>
          </div>

          {/* All Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <div key={idx} id={`section-${idx}`}>
                <h2 className="text-xl font-bold text-[#00143f] mb-3 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                <div className="text-gray-700 space-y-4 mt-3">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-gray-300 text-center text-sm text-gray-500">
            <p>By using Gathrly, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}