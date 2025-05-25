export const debounce = <T extends unknown[], R>(
  func: (...args: T) => R,
  delay: number
): ((...args: T) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: T): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
