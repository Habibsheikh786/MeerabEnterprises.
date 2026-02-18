"use client";
import Link from "next/link";
import { Phone, Mail } from "lucide-react"; // icons

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* ===== LEFT SIDE ===== */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Meerab Enterprises</h2>

          {/* Phone */}
          <div className="flex items-center space-x-3 mb-3">
            <Phone className="w-5 h-5 text-Black opacity-80" />
            <a
              href="tel:+923242358791"
              className="hover:underline opacity-90"
            >
              +92 324 2358791
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 mb-6">
            <Mail className="w-5 h-5 text-Black opacity-80" />
            <a
              href="mailto:info@meerabenterprises.com"
              className="hover:underline opacity-90"
            >
              info@meerabenterprises.com
            </a>
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold px-5 py-2 rounded transition duration-300 hover:bg-black hover:text-white"
          >
            Contact Us
          </Link>
        </div>

        {/* ===== RIGHT SIDE ===== */}
        <div className="text-sm space-y-3">
          <iframe
            src="https://www.google.com/maps?q=office%20%2331%20suleman%20center%20shahraeliqat%20karachi&output=embed"
            className="w-full h-48 rounded-lg border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <p className="opacity-90">
            Office #31, Suleman Center, Shahrae-Liaquat, Karachi
          </p>
        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="text-center mt-8 border-t border-black-700 pt-4 text-sm opacity-80">
        &copy; {new Date().getFullYear()} Meerab Enterprises. All rights reserved.
      </div>
    </footer>
  );
}

