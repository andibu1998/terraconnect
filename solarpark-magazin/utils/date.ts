/**
 * Calculates a date in the past based on the number of days provided.
 * Returns the date formatted as a German string (e.g., "12. Oktober 2025").
 * 
 * @param daysAgo - Number of days to subtract from today
 * @returns Formatted date string
 */
export const getDynamicDate = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  
  return new Intl.DateTimeFormat('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};