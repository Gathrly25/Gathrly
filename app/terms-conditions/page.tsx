"use client";

import {
  FileText,
  Shield,
  AlertCircle,
  Mail,
  MapPin,
  ArrowLeft,
  X,
  CheckCircle,
  Building2,
  Crown,
  Home,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Footer } from "../components/footer";

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
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center mb-4">
            Welcome to Gathrly
          </h3>

          <div className="space-y-4 text-center mb-8">
            <p className="text-lg font-medium">
              Please read and acknowledge our Terms & Conditions before inquiring about our venues.
            </p>

            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-white/90">
                By clicking "I Agree", you acknowledge that you have read,
                understood, and agree to these Terms & Conditions.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcknowledge}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              <CheckCircle className="w-5 h-5" />
              I Agree to Terms
            </button>

            <button
              onClick={handleClose}
              className="flex-1 border border-white/30 text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors"
            >
              Read First
            </button>
          </div>

          <p className="text-center text-white/60 text-sm mt-6">
            You can review our Terms at any time in the footer section.
          </p>
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
          <p>
            By accessing or using Gathrly's website, submitting an inquiry form, or engaging
            our venue booking services, you agree to follow these Terms & Conditions. If you do
            not agree, please do not use our platform or services.
          </p>

          <p>
            These Terms apply to all users of Gathrly and should be read
            together with our{" "}
            <Link
              href="/privacy-policy"
              className="text-amber-600 hover:text-amber-700 underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      ),
    },
    {
      title: "Our Services",
      content: (
        <div className="space-y-4">
          <p>
            Gathrly is an event management agency operating three premier venues in New York City. 
            We provide:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-amber-500" />
                <h4 className="font-semibold text-[#00143f]">Venue Rentals</h4>
              </div>
              <ul className="space-y-1 ml-4 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5" />
                  <span><strong>Lofte23</strong> - Modern loft for intimate gatherings</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5" />
                  <span><strong>Velvet Hour</strong> - Elegant atmosphere for sophisticated events</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5" />
                  <span><strong>Billionaire Room</strong> - Luxury space for high-end celebrations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <UtensilsCrossed className="w-5 h-5 text-amber-500" />
                <h4 className="font-semibold text-[#00143f]">Catering & Bar Services</h4>
              </div>
              <p className="text-sm text-gray-600">
                Full-service catering and professional bar services available at all three venues.
              </p>
            </div>
          </div>

          <p className="mt-2">
            We help clients book venues for various events including:
            weddings, anniversaries, celebrations of life, birthdays, graduations, 
            holiday parties, meetings, conferences, trade shows, political functions, 
            festivals, and other gatherings.
          </p>
        </div>
      ),
    },
    {
      title: "Inquiry and Booking Process",
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800">
                  How Our Booking Process Works
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  When you submit an inquiry form through our website, our team will review your request
                  and contact you to discuss availability, pricing, and event details.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Inquiry Information</h4>
            <p>When you submit an inquiry, you agree to provide accurate information including:</p>
            <ul className="space-y-1 mt-2 ml-4">
              {[
                "Your full name and contact information",
                "Preferred venue (Lofte23, Velvet Hour, or Billionaire Room)",
                "Event type and expected guest count",
                "Preferred event date and time",
                "Catering and bar service requirements",
                "Any special requests or additional details",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Booking Confirmation</h4>
            <p>
              An inquiry does not constitute a confirmed booking. A representative will contact you
              to discuss availability, pricing, and contract terms. A venue is only confirmed when:
            </p>
            <ul className="space-y-1 mt-2 ml-4">
              {[
                "A formal agreement or contract is signed by both parties",
                "Any required deposit or payment is received",
                "You receive written confirmation from Gathrly",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Eligibility",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">
              Eligibility Requirements
            </h4>

            <p>To use Gathrly's services, you must:</p>

            <ul className="space-y-1 mt-2 ml-4">
              {[
                "Be at least 18 years of age",
                "Have the legal authority to enter into binding contracts",
                "Provide accurate and truthful information in all inquiries and communications",
                "Be responsible for all activities conducted under your name or organization",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">
              For Organizations
            </h4>

            <p>
              If you are booking on behalf of an organization, you represent that you have
              the authority to bind that organization to these Terms.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Payments, Deposits, and Cancellations",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Deposits and Payments</h4>
            <p>
              To secure a venue booking, a deposit or full payment may be required as outlined in your
              contract or agreement. Payment terms, including due dates and accepted methods, will be
              provided during the booking process.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">Cancellation Policy</h4>
            <p>
              Cancellation terms vary based on the venue, event type, and timing. Specific cancellation
              policies, including any non-refundable deposits or fees, will be detailed in your contract.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              We encourage clients to review cancellation terms carefully before signing any agreement.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium text-gray-800">Additional Costs:</p>
            <p className="text-sm text-gray-600 mt-1">
              Additional charges may apply for overtime, damages, extra services, or exceeding agreed-upon
              guest counts. These will be outlined in your service agreement.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "User Conduct and Responsibilities",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">
              You agree to:
            </h4>

            <ul className="space-y-1 ml-4">
              {[
                "Provide accurate information in all inquiries and communications",
                "Respect our venues, staff, and property",
                "Comply with all applicable laws and venue rules",
                "Communicate any changes to event requirements promptly",
                "Ensure your guests and vendors also comply with venue policies",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00143f] mb-2">
              You must not:
            </h4>

            <ul className="space-y-2 ml-4">
              {[
                "Submit false or misleading information in inquiries",
                "Use our venues for illegal activities",
                "Damage venue property or equipment",
                "Exceed permitted guest counts without approval",
                "Bring outside food or beverages without prior agreement (catering and bar services are provided by Gathrly)",
                "Harass or mistreat our staff or other clients",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Our Venues",
      content: (
        <div className="space-y-4">
          <p>Gathrly operates three distinct venues in New York City:</p>

          <div className="space-y-4">
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-[#00143f] flex items-center gap-2">
                <Home className="w-4 h-4 text-amber-500" />
                Lofte23
              </h4>
              <p className="text-sm text-gray-600">
                A modern loft space perfect for intimate gatherings, small weddings, birthday parties,
                and corporate meetings. Features contemporary design and flexible layout options.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-[#00143f] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-500" />
                Velvet Hour
              </h4>
              <p className="text-sm text-gray-600">
                An elegant venue with sophisticated atmosphere, ideal for anniversary celebrations,
                holiday parties, and upscale gatherings. Features premium finishes and ambiance.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold text-[#00143f] flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-500" />
                Billionaire Room
              </h4>
              <p className="text-sm text-gray-600">
                A luxury space designed for high-end celebrations, large weddings, galas, conferences,
                and prestigious events. Features premium amenities and exceptional service.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-3">
            <div className="flex items-center gap-2 mb-2">
              <Wine className="w-4 h-4 text-amber-500" />
              <h4 className="font-semibold text-[#00143f]">Catering & Bar Services</h4>
            </div>
            <p className="text-sm text-gray-600">
              All three venues offer comprehensive catering and professional bar services. Menu options,
              pricing, and service details will be provided during the booking process.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Damages and Liability",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800">
                  Damage Responsibility
                </p>
                <p className="text-sm text-red-700 mt-1">
                  Clients are responsible for any damages caused to our venues, equipment, or property
                  during their event. Damage charges may be assessed after the event.
                </p>
              </div>
            </div>
          </div>

          <p>
            Gathrly is not responsible for:
          </p>
          <ul className="space-y-1 ml-4">
            {[
              "Items left behind or lost at the venue",
              "Injuries that occur on the premises (subject to applicable law)",
              "Third-party vendors hired by the client",
              "Weather or other circumstances beyond our control",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Intellectual Property",
      content: (
        <div className="space-y-4">
          <p>
            Gathrly, including its name, logos, branding, website design, and related materials,
            is owned by Gathrly or its licensors and is protected by applicable intellectual property laws.
          </p>

          <p>
            You may not copy, modify, reproduce, distribute, or create derivative works of our
            intellectual property without our prior written consent.
          </p>
        </div>
      ),
    },
    {
      title: "Limitation of Liability",
      content: (
        <div className="space-y-3">
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
              <div>
                <p className="font-semibold text-red-800">
                  To the maximum extent permitted by applicable law, Gathrly is not responsible for:
                </p>

                <ul className="space-y-1 mt-2 ml-4">
                  {[
                    "Indirect, incidental, or consequential damages",
                    "Loss of profits, revenue, or business opportunities",
                    "Third-party vendor performance or issues",
                    "Events beyond our reasonable control (force majeure)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p>
            Nothing in these Terms limits rights that cannot be limited under applicable law,
            including certain consumer protection rights.
          </p>
        </div>
      ),
    },
    {
      title: "Indemnification",
      content: (
        <div className="space-y-3">
          <p>
            You agree to indemnify and hold Gathrly harmless from any claims, damages, losses,
            or expenses arising from:
          </p>

          <ul className="space-y-1 ml-6">
            {[
              "Your violation of these Terms",
              "Damage caused to our venues or property during your event",
              "Your guests' or vendors' conduct at the venue",
              "Your violation of any applicable laws or regulations",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Governing Law",
      content: (
        <div className="space-y-3">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of New York,
            without regard to its conflict of law provisions.
          </p>

          <p>
            Any disputes arising from these Terms or your use of our services shall be subject to the exclusive
            jurisdiction of the courts located in New York County, New York.
          </p>
        </div>
      ),
    },
    {
      title: "Changes to These Terms",
      content: (
        <div className="space-y-3">
          <p>We may update these Terms from time to time. When we do:</p>

          <ul className="space-y-1 ml-6">
            {[
              "We will update the Last Updated date on this page",
              "We may notify clients of material changes where appropriate",
              "Your continued use of our services after changes means you accept the updated Terms",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-[#00143f]/5 to-amber-50/50 p-6 rounded-xl">
            <div className="flex items-start gap-3 mb-4">
              <FileText className="w-6 h-6 text-amber-500 mt-0.5" />

              <div>
                <h3 className="font-bold text-[#00143f] text-lg">
                  Gathrly Support
                </h3>

                <p className="text-[#00143f]/80">
                  We're here to help with questions about these Terms or our services.
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
      <TermsAndConditionsAcknowledgment />

      <section className="min-h-screen bg-white mb-8">
        <div className="px-8 sm:px-12 md:px-16 lg:px-18 py-8 max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-[1300px] mx-auto">
          <button 
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-[#00143f] hover:text-amber-600 transition-colors mb-3 px-2 py-2 bg-gradient-to-r from-[#EAF1FF] to-[#EAF1FF]/80 rounded-lg hover:from-amber-50 hover:to-amber-50/50 border border-[#EAF1FF] hover:border-amber-500 w-max shadow-sm"
          >
            <ArrowLeft className="w-3 h-3" />
            <span className="text-sm font-semibold">Back</span>
          </button>

          <div className="mb-1 px-4">
            <h1 className="text-2xl sm:text-3xl text-center md:text-4xl lg:text-4xl font-semibold text-[#00143F] mb-2 font-dm">
              Terms and Conditions
            </h1>
            <p className="text-gray-600 text-base sm:text-md max-w-3xl text-center mx-auto">
              Please read these Terms carefully before inquiring about or booking our venues. By accessing or using our services, you agree to follow these Terms and Conditions.
            </p>
          </div>
        </div>

        <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-[1300px] mx-auto px-6 sm:px-8 md:px-12 lg:px-14 py-4 grid grid-cols-1 lg:grid-cols-12 gap-1">
          <div className="lg:col-span-2 px-2">
            <div className="flex flex-wrap items-center gap-6 mb-4 px-2">
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs mb-1">Effective Date</span>
                <span className="text-black font-medium text-sm">5 June 2026</span>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-xs mb-1">Last Updated</span>
                <span className="text-black font-medium text-sm">5 June 2026</span>
              </div>
            </div>

            <div className="w-full mt-4 sticky top-24 px-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#00143f] mt-8 mb-2">Overview</h3>
              <ul className="space-y-1 text-gray-600">
                {sections.map((section, idx) => (
                  <li key={idx} className="hover:text-[#00143f] cursor-pointer transition-colors group">
                    <a 
                      href={`#section-${idx}`}
                      className="flex items-start gap-3 py-2 border-l-2 border-transparent group-hover:border-amber-500 group-hover:pl-1 transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-amber-500 mt-1.5 flex-shrink-0"></div>
                      <span className="text-sm font-medium leading-tight">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-8 px-4">
            <div className="mb-4">
              <p>Welcome to Gathrly. These Terms and Conditions govern your access to and use of Gathrly's venue booking, catering, and bar services. These Terms should be read together with our <Link href="/privacy-policy" className="text-amber-600 hover:underline">Privacy Policy</Link>.</p>
            </div>
           
            <div className="space-y-3">
              <p>Gathrly is an event management agency operating three premier venues in New York City: <strong>Lofte23</strong>, <strong>Velvet Hour</strong>, and <strong>Billionaire Room</strong>. We provide venue rentals along with catering and bar services for events including intimate gatherings, weddings, anniversaries, celebrations of life, birthdays, graduations, holiday parties, meetings, conferences, trade shows, political functions, and festivals.</p>
              <p className="font-semibold mb-2">Service Provider:</p>
              <div className="flex items-start gap-2 mb-2">
                <Shield className="w-5 h-5 text-amber-500 mt-0.5" />
                <span className="font-bold text-[#00143f]">Gathrly</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a href="mailto:info@mail.gathrly.com" className="text-amber-600 hover:underline">
                    info@mail.gathrly.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>New York City, NY</span>
                </div>
              </div>
            </div>
              
            {sections.map((section, idx) => (
              <div key={idx} id={`section-${idx}`} className="scroll-mt-28">
                <h2 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl font-bold text-[#00143f] mb-2 mt-2">
                  {section.title}
                </h2>
                <div className="text-black leading-relaxed text-sm sm:text-base space-y-5">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}