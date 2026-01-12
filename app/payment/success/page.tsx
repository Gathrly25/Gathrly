// app/payment/success/page.tsx
"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Home, ShoppingBag, Star, Sparkles } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { toast } from 'sonner';

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ 
    amount?: string;
    payment_intent?: string;
    payment_intent_client_secret?: string;
  }>;
}) {
  const { clearCart } = useCart();
  
  // Use React.use() to unwrap the Promise
  const params = React.use(searchParams);
  
  const amount = params.amount ? parseFloat(params.amount) : 0;

  // Clear cart on successful payment
  useEffect(() => {
    clearCart();
    toast.success("Payment successful!", {
      description: `Booking confirmed for $${amount.toFixed(2)}`,
      duration: 3000,
    });
  }, [clearCart, amount]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Sparkles and Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 opacity-10">
          <Sparkles className="w-full h-full text-amber-400" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 opacity-15">
          <Star className="w-full h-full text-amber-300" />
        </div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 opacity-10">
          <Sparkles className="w-full h-full text-amber-500" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 opacity-10">
          <Star className="w-full h-full text-amber-400" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5">
          <Sparkles className="w-full h-full text-amber-300" />
        </div>
      </div>

      <div className="relative z-15">
        <div className="container mx-auto px-4 md:px-8 lg:px-20 py-16">
          <div className="max-w-2xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-12">
              <div className="mb-8 flex justify-center">
                <div className="rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 p-8 border border-amber-400/30">
                  <CheckCircle className="h-16 w-16 text-amber-400" />
                </div>
              </div>
              
              {/* <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span className="text-sm uppercase tracking-widest text-amber-300 font-medium">
                  Payment Successful
                </span>
                <Sparkles className="h-4 w-4 text-amber-400" />
              </div>
               */}
              <h1 className="mb-4 text-3xl md:text-4xl font-bold text-white">
                Payment Complete!
              </h1>
              
              <div className="w-16 h-1 bg-amber-400 mx-auto mb-6" />
              
              <p className="mb-2 text-lg text-white/80">
                Payment of{' '}
                <span className="font-bold text-amber-400">
                  ${amount.toFixed(2)}
                </span>{' '}
                is successfully transmitted.
              </p>
              
              <p className="text-white/60 text-sm">
                Thank you for your booking. Your payment has been processed successfully.
              </p>
            </div>
            
            {/* Status Indicators */}
            <div className="mb-12 rounded-xl bg-gradient-to-br from-white/5 to-white/10 p-6 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-4">Booking Status:</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-white/80">Payment Processed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-white/80">Booking Confirmed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-sm text-white/80">Awaiting Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-sm text-white/80">24hr Confirmation</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-bold text-white hover:scale-105 transition-all hover:shadow-lg hover:shadow-amber-500/25"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
              
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-400/30 bg-amber-500/10 px-6 py-3 font-bold text-amber-300 hover:bg-amber-500/20 transition-colors"
              >
                <ShoppingBag className="h-4 w-4" />
                Make Another Booking
              </Link>
            </div>
            
            {/* Confirmation Message */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <h3 className="text-base font-bold text-white">What happens next?</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span>Booking details received</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-green-400" />
                  <span>Payment confirmed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-amber-400" />
                  <span>Venue availability check</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 text-amber-400" />
                  <span>Final confirmation email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}