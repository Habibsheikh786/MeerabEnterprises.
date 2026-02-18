"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import { Phone, Mail, MapPin } from "lucide-react"; // ✅ for icons

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* ===== LEFT SIDE CONTACT INFO ===== */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-green-700 mb-4">Contact Us</h1>
          <p className="text-gray-700 mb-6">
            We’d love to hear from you! Reach out through the following channels or fill out the contact form.
          </p>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full text-green-700">
              <Phone size={22} />
            </div>
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-600">+92 312 3456789</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full text-green-700">
              <Mail size={22} />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600">info@meerabenterprises.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full text-green-700">
              <MapPin size={22} />
            </div>
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="text-gray-600">
                Office #31, Suleman Center, Shahrae-Liaquat, Karachi
              </p>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE CONTACT FORM ===== */}
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Send Us a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded px-3 py-2 focus:outline-green-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded px-3 py-2 focus:outline-green-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border rounded px-3 py-2 h-32 focus:outline-green-600"
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}
