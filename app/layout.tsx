// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";
import { Cart } from "@/app/components/Cart";
import { Toaster } from "sonner"; // Add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Event Venue Booking Platform",
  description: "Book premium venues and services for unforgettable events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} antialiased`}
      >
        <CartProvider>
          {children}
          <Cart />
          <Toaster 
            position="bottom-right"
            toastOptions={{
              className: "bg-white border border-stone-200 text-stone-900",
              duration: 3000,
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}