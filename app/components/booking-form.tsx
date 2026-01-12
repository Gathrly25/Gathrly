// app/components/booking-form.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Mail, Phone, Check, ArrowRight, Loader2, User, MessageSquare } from "lucide-react";
import { cn } from "../lib/utils";

interface BookingFormProps {
  onSubmitComplete?: (data: BookingFormData) => void;
}

interface BookingFormData {
  eventType: string;
  guestCount: string;
  eventDate: string;
  fullName: string;
  email: string;
  phone: string;
  additionalDetails: string;
}

export const BookingForm = ({ onSubmitComplete }: BookingFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<BookingFormData>({
    eventType: "Wedding Ceremony & Reception",
    guestCount: "",
    eventDate: "",
    fullName: "",
    email: "",
    phone: "",
    additionalDetails: ""
  });

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.guestCount || !formData.eventDate || !formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      onSubmitComplete?.(formData);
      setIsSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAnotherRequest = () => {
    setIsSuccess(false);
    setStep(1);
    setFormData({
      eventType: "Wedding Ceremony & Reception",
      guestCount: "",
      eventDate: "",
      fullName: "",
      email: "",
      phone: "",
      additionalDetails: ""
    });
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const twoYearsLater = new Date();
    twoYearsLater.setFullYear(twoYearsLater.getFullYear() + 2);
    return twoYearsLater.toISOString().split('T')[0];
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-lg bg-white/5 p-4 text-center border border-white/10"
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20">
          <Check className="h-5 w-5 text-amber-400" />
        </div>
        <h3 className="mb-1 text-base font-bold text-white">Booking Request Sent!</h3>
        <div className="mb-2 text-left bg-white/5 p-2 rounded w-full border border-white/10">
          <h4 className="font-bold mb-1 text-amber-300 text-xs">Booking Summary:</h4>
          <div className="space-y-0.5 text-xs">
            <p className="text-white/80">
              <span className="font-medium text-amber-200">Event:</span> {formData.eventType}
            </p>
            <p className="text-white/80">
              <span className="font-medium text-amber-200">Guests:</span> {formData.guestCount}
            </p>
            <p className="text-white/80">
              <span className="font-medium text-amber-200">Date:</span> {formData.eventDate}
            </p>
          </div>
        </div>
        <p className="text-white/60 mb-2 text-xs">
          Our events team will contact you within 24 hours.
        </p>
        <button
          onClick={handleAnotherRequest}
          className="rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-lg bg-white/5 p-3 border border-white/10">
      <div className="mb-4">
        {/* Compact Progress Steps */}
        <div className="flex items-center justify-between mb-3">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div className="flex items-center">
                <div className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
                  step >= s 
                    ? "bg-amber-400 text-white shadow-[0_0_4px_rgba(251,191,36,0.3)]"
                    : "bg-white/10 text-white/60"
                )}>
                  {s}
                </div>
              </div>
              {s < 3 && (
                <div className={cn(
                  "h-0.5 flex-1 mx-1 rounded-full transition-colors",
                  step > s 
                    ? "bg-amber-400" 
                    : "bg-white/20"
                )} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              className="space-y-3"
            >
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Event Type
                </label>
                <div className="relative">
                  <select 
                    value={formData.eventType}
                    onChange={(e) => handleInputChange("eventType", e.target.value)}
                    className="w-full rounded border border-white/20 bg-white/5 p-2 text-xs font-medium text-white outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                  >
                    <option value="Wedding Ceremony & Reception" className="bg-gray-900 text-white">Wedding Ceremony & Reception</option>
                    <option value="Corporate Event" className="bg-gray-900 text-white">Corporate Event</option>
                    <option value="Birthday Party" className="bg-gray-900 text-white">Birthday Party</option>
                    <option value="Social Gathering" className="bg-gray-900 text-white">Social Gathering</option>
                    <option value="Photo/Video Shoot" className="bg-gray-900 text-white">Photo/Video Shoot</option>
                    <option value="Other" className="bg-gray-900 text-white">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Guest Count
                  </label>
                  <div className="relative">
                    <Users className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-amber-400" />
                    <input
                      type="number"
                      min="1"
                      max="1000"
                      placeholder="e.g., 150"
                      value={formData.guestCount}
                      onChange={(e) => handleInputChange("guestCount", e.target.value)}
                      className="w-full rounded border border-white/20 bg-white/5 p-2 pl-7 text-xs font-medium text-white placeholder-white/50 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Event Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-amber-400" />
                    <input
                      type="date"
                      min={getMinDate()}
                      max={getMaxDate()}
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange("eventDate", e.target.value)}
                      className="w-full rounded border border-white/20 bg-white/5 p-2 pl-7 text-xs font-medium text-white outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (!formData.guestCount || !formData.eventDate) {
                    alert("Please fill in guest count and event date.");
                    return;
                  }
                  setStep(2);
                }}
                className="w-full rounded-lg bg-amber-500 py-2 text-xs font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20"
              >
                Continue <ArrowRight className="h-2 w-2 inline-block ml-0.5" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              className="space-y-3"
            >
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-amber-400" />
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="w-full rounded border border-white/20 bg-white/5 p-2 pl-7 text-xs font-medium text-white placeholder-white/50 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-amber-400" />
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full rounded border border-white/20 bg-white/5 p-2 pl-7 text-xs font-medium text-white placeholder-white/50 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-amber-400" />
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full rounded border border-white/20 bg-white/5 p-2 pl-7 text-xs font-medium text-white placeholder-white/50 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 rounded border border-white/20 py-1.5 text-xs font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.fullName || !formData.email || !formData.phone) {
                      alert("Please fill in all contact information.");
                      return;
                    }
                    setStep(3);
                  }}
                  className="flex-[2] flex items-center justify-center gap-0.5 rounded-lg bg-amber-500 py-1.5 text-xs font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20"
                >
                  Continue <ArrowRight className="h-2 w-2" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              className="space-y-3"
            >
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Additional Notes (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-2 top-2 h-3 w-3 text-amber-400" />
                  <textarea
                    rows={2}
                    placeholder="Special requirements or questions..."
                    value={formData.additionalDetails}
                    onChange={(e) => handleInputChange("additionalDetails", e.target.value)}
                    className="w-full rounded border border-white/20 bg-white/5 p-2 pl-7 text-xs font-medium text-white placeholder-white/50 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 resize-none"
                  />
                </div>
              </div>

              <div className="rounded border border-white/10 bg-white/5 p-2">
                <h4 className="font-bold mb-1 text-amber-300 text-xs uppercase">Summary</h4>
                <div className="text-xs text-white/80 space-y-0.5">
                  <p><span className="font-medium text-amber-200">Event:</span> {formData.eventType}</p>
                  <p><span className="font-medium text-amber-200">Guests:</span> {formData.guestCount}</p>
                  <p><span className="font-medium text-amber-200">Date:</span> {formData.eventDate}</p>
                </div>
              </div>

              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 rounded border border-white/20 py-1.5 text-xs font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-[2] flex items-center justify-center gap-0.5 rounded-lg bg-amber-500 py-1.5 text-xs font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-2 w-2 animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Submit Booking"
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};