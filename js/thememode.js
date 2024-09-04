// SWITCHING BETWEEN LIGHT/DARK THEME

// Look for a local storage value.
// Fall back to system setting.
// Fall back to dark mode.

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}


//  update the icon and aria-label.

function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "🌙" : "☀️";
  const newArial = isDark ? "Change to light theme" : "Change to dark theme";
  buttonEl.setAttribute("aria-label", newArial);
  buttonEl.innerText = newCta;
}


//  update the theme setting on the html tag

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}


//  ****On page load****

// Grab what we need from the DOM and system settings on page load

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

//   Work out the current site settings

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

//  Update the theme setting and button text accoridng to current settings
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

// Add an event listener to toggle the theme

button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});