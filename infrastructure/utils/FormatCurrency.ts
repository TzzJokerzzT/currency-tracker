/**
 * Formats a numeric value as a US dollar currency string.
 * 
 * @function formatCurrency
 * @description Converts a number to a localized currency format with fixed decimal places
 * 
 * @param {number} amount - The numeric value to be formatted
 * @returns {string} Formatted currency string in US dollars
 * 
 * @example
 * // Format a number as currency
 * const formattedPrice = formatCurrency(1234.56);
 * // Returns: '1,234.56'
 * 
 * @remarks
 * - Uses Intl.NumberFormat for consistent currency formatting
 * - Displays exactly 2 decimal places
 * - Formats according to US locale
 * - Useful for displaying cryptocurrency and financial prices
 */
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
