"use client";

import React, { useState } from 'react';
import { ShoppingCart, Check, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/app/context/CartContext';
import { cn } from '@/app/lib/utils';
import { toast } from 'sonner'; // Import toast

interface AddToCartButtonProps {
  item: {
    id: string;
    name: string;
    type: 'venue' | 'service';
    price: number;
    image?: string;
    venueSlug?: string;
  };
  variant?: 'primary' | 'secondary' | 'icon';
  className?: string;
  showQuantity?: boolean;
}

export const AddToCartButton = ({
  item,
  variant = 'primary',
  className = '',
  showQuantity = false,
}: AddToCartButtonProps) => {
  const { addToCart, items, updateQuantity } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const cartItem = items.find(i => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart({
      ...item,
      quantity: 1,
    });
    
    // Show toast notification
    if (cartItem) {
      toast.success(`Added another ${item.name}`, {
        description: `Now have ${quantity + 1} in cart`,
        action: {
          label: "View Cart",
          onClick: () => {
            // Open cart or redirect to checkout
            const cartToggle = document.querySelector('[aria-label="Close cart"]');
            if (!cartToggle) {
              window.location.href = "/checkout";
            }
          },
        },
      });
    } else {
      toast.success(`${item.name} added to cart!`, {
        description: item.type === 'venue' ? 'Venue added successfully' : 'Service added successfully',
        action: {
          label: "View Cart",
          onClick: () => {
            const cartToggle = document.querySelector('[aria-label="Close cart"]');
            if (!cartToggle) {
              window.location.href = "/checkout";
            }
          },
        },
      });
    }
    
    setIsAdded(true);
    setIsAnimating(true);

    // Reset animation
    setTimeout(() => setIsAnimating(false), 300);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleIncrement = () => {
    updateQuantity(item.id, quantity + 1);
    toast.success(`Updated ${item.name}`, {
      description: `Quantity: ${quantity + 1}`,
    });
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      toast.info(`${item.name} removed from cart`);
    } else {
      toast.success(`Updated ${item.name}`, {
        description: `Quantity: ${quantity - 1}`,
      });
    }
    updateQuantity(item.id, quantity - 1);
  };

  if (showQuantity && quantity > 0) {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <button
          onClick={handleDecrement}
          className="rounded-full bg-stone-200 p-2 hover:bg-stone-300 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center font-bold">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="rounded-full bg-stone-200 p-2 hover:bg-stone-300 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          onClick={handleAddToCart}
          className="ml-2 rounded-full bg-amber-500 p-2 text-white hover:bg-amber-600 transition-colors"
          aria-label="Add more to cart"
        >
          <ShoppingCart className="h-4 w-4" />
        </button>
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <button
        onClick={handleAddToCart}
        className={cn(
          'relative rounded-full p-3 transition-all duration-300',
          isAdded
            ? 'bg-green-500 text-white'
            : 'bg-stone-900 text-white hover:bg-stone-800',
          className
        )}
        aria-label={isAdded ? 'Added to cart' : 'Add to cart'}
      >
        <AnimatePresence mode="wait">
          {isAdded ? (
            <motion.div
              key="check"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Check className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="cart"
              initial={{ scale: 1 }}
              animate={{ scale: isAnimating ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <ShoppingCart className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      className={cn(
        'group relative flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-bold transition-all duration-300',
        isAdded
          ? 'bg-green-500 text-white'
          : variant === 'primary'
          ? 'bg-black text-white hover:bg-stone-800'
          : 'border-2 border-black text-black hover:bg-black hover:text-white',
        className
      )}
    >
      <AnimatePresence mode="wait">
        {isAdded ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-2"
          >
            <Check className="h-5 w-5" /> Added!
          </motion.span>
        ) : (
          <motion.span
            key="add"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" /> Add to Cart
          </motion.span>
        )}
      </AnimatePresence>
      
      {/* Ripple effect */}
      {isAnimating && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </button>
  );
};