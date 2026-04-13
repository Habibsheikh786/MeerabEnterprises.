"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  FaWhatsapp,
  FaShieldAlt,
  FaCheckCircle,
  FaTag,
  FaTruck,
  FaArrowUp,
  FaPills,
  FaMicrochip,
  FaCar,
  FaBox,
  FaIndustry,
  FaArchive,
} from "react-icons/fa";
import Head from "next/head";


const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});
const features = [
  {
    icon: <FaShieldAlt className="w-8 h-8" aria-hidden="true" />,
    title: "Quality Guaranteed",
    desc: "We ensure top-grade silica gel products with consistent quality.",
  },
  {
    icon: <FaCheckCircle className="w-8 h-8" aria-hidden="true" />,
    title: "ISO Certified",
    desc: "Our manufacturing process is ISO 9001:2015 certified.",
  },
  {
    icon: <FaTag className="w-8 h-8" aria-hidden="true" />,
    title: "Competitive Pricing",
    desc: "We offer high-quality products at affordable prices.",
  },
  {
    icon: <FaTruck className="w-8 h-8" aria-hidden="true" />,
    title: "On-Time Delivery",
    desc: "Fast, reliable nationwide delivery.",
  },
];

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

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meerab Enterprises",
  description:
    "Premium quality silica gel products supplier in Pakistan. ISO 9001:2015 certified manufacturer of silica gel pouches, desiccant bags and moisture absorbers.",
  url: "https://www.meerabenterprises.com",
  telephone: "+923242358791",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  sameAs: ["https://wa.me/923242358791"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Silica Gel Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Silica Gel 1GM Pouches",
          description:
            "High-quality silica gel pouches to keep your goods moisture-free.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Desiccant Bags",
          description:
            "Industrial-grade desiccant bags for shipping containers and storage.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Silica Gel 5GM Pouches",
          description:
            "Premium-grade silica gel crystals for large-scale moisture control.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "120",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  const [showScroll, setShowScroll] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== SEO HEAD ===== */}
      <Head>
        <title>Meerab Enterprises | Premium Silica Gel Supplier in Pakistan</title>
        <meta
          name="description"
          content="Meerab Enterprises supplies ISO 9001:2015 certified silica gel pouches, desiccant bags and moisture absorbers in Pakistan. Competitive pricing, on-time delivery, quality guaranteed."
        />
        <meta
          name="keywords"
          content="silica gel Pakistan, desiccant bags, moisture absorber, silica gel pouches, silica gel supplier Pakistan, Meerab Enterprises"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Meerab Enterprises" />
        <link rel="canonical" href="https://www.meerabenterprises.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.meerabenterprises.com" />
        <meta
          property="og:title"
          content="Meerab Enterprises | Premium Silica Gel Supplier in Pakistan"
        />
        <meta
          property="og:description"
          content="ISO 9001:2015 certified silica gel products. Quality guaranteed, competitive pricing, on-time delivery across Pakistan."
        />
        <meta
          property="og:image"
          content="https://www.meerabenterprises.com/banners/banner1.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Meerab Enterprises | Premium Silica Gel Supplier in Pakistan"
        />
        <meta
          name="twitter:description"
          content="ISO 9001:2015 certified silica gel products. Quality guaranteed, competitive pricing, on-time delivery across Pakistan."
        />
        <meta
          name="twitter:image"
          content="https://www.meerabenterprises.com/banners/banner1.jpg"
        />

        {/* Viewport for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>

      <Navbar />

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/923242358791"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50 flex items-center justify-center"
        aria-label="Chat with Meerab Enterprises on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-indigo-600 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:scale-110 ${
          showScroll ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      <main id="main-content">
      {/* ===== HERO SECTION ===== */}
<section
  aria-label="Hero Banner"
  className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden"
>
  <Swiper
    spaceBetween={0}
    slidesPerView={1}
    loop={true}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    modules={[Autoplay, Pagination]}
    className="w-full h-full"
  >
    {["banner1.jpg.jfif", "banner2.jpg.jfif", "banner3.jpg.jfif"].map(
      (img, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-full">
            <img
              src={`/banners/${img}`}
              alt={`Silica gel and packaging materials supplier in Karachi banner${i + 1}`}
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              width={1200}
              height={600}
            />
          </div>
        </SwiperSlide>
      )
    )}
  </Swiper>

  {/* Overlay content with top padding for fixed navbar */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 pt-20 sm:pt-24">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 leading-tight ${poppins.className}`}
    >
      Premium Silica Gel Supplier & Packaging Solutions in Karachi
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-lg md:max-w-2xl mb-5 sm:mb-6 leading-snug"
    >
      Meerab Enterprises supplies high-quality silica gel packets, adhesive tapes, and packaging solutions for industrial applications. Reliable bulk supply with fast delivery across Karachi.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
    >
      <a
        href="/contact"
        className="inline-block bg-white text-indigo-900 px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-indigo-700 hover:text-white transition duration-300 shadow-lg"
      >
        Get Bulk Quote
      </a>

      <a
        href="https://wa.me/923242358791"
        target="_blank"
        className="inline-block bg-green-500 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-green-600 transition duration-300 shadow-lg"
      >
        WhatsApp for Quick Quote
      </a>
    </motion.div>
  </div>
</section>
                      {/* ===== INDUSTRIES WE SERVE SECTION ===== */}
        <section
          aria-labelledby="industries-heading"
          className="max-w-6xl mx-auto py-12 sm:py-14 md:py-16 px-4 sm:px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2
              id="industries-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-800 mb-3 sm:mb-4"
            >
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Trusted moisture control solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {[
              {
                icon: <FaPills className="w-8 h-8" />,
                title: "Pharmaceuticals",
                desc: "Protecting medicines, vitamins, and medical devices from humidity damage during storage and transit.",
              },
              {
                icon: <FaMicrochip className="w-8 h-8" />,
                title: "Electronics",
                desc: "Preventing corrosion and short circuits in PCBs, semiconductors, and sensitive components.",
              },
              {
                icon: <FaCar className="w-8 h-8" />,
                title: "Automotive",
                desc: "Moisture control for headlights, spare parts, and vehicle interiors to avoid fogging and rust.",
              },
              {
                icon: <FaBox className="w-8 h-8" />,
                title: "Food Packaging",
                desc: "Keeping dry fruits, spices, biscuits, and pet food fresh and crisp without mold.",
              },
              {
                icon: <FaIndustry className="w-8 h-8" />,
                title: "Leather & Footwear",
                desc: "Preserving leather goods, shoes, and bags from mildew and odor in warehouses.",
              },
              {
                icon: <FaArchive className="w-8 h-8" />,
                title: "Storage & Logistics",
                desc: "Container desiccants for shipping, storage units, and military equipment protection.",
              },
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-indigo-100 hover:shadow-xl hover:border-indigo-200 transition-all"
              >
                <div className="text-indigo-600 mb-3 sm:mb-4 flex justify-center">
                  {industry.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-center text-indigo-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                  {industry.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        <div className="text-center mt-10">
  <a
    href="/contact"
    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
  >
    Get Industry-Specific Quote →
  </a>
  <p className="text-gray-500 text-sm mt-3">
    Tell us your industry, we'll recommend the right silica gel.
  </p>
</div>

        {/* ===== FEATURED PRODUCTS ===== */}
        <section
          aria-labelledby="products-heading"
          className="max-w-6xl mx-auto py-12 sm:py-14 md:py-16 px-4 sm:px-6"
        >
          <motion.h2
            id="products-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-indigo-800"
          >
            Our Featured Products
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {[
              {
                name: "Silica Gel 1GM Pouches",
                desc: "High-quality silica gel pouches to keep your goods moisture-free.",
                img: "/products/p1.jpg",
              },
              {
                name: "Desiccant Bags",
                desc: "Industrial-grade desiccant bags for shipping containers and storage.",
                img: "/products/p2.jpg",
              },
              {
                name: "Silica Gel 5GM Pouches",
                desc: "Premium-grade silica gel crystals for large-scale moisture control.",
                img: "/products/p3.jpg",
              },
            ].map((product, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 30px -10px rgba(79, 70, 229, 0.3)",
                }}
                className="bg-white rounded-2xl p-5 sm:p-6 text-center shadow-lg border border-indigo-100"
              >
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4 rounded-full bg-indigo-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.img}
                    alt={`${product.name} - Meerab Enterprises`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={160}
                    height={160}
                  />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-indigo-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-xs sm:text-sm leading-relaxed">
                  {product.desc}
                </p>
                <a
                  href="/products"
                  className="inline-block px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm text-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-md"
                  aria-label={`View details for ${product.name}`}
                >
                  View Details →
                </a>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <a
              href="/products"
              className="inline-block bg-indigo-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              View All Products
            </a>
          </div>
        </section>

        {/* ===== INFO SECTION ===== */}
        <section
          aria-labelledby="info-heading"
          className="max-w-6xl mx-auto py-12 sm:py-14 md:py-16 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/about/about2.png"
              alt="Silica gel uses and applications by Meerab Enterprises Pakistan"
              className="rounded-2xl shadow-xl w-full object-cover"
              loading="lazy"
              width={600}
              height={400}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              id="info-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 mb-4 sm:mb-6 leading-tight"
            >
              Role, Uses & Importance of SILICA GEL
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base">
              Silica Gel is one of the most effective moisture-absorbing materials. It is widely used in
              packaging, electronics, pharmaceuticals, and food industries to prevent damage caused by
              humidity.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We source products from trusted suppliers and guarantee that every shipment meets
              international quality standards.
            </p>
          </motion.div>
        </section>

        {/* ===== BENEFITS SECTION ===== */}
        <section
          aria-labelledby="benefits-heading"
          className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg/imagepng.jpg')" }}
            role="presentation"
          />
          <div className="absolute inset-0 bg-indigo-900/70 backdrop-blur-sm" />
          <div className="relative max-w-4xl mx-auto text-center text-white">
            <motion.h2
              id="benefits-heading"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            >
              SILICA GEL BENEFITS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base md:text-lg leading-relaxed"
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
        <section
          aria-labelledby="blog-heading"
          className="bg-indigo-50 py-12 sm:py-14 md:py-16 px-4 sm:px-6"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              id="blog-heading"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-8 sm:mb-10 md:mb-12"
            >
              Our Blog
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
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
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
                >
                  <img
                    src={post.img}
                    alt={`${post.title} - Meerab Enterprises Blog`}
                    className="w-full h-40 sm:h-44 md:h-48 object-cover"
                    loading="lazy"
                    width={400}
                    height={192}
                  />
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 text-indigo-900">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">{post.desc}</p>
                    <a
                      href="/Blog"
                      className="inline-block text-indigo-600 hover:text-indigo-800 font-medium transition text-sm sm:text-base"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More →
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section
          aria-labelledby="why-us-heading"
          className="max-w-6xl mx-auto py-12 sm:py-14 md:py-16 px-4 sm:px-6"
        >
          <motion.h2
            id="why-us-heading"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-8 sm:mb-10 md:mb-12"
          >
            Why Choose Meerab Enterprises?
          </motion.h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.2)",
                }}
                className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl text-center shadow-md border border-indigo-100"
              >
                <div className="text-indigo-600 mb-3 sm:mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-2 text-indigo-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== FAQ SECTION ===== */}
        <section
          aria-labelledby="faq-heading"
          className="bg-indigo-50 py-12 sm:py-14 md:py-16 px-4 sm:px-6"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              id="faq-heading"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-8 sm:mb-10 md:mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full cursor-pointer px-4 sm:px-6 py-3 sm:py-4 font-semibold text-indigo-900 flex justify-between items-center hover:bg-indigo-50 transition text-left text-sm sm:text-base"
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`text-indigo-600 transition-transform duration-300 ml-2 flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  </button>
                  {openFaq === index && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-4 sm:px-6 pb-4 text-gray-700 text-sm sm:text-base leading-relaxed"
                    >
                      {faq.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
