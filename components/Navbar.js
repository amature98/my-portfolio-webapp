"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/themeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-evenly p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      {/* Left Section: Home Link */}
      <div>
        <Link href="/" className="text-lg font-semibold hover:underline">
          Home
        </Link>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="flex space-x-6 px-8 py-4  rounded-full backdrop-blur-md bg-opacity-30 bg-white dark:bg-gray-900 shadow-lg">
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
        className="relative w-14 h-8 flex items-center cursor-pointer p-1 rounded-full bg-gray-300 dark:bg-gray-700"
      >
        {/* Sun Icon */}
        <Image
          src="/icons/sun.png"
          alt="Light Theme Icon"
          width={20}
          height={20}
          className={`ml-1 drop-shadow-[0_0_10px_#facc15] transition-opacity duration-300 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Toggle Knob */}
        <div
          className={`absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transition-transform duration-300 ${
            theme === "light" ? "translate-x-0" : "translate-x-6"
          }`}
        ></div>

        {/* Moon Icon */}
        <Image
          src="/icons/full-moon.png"
          alt="Dark Theme Icon"
          width={20}
          height={20}
          className={`ml-auto mr-1 drop-shadow-[0_0_10px_#38bdf8] transition-opacity duration-300 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </nav>
  );
}
