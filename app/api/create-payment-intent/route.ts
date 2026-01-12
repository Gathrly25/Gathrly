import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    // Validate amount
    if (!amount || isNaN(amount) || amount < 50) {
      return NextResponse.json(
        { error: "Valid amount is required (minimum $0.50)" },
        { status: 400 }
      );
    }

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // Amount in cents
      currency: "usd",
      payment_method_types: ['card'],
      metadata: {
        test_mode: 'true',
        environment: 'development'
      }
    });

    return NextResponse.json({ 
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });
  } catch (error: any) {
    console.error("Stripe Error:", error);
    
    return NextResponse.json(
      { 
        error: error.message || "Internal Server Error",
        code: error.code,
        type: error.type
      },
      { status: error.statusCode || 500 }
    );
  }
}