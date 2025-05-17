
// Dark mode configuration
// This script sets up dark mode for the application

// Check if the system prefers dark mode
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Initialize dark mode based on user preference or system preference
export const initializeDarkMode = () => {
  // Check if user has a stored preference
  const storedTheme = localStorage.getItem("theme");
  
  // If a preference is stored, use that, otherwise use the system preference
  const enableDark = storedTheme === "dark" || (!storedTheme && systemPrefersDark);
  
  if (enableDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

// Toggle dark mode
export const toggleDarkMode = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

// Apply dark mode immediately
initializeDarkMode();
