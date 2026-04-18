"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
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

// ✅ Normalize image URL (MAIN FIX)
const getImageUrl = (image: string | undefined | null) => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!image || image.trim() === "") {
    return "/products/placeholder.jpg";
  }

  // already full URL
  if (image.startsWith("http")) {
    return image;
  }

  // if backend URL missing → fallback
  if (!baseUrl) {
    return "/products/placeholder.jpg";
  }

  // remove starting slash if exists
  const cleanPath = image.startsWith("/") ? image.slice(1) : image;

  return `${baseUrl}/${cleanPath}`;
};

// WhatsApp link
const getWhatsAppQuoteLink = (productName: string) => {
  const message = `Hello Meerab Enterprises, I'm interested in getting a quote for: ${productName}. Please provide pricing and details.`;
  return `https://wa.me/923302273771?text=${encodeURIComponent(message)}`;
};

export default function ProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  // ✅ Memoized image URL
  const initialImg = useMemo(() => getImageUrl(product.image), [product.image]);

  // ✅ Fallback handling (FIXED)
  const [imgSrc, setImgSrc] = useState(initialImg);
  console.log("IMAGE URL:", imgSrc);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
    >
      {/* IMAGE */}
      <div className="relative w-full h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
        <Image
          src={imgSrc}
          alt={product.name || "Product image"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
          priority={index < 3}
          loading={index < 3 ? "eager" : "lazy"}
          onError={() => {
            if (imgSrc !== "/products/p1.jpg") {
              setImgSrc("/products/placeholder.jpg");
            }
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 sm:p-6">
        <h3 className="font-bold text-xl text-indigo-900 mb-2 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href={getWhatsAppQuoteLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-5 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            <FaWhatsapp className="w-4 h-4" />
            Get a Quote
          </a>
        </div>
      </div>
    </motion.div>
  );
}