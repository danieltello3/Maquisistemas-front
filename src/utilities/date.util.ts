export const formatDate = (date: string, initSeparator: string= "/", endSeparator: string="-"): string | null => {
  const parts = date.split(initSeparator);
  if (parts.length === 3) {
    const day = parts[0].padStart(2, '0');
    const month = parts[1].padStart(2, '0');
    const year = parts[2];
    return `${year}${endSeparator}${month}${endSeparator}${day}`;
  } else {
    return null;
  }
};