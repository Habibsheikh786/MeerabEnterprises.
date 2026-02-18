"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 mt-10 border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {/* ===== COLUMN 1: Company Info ===== */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Meerab Enterprises</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Leading supplier of silica gel and moisture control solutions since 2005.
          </p>
          {/* Address with icon */}
          <div className="flex items-start space-x-3 mb-3 group">
            <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-400">
              Office #31,32, Suleman Trade Center, jeswani street, near chamber of commerce, Karachi
            </span>
          </div>
        </div>

        {/* ===== COLUMN 2: Quick Links ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-gray-400 hover:text-sky-400 transition">Home</Link></li>
            <li><Link href="/products" className="text-gray-400 hover:text-sky-400 transition">Products</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-sky-400 transition">About Us</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-sky-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* ===== COLUMN 3: Contact & Social ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
          
          {/* Phone */}
          <div className="flex items-center space-x-3 mb-3 group">
            <Phone className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition" />
            <a href="tel:+923242358791" className="hover:text-sky-400 transition text-gray-300">
              +92 324 2358791
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 mb-6 group">
            <Mail className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition" />
            <a href="mailto:info@meerabenterprises.com" className="hover:text-sky-400 transition text-gray-300">
              info@meerabenterprises.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-sky-400 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="inline-block bg-sky-600 text-white font-semibold px-6 py-2.5 rounded-lg transition duration-300 hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-900/30"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Map Section - Full Width Below Columns */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <div className="text-sm space-y-3">
          <iframe
            src="https://www.google.com/maps?q=Office%20%2331%2C32%2C%20Suleman%20Trade%20Center%2C%20jeswani%20street%2C%20near%20chamber%20of%20commerce%2C%20Karachi&output=embed"
            className="w-full h-48 rounded-lg border-0 shadow-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* ===== COPYRIGHT with Back to Top ===== */}
      <div className="text-center mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Meerab Enterprises. All rights reserved. Powered by Habib Ullah
        </p>
        <button 
          onClick={scrollToTop}
          className="mt-4 inline-flex items-center space-x-2 text-gray-400 hover:text-sky-400 transition"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Back to Top</span>
        </button>
      </div>
    </footer>
  );
}