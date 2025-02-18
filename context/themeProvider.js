"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { gsap } from "gsap";

// Create ThemeContext
export const ThemeContext = createContext();

// ThemeProvider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Save theme to localStorage and apply animations
  useEffect(() => {
    localStorage.setItem("theme", theme);

    // Smooth background and text transition
    gsap.to("body", {
      backgroundColor: theme === "light" ? "#ffffff" : "#1a202c",
      color: theme === "light" ? "#000000" : "#ffffff",
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

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
