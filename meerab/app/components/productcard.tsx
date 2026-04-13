// components/ProductCard.tsx
"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const ProductCard = memo(({ product, index }: { product: Product; index: number }) => {
  return (
    <motion.article
      className="group relative bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-indigo-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      style={{ willChange: "transform" }}
    >
      <div className="relative w-full aspect-square mb-5 overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={product.image || "/products/fallback.jpg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/products/fallback.jpg";
          }}
        />
      </div>
      <h3 className="font-bold text-xl mb-2 text-gray-900 line-clamp-2">{product.name}</h3>
      <p className="text-gray-600 mb-3 text-sm line-clamp-3">{product.description}</p>
      <p className="text-green-700 font-semibold text-lg">
        Rs. {product.price.toLocaleString()}
      </p>
    </motion.article>
  );
});

ProductCard.displayName = "ProductCard";
export default ProductCard;