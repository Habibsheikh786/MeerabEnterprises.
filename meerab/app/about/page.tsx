"use client";

import { useEffect } from "react";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Meerab Enterprises",
    description:
      "Meerab Enterprises is a trusted trading and supply company in Pakistan, delivering quality silica gel and packaging solutions since 2015.",
    url: "https://www.meerabenterprises.com/about",
    isPartOf: {
      "@type": "WebSite",
      name: "Meerab Enterprises",
      url: "https://www.meerabenterprises.com",
    },
    mainEntity: {
      "@type": "Organization",
      name: "Meerab Enterprises",
      foundingDate: "2015",
      founder: {
        "@type": "Person",
        name: "Meerab Enterprises Founder",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "PK",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+923242358791",
        contactType: "customer service",
        availableLanguage: "English, Urdu",
      },
      sameAs: [
        "https://wa.me/923242358791",
      ],
    },
  };

  return (
    <>
      {/* ===== SEO HEAD ===== */}
      <Head>
        <title>About Us | Meerab Enterprises – Trusted Silica Gel Supplier in Pakistan</title>
        <meta
          name="description"
          content="Meerab Enterprises is a leading supplier of silica gel, desiccant bags, and packaging solutions in Pakistan since 2015. Quality assured, ISO certified, on-time delivery."
        />
        <meta
          name="keywords"
          content="about Meerab Enterprises, silica gel supplier Pakistan, moisture control company, desiccant manufacturer, packaging solutions Karachi, trusted trading company"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Meerab Enterprises" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.meerabenterprises.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.meerabenterprises.com/about" />
        <meta
          property="og:title"
          content="About Meerab Enterprises – Quality Silica Gel Supplier Pakistan"
        />
        <meta
          property="og:description"
          content="Learn about Meerab Enterprises: our story, mission, and commitment to delivering premium moisture control solutions across Pakistan."
        />
        <meta
          property="og:image"
          content="https://www.meerabenterprises.com/about/about-banner.jpg"
        />
        <meta property="og:image:alt" content="Meerab Enterprises team and facility" />
        <meta property="og:locale" content="en_PK" />
        <meta property="og:site_name" content="Meerab Enterprises" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Meerab Enterprises – Trusted Silica Gel Supplier"
        />
        <meta
          name="twitter:description"
          content="Since 2015, Meerab Enterprises has been Pakistan's reliable partner for silica gel, desiccants, and packaging solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.meerabenterprises.com/about/about-banner.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Navbar />

      {/* ===== HERO BANNER SECTION ===== */}
      <section
        aria-label="About Us Hero Banner"
        className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] flex items-center justify-center text-center text-white"
      >
        {/* Background Image with fallback */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/about/about-banner.jpg')" }}
          aria-hidden="true"
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-[#17125C]/70" aria-hidden="true" />
        
        <div className="relative z-10 px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4"
          >
            Meerab Enterprises
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2"
          >
            Trusted Supplier of Quality Silica Gel & Packaging Solutions Since 2015
          </motion.p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* ===== INTRO SECTION ===== */}
        <section aria-labelledby="about-intro-heading" className="text-center">
          <motion.h2
            id="about-intro-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#17125C] mb-4 sm:mb-6"
          >
            About Meerab Enterprises
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2"
          >
            Meerab Enterprises is a trusted trading and supply company committed
            to delivering top-quality silica gel, desiccant bags, and packaging solutions
            with reliability, efficiency, and transparency. We proudly serve clients across Pakistan,
            ensuring excellence in every transaction and building long-term partnerships
            based on trust.
          </motion.p>
        </section>

        {/* ===== OUR STORY SECTION ===== */}
        <section className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/about/about.jpg"
              alt="Meerab Enterprises team and office - silica gel supplier in Karachi"
              className="rounded-lg shadow-lg w-full md:w-4/5 object-cover"
              loading="lazy"
              width={500}
              height={400}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#17125C] mb-3 sm:mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Established with a passion for quality and precision, Meerab
              Enterprises has become a recognized name in the silica gel and packaging
              industry. We started with a simple goal — to make premium-quality moisture
              control products accessible for every business.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Over the years, our commitment to excellence and customer satisfaction has
              earned us a reputation for trust and dependability. Today, we continue to
              expand our reach and enhance our product range, offering efficient solutions
              that meet the highest global standards.
            </p>
          </motion.div>
        </section>

        {/* ===== MISSION & VISION SECTION ===== */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-xl shadow-sm p-6 sm:p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#17125C] mb-6 sm:mb-8">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg p-5 sm:p-6 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#17125C]">
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                To deliver superior-quality silica gel and packaging products
                through innovation, integrity, and excellence — ensuring complete
                customer satisfaction and long-term business relationships.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 sm:p-6 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#17125C]">
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                To become Pakistan’s most trusted trading partner for moisture control
                solutions, known for quality, transparency, and a commitment to
                continuous improvement.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ===== WHY CHOOSE US ===== */}
        <section aria-labelledby="why-choose-heading" className="text-center">
          <motion.h2
            id="why-choose-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-[#17125C] mb-6 sm:mb-8"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Quality Assurance",
                desc: "Every silica gel product undergoes strict quality checks before delivery to ensure 100% satisfaction and ISO standards.",
                icon: "✓",
              },
              {
                title: "Reliable Delivery",
                desc: "We pride ourselves on on-time delivery and efficient logistics across Pakistan to keep your business running smoothly.",
                icon: "🚚",
              },
              {
                title: "Industry Expertise",
                desc: "Years of experience in moisture control for pharmaceuticals, electronics, food, and automotive industries.",
                icon: "🏭",
              },
              {
                title: "Competitive Pricing",
                desc: "We offer factory-direct pricing without compromising on quality, making us the cost-effective choice.",
                icon: "💰",
              },
              {
                title: "24/7 Customer Support",
                desc: "Our team provides professional and friendly support via WhatsApp, phone, and email to guide you every step.",
                icon: "💬",
              },
              {
                title: "Eco-Friendly Solutions",
                desc: "Our silica gel is non-toxic, reusable, and environmentally safe for all applications.",
                icon: "🌱",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white shadow-md rounded-xl p-5 sm:p-6 hover:shadow-xl transition border border-gray-100"
              >
                <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#17125C] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-[#17125C] text-white py-10 sm:py-12 md:py-16 px-4 rounded-2xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Let’s Work Together
          </h2>
          <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-2">
            Partner with Meerab Enterprises for reliable, efficient, and
            high-quality silica gel and packaging solutions. Let’s build something great together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#17125C] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#100e48] hover:text-white transition duration-300 shadow-md"
          >
            Contact Us Today
          </a>
        </motion.section>
      </main>

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/923242358791"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50 flex items-center justify-center"
        aria-label="Chat with Meerab Enterprises on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      <Footer />
    </>
  );
}