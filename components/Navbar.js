"use client";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-evenly p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg shadow-gray-700">
      {/* Left Section: Home Link */}
      <div>
        <Link href="/" className="text-lg font-semibold hover:underline">
          Home
        </Link>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="flex space-x-6 px-6 py-2 rounded-full bg-opacity-20 bg-gray-200 dark:bg-gray-900 shadow-lg dark:shadow-gray-600">
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
      <ThemeToggleButton/>
    </nav>
  );
}
