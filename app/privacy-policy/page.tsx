// src/app/privacy-policy/page.tsx
"use client";

import { FileText, Shield, Mail, MapPin, ExternalLink, Globe, Database, Lock, Eye, Trash2, Bell, Cookie, Users, Activity, Smartphone, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Footer } from "../components/footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: (
        <div className="space-y-4">
          <p>Gathrly collects information to provide better services to all our users. We collect information in the following ways:</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#00143f] mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-500" />
                Account Information
              </h4>
              <p>When you create an account, we collect:</p>
              <ul className="space-y-1 mt-2 ml-4">
                {[
                  "Name or username",
                  "Email address",
                  "Profile photo (optional)",
                  "Password (encrypted)",
                  "Location (optional)",
                  "Interests and preferences for event recommendations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#00143f] mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4 text-amber-500" />
                Event and Interaction Data
              </h4>
              <p>When you use Gathrly, we collect information about:</p>
              <ul className="space-y-1 mt-2 ml-4">
                {[
                  "Events you create, join, or save",
                  "RSVPs and attendance history",
                  "Event feedback and ratings",
                  "Messages and communications within the platform",
                  "Groups or communities you join"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#00143f] mb-2 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-amber-500" />
                Device and Usage Data
              </h4>
              <p>We automatically collect technical data such as:</p>
              <ul className="space-y-1 mt-2 ml-4">
                {[
                  "Device type and operating system",
                  "IP address and browser type",
                  "App usage events and crash logs",
                  "Referring website or application",
                  "Pages visited and time spent"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#00143f] mb-2">Location Information</h4>
              <p>With your consent, we collect and process location information to:</p>
              <ul className="space-y-1 mt-2 ml-4">
                {[
                  "Show you relevant events near you",
                  "Provide accurate event recommendations",
                  "Calculate distances to event locations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-sm text-gray-600">You can disable location services at any time in your device settings.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p>We use the information we collect to provide, maintain, and improve Gathrly. Our purposes include:</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left font-medium text-gray-800">Purpose</th>
                  <th className="border border-gray-300 p-2 text-left font-medium text-gray-800">Example</th>
                  <th className="border border-gray-300 p-2 text-left font-medium text-gray-800">Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Account Management", "Create and manage your profile", "Contractual necessity"],
                  ["Event Discovery", "Recommend events based on interests", "Legitimate interest"],
                  ["Platform Functionality", "Enable event creation and RSVPs", "Contractual necessity"],
                  ["Communication", "Send event updates and notifications", "Contractual necessity"],
                  ["Platform Improvement", "Analyze usage patterns and feedback", "Legitimate interest"],
                  ["Security", "Prevent fraud and unauthorized access", "Legal obligation"],
                  ["Customer Support", "Respond to inquiries and issues", "Legitimate interest"]
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="border border-gray-300 p-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <p className="font-medium text-amber-800 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              We do not sell your personal information to third parties.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Information Sharing and Disclosure",
      content: (
        <div className="space-y-4">
          <p>We only share your information in limited circumstances:</p>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">With Your Consent</h4>
            <p>We may share your information when you give us explicit permission, such as when you choose to share event participation with friends.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Service Providers</h4>
            <p>We may share information with trusted third-party vendors who perform services on our behalf:</p>
            <ul className="space-y-1 mt-2 ml-4">
              {[
                "Cloud hosting and database (UK servers)",
                "Email and notification services",
                "Analytics providers (anonymized data only)",
                "Payment processing (for future paid features)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-gray-600">All service providers are bound by confidentiality and data protection agreements.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Legal Requirements</h4>
            <p>We may disclose your information if required by law, such as:</p>
            <ul className="space-y-1 mt-2 ml-4">
              {[
                "Compliance with a valid legal process or court order",
                "Protection of our legal rights or prevention of fraud",
                "Enforcement of our Terms and Conditions",
                "Response to emergencies or threats to safety"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Business Transfers</h4>
            <p>In connection with a merger, acquisition, or sale of assets, your information may be transferred. We will notify you of any such change.</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="font-medium text-amber-800">What We Never Share:</p>
            <ul className="mt-2 space-y-1">
              {[
                "Your personal information with advertisers",
                "Your contact details without your consent",
                "Private messages or event information"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Data Security",
      content: (
        <div className="space-y-4">
          <p>We implement comprehensive security measures to protect your information:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Lock, title: "Encryption", desc: "Data in transit uses TLS/SSL encryption. Data at rest is encrypted using AES-256." },
              { icon: Database, title: "Secure Storage", desc: "All user data is stored in secure, SOC2-compliant data centers in the UK." },
              { icon: Eye, title: "Access Control", desc: "Access to production systems is restricted, logged, and regularly audited." },
              { icon: Shield, title: "Regular Testing", desc: "We conduct regular security assessments and vulnerability scans." }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-5 h-5 text-amber-500" />
                  <h4 className="font-semibold text-[#00143f]">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <p className="font-medium text-amber-800">Important Note:</p>
            <p className="text-sm text-amber-700 mt-1">While we implement robust security measures, no online platform can guarantee absolute security. In the event of a data breach, we will notify affected users and relevant authorities as required by law.</p>
          </div>
        </div>
      )
    },
    {
      title: "Your Rights and Choices",
      content: (
        <div className="space-y-4">
          <p>Under UK GDPR, you have the following rights regarding your personal data:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { right: "Right to Access", desc: "Request a copy of your personal data" },
              { right: "Right to Rectification", desc: "Correct inaccurate or incomplete information" },
              { right: "Right to Erasure", desc: "Request deletion of your data (Right to be Forgotten)" },
              { right: "Right to Restrict Processing", desc: "Limit how we use your data" },
              { right: "Right to Data Portability", desc: "Transfer your data to another service" },
              { right: "Right to Object", desc: "Object to processing based on legitimate interests" },
              { right: "Right to Withdraw Consent", desc: "Withdraw consent for specific processing at any time" },
              { right: "Right to Lodge a Complaint", desc: "Complain to the ICO if unsatisfied" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#f8f9fc] p-3 rounded-lg">
                <h4 className="font-semibold text-[#00143f] text-sm">{item.right}</h4>
                <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-[#00143f] mb-2">How to Exercise Your Rights</h4>
            <p>Contact us at:</p>
            <div className="mt-2">
              <a href="mailto:privacy@gathrly.com" className="text-amber-600 hover:text-amber-700 font-medium">
                privacy@gathrly.com
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-2">We may need to verify your identity before processing your request. We aim to respond within 30 days.</p>
          </div>
        </div>
      )
    },
    {
      title: "Cookies and Tracking Technologies",
      content: (
        <div className="space-y-4">
          <p>We use cookies and similar technologies to enhance your experience on Gathrly:</p>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-[#00143f] mb-2 flex items-center gap-2">
                <Cookie className="w-4 h-4 text-amber-500" />
                Types of Cookies We Use
              </h4>
              <ul className="space-y-2 ml-4">
                {[
                  { name: "Essential Cookies", desc: "Required for platform functionality, authentication, and security" },
                  { name: "Preference Cookies", desc: "Remember your settings and preferences" },
                  { name: "Analytics Cookies", desc: "Help us understand how users interact with our platform (anonymized)" }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                    <div>
                      <span className="font-medium">{item.name}:</span>
                      <span className="text-gray-600 ml-1">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="font-medium text-gray-800">We do not use cookies for advertising or marketing purposes.</p>
            <p className="text-sm text-gray-600 mt-1">You can manage cookie preferences through your browser settings. Note that disabling essential cookies may affect platform functionality.</p>
          </div>
        </div>
      )
    },
    {
      title: "Data Retention",
      content: (
        <div className="space-y-4">
          <p>We retain your personal data only as long as necessary:</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left font-medium text-gray-800">Data Type</th>
                  <th className="border border-gray-300 p-2 text-left font-medium text-gray-800">Retention Period</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Account information", "Until account deletion or 24 months of inactivity"],
                  ["Event and interaction data", "Until you delete it or account closure"],
                  ["Messages and communications", "Up to 12 months after account deletion"],
                  ["Support inquiries", "Up to 24 months"],
                  ["Analytics data", "Anonymized and retained indefinitely for platform improvement"]
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="border border-gray-300 p-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <Trash2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">When you delete your account, your personal data will be permanently removed within 90 days. Some anonymized data may be retained for analytical purposes.</p>
          </div>
        </div>
      )
    },
    {
      title: "International Data Transfers",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p>Your information is stored on servers located in the United Kingdom. If we transfer data internationally in the future, we will ensure:</p>
              <ul className="space-y-1 mt-3 ml-4">
                {[
                  "Transfers comply with UK GDPR requirements",
                  "Adequate safeguards (such as Standard Contractual Clauses) are in place",
                  "You are informed of any international transfers"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Children's Privacy",
      content: (
        <div className="space-y-3">
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-red-800">Gathrly is not intended for individuals under 13 years of age.</p>
                <p className="text-sm text-red-700 mt-2">We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us immediately, and we will delete such information.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Changes to This Privacy Policy",
      content: (
        <div className="space-y-3">
          <p>We may update this Privacy Policy periodically. When we make changes:</p>
          <ul className="space-y-1 ml-6">
            {[
              "We will update the 'Last Updated' date at the top of this page",
              "We will notify registered users via email or in-app notification for material changes",
              "Your continued use of Gathrly after changes take effect constitutes acceptance of the revised policy"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-500" />
              <span className="text-sm">We encourage you to review this Privacy Policy regularly to stay informed about how we protect your information.</span>
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Contact Us",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-[#00143f]/5 to-amber-50/50 p-6 rounded-xl">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#00143f] text-lg">Gathrly Privacy Team</h3>
                <p className="text-[#00143f]/80">We're committed to protecting your privacy</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <a href="mailto:privacy@gathrly.com" className="text-amber-600 hover:text-amber-700 font-medium">
                  privacy@gathrly.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-[#00143f]/80">Gathrly HQ, United Kingdom</span>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-semibold text-[#00143f] mb-2">Information Commissioner's Office (ICO)</h4>
            <p className="text-sm mb-2">If you are unsatisfied with our response, you have the right to lodge a complaint with the ICO:</p>
            <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-amber-600 hover:text-amber-700 text-sm">
              <ExternalLink className="w-3 h-3" />
              https://ico.org.uk/
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <section className="w-full bg-gray-50 min-h-screen pt-20 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#00143f] mb-2">
              Privacy Policy
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
              Your privacy is important to us. This policy explains how Gathrly collects, uses, and protects your personal information when you use our platform to discover, create, and participate in events.
            </p>
          </div>

          {/* Acknowledgment */}
          <div className="bg-amber-50 p-4 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">By using Gathrly, you acknowledge that you have read and understood this Privacy Policy and consent to the practices described.</p>
              </div>
            </div>
          </div>

          {/* All Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <div key={idx} id={`section-${idx}`}>
                <h2 className="text-xl font-bold text-[#00143f] mb-3">{section.title}</h2>
                <div className="text-gray-700 space-y-4">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Related Documents */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <h3 className="font-medium text-[#00143f] mb-4">Related Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link 
                href="/terms-conditions" 
                className="flex items-center gap-3 p-3 bg-white border border-gray-300 rounded-lg hover:border-amber-500 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Terms & Conditions</p>
                  <p className="text-sm text-gray-600">Legal terms for using our service</p>
                </div>
                <ExternalLink className="w-3 h-3 text-gray-400 ml-auto" />
              </Link>
              
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-3 p-3 bg-white border border-gray-300 rounded-lg hover:border-amber-500 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Back to Top</p>
                  <p className="text-sm text-gray-600">Return to beginning</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}