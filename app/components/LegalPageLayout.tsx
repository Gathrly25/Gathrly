// src/components/LegalPageLayout.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface LegalPageLayoutProps {
  children: React.ReactNode;
  lastUpdated: string;
}

export default function LegalPageLayout({ children, lastUpdated }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <Link href="/" className="text-xl font-bold text-gray-900">
              Gathrly
            </Link>
            <div className="w-20"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          <div className="mb-8 pb-8 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {typeof window !== 'undefined' && window.location.pathname === '/privacy-policy' 
                ? 'Privacy Policy' 
                : 'Terms & Conditions'}
            </h1>
            <p className="text-gray-500">Last updated: {lastUpdated}</p>
          </div>
          
          {children}
          
          {/* Footer note */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>
              By using Gathrly, you agree to our{' '}
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </Link>
              {' '}and{' '}
              <Link href="/terms-conditions" className="text-blue-600 hover:text-blue-700 underline">
                Terms & Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}