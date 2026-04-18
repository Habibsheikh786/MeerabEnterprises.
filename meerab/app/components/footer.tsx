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
            Leading supplier of silica gel and moisture control solutions since 2021.
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
            <a href="tel:+923302277371" className="hover:text-sky-400 transition text-gray-300">
              +92 330 2277371
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.3525829788655!2d67.00125427442948!3d24.851804745605605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f46ad29e1ef%3A0x258260e284639454!2sMeerab%20Enterprises%7C%20Premium%20Silica%20Gel%20%26%20packaging%20Solution%20Karachi!5e0!3m2!1sen!2s!4v1776233780116!5m2!1sen!2s"
            className="w-full h-48 rounded-lg border-0 shadow-lg"
            allowFullScreen
            loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
              title="Meerab Enterprises Location Karachi"
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