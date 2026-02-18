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
  { name: "Blog", href: "/Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-white/80 shadow-md py-2"
          : "backdrop-blur-md bg-white/40 py-4"
      } border-b border-white/30`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/logo/logo.png"
              alt="Meerab Enterprises Logo"
              width={40}
              height={45}
              className="rounded-full shadow-sm"
              priority
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-wide"
          >
            Meerab Enterprises
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-base font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-indigo-700"
                    : "text-gray-800 hover:text-indigo-600"
                } group`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-[-4px] h-[2px] bg-indigo-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <div className="relative w-5 h-5">
            <span
              className={`absolute block w-5 h-0.5 bg-current transform transition duration-300 ${
                open ? "rotate-45 top-2" : "rotate-0 top-0.5"
              }`}
            />
            <span
              className={`absolute block w-5 h-0.5 bg-current top-2 transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block w-5 h-0.5 bg-current transform transition duration-300 ${
                open ? "-rotate-45 top-2" : "rotate-0 top-3.5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/80 backdrop-blur-lg border-t border-white/30 shadow-lg"
          >
            <div className="flex flex-col py-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`px-6 py-3 text-center text-base font-medium transition-colors ${
                      isActive
                        ? "text-indigo-700 bg-indigo-50/50"
                        : "text-gray-800 hover:bg-indigo-50/30 hover:text-indigo-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}