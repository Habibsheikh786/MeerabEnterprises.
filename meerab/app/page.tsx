"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer"; // ✅ Fixed case
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Jersey_10, Pacifico, Rubik, Rubik_Vinyl, Teko } from "next/font/google";
import { MessageCircle } from "lucide-react";

const jersey = Pacifico({
  weight: "400",
  subsets: ["latin-ext"],
  display: "swap",
});

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ===== HERO SECTION WITH SLIDER AND TEXT OVERLAY ===== */}
        <section className="relative w-full h-[80vh] overflow-hidden">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-full h-full z-0"
          >
            {["banner1.jpg.jfif", "banner2.jpg.jfif", "banner3.jpg.jfif"].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`/banners/${img}`}
                  alt={`Banner ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white bg-black/40 px-4">
            <h2 className={`text-5xl md:text-6xl font-bold mb-4 ${jersey.className}`}>
              Welcome To Meerab Enterprises
            </h2>
            <p className="text-lg md:text-xl max-w-2xl">
              We supply premium quality products for your business needs with guaranteed satisfaction.
            </p>
            <a
              href="/products"
              className="mt-6 inline-block bg-white text-fuchsia-950 px-6 py-3 rounded-lg font-semibold hover:bg-fuchsia-900 hover:text-white transition"
            >
              View Products
            </a>
          </div>
        </section>

        {/* ===== PRODUCTS SECTION ===== */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
            Our Featured Products
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Product One", "Product Two", "Product Three"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  src={`/products/p${i + 1}.jpg`}
                  alt={item}
                  className="mx-auto mb-4 w-48 h-48 object-cover rounded-lg"
                />
                <h3 className="font-semibold text-lg mb-2 text-fuchsia-900">{item}</h3>
                <p className="text-gray-700">High quality and affordable product.</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <a
              href="/products"
              className="relative inline-block bg-white text-indigo-700 border-2 border-indigo-700 px-8 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-500 hover:bg-indigo-700 hover:text-white hover:scale-105 group"
            >
              <span className="relative z-10">View All Products</span>
              <span className="absolute inset-0 bg-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </a>
          </motion.div>
        </section>

        {/* --- Info Section --- */}
        <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/about/about2.png"
              alt="Silica Gel Uses"
              className="rounded-lg shadow-lg w-full md:w-4/5 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Role, Uses & Importance of SILICA GEL
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Silica Gel is one of the most effective moisture-absorbing materials...
            </p>
            <p className="text-gray-700 leading-relaxed">
              We source products from trusted suppliers and guarantee that every shipment meets international quality standards...
            </p>
          </div>
        </section>

        {/* --- Downside Article Section --- */}
        <section
          className="relative py-16 px-4 overflow-hidden"
          style={{
            backgroundImage: "url('/bg/imagepng.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
          <div className="relative max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">SILICA GEL BENEFITS</h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Silica gel is a highly useful and versatile substance that offers numerous benefits, including effective moisture control, product preservation, air purification, and cost-effectiveness due to its reusability. Its ability to absorb moisture helps protect goods from damage and deterioration, making it an ideal solution for various industries, including electronics, pharmaceuticals, food, and more. By controlling humidity and preventing moisture buildup, silica gel plays a crucial role in maintaining product quality and extending shelf life.Why Silica Gel Is Important Humidity and moisture can cause major product losses. Silica gel provides a cost-effective and long-lasting solution to this problem. By keeping the environment dry, it ensures: Product safety and longevity Better storage conditions Reduced waste and maintenance costs Environmentally safe protection (especially orange silica gel) 
            </p>
          </div>
        </section>

        {/* --- BLOG SECTION --- */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-800 mb-10">Our Blog</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Uses of Silica Gel", desc: "...", img: "/blogs/blog1.jpg" },
                { title: "Moisture Absorber for Packaging", desc: "...", img: "/blogs/blog2.jpg" },
                { title: "Why Your Business Needs Silica Gel Products", desc: "...", img: "/blogs/blog3.jpg" },
              ].map((b, i) => (
                <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105">
                  <img src={b.img} alt={b.title} className="w-full h-48 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{b.title}</h3>
                    <p className="text-gray-600 mb-4">{b.desc}</p>
                    <a href="/Blog" className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-800 transition">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US --- */}
        <section className="bg-green-50 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-10">Why Choose Meerab Enterprises?</h2>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
              {[
                { icon: "🏆", title: "Quality Guaranteed", desc: "We ensure top-grade silica gel products..." },
                { icon: "✅", title: "ISO Certified", desc: "Our manufacturing process is ISO 9001:2015 certified..." },
                { icon: "💰", title: "Competitive Pricing", desc: "We offer high-quality products at affordable prices." },
                { icon: "🚚", title: "On-Time Delivery", desc: "Fast, reliable nationwide delivery..." },
              ].map((c, i) => (
                <div key={i} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
                  <div className="text-green-700 text-4xl mb-4">{c.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-10">Frequently Asked Questions (FAQs)</h2>
          <div className="space-y-6">
            {/* FAQ Items 1  */}
            <details className="bg-white shadow rounded-lg p-6 group">
              <summary className="cursor-pointer font-semibold text-lg text-green-800 flex justify-between items-center">
                <span>What is silica gel?</span>
                <span className="transition-transform duration-300 group-open:rotate-180">⌄</span>
              </summary>
              <p className="text-gray-700 mt-4">Silica gel is a porous, amorphous solid that is commonly used as a desiccant to control humidity and absorb moisture. It's made from silicon dioxide and has a high surface area, allowing it to adsorb water vapor effectively.</p>
            </details>
            {/* FAQ 2*/}
            <details className="bg-white shadow rounded-lg p-6 group">
              <summary className="cursor-pointer font-semibold text-lg text-green-800 flex justify-between items-center">
                <span>What are the uses of silica gel?</span>
                <span className="transition-transform duration-300 group-open:rotate-180">⌄</span>
              </summary>
              <p className="text-gray-700 mt-4">Silica gel is primarily used as a desiccant, which means it absorbs moisture to keep products dry and prevent damage from humidity.</p>
            </details>
             {/* FAQ 3*/}
            <details className="bg-white shadow rounded-lg p-6 group">
              <summary className="cursor-pointer font-semibold text-lg text-green-800 flex justify-between items-center">
                <span>Can it be used in storage containers?</span>
                <span className="transition-transform duration-300 group-open:rotate-180">⌄</span>
              </summary>
              <p className="text-gray-700 mt-4">Yes. Silica gel is ideal for long-term storage of items like clothes, tools, or collectibles to maintain dryness and prevent rust or mold.</p>
            </details>
              {/* FAQ 4*/}
            <details className="bg-white shadow rounded-lg p-6 group">
              <summary className="cursor-pointer font-semibold text-lg text-green-800 flex justify-between items-center">
                <span>Any other uses?</span>
                <span className="transition-transform duration-300 group-open:rotate-180">⌄</span>
              </summary>
              <p className="text-gray-700 mt-4">Perfect for storing documents, photos, seeds, spices, or even craft projects, keeping them dry and fresh.</p>
            </details>
          </div>
        </section>
        {/* WhatsApp Floating Icon */}
<a
  href="https://wa.me/923242358791"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50 flex items-center justify-center"
  aria-label="Chat on WhatsApp"
>
  <MessageCircle className="w-7 h-7" />
</a>

      </main>

      <Footer />
    </>
  );
}
