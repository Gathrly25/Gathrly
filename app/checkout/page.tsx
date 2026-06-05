// app/checkout/page.tsx
"use client";

import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import { Cart } from '@/app/components/Cart';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, CreditCard, User, CheckCircle, Star, Calendar, FileText, Sparkles } from 'lucide-react';
import { formatPrice } from '../lib/utils/format';
import { BookingForm } from '../components/booking-form';
import { PaymentElementsWrapper } from '../components/PaymentElementsWrapper';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [bookingComplete, setBookingComplete] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);

  if (items.length === 0) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Sparkles Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32">
            <Sparkles className="w-full h-full text-amber-500/10" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32">
            <Star className="w-full h-full text-amber-400/10" />
          </div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24">
            <Sparkles className="w-full h-full text-amber-300/5" />
          </div>
        </div>
        
        <div className="relative z-20 w-full px-4 md:px-8 lg:px-20 text-center">
          <div className="flex flex-col items-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/20">
              <ShoppingBag className="h-10 w-10 text-amber-400" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Your cart is empty
            </h1>
            
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-6" />
            
            <p className="text-lg text-white/70 mb-6 max-w-md">
              Add some venues or services to get started
            </p>
            
            <Link
              href="/"
              className="rounded-xl bg-amber-500 px-8 py-3 font-bold text-white hover:scale-105 transition-transform hover:shadow-lg hover:shadow-amber-500/25"
            >
              Browse Venues
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const handleBookingComplete = (data: any) => {
    setBookingData(data);
    setBookingComplete(true);
    console.log('Booking data:', data);
  };

  const handlePaymentSuccess = () => {
    console.log('Payment successful!');
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error);
  };

  // Determine which phase to show
  const getCurrentPhase = () => {
    if (!bookingComplete) return 'event-details';
    if (bookingComplete && !showPayment) return 'review';
    return 'payment';
  };

  const currentPhase = getCurrentPhase();

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Sparkles and Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 opacity-20">
          <Sparkles className="w-full h-full text-amber-400" />
        </div>
        <div className="absolute top-20 right-20 w-16 h-16 opacity-15">
          <Star className="w-full h-full text-amber-300" />
        </div>
        <div className="absolute bottom-20 left-20 w-20 h-20 opacity-10">
          <Sparkles className="w-full h-full text-amber-500" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 opacity-10">
          <Star className="w-full h-full text-amber-400" />
        </div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 opacity-5">
          <Sparkles className="w-full h-full text-amber-300" />
        </div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 opacity-10">
          <Star className="w-full h-full text-amber-500" />
        </div>
      </div>

      <div className="relative z-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-20 py-8">
          {/* Reduced space for back link */}
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2 text-amber-300 hover:text-white transition-colors group text-sm"
          >
            <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" /> Back
          </Link>

          {/* Main Heading with reduced spacing */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-xs uppercase tracking-widest text-amber-300 font-medium">
                Secure Checkout
              </span>
              <Sparkles className="h-4 w-4 text-amber-400" />
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-white">
                Complete Your
              </span>
              <br />
              <span className="text-white">
                Booking
              </span>
            </h1>
            
            {/* Compact Checkout Steps */}
            <div className="max-w-md mx-auto mb-4">
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className={`flex flex-col items-center space-y-1 ${currentPhase === 'event-details' ? 'opacity-100' : 'opacity-80'}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${currentPhase === 'event-details' ? 'border-amber-400 bg-amber-500/20' : 'border-white/30 bg-white/10'}`}>
                    <Calendar className="h-3 w-3 text-amber-400" />
                  </div>
                  <span className="text-[10px] font-medium text-white">Details</span>
                </div>
                
                <div className={`flex flex-col items-center space-y-1 ${currentPhase === 'review' ? 'opacity-100' : 'opacity-80'}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${currentPhase === 'review' ? 'border-amber-400 bg-amber-500/20' : 'border-white/30 bg-white/10'}`}>
                    <FileText className="h-3 w-3 text-amber-400" />
                  </div>
                  <span className="text-[10px] font-medium text-white">Review</span>
                </div>
                
                <div className={`flex flex-col items-center space-y-1 ${currentPhase === 'payment' ? 'opacity-100' : 'opacity-80'}`}>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${currentPhase === 'payment' ? 'border-amber-400 bg-amber-500/20' : 'border-white/30 bg-white/10'}`}>
                    <CreditCard className="h-3 w-3 text-amber-400" />
                  </div>
                  <span className="text-[10px] font-medium text-white">Payment</span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-amber-400 transition-all duration-500"
                  style={{ 
                    width: currentPhase === 'event-details' ? '33%' 
                          : currentPhase === 'review' ? '66%' 
                          : '100%'
                  }}
                />
              </div>
            </div>
            
            <div className="w-12 h-0.5 bg-amber-400 mx-auto" />
          </div>

          {/* Phase 1: Event Details (Center Only) */}
          {currentPhase === 'event-details' && (
            <div className="max-w-xl mx-auto">
              <div className="space-y-4">
                <div className="mb-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="rounded-full bg-amber-500/10 p-1.5 border border-amber-400/30">
                      <Calendar className="h-4 w-4 text-amber-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Event Details</h2>
                  </div>
                  <p className="text-white/60 text-sm">Fill in your event information to get started</p>
                </div>
                <BookingForm onSubmitComplete={handleBookingComplete} />
              </div>
            </div>
          )}

          {/* Phase 2: Review (Order Summary on Right) */}
          {currentPhase === 'review' && (
            <div className="grid gap-6 lg:gap-6 lg:grid-cols-2">
              {/* Left Column - Review Details */}
              <div className="flex flex-col">
                {/* Header section with same spacing as order summary */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="rounded-full bg-amber-500/10 p-1.5 border border-amber-400/30">
                      <FileText className="h-4 w-4 text-amber-400" />
                    </div>
                    <h2 className="text-lg font-bold text-white">Review & Confirm</h2>
                  </div>
                  <p className="text-white/60 text-sm">Review your booking details before payment</p>
                </div>
                
                {/* Main content box - aligned with order summary */}
                <div className="rounded-lg bg-white/5 p-5 border border-white/10 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-full bg-green-500/10 p-2.5 border border-green-400/30">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">Booking Details Submitted</h3>
                      <p className="text-white/60 text-sm">Our team will review your request within 24 hours</p>
                    </div>
                  </div>
                  
                  {/* Booking Summary - matched styling with order summary */}
                  <div className="mb-5 p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-bold text-amber-300 mb-3 text-sm uppercase tracking-wider">Booking Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/70">Event Type:</span>
                        <span className="text-white font-medium">{bookingData?.eventType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Guests:</span>
                        <span className="text-white font-medium">{bookingData?.guestCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Date:</span>
                        <span className="text-white font-medium">{bookingData?.eventDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Contact:</span>
                        <span className="text-white font-medium">{bookingData?.fullName}</span>
                      </div>
                       <div className="flex justify-between">
                        <span className="text-white/70">Address:</span>
                        <span className="text-white font-medium">{bookingData?.address}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/70">Email:</span>
                        <span className="text-white font-medium text-sm truncate">{bookingData?.email}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons - matched height with order summary bottom content */}
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => setBookingComplete(false)}
                      className="flex-1 rounded-lg border border-white/20 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                    >
                      Edit Details
                    </button>
                    <button
                      onClick={() => setShowPayment(true)}
                      className="flex-1 rounded-lg bg-amber-500 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/25"
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Order Summary (Only in Review Phase) */}
              <div className="flex flex-col">
                {/* Header section aligned with Review & Confirm header */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="h-4 w-4 text-amber-400" />
                    <h2 className="text-lg font-bold text-white">Order Summary</h2>
                  </div>
                  <p className="text-white/60 text-sm">Review your order items and total amount</p>
                </div>
                
                <div className="rounded-lg bg-white/5 p-5 border border-white/10 h-full">
                  {/* Removed the Order Summary heading from inside the box */}
                  
                  <div className="mb-5 space-y-3 max-h-[250px] overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center justify-between pb-3 border-b border-white/10">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 mb-1">
                            <span className="rounded-full bg-amber-500/20 px-2 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
                              {item.type.toUpperCase()}
                            </span>
                          </div>
                          <h3 className="font-bold text-white text-sm truncate">{item.name}</h3>
                          <p className="text-xs text-white/60">Quantity: {item.quantity}</p>
                        </div>
                        <div className="text-right ml-3">
                          <p className="font-bold text-white text-sm">{formatPrice(item.price * item.quantity)}</p>
                          <p className="text-xs text-white/60">{formatPrice(item.price)} each</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Subtotal</span>
                      <span className="font-medium text-white">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Service Fee</span>
                      <span className="text-amber-400">Included</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">Estimated Tax</span>
                      <span className="text-white/70">Calculated at checkout</span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <span className="text-white font-medium">Total</span>
                      <span className="text-amber-400 font-bold">{formatPrice(totalPrice)}</span>
                    </div>
                  </div>

                  <div className="mt-5 text-xs text-white/50 space-y-2">
                    <p>By proceeding, you agree to our Terms of Service.</p>
                    <p>Your card will not be charged until the booking is confirmed by our team.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Phase 3: Payment (Center Only) */}
          {currentPhase === 'payment' && (
            <div className="max-w-xl mx-auto">
              <div className="space-y-4">
                <div className="mb-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="rounded-full bg-amber-500/10 p-1.5 border border-amber-400/30">
                      <CreditCard className="h-4 w-4 text-amber-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Secure Payment</h2>
                  </div>
                  <p className="text-white/60 text-sm">Complete your booking with secure payment</p>
                </div>
                
                {/* Payment Section */}
                <div className="space-y-4">
                  <PaymentElementsWrapper 
                    amount={totalPrice}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Cart */}
      <Cart />
    </section>
  );
}