"use client";

import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentForm } from './PaymentForm';
import { Loader2, AlertCircle, Shield } from 'lucide-react';
import { toast } from 'sonner';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

interface PaymentElementsWrapperProps {
  amount: number;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const PaymentElementsWrapper: React.FC<PaymentElementsWrapperProps> = ({
  amount,
  onSuccess,
  onError
}) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Creating PaymentIntent for amount:', amount);
        
        // Convert to cents
        const amountInCents = Math.round(amount * 100);
        
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json" 
          },
          body: JSON.stringify({ 
            amount: amountInCents 
          }),
        });

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || `HTTP ${response.status}: Failed to create payment`);
        }

        if (!data.clientSecret) {
          throw new Error("No client secret returned from server");
        }

        setClientSecret(data.clientSecret);
      } catch (error: any) {
        console.error("Payment Intent Error:", error);
        const errorMessage = error.message || "Failed to set up payment";
        setError(errorMessage);
        onError?.(errorMessage);
        
        toast.error("Payment setup failed", {
          description: errorMessage,
          duration: 5000,
        });
      } finally {
        setLoading(false);
      }
    };

    if (amount > 0) {
      createPaymentIntent();
    } else {
      setError("Invalid amount");
      setLoading(false);
    }
  }, [amount, onError]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white shadow-xl border border-stone-100">
        <Loader2 className="h-8 w-8 animate-spin text-stone-400 mb-4" />
        <p className="text-stone-600">Setting up secure payment...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-xl border border-stone-100">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <h3 className="text-xl font-bold text-stone-900">Payment Setup Error</h3>
        </div>
        <p className="text-stone-600 mb-4">{error}</p>
        
        {/* Development instructions */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
          <h4 className="font-bold text-blue-800 mb-2">Development Setup:</h4>
          <div className="text-sm text-blue-700 space-y-2">
            <p>1. Ensure you have valid Stripe test keys in your <code>.env.local</code> file:</p>
            <div className="bg-blue-100 p-3 rounded-lg">
              <pre className="text-xs">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...<br />STRIPE_SECRET_KEY=sk_test_...</pre>
            </div>
            <p>2. Visit the <a href="https://dashboard.stripe.com/test/settings/payment_methods" target="_blank" rel="noopener noreferrer" className="underline font-medium">Stripe Test Dashboard</a> to enable payment methods</p>
          </div>
        </div>
        
        <button
          onClick={() => window.location.reload()}
          className="w-full rounded-xl bg-black px-6 py-3 font-bold text-white hover:scale-[1.02] transition-transform"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!clientSecret) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow-xl border border-stone-100">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-stone-400 mx-auto mb-4" />
          <p className="text-stone-600">Unable to initialize payment system</p>
        </div>
      </div>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#000000',
            colorBackground: '#fafaf9',
            colorText: '#1c1917',
            colorDanger: '#ef4444',
            fontFamily: 'system-ui, sans-serif',
            borderRadius: '12px',
          },
          rules: {
            '.Input': {
              border: '1px solid #e7e5e4',
              borderRadius: '12px',
              padding: '12px 16px',
            },
            '.Tab': {
              border: '1px solid #e7e5e4',
              borderRadius: '8px',
            },
          },
        },
      }}
    >
      <PaymentForm 
        amount={amount}
        onSuccess={onSuccess}
        onError={onError}
        clientSecret={clientSecret}
      />
    </Elements>
  );
};