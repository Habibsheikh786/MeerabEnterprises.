"use client";

import { useRef, useState, useEffect, memo } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Duplicate logos for smooth infinite scroll
const clients = [
  { name: "Afroze Textile Mills", logo: "/logo/afrozetextil.png" },
  { name: "Artistic Mills", logo: "/logo/artisticmill.webp" },
  { name: "Artistic Denim", logo: "/logo/artisticdenim.jpg" },
  { name: "Soorty Enterprises", logo: "/logo/soorty.png" },
  { name: "Nabi Qasim Pharma", logo: "/logo/nabiqasim.jpg" },
  { name: "Nouex Pharma", logo: "/logo/nouvex.jpg" },
];

// duplicate for smooth loop
const extendedClients = [...clients, ...clients];

// Optimized Counter (less re-renders)
const AnimatedCounter = memo(
  ({ targetValue, suffix = "" }: { targetValue: number; suffix?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / targetValue));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= targetValue) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [isInView, targetValue]);

    return (
      <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-900">
        {count}
        {suffix}
      </span>
    );
  }
);

export default function OurClientsSection() {
  return (
    <section
      aria-label="Our Clients"
      className="bg-white py-12 sm:py-14 md:py-16 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-10"
        >
          Trusted by Leading Companies
        </motion.h2>

        {/* LOGO SLIDER */}
        <div className="mb-12">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={30}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={false} // smoother continuous scroll
            breakpoints={{
              320: { spaceBetween: 20 },
              640: { spaceBetween: 30 },
              1024: { spaceBetween: 40 },
            }}
            className="client-swiper"
          >
            {extendedClients.map((client, idx) => (
              <SwiperSlide key={idx} className="!w-auto">
                <div className="bg-gray-50 rounded-xl p-4 w-36 sm:w-40 md:w-44 flex flex-col items-center justify-center border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all">
                  
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-2">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      loading="lazy"
                      className="object-contain"
                      sizes="(max-width: 640px) 80px, 96px"
                    />
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-gray-700 text-center line-clamp-2">
                    {client.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto"
        >
          <div className="text-center p-5 bg-indigo-50 rounded-2xl">
            <AnimatedCounter targetValue={50} suffix="+" />
            <p className="text-sm sm:text-base font-medium text-gray-700 mt-2">
              Satisfied Clients
            </p>
          </div>

          <div className="text-center p-5 bg-indigo-50 rounded-2xl">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-900">
              22k+
            </span>
            <p className="text-sm sm:text-base font-medium text-gray-700 mt-2">
              Packets/Month
            </p>
          </div>

          <div className="text-center p-5 bg-indigo-50 rounded-2xl">
            <AnimatedCounter targetValue={10} suffix="+" />
            <p className="text-sm sm:text-base font-medium text-gray-700 mt-2">
              Years Serving
            </p>
          </div>
        </motion.div>

        {/* TAGLINE */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Delivering moisture protection solutions nationwide since 2014
        </p>
      </div>

      {/* smooth scroll */}
      <style jsx global>{`
        .client-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}