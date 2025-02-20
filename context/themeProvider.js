"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { gsap } from "gsap";

// Create ThemeContext
export const ThemeContext = createContext();

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    gsap.killTweensOf("body");
    gsap.to("body", {
      backgroundColor: theme === "light" ? "#ffffff" : "#1a202c",
      color: theme === "light" ? "#000000" : "#ffffff",
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  if (theme === null) return null;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom useTheme Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
