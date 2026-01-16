// app/components/Cart.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Calendar, Users, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { cn } from '@/app/lib/utils';
import Link from 'next/link';
import { formatPrice } from '../lib/utils/format';

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  return (
    <>
      {/* Cart Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white shadow-2xl hover:scale-105 transition-transform duration-200"
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="font-bold">Cart</span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Faster animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            />

            {/* Sidebar - Faster animation with lighter spring */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30,
                mass: 0.5 
              }}
              className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-stone-200 p-6">
                  <div className="flex items-center gap-3">
                    <ShoppingCart className="h-6 w-6" />
                    <h2 className="text-2xl font-bold">Your Event Cart</h2>
                    {totalItems > 0 && (
                      <span className="rounded-full bg-black px-3 py-1 text-sm text-white">
                        {totalItems} {totalItems === 1 ? 'item' : 'items'}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-2 hover:bg-stone-100 transition-colors duration-150"
                    aria-label="Close cart"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Items List - Faster item animations */}
                <div className="flex-1 overflow-y-auto p-6">
                  {items.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <ShoppingCart className="mb-4 h-16 w-16 text-stone-300" />
                      <h3 className="mb-2 text-xl font-bold text-stone-700">Your cart is empty</h3>
                      <p className="text-stone-500">Add venues and services to get started</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="rounded-xl border border-stone-200 p-4"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-start gap-3">
                                {item.image && (
                                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-stone-100">
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                )}
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-bold text-amber-800">
                                      {item.type.toUpperCase()}
                                    </span>
                                    <h3 className="font-bold text-stone-900">{item.name}</h3>
                                  </div>
                                  <p className="mt-1 text-lg font-bold text-stone-900">
                                    {formatPrice(item.price)}
                                  </p>
                                  {(item.date || item.guests) && (
                                    <div className="mt-2 flex flex-wrap gap-3 text-sm text-stone-500">
                                      {item.date && (
                                        <span className="flex items-center gap-1">
                                          <Calendar className="h-3 w-3" /> {item.date}
                                        </span>
                                      )}
                                      {item.guests && (
                                        <span className="flex items-center gap-1">
                                          <Users className="h-3 w-3" /> {item.guests} guests
                                        </span>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="rounded-full p-2 text-stone-400 hover:bg-red-50 hover:text-red-500 transition-colors duration-150"
                                aria-label="Remove item"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="rounded-full bg-stone-100 p-1 hover:bg-stone-200 transition-colors duration-150"
                                  aria-label="Decrease quantity"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="w-8 text-center font-bold">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="rounded-full bg-stone-100 p-1 hover:bg-stone-200 transition-colors duration-150"
                                  aria-label="Increase quantity"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-stone-200 p-6"
                  >
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-stone-600">Subtotal</span>
                        <span className="text-xl font-bold">{formatPrice(totalPrice)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-stone-600">Estimated Tax</span>
                        <span className="text-stone-600">Calculated at checkout</span>
                      </div>
                      <div className="flex items-center justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>{formatPrice(totalPrice)}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={clearCart}
                        className="flex-1 rounded-full border border-stone-300 py-3 font-bold text-stone-600 hover:bg-stone-50 transition-colors duration-150"
                      >
                        Clear All
                      </button>
                      <Link
                        href="/checkout"
                        onClick={() => setIsOpen(false)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-black py-3 font-bold text-white hover:scale-[1.02] transition-all duration-200"
                      >
                        Proceed to Checkout <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <p className="mt-4 text-center text-sm text-stone-500">
                      Need help? <a href="tel:+15551234567" className="font-bold hover:underline">Call our team</a>
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};