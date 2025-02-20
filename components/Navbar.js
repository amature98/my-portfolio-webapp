"use client";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Projects",
    href: "/projects",
  }
]

export default function Navbar() {
  return (
    <nav className="flex items-center justify-evenly p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg">
      {/* Left Section: Home Link */}
      <div>
        <Link href="/" className="text-lg font-semibold">
          Home
        </Link>
      </div>
      {/* Middle Section: Navigation Links */}
      <div className="flex space-x-6 px-6 py-2 rounded-full bg-opacity-20 bg-gray-200 dark:bg-gray-900 shadow-md shadow-[#facc15] dark:shadow-[#38bdf8]">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="text-gray-900 dark:text-white">
            {link.name}
          </Link>
        ))}
      </div>
      {/* Right Section: Theme Toggle Button */}
      <ThemeToggleButton />
    </nav>
  );
}
