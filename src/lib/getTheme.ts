const codes = () => {
  const theme = localStorage.getItem("theme");
  const metaTag = document.querySelector("meta[name='theme-color']");

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.add("light");
  }

  if (metaTag) {
    metaTag.setAttribute("content", theme === "dark" ? "#0a0a0a" : "#ffffff");
  }
};

export const getThemeSelected = `(${codes})()`;
