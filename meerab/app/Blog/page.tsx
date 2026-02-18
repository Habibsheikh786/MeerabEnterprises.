"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import { FaWhatsapp } from 'react-icons/fa';
export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Blog Page Hero */}
      <section className="relative w-full h-[50vh] bg-gray-900 text-white flex items-center justify-center overflow-hidden">
        <img
          src="/blogs/blog-banner.jpg"
          alt="Blog Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Our Articles</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Insights, tips, and updates from Meerab Enterprises on silica gel products and industry trends.
          </p>
        </div>
      </section>

      {/* Blog Articles Section */}
      <main className="max-w-5xl mx-auto py-16 px-4 space-y-16">
        {/* Article 1 */}
        <article>
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">
             Uses of Silica Gel 
          </h2>
          <img
            src="/blogs/blog1.jpg"
            alt="Silica Gel Uses"
            className="rounded-lg shadow-md w-full h-80 object-cover mb-6"
          />
          <p className="text-gray-700 leading-relaxed mb-6">
Uses of Silica Gel

Silica gel is a highly effective desiccant widely used to control moisture and humidity in various environments. One of its most common uses is in product packaging — you’ll often find small silica gel packets inside electronics, shoes, medicines, and food containers. These packets help keep products dry by absorbing excess moisture, which prevents damage, mold, and spoilage.

In households, silica gel can be used to protect important documents, photographs, and jewelry from humidity. It also helps prevent rust in tools and keeps camera equipment safe from moisture damage. Additionally, silica gel can be used to dry flowers for decoration or crafts and to prolong the freshness of stored seeds and spices.

In industrial applications, silica gel plays a crucial role in maintaining dry air in compressed air systems, transformers, and shipping containers. Its versatility and reusability make it an eco-friendly and cost-effective solution for moisture control across many sectors.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In industries like electronics, pharmaceuticals, and food packaging, silica gel prevents
            corrosion, mold, and product degradation. Whether used in bulk or in small sachets, it
            plays a vital role in ensuring the quality of goods.
          </p>
        </article>

       {/* Article 2 */}
<article>
  <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">
    Moisture Absorber for Packaging
  </h2>
  <img
    src="/blogs/blog2.jpg"
    alt="How Silica Gel Works"
    className="rounded-lg shadow-md w-full h-80 object-cover mb-6"
  />
  <p className="text-gray-700 leading-relaxed mb-6">
    Moisture is one of the biggest challenges faced during the storage and shipping of products.
    Excess humidity can cause mold, rust, corrosion, and even spoilage of goods. That’s why using a
    moisture absorber for packaging has become essential for all industries — from food and
    pharmaceuticals to electronics and machinery.
    <br /><br />
    Silica gel is one of the most effective and popular
    <span className="font-bold text-black">
      {" "}moisture absorbers used in packaging
    </span>.
    It works by absorbing and holding moisture from the air, creating a dry and stable environment
    inside boxes, containers, or packets. This helps protect valuable goods during transit,
    especially in humid climates or long-distance shipping.
    <br /><br />
    <span className="font-bold text-black">
      {" "}absorbing
    </span>
    
    In the food industry, silica gel packets help maintain product freshness by preventing moisture
    buildup inside sealed packaging. They are widely used with snacks, dry fruits, spices, and
    powdered foods to keep them crisp and dry. In the pharmaceutical sector, moisture absorbers
    ensure that medicines, tablets, and vitamins stay safe and effective by preventing
    humidity-related spoilage.
    <br /><br />
    The electronics industry also relies heavily on silica gel to protect sensitive devices and
    components from corrosion and condensation. From mobile phones and cameras to industrial
    machinery, silica gel keeps everything moisture-free during storage and delivery.
    <br /><br />
    For logistics and manufacturing companies, using a reliable moisture absorber means reduced
    product damage, fewer customer complaints, and higher customer satisfaction. It’s a small
    addition that makes a huge difference in maintaining product quality and extending shelf life.
    <br /><br />
    Whether it’s silica gel in blue, white, or orange form, these tiny packets are a powerful
    solution to moisture problems. They are non-toxic, easy to use, and even reusable — making them
    an eco-friendly and cost-effective choice for businesses of all types.
  </p>
  <p className="text-gray-700 leading-relaxed">
    This makes it ideal for protecting sensitive items from humidity damage and can be regenerated by
    heating to remove absorbed moisture for reuse.
  </p>
</article>


        {/* Article 3 */}
        <article>
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-4">
           Pharmaceutical & Medical Applications of Silica Gel
          </h2>
          <img
            src="/blogs/blog3.jpg"
            alt="Business Benefits"
            className="rounded-lg shadow-md w-full h-80 object-cover mb-6"
          />
          <p className="text-gray-700 leading-relaxed mb-6">
Silica gel plays a crucial role in the pharmaceutical and medical industries due to its excellent moisture absorption properties. In these sectors, maintaining product stability, efficacy, and shelf life is essential. Moisture can cause tablets, capsules, and other medical products to degrade, lose potency, or clump together. Silica gel acts as a highly effective desiccant, preventing these issues by keeping the environment dry and moisture-free.

In pharmaceutical packaging, silica gel is commonly placed inside medicine bottles and blister packs to protect sensitive products from humidity. It helps preserve the chemical composition of drugs, ensuring they remain effective until their expiration date. Moreover, silica gel is non-toxic, chemically inert, and safe to use with medications, making it ideal for healthcare applications.

In medical device packaging, silica gel helps protect surgical instruments, diagnostic kits, and electronic medical devices from corrosion and moisture-related damage during storage and transportation. Its ability to maintain low humidity levels ensures the reliability and performance of these critical tools.

Overall, silica gel is an essential component in the pharmaceutical and medical industries. It safeguards products from moisture, extends shelf life, and maintains quality standards — ensuring that both healthcare providers and patients receive safe, effective, and reliable products.

          </p>
          <p className="text-gray-700 leading-relaxed">
           
          </p>
        </article>
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

