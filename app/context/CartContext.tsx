// app/context/CartContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner'; // Import toast

// Types
export interface CartItem {
  id: string;
  name: string;
  type: 'venue' | 'service';
  price: number;
  quantity: number;
  image?: string;
  date?: string;
  guests?: number;
  duration?: string;
  venueSlug?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('eventVenueCart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        toast.error('Failed to load cart');
      }
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem('eventVenueCart', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
      toast.error('Failed to save cart');
    }
  }, [items]);

  const addToCart = (item: CartItem) => {
    setItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      
      if (existingItem) {
        // Item already exists, increase quantity
        const updatedItems = prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        
        // Show toast for existing item
        toast.success(`${item.name} quantity updated`, {
          description: `Now have ${existingItem.quantity + 1} in cart`,
        });
        
        return updatedItems;
      }
      
      // New item added
      const updatedItems = [...prev, { ...item, quantity: 1 }];
      
      // Show toast for new item
      toast.success(`${item.name} added to cart!`, {
        description: item.type === 'venue' 
          ? '🎉 Venue added successfully' 
          : '✨ Service added successfully',
        action: {
          label: "View Cart",
          onClick: () => {
            // You can trigger cart sidebar open here if needed
            console.log('View cart clicked');
          },
        },
      });
      
      return updatedItems;
    });
  };

  const removeFromCart = (id: string) => {
    setItems(prev => {
      const itemToRemove = prev.find(item => item.id === id);
      const updatedItems = prev.filter(item => item.id !== id);
      
      // Show toast for removal
      if (itemToRemove) {
        toast.info(`${itemToRemove.name} removed from cart`, {
          action: {
            label: "Undo",
            onClick: () => {
              setItems(prev => [...prev, { ...itemToRemove, quantity: 1 }]);
              toast.success(`${itemToRemove.name} restored to cart`);
            },
          },
        });
      }
      
      return updatedItems;
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    
    setItems(prev => {
      const item = prev.find(item => item.id === id);
      const updatedItems = prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      );
      
      // Show toast for quantity update
      if (item && quantity !== item.quantity) {
        toast.success(`${item.name} quantity updated`, {
          description: `Changed from ${item.quantity} to ${quantity}`,
        });
      }
      
      return updatedItems;
    });
  };

  const clearCart = () => {
    if (items.length === 0) return;
    
    const cartCopy = [...items];
    setItems([]);
    
    // Show toast for clearing cart
    toast.info(`Cart cleared (${items.length} items removed)`, {
      description: 'All items have been removed from your cart',
      action: {
        label: "Undo",
        onClick: () => {
          setItems(cartCopy);
          toast.success(`Cart restored (${cartCopy.length} items)`);
        },
      },
    });
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};