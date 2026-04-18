import { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Silica Gel Products – Meerab Enterprises | Get a Quote",
  description:
    "Explore premium silica gel pouches, desiccant bags, and humidity control solutions. Request a quote for bulk orders – best prices in Pakistan.",
  keywords:
    "silica gel products Pakistan, desiccant bags, moisture absorber, silica gel pouches, industrial desiccant, quote",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.meerabenterprises.com.pk/products",
  },
  openGraph: {
    type: "website",
    title: "Silica Gel Products – Meerab Enterprises",
    description:
      "High-quality silica gel and desiccant products. Get a quote today – competitive pricing and fast delivery.",
    images: ["https://www.meerabenterprises.com.pk/og-products.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Generate structured data for SEO
const generateStructuredData = (products: any[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Silica Gel Products by Meerab Enterprises",
  description:
    "Premium silica gel and desiccant products for moisture control in Pakistan.",
  numberOfItems: products.length,
  itemListElement: products.map((product, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: `https://www.meerabenterprises.com.pk${product.image}`,
      offers: {
        "@type": "Offer",
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
      },
    },
  })),
});

export default async function ProductsPage() {
  // Fetch products on the server for better SEO and performance
  let products: any[] = [];
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`,
      { next: { revalidate: 3600 } } // ISR: revalidate every hour
    );
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      products = data;
    }
  } catch (error) {
    console.error("Server-side fetch failed, fallback will be used on client:", error);
  }

  return (
    <>
      {/* Inject structured data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData(products)),
        }}
      />
      <ProductsClient initialProducts={products} />
    </>
  );
}