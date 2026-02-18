"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import { motion } from "framer-motion";
// Add Product interface
interface Product {
  name: string;
  desc: string;
  price: string;
  img: string;
}
export default function ProductsPage() {
  const products = [
    {
      name: "Silica Gel 1GM Pouche",
      desc: "High-quality silica gel pouches to keep your goods moisture-free.",
      price: "Rs. 500 / pack",
      img: "/products/p1.jpg",
    },
    {
      name: "Desiccant Bags",
      desc: "Industrial-grade desiccant bags for shipping containers and storage.",
      price: "Rs. 850 / bag",
      img: "/products/p2.jpg",
    },
    {
      name: "Silica Gel 5GM Pouche",
      desc: "Premium-grade silica gel crystals for large-scale moisture control.",
      price: "Rs. 1,200 / kg",
      img: "/products/p3.jpg",
    },
    {
      name: "1kg Silica Gel Container Stripe",
      desc: "Premium-grade silica gel crystals for large-scale moisture control.",
      price: "Rs. 1,200 / kg",
      img: "/products/p4.jpg",
    },
  ];

  const otherProducts = [
    {
      name: "Humidity Indicator Cards",
      desc: "Easily monitor humidity levels with high-accuracy indicator cards.",
      price: "Rs. 250 / pack",
      img: "/products/p5.jpg",
    },
    {
      name: "Activated Clay Desiccant",
      desc: "Natural, eco-friendly desiccant option for moisture control.",
      price: "Rs. 750 / bag",
      img: "/products/p5.jpg",
    },
    {
      name: "Silica Gel Sachets",
      desc: "Compact sachets ideal for electronics, food, and pharmaceuticals.",
      price: "Rs. 400 / pack",
      img: "/products/p6.jpg",
    },
  ];

 const ProductCard = ({ p, i }: { p: Product; i: number }) => (
    <motion.div
      key={i}
      className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.07,
        rotateY: 5,
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.2), 0 0 20px rgba(255,215,0,0.3)",
      }}
      transition={{ duration: 0.4, delay: i * 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.img
        src={p.img}
        alt={p.name}
        className="mx-auto mb-4 w-48 h-48 object-cover rounded-lg"
        whileHover={{
          scale: 1.1,
          rotate: 1,
          boxShadow: "0 0 25px rgba(255, 215, 0, 0.4)",
        }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="font-bold text-lg mb-1 text-fuchsia-900 tracking-wide">
        {p.name}
      </h3>
      <p className="text-gray-700 mb-2 text-sm">{p.desc}</p>
      <p className="text-green-700 font-semibold text-base">{p.price}</p>
    </motion.div>
  );
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto py-16 px-4">
        {/* Main Products Section */}
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
          Our Products
        </h1>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {products.map((p, i) => (
            <ProductCard key={i} p={p} i={i} />
          ))}
        </div>

        {/* Other Products Section */}
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">
          Other Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {otherProducts.map((p, i) => (
            <ProductCard key={i} p={p} i={i} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
