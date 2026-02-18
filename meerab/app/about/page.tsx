import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ===== HERO BANNER SECTION ===== */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/about/about-banner.jpg')", // Replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#17125C]/70"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Meerab Enterprises
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Trusted Supplier of Quality Products Since 1983
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto py-16 px-4 space-y-16">
        {/* ===== INTRO SECTION ===== */}
        <section className="text-center">
          <h2 className="text-4xl font-extrabold text-[#17125C] mb-4">
            About Meerab Enterprises
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Meerab Enterprises is a trusted trading and supply company committed
            to delivering top-quality products with reliability, efficiency, and
            transparency. We proudly serve clients across Pakistan, ensuring
            excellence in every transaction and building long-term partnerships
            based on trust.
          </p>
        </section>

        {/* ===== OUR STORY SECTION ===== */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="/about/about.jpg"
              alt="Meerab Enterprises"
              className="rounded-lg shadow-lg w-full md:w-4/5 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#17125C] mb-3">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Established with a passion for quality and precision, Meerab
              Enterprises has become a recognized name in the trading industry.
              We started with a simple goal — to make premium-quality products
              accessible for every business. Over the years, our commitment to
              excellence and customer satisfaction has earned us a reputation for
              trust and dependability.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we continue to expand our reach and enhance our product
              range, offering efficient solutions that meet the highest global
              standards.
            </p>
          </div>
        </section>

        {/* ===== MISSION & VISION SECTION ===== */}
        <section className="bg-gray-50 rounded-xl shadow-sm p-8 text-center">
          <h2 className="text-3xl font-bold text-[#17125C] mb-6">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#17125C]">
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver superior-quality products and dependable services
                through innovation, integrity, and excellence — ensuring complete
                customer satisfaction and long-term business relationships.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#17125C]">
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become Pakistan’s most trusted trading partner, known for
                quality, transparency, and a commitment to continuous improvement.
              </p>
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#17125C] mb-6">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                desc: "Every product undergoes strict quality checks before delivery to ensure 100% satisfaction.",
              },
              {
                title: "Reliable Delivery",
                desc: "We pride ourselves on on-time delivery and efficient logistics to keep your business running smoothly.",
              },
              {
                title: "Customer Support",
                desc: "Our team provides professional and friendly support to guide you every step of the way.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-[#17125C] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="text-center bg-[#17125C] text-white py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Partner with Meerab Enterprises for reliable, efficient, and
            high-quality trading solutions. Let’s build something great together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#17125C] px-6 py-3 rounded-lg font-semibold hover:bg-[#100e48] hover:text-white transition"
          >
            Contact Us
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
