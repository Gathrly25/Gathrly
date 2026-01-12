// app/components/PaymentForm.tsx
"use client";

import React, { useState } from "react";
import { 
  useStripe, 
  useElements, 
  PaymentElement
} from "@stripe/react-stripe-js";
import { formatPrice } from "@/app/lib/utils/format";
import { Loader2, CheckCircle, AlertCircle, Shield, CreditCard, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface PaymentFormProps {
  amount: number;
  clientSecret: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ 
  amount, 
  clientSecret,
  onSuccess,
  onError 
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Payment system not ready");
      return;
    }

    setIsProcessing(true);
    setMessage(null);

    // Validate email
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      setIsProcessing(false);
      return;
    }

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setMessage(submitError.message!);
        toast.error("Payment form error", {
          description: submitError.message,
        });
        setIsProcessing(false);
        return;
      }

      console.log('Confirming payment with clientSecret:', clientSecret.substring(0, 20) + '...');

      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_APP_URL || window.location.origin}/payment/success?amount=${amount}`,
          receipt_email: email,
        },
        redirect: "if_required",
      });

      if (error) {
        console.error('Stripe payment error:', error);
        setMessage(error.message!);
        onError?.(error.message!);
        toast.error("Payment failed", {
          description: error.message,
          duration: 5000,
        });
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        console.log('Payment succeeded:', paymentIntent.id);
        setMessage("Payment successful!");
        toast.success("Payment successful!", {
          description: "Your booking has been confirmed",
          duration: 3000,
        });
        onSuccess?.();
        
        setTimeout(() => {
          window.location.href = `/payment/success?amount=${amount}&payment_intent=${paymentIntent.id}&payment_intent_client_secret=${clientSecret}`;
        }, 2000);
      } else if (paymentIntent && paymentIntent.status === "requires_action") {
        toast.info("Additional verification required", {
          description: "Please complete the verification step",
        });
        
        const { error: confirmError } = await stripe.confirmPayment({ 
          clientSecret,
          confirmParams: {
            return_url: `${process.env.NEXT_PUBLIC_APP_URL || window.location.origin}/payment/success`,
          }
        });
        
        if (confirmError) {
          setMessage(confirmError.message!);
          toast.error("Verification failed", {
            description: confirmError.message,
          });
        }
      } else {
        setMessage("Payment processing...");
        toast.info("Payment is being processed", {
          description: "Please wait a moment",
        });
      }
    } catch (error: any) {
      console.error("Unexpected payment error:", error);
      setMessage(error.message || "An unexpected error occurred");
      toast.error("Payment error", {
        description: "Please try again or contact support",
        duration: 5000,
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="rounded-xl bg-gradient-to-br from-white/5 to-white/10 p-6 border border-white/10 backdrop-blur-sm shadow-xl">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-amber-500/10 p-1.5 border border-amber-400/30">
              <CreditCard className="h-4 w-4 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Payment Details</h3>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-bold border border-amber-400/30">
            <Sparkles className="h-2 w-2" />
            TEST MODE
          </div>
        </div>
        <p className="text-white/60 text-sm">Complete your booking with secure payment</p>
        
        <div className="mt-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-amber-600/10 p-3 border border-amber-400/30">
          <div className="flex items-center justify-between">
            <span className="text-white/80">Total Amount:</span>
            <span className="text-xl font-bold text-amber-400">
              {formatPrice(amount)}
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {message && (
          <div className={`rounded-lg p-3 ${message.includes("success") ? 'bg-green-500/10 text-green-300 border border-green-400/30' : 'bg-red-500/10 text-red-300 border border-red-400/30'}`}>
            <div className="flex items-center gap-2">
              {message.includes("success") ? (
                <CheckCircle className="h-4 w-4" />
              ) : (
                <AlertCircle className="h-4 w-4" />
              )}
              <p className="text-sm">{message}</p>
            </div>
          </div>
        )}

        {/* Email Input */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-300">
            Email for receipt
          </label>
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 rounded" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@example.com"
              className="relative w-full rounded border border-white/20 bg-transparent p-3 text-sm font-medium text-white placeholder-white/50 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 backdrop-blur-sm"
              required
            />
          </div>
          <p className="text-xs text-white/50">A receipt will be sent to this email</p>
        </div>

        {/* Payment Element - Custom Styles */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-amber-300">
            Payment method
          </label>
          <div className="rounded border border-white/20 bg-white/5 p-3">
            <style jsx global>{`
              .StripeElement {
                padding: 10px;
                border-radius: 4px;
              }
              
              .StripeElement--focus {
                border-color: #fbbf24 !important;
                box-shadow: 0 0 0 1px rgba(251, 191, 36, 0.3) !important;
              }
              
              .InputElement {
                color: white !important;
                background: rgba(255, 255, 255, 0.05) !important;
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                border-radius: 4px !important;
                padding: 10px !important;
              }
              
              .InputElement:focus {
                border-color: #fbbf24 !important;
                box-shadow: 0 0 0 1px rgba(251, 191, 36, 0.3) !important;
                background: rgba(255, 255, 255, 0.1) !important;
              }
              
              .Tab {
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
                background: rgba(255, 255, 255, 0.05) !important;
                color: rgba(255, 255, 255, 0.7) !important;
              }
              
              .Tab:hover {
                background: rgba(255, 255, 255, 0.1) !important;
              }
              
              .Tab--selected {
                border-color: #fbbf24 !important;
                background: rgba(251, 191, 36, 0.1) !important;
                color: #fbbf24 !important;
              }
            `}</style>
            <PaymentElement
              options={{
                layout: "tabs",
                wallets: {
                  applePay: 'never',
                  googlePay: 'never'
                }
              }}
            />
          </div>
        </div>

        <div className="pt-3">
          <button
            type="submit"
            disabled={!stripe || isProcessing || !clientSecret}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-amber-500 py-3 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4" />
                Pay {formatPrice(amount)} (Test)
              </>
            )}
          </button>
          
          <div className="mt-3 text-center space-y-1">
            <p className="text-xs text-white/70 flex items-center justify-center gap-1">
              <Shield className="h-3 w-3 text-amber-400" />
              Your payment is secured with 256-bit SSL encryption
            </p>
            <p className="text-xs text-white/50">
              This is a test transaction. No real money will be charged.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};