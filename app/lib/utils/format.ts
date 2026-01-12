// app/lib/utils/format.ts
export const formatPrice = (
  price: number, 
  options?: {
    currency?: string;
    showCents?: boolean;
  }
): string => {
  const { currency = 'USD', showCents = false } = options || {};
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  }).format(price);
};

// Usage:
formatPrice(2500) // "$2,500"
formatPrice(2500, { showCents: true }) // "$2,500.00"
formatPrice(2500, { currency: 'EUR' }) // "€2,500"