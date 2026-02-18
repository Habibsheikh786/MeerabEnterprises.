"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
  { name:  "Blog", href: "/Blog"},
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pagePath = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-white/70 shadow-md py-2"
          : "backdrop-blur-md bg-white/30 py-3"
      } border-b border-white/20`}
    >
      {/* ↓↓↓ Compact width and height */}
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={38}
              height={45}
              className="rounded-full shadow-sm"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl font-extrabold text-fuchsia-950 tracking-wide"
          >
            Meerab Enterprises
          </motion.h1>
        </div>

        {/* Desktop Menu */}
        <nav className="space-x-4 hidden md:flex">
          {navLinks.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className={`relative transition-all duration-300 hover:text-fuchsia-800 ${
                e.href === pagePath
                  ? "text-fuchsia-800 font-bold after:w-full"
                  : "text-gray-800 after:w-0"
              } after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:bg-fuchsia-800 after:transition-all after:duration-300 hover:after:w-full`}
            >
              {e.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-fuchsia-950 px-2 py-1 rounded focus:outline-none"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/70 backdrop-blur-lg border-t border-white/30 shadow-md"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-center transition-colors ${
                  link.href === pagePath
                    ? "text-fuchsia-800 font-semibold"
                    : "text-gray-800 hover:text-fuchsia-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
