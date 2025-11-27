type ClassValue =
  | string
  | number
  | false
  | null
  | undefined
  | ClassValue[]
  | Record<string, boolean | string | number | undefined | null>;

/**
 * Utility helper that merges class names in a clsx-like fashion without requiring
 * any third-party dependencies. It flattens arrays and keeps truthy entries only.
 */
export function cn(...inputs: ClassValue[]): string {
  const classList: string[] = [];

  const append = (value: ClassValue) => {
    if (!value && value !== 0) return;

    if (typeof value === "string" || typeof value === "number") {
      if (String(value).trim().length) {
        classList.push(String(value).trim());
      }
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(append);
      return;
    }

    if (typeof value === "object") {
      Object.entries(value).forEach(([key, val]) => {
        if (val) classList.push(key);
      });
    }
  };

  inputs.forEach(append);
  return classList.join(" ");
}
