const codes = () => {
  const theme = localStorage.getItem("theme");
  const metaTag = document.querySelector("meta[name='theme-color']");

  const isDark = theme === "dark" || !theme;

  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.add("light");
  }

  if (metaTag) {
    metaTag.setAttribute("content", isDark ? "#0a0a0a" : "#ffffff");
  }
};

export const getThemeSelected = `(${codes})()`;
