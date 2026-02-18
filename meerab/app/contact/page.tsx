"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Navbar />
      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/923242358791"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <main className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-100"
            >
              <h2 className="text-2xl font-semibold text-indigo-800 mb-6">Send a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  Thank you! Your message has been sent.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-[1.02] shadow-md"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Contact Details Card */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-indigo-100">
                <h2 className="text-2xl font-semibold text-indigo-800 mb-6">Contact Information</h2>
                
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="w-6 h-6 text-indigo-600 mt-1 shrink-0" />
                    <p className="text-gray-700">
                      Office #31,32, Suleman Trade Center,<br />
                      Jeswani Street, near Chamber of Commerce,<br />
                      Karachi, Pakistan
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <FaPhone className="w-5 h-5 text-indigo-600" />
                    <a href="tel:+923242358791" className="text-gray-700 hover:text-indigo-600 transition">
                      +92 324 2358791
                    </a>
                  </div>

                  <div className="flex items-center space-x-4">
                    <FaEnvelope className="w-5 h-5 text-indigo-600" />
                    <a href="mailto:info@meerabenterprises.com" className="text-gray-700 hover:text-indigo-600 transition">
                      info@meerabenterprises.com
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium text-indigo-800 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                      <FaFacebook className="w-6 h-6" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                      <FaInstagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white p-4 rounded-2xl shadow-xl border border-indigo-100">
                <iframe
                  src="https://www.google.com/maps?q=Office%20%2331%2C32%2C%20Suleman%20Trade%20Center%2C%20jeswani%20street%2C%20near%20chamber%20of%20commerce%2C%20Karachi&output=embed"
                  className="w-full h-64 rounded-lg"
                  allowFullScreen
                  loading="lazy"
                  title="Office location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}