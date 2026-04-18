"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ProductCard from "./ProductCard";

// Fallback products when backend is unreachable
const fallbackProducts = [
  {
    _id: "1",
    name: "Silica Gel 1GM Pouches",
    description: "High-quality silica gel pouches to keep your goods moisture‑free.",
    price: 500,
    category: "Desiccant",
    image: "/products/p1.jpg",
  },
  {
    _id: "2",
    name: "Desiccant Bags",
    description: "Industrial‑grade desiccant bags for shipping containers and storage.",
    price: 850,
    category: "Desiccant",
    image: "/products/p5.png",
  },
  {
    _id: "3",
    name: "Silica Gel 5GM Pouches",
    description: "Premium‑grade silica gel crystals for large‑scale moisture control.",
    price: 1200,
    category: "Desiccant",
    image: "/products/p3.jpg",
  },
  {
    _id: "4",
    name: "1kg Silica Gel Container Stripe",
    description: "Large container stripe for maximum moisture absorption.",
    price: 1200,
    category: "Desiccant",
    image: "/products/p4.jpg",
  },
  {
    _id: "5",
    name: "Humidity Indicator Cards",
    description: "Easily monitor humidity levels with high‑accuracy indicator cards.",
    price: 250,
    category: "Other",
    image: "/products/p2.jpg",
  },
  {
    _id: "6",
    name: "Activated Clay Desiccant",
    description: "Natural, eco‑friendly desiccant option for moisture control.",
    price: 750,
    category: "Other",
    image: "/products/Silica-gel-supplier-karachi.jpg.jpeg",
  },
  {
    _id: "7",
    name: "Silica Gel Sachets",
    description: "Compact sachets ideal for electronics, food, and pharmaceuticals.",
    price: 400,
    category: "Other",
    image: "/productsSilica-gel-supplier-karachi.jpg.jpeg",
  },
];

interface ProductsClientProps {
  initialProducts: any[];
}

export default function ProductsClient({ initialProducts }: ProductsClientProps) {
  const [products, setProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(initialProducts.length === 0);

  useEffect(() => {
    if (initialProducts.length > 0) {
      setLoading(false);
      return;
    }
    // Fetch client‑side if server data is empty
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`
        );
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        } else {
          setProducts(fallbackProducts);
        }
      } catch {
        setProducts(fallbackProducts);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [initialProducts]);

  const mainProducts = products.filter((p) => p.category !== "Other");
  const otherProducts = products.filter((p) => p.category === "Other");

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto py-12 sm:py-16 px-4 sm:px-6 pt-20 sm:pt-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-800 mb-3">
            Our Silica Gel Products
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Premium moisture control solutions – request a quote for any product.
            Bulk orders & custom sizes available.
          </p>
        </div>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                >
                  <div className="w-full h-56 bg-gray-200 animate-pulse" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                    <div className="h-10 bg-gray-200 rounded w-32 mx-auto animate-pulse" />
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <>
            {/* Main Products (Desiccant) */}
            {mainProducts.length > 0 && (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 text-center mb-8">
                  Desiccant Bags & Pouches
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                  {mainProducts.map((product, idx) => (
                    <ProductCard key={product._id} product={product} index={idx} />
                  ))}
                </div>
              </>
            )}

            {/* Other Products */}
            {otherProducts.length > 0 && (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 text-center mb-8">
                  Accessories & Specialty Items
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {otherProducts.map((product, idx) => (
                    <ProductCard key={product._id} product={product} index={idx} />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-indigo-50 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-800 mb-3">
            Need a Custom Silica Gel Solution?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-5">
            We offer bulk orders, private labeling, and custom sizes. Contact our
            team for a tailored quote.
          </p>
          <a
            href="https://wa.me/923302273771?text=Hello%20Meerab%20Enterprises%2C%20I%20need%20a%20custom%20quote%20for%20silica%20gel%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            <FaWhatsapp className="w-4 h-4" />
            Request Custom Quote
          </a>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/923302273771"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-4 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50 flex items-center justify-center"
          aria-label="Chat on WhatsApp for any product inquiry"
        >
          <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </main>
      <Footer />
    </>
  );
}