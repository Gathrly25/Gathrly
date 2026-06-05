// src/app/privacy-policy/page.tsx
"use client";

import {
  FileText,
  Shield,
  Mail,
  MapPin,
  ExternalLink,
  Globe,
  Database,
  Lock,
  Eye,
  Trash2,
  Bell,
  Cookie,
  Users,
  Activity,
  Smartphone,
  CheckCircle,
  Home,
  Building2,
  Crown,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "../components/footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: (
        <div className="space-y-4">
          <p>
            Gathrly collects information to provide, improve, and protect our
            venue booking and event management services across our three New York City venues.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#00143f] mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-500" />
                Account & Inquiry Information
              </h4>
              <p>We collect information when you submit an inquiry form or create an account:</p>
              <ul className="space-y-1 mt-2 ml-4">
                {[
                  "Name (first and last)",
                  "Email address",
                  "Phone number",
                  "Event type (wedding, birthday, meeting, conference, etc.)",
                  "Preferred venue (Lofte23, Velvet Hour, or Billionaire Room)",
                  "Expected guest count",
                  "Preferred event date and time",
                  "Catering and bar service preferences",
                  "Special requests or additional information",
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
                Event & Booking Data
              </h4>
              <p>When you use Gathrly to book a venue, we may collect information about:</p>
              <ul className="space-y-1 mt-2 ml-4">
                {[
                  "Inquiry submissions and communication history",
                  "Venue preferences and booking status",
                  "Event requirements (layout, setup, AV needs)",
                  "Catering and bar service selections",
                  "Contract and payment-related information (if applicable)",
                  "Event timeline and coordination details",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#00143f] mb-2">
                Our Venues
              </h4>
              <p className="mb-2">Gathrly operates three distinct venues in New York City:</p>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <span><strong>Lofte23</strong> - Modern loft space for intimate gatherings</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <span><strong>Velvet Hour</strong> - Elegant atmosphere for sophisticated events</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                  <span><strong>Billionaire Room</strong> - Luxury space for high-end celebrations</span>
                </li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                Each venue offers catering and bar services tailored to your event type.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Google Sign-In",
      content: (
        <div className="space-y-4">
          <p>
            If you choose to sign in using your Google account, we may receive
            basic profile information provided by Google, such as:
          </p>

          <ul className="space-y-1 ml-4">
            {["Your name", "Email address", "Profile picture, if available"].map(
              (item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>

          <p>
            This information is used to authenticate your account, pre-fill inquiry forms,
            and streamline the venue booking process.
          </p>

          <p>
            Gathrly does not access your Gmail, Google Drive, Google Calendar,
            Contacts, or other Google account data unless explicitly requested
            and authorized by you.
          </p>
        </div>
      ),
    },
    {
      title: "How We Use Your Information",
      content: (
        <div className="space-y-4">
          <p>
            We use the information we collect to provide, maintain, secure, and
            improve Gathrly's venue booking and event management services. Our purposes include:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left font-medium text-gray-800">
                    Purpose
                  </th>
                  <th className="border border-gray-300 p-2 text-left font-medium text-gray-800">
                    Example
                  </th>
                  <th className="border border-gray-300 p-2 text-left font-medium text-gray-800">
                    Legal Basis
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Inquiry Management",
                    "Process and respond to venue booking inquiries",
                    "Contractual necessity",
                  ],
                  [
                    "Venue Booking",
                    "Coordinate venue selection, catering, and bar services",
                    "Contractual necessity",
                  ],
                  [
                    "Event Planning",
                    "Assist with event details for weddings, birthdays, meetings, etc.",
                    "Legitimate interest",
                  ],
                  [
                    "Communication",
                    "Send booking confirmations and event updates",
                    "Contractual necessity",
                  ],
                  [
                    "Service Improvement",
                    "Improve our venues, catering, and customer experience",
                    "Legitimate interest",
                  ],
                  [
                    "Security",
                    "Protect against misuse, fraud, and unauthorized access",
                    "Legitimate interest",
                  ],
                  [
                    "Customer Support",
                    "Respond to questions, changes, and support requests",
                    "Legitimate interest",
                  ],
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="border border-gray-300 p-2"
                      >
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
      ),
    },
    {
      title: "Information Sharing and Disclosure",
      content: (
        <div className="space-y-4">
          <p>We only share your information in limited circumstances:</p>

          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">
              With Your Consent
            </h4>
            <p>
              We may share your information when you give us permission, such as when
              you submit an inquiry form for venue booking, catering, or bar services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">
              Service Providers
            </h4>
            <p>
              We may share information with trusted third-party vendors who
              perform services on our behalf:
            </p>
            <ul className="space-y-1 mt-2 ml-4">
              {[
                "Cloud hosting, data storage, and infrastructure services",
                "Email, notification, or communication services",
                "Payment processing services (for deposits or final payments)",
                "Analytics or performance improvement services",
                "Catering and bar service partners (as needed for event coordination)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              Service providers are expected to protect information and use it
              only for the services they provide to Gathrly.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">
              Legal Requirements
            </h4>
            <p>We may disclose your information if required by law, such as:</p>
            <ul className="space-y-1 mt-2 ml-4">
              {[
                "Compliance with valid legal process or court orders",
                "Protection of our legal rights or prevention of fraud",
                "Enforcement of our Terms and Conditions",
                "Response to emergencies or threats to safety",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">
              Business Transfers
            </h4>
            <p>
              If Gathrly is involved in a merger, acquisition, restructuring, or
              sale of assets, your information may be transferred as part of
              that transaction. We will notify users where required by law.
            </p>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="font-medium text-amber-800">What We Never Share:</p>
            <ul className="mt-2 space-y-1">
              {[
                "We do not sell your personal information",
                "We do not share your contact details for unrelated advertising",
                "We do not access unrelated Google account data through Google Sign-In",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Data Security",
      content: (
        <div className="space-y-4">
          <p>
            We use reasonable technical, administrative, and organizational
            measures to help protect your information.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Lock,
                title: "Encryption",
                desc: "We use industry-standard security measures to help protect information transmitted through our platform.",
              },
              {
                icon: Database,
                title: "Secure Storage",
                desc: "User information is stored using secure cloud infrastructure provided by trusted service providers.",
              },
              {
                icon: Eye,
                title: "Access Control",
                desc: "Access to user information is limited to authorized personnel who require access to perform their duties.",
              },
              {
                icon: Shield,
                title: "Security Practices",
                desc: "We regularly review and improve our security practices to help safeguard personal information.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-5 h-5 text-amber-500" />
                  <h4 className="font-semibold text-[#00143f]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <p className="font-medium text-amber-800">Important Note:</p>
            <p className="text-sm text-amber-700 mt-1">
              While we take steps to protect your information, no online
              platform can guarantee absolute security. If a data security
              incident occurs, we will take appropriate action as required by
              applicable law.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Your Rights and Choices",
      content: (
        <div className="space-y-4">
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              {
                right: "Right to Access",
                desc: "Request a copy of the personal information we hold about you",
              },
              {
                right: "Right to Correction",
                desc: "Correct inaccurate or incomplete information",
              },
              {
                right: "Right to Deletion",
                desc: "Request deletion of your personal information",
              },
              {
                right: "Right to Restrict Processing",
                desc: "Ask us to limit how we use your information",
              },
              {
                right: "Right to Data Portability",
                desc: "Request your data in a portable format, where applicable",
              },
              {
                right: "Right to Object",
                desc: "Object to certain types of processing",
              },
              {
                right: "Right to Withdraw Consent",
                desc: "Withdraw consent where processing is based on consent",
              },
              {
                right: "Right to Lodge a Complaint",
                desc: "Contact a data protection authority if you are unsatisfied",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#f8f9fc] p-3 rounded-lg">
                <h4 className="font-semibold text-[#00143f] text-sm">
                  {item.right}
                </h4>
                <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-[#00143f] mb-2">
              How to Exercise Your Rights
            </h4>
            <p>Contact us at:</p>
            <div className="mt-2">
              <a
                href="mailto:info@mail.gathrly.com"
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                info@mail.gathrly.com
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              We may need to verify your identity before processing your
              request. We aim to respond within a reasonable time period.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Cookies and Tracking Technologies",
      content: (
        <div className="space-y-4">
          <p>
            We may use cookies and similar technologies to improve your
            experience on Gathrly.
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-[#00143f] mb-2 flex items-center gap-2">
                <Cookie className="w-4 h-4 text-amber-500" />
                Types of Cookies We May Use
              </h4>
              <ul className="space-y-2 ml-4">
                {[
                  {
                    name: "Essential Cookies",
                    desc: "Required for platform functionality, authentication, and security",
                  },
                  {
                    name: "Preference Cookies",
                    desc: "Remember your settings and preferences",
                  },
                  {
                    name: "Performance Cookies",
                    desc: "Help us understand platform usage and improve the user experience",
                  },
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
            <p className="font-medium text-gray-800">
              We currently do not use cookies for targeted advertising. If this
              changes in the future, this Privacy Policy will be updated
              accordingly.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              You can manage cookies through your browser settings. Disabling
              essential cookies may affect platform functionality.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Data Retention",
      content: (
        <div className="space-y-4">
          <p>
            We retain personal information only for as long as reasonably
            necessary to provide our services, comply with legal obligations,
            resolve disputes, and enforce our agreements.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left font-medium text-gray-800">
                    Data Type
                  </th>
                  <th className="border border-gray-300 p-2 text-left font-medium text-gray-800">
                    Retention Approach
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Inquiry information",
                    "Retained as needed to process bookings and provide services",
                  ],
                  [
                    "Booking and event data",
                    "Retained for as long as necessary for event coordination and legal compliance",
                  ],
                  [
                    "Support inquiries",
                    "Retained for a reasonable period to manage support and service quality",
                  ],
                  [
                    "Usage and performance data",
                    "May be retained in aggregated or anonymized form to improve the platform",
                  ],
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="border border-gray-300 p-2"
                      >
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
            <p className="text-sm text-gray-600">
              When you request deletion of your information, we will take
              reasonable steps to delete or anonymize your personal information,
              unless retention is required for legal, security, or operational
              reasons related to past bookings.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "International Data Transfers",
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p>
                Your information may be processed and stored using secure cloud
                infrastructure operated by trusted service providers. Data may
                be stored in different regions depending on the infrastructure
                used.
              </p>
              <p className="mt-2">
                Since our venues are located in New York City, any event planning
                and coordination will primarily involve data processing within
                the United States.
              </p>
              <ul className="space-y-1 mt-3 ml-4">
                {[
                  "We take reasonable steps to ensure appropriate safeguards are used",
                  "We work with trusted service providers that are expected to protect user information",
                  "We will update this Privacy Policy if our data transfer practices materially change",
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
      ),
    },
    {
      title: "Children's Privacy",
      content: (
        <div className="space-y-3">
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-red-800">
                  Gathrly is not intended for children under 13 years of age.
                </p>
                <p className="text-sm text-red-700 mt-2">
                  We do not knowingly collect personal information from children
                  under 13. If you believe a child has provided us with personal
                  data, please contact us and we will take appropriate steps to
                  delete such information.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Changes to This Privacy Policy",
      content: (
        <div className="space-y-3">
          <p>We may update this Privacy Policy from time to time. When we make changes:</p>
          <ul className="space-y-1 ml-6">
            {[
              "We will update the Last Updated date on this page",
              "We may notify users of material changes where appropriate",
              "Your continued use of Gathrly after changes take effect means you accept the updated policy",
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
              <span className="text-sm">
                We encourage you to review this Privacy Policy regularly.
              </span>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-[#00143f]/5 to-amber-50/50 p-6 rounded-xl">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-amber-500 mt-0.5" />
              <div>
                <h3 className="font-bold text-[#00143f] text-lg">
                  Gathrly Privacy Team
                </h3>
                <p className="text-[#00143f]/80">
                  We're committed to protecting your privacy.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600" />
                <a
                  href="mailto:info@mail.gathrly.com"
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  info@mail.gathrly.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-[#00143f]/80">
                  New York City, NY
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
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
                <p className="font-semibold text-[#00143f]">5 June 2026</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Updated</p>
                <p className="font-semibold text-[#00143f]">5 June 2026</p>
              </div>
            </div>

            <p className="text-gray-600">
              Gathrly is an event management agency operating three premier venues in New York City:
              <strong> Lofte23</strong>, <strong>Velvet Hour</strong>, and <strong>Billionaire Room</strong>.
              We provide venues for events ranging from intimate gatherings to large celebrations,
              along with comprehensive catering and bar services. This Privacy Policy explains how
              we collect, use, disclose, and protect information when you submit an inquiry form
              or use our services.
            </p>
          </div>

          {/* Acknowledgment */}
          <div className="bg-amber-50 p-4 rounded-lg mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-700">
                  By using Gathrly, you acknowledge that you have read and
                  understood this Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* All Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => (
              <div key={idx} id={`section-${idx}`}>
                <h2 className="text-xl font-bold text-[#00143f] mb-3">
                  {section.title}
                </h2>
                <div className="text-gray-700 space-y-4">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Related Documents */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <h3 className="font-medium text-[#00143f] mb-4">
              Related Documents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link
                href="/terms-conditions"
                className="flex items-center gap-3 p-3 bg-white border border-gray-300 rounded-lg hover:border-amber-500 transition-colors"
              >
                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    Terms & Conditions
                  </p>
                  <p className="text-sm text-gray-600">
                    Legal terms for using our service
                  </p>
                </div>
                <ExternalLink className="w-3 h-3 text-gray-400 ml-auto" />
              </Link>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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