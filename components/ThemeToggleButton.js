import { useTheme } from "@/context/themeProvider";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  const switchRef = useRef(null);
  const sunRef = useRef(null);
  const moonRef = useRef(null);

  useEffect(() => {
    gsap.to(switchRef.current, {
      x: theme === "light" ? 0 : 28, // Smooth sliding effect
      duration: 0.5,
      ease: "power2.inOut",
    });
    if (theme === "dark") {
      // Continuous rotation effect for the Sun
      gsap.to(sunRef.current, {
        rotate: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
      });

      // Reset moon animation when switching to light mode
      gsap.to(moonRef.current, { y: 0, duration: 0.2 });
    }
  }, [theme]);
  return (
    <div
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle theme"
      className="relative w-16 h-8 flex items-center bg-gray-200 dark:bg-gray-900 rounded-full p-1 cursor-pointer transition-all duration-500 shadow-md shadow-[#facc15] dark:shadow-[#38bdf8]"
    >
      {/* Sun Icon */}
      <Image
        ref={sunRef}
        src="/icons/sun.png"
        alt="Light Theme Icon"
        width={24}
        height={24}
        className={`absolute left-1 transition-all duration-300 ${
          theme === "light" ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Toggle Knob */}
      <div
        ref={switchRef}
        className="absolute left-1 w-6 h-6 bg-white dark:bg-gray-700 rounded-full"
      ></div>

      {/* Moon Icon */}
      <Image
        ref={moonRef}
        src="/icons/full-moon.png"
        alt="Dark Theme Icon"
        width={26}
        height={26}
        className={`absolute right-2 transition-all duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
