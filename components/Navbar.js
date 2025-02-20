"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/themeProvider";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const switchRef = useRef(null);

  useEffect(() => {
    gsap.to(switchRef.current, {
      x: theme === "light" ? 0 : 28, // Smooth sliding effect
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, [theme]);

  return (
    <nav className="flex items-center justify-evenly p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg shadow-gray-700">
      {/* Left Section: Home Link */}
      <div>
        <Link href="/" className="text-lg font-semibold hover:underline">
          Home
        </Link>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="flex border-[#B65001] space-x-6 px-6 py-2 rounded-full backdrop-blur-sm bg-opacity-20 bg-white dark:bg-gray-900 shadow-lg">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/blogs" className="hover:underline">
          Blogs
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>

      {/* Right Section: Theme Toggle Button */}
      <div
        onClick={toggleTheme}
        role="button"
        aria-label="Toggle theme"
        className="relative w-16 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all duration-500 shadow-md"
      >
        {/* Sun Icon */}
        <Image
          src="/icons/sun.png"
          alt="Light Theme Icon"
          width={24}
          height={24}
          className={`absolute left-1 transition-all duration-300 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Toggle Knob */}
        <div
          ref={switchRef}
          className="absolute left-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md"
        ></div>

        {/* Moon Icon */}
        <Image
          src="/icons/full-moon.png"
          alt="Dark Theme Icon"
          width={24}
          height={24}
          className={`absolute right-2 transition-all duration-300 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </nav>
  );
}
