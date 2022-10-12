const btn = document.querySelector(".mode-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = localStorage.getItem("theme");

  if (prefersDarkScheme.matches && currentTheme == "dark") {
    document.body.classList.add("dark");
  } else if (prefersDarkScheme.matches && currentTheme == "light") {
    document.body.classList.remove("dark");
  } else if (prefersDarkScheme.matches) {
    document.body.classList.add("dark");
  } else if (prefersDarkScheme.matches == false && currentTheme == "dark") {
    document.body.classList.add("dark");
  } else if (prefersDarkScheme.matches == false && currentTheme == "light") {
  } else if (prefersDarkScheme.matches == false) {
  } else {
  }

  function toggleMode() {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      var theme = "light";
      localStorage.setItem("theme", theme);
    } else {
      document.body.classList.add("dark");
      var theme = "dark";
      localStorage.setItem("theme", theme);
    }
  }