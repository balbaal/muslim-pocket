export const toArabicNumber = (input: string): string => {
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return input
    .split("")
    .map((char) => (/\d/.test(char) ? arabicDigits[parseInt(char)] : char))
    .join("");
};
