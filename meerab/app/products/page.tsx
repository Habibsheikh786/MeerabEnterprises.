"use client";
import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

// Hardcoded fallback products (agar database empty ho)
const fallbackProducts: Product[] = [
  { _id: "1", name: "Silica Gel 1GM Pouches", description: "High-quality silica gel pouches to keep your goods moisture-free.", price: 500, category: "Desiccant", image: "/products/p1.jpg" },
  { _id: "2", name: "Desiccant Bags", description: "Industrial-grade desiccant bags for shipping containers and storage.", price: 850, category: "Desiccant", image: "/products/p2.jpg" },
  { _id: "3", name: "Silica Gel 5GM Pouches", description: "Premium-grade silica gel crystals for large-scale moisture control.", price: 1200, category: "Desiccant", image: "/products/p3.jpg" },
  { _id: "4", name: "1kg Silica Gel Container Stripe", description: "Premium-grade silica gel crystals for large-scale moisture control.", price: 1200, category: "Desiccant", image: "/products/p4.jpg" },
  { _id: "5", name: "Humidity Indicator Cards", description: "Easily monitor humidity levels with high-accuracy indicator cards.", price: 250, category: "Other", image: "/products/p5.jpg" },
  { _id: "6", name: "Activated Clay Desiccant", description: "Natural, eco-friendly desiccant option for moisture control.", price: 750, category: "Other", image: "/products/p5.jpg" },
  { _id: "7", name: "Silica Gel Sachets", description: "Compact sachets ideal for electronics, food, and pharmaceuticals.", price: 400, category: "Other", image: "/products/p6.jpg" },
];

const ProductCard = ({ p, i }: { p: Product; i: number }) => (
  <motion.div
    className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm transition-all duration-300 cursor-pointer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{
      scale: 1.07,
      rotateY: 5,
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2), 0 0 20px rgba(255,215,0,0.3)",
    }}
    transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.img
      src={p.image || "/products/p1.jpg"}
      alt={p.name}
      className="mx-auto mb-4 w-48 h-48 object-cover rounded-lg"
      whileHover={{ scale: 1.1, rotate: 1, boxShadow: "0 0 25px rgba(255, 215, 0, 0.4)" }}
      transition={{ duration: 0.3 }}
      onError={(e) => { (e.target as HTMLImageElement).src = "/products/p1.jpg"; }}
    />
    <h3 className="font-bold text-lg mb-1 text-fuchsia-900 tracking-wide">{p.name}</h3>
    <p className="text-gray-700 mb-2 text-sm">{p.description}</p>
    <p className="text-green-700 font-semibold text-base">Rs. {Number(p.price).toLocaleString()}</p>
  </motion.div>
);

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`);
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else {
          // Database empty hai — fallback use karo
          setProducts(fallbackProducts);
        }
      } catch {
        // Backend down hai — fallback use karo
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Category ke hisaab se alag karo
  const mainProducts = products.filter(p => p.category !== "Other");
  const otherProducts = products.filter(p => p.category === "Other");

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto py-16 px-4">

        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Our Products</h1>

        {loading ? (
          // Loading skeleton
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm animate-pulse">
                <div className="w-48 h-48 bg-gray-200 rounded-lg mx-auto mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
                <div className="h-3 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Main Products */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {(mainProducts.length > 0 ? mainProducts : products).map((p, i) => (
                <ProductCard key={p._id} p={p} i={i} />
              ))}
            </div>

            {/* Other Products */}
            {otherProducts.length > 0 && (
              <>
                <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">Other Products</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {otherProducts.map((p, i) => (
                    <ProductCard key={p._id} p={p} i={i} />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* WhatsApp Floating Icon */}
        <a
          href="https://wa.me/923242358791"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
      </main>
      <Footer />
    </>
  );
}