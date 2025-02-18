"use client";
import Link from "next/link";
import { useTheme } from "@/context/themeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-evenly">
      <div>
        <Link href="/" className="align-center">
          Home
        </Link>{" "}
      </div>
      <div className="space-x-6 rounded-full text-white bg-gray-800 m-6 p-4">
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
      <div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 transition-all"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        "
      </div>
    </nav>
  );
}
