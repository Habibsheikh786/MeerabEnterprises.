"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { FaWhatsapp, FaShieldAlt, FaCheckCircle, FaTag, FaTruck, FaArrowUp } from "react-icons/fa";
import Image from "next/image";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
});

// Feature data for "Why Choose Us"
const features = [
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Quality Guaranteed",
    desc: "We ensure top-grade silica gel products with consistent quality.",
  },
  {
    icon: <FaCheckCircle className="w-8 h-8" />,
    title: "ISO Certified",
    desc: "Our manufacturing process is ISO 9001:2015 certified.",
  },
  {
    icon: <FaTag className="w-8 h-8" />,
    title: "Competitive Pricing",
    desc: "We offer high-quality products at affordable prices.",
  },
  {
    icon: <FaTruck className="w-8 h-8" />,
    title: "On-Time Delivery",
    desc: "Fast, reliable nationwide delivery.",
  },
];

// FAQ data
const faqs = [
  {
    question: "What is silica gel?",
    answer:
      "Silica gel is a porous, amorphous solid that is commonly used as a desiccant to control humidity and absorb moisture. It's made from silicon dioxide and has a high surface area, allowing it to adsorb water vapor effectively.",
  },
  {
    question: "What are the uses of silica gel?",
    answer:
      "Silica gel is primarily used as a desiccant, which means it absorbs moisture to keep products dry and prevent damage from humidity.",
  },
  {
    question: "Can it be used in storage containers?",
    answer:
      "Yes. Silica gel is ideal for long-term storage of items like clothes, tools, or collectibles to maintain dryness and prevent rust or mold.",
  },
  {
    question: "Any other uses?",
    answer:
      "Perfect for storing documents, photos, seeds, spices, or even craft projects, keeping them dry and fresh.",
  },
];

export default function HomePage() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-24 right-6 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:scale-110 ${
          showScroll ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5" />
      </button>

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className="relative w-full h-[80vh] overflow-hidden">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-full h-full"
          >
            {["banner1.jpg.jfif", "banner2.jpg.jfif", "banner3.jpg.jfif"].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <img
                    src={`/banners/${img}`}
                    alt={`Banner ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Overlay & Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-4xl md:text-6xl font-bold mb-4 ${pacifico.className}`}
            >
              Welcome To Meerab Enterprises
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl max-w-2xl mb-8"
            >
              We supply premium quality products for your business needs with guaranteed satisfaction.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="/products"
                className="inline-block bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 hover:text-white transition duration-300 shadow-lg"
              >
                View Products
              </a>
            </motion.div>
          </div>
        </section>

        {/* ===== FEATURED PRODUCTS ===== */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-800"
          >
            Our Featured Products
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Silica Gel 1GM Pouches", desc: "High-quality silica gel pouches to keep your goods moisture-free.", img: "/products/p1.jpg" },
              { name: "Desiccant Bags", desc: "Industrial-grade desiccant bags for shipping containers and storage.", img: "/products/p2.jpg" },
              { name: "Silica Gel 5GM Pouches", desc: "Premium-grade silica gel crystals for large-scale moisture control.", img: "/products/p3.jpg" },
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(79, 70, 229, 0.3)" }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-indigo-100"
              >
                <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-indigo-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2 text-indigo-900">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.desc}</p>
                <a
                  href="/products"
                  className="inline-block px-4 py-2 rounded-lg font-medium transition-all duration-300 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-md"
                >
                  View Details →
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/products"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              View All Products
            </a>
          </div>
        </section>

        {/* ===== INFO SECTION ===== */}
        <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/about/about2.png"
              alt="Silica Gel Uses"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
              Role, Uses & Importance of SILICA GEL
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Silica Gel is one of the most effective moisture-absorbing materials. It is widely used in
              packaging, electronics, pharmaceuticals, and food industries to prevent damage caused by
              humidity.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We source products from trusted suppliers and guarantee that every shipment meets
              international quality standards.
            </p>
          </motion.div>
        </section>

        {/* ===== BENEFITS SECTION ===== */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg/imagepng.jpg')" }}
          />
          <div className="absolute inset-0 bg-indigo-900/70 backdrop-blur-sm" />
          <div className="relative max-w-4xl mx-auto text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              SILICA GEL BENEFITS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed"
            >
              Silica gel is a highly useful and versatile substance that offers numerous benefits,
              including effective moisture control, product preservation, air purification, and
              cost-effectiveness due to its reusability. Its ability to absorb moisture helps protect
              goods from damage and deterioration, making it an ideal solution for various industries.
              By controlling humidity and preventing moisture buildup, silica gel plays a crucial role
              in maintaining product quality and extending shelf life.
            </motion.p>
          </div>
        </section>

        {/* ===== BLOG SECTION ===== */}
        <section className="bg-indigo-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12"
            >
              Our Blog
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Uses of Silica Gel",
                  desc: "Discover the many applications of silica gel in everyday life.",
                  img: "/blogs/blog1.jpg",
                },
                {
                  title: "Moisture Absorber for Packaging",
                  desc: "How silica gel protects products during shipping and storage.",
                  img: "/blogs/blog2.jpg",
                },
                {
                  title: "Why Your Business Needs Silica Gel",
                  desc: "Learn why silica gel is essential for quality control.",
                  img: "/blogs/blog3.jpg",
                },
              ].map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
                >
                  <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-indigo-900">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.desc}</p>
                    <a
                      href="/Blog"
                      className="inline-block text-indigo-600 hover:text-indigo-800 font-medium transition"
                    >
                      Read More →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12"
          >
            Why Choose Meerab Enterprises?
          </motion.h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.2)" }}
                className="bg-white p-8 rounded-2xl text-center shadow-md border border-indigo-100"
              >
                <div className="text-indigo-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-indigo-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section className="bg-indigo-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden group"
                >
                  <summary className="cursor-pointer px-6 py-4 font-semibold text-indigo-900 flex justify-between items-center hover:bg-indigo-50 transition">
                    <span>{faq.question}</span>
                    <span className="text-indigo-600 transform group-open:rotate-180 transition-transform duration-300">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}