export const toArabicNumber = (input: string): string => {
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return input
    .split("")
    .map((char) => (/\d/.test(char) ? arabicDigits[parseInt(char)] : char))
    .join("");
};

export const clearString = (input: string): string => {
  return input.replace(/[^a-zA-Z0-9]/g, "");
};
