"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] md:h-[90vh] flex flex-col px-6 md:px-12 pb-32 md:py-0 overflow-hidden pt-28 md:pt-0"
    >
      {/* Logo Placement */}
      <div className="absolute top-4 md:top-8 left-4 md:left-12 z-50 pointer-events-none">
        <Image
          src="/images/assistangGurublackndwhitelogo.png"
          alt="The Assistant Guru Events"
          width={240}
          height={100}
          className="w-40 sm:w-48 md:w-56 xl:w-64 h-auto object-contain rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)] brightness-110 saturate-110"
        />
      </div>

      {/* Mobile Image Layer (Sits below logo, above text) */}
      <motion.div
        style={{ y, opacity }}
        className="relative md:absolute w-full h-[40vh] mt-4 mb-8 rounded-[2rem] overflow-hidden md:top-[20%] md:bottom-auto md:left-auto md:right-[5%] md:w-[40vw] md:h-[60vh] md:rounded-none z-0 md:mt-0 md:mb-0 transition-all duration-700 opacity-100 block"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 md:hidden pointer-events-none" />
        <Image
          src="/images/IMG_3275.JPG"
          alt="Hero visual"
          fill
          className="object-cover md:opacity-80"
          priority
        />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-start md:justify-center h-full pb-6 md:pb-0 -mt-12 md:mt-0 px-2 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white/90 mb-8 max-w-4xl leading-[0.9]"
        >
          Curating Refined experience for life's finest celebration.
        </motion.h1>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-xl text-sm md:text-base text-white/60 tracking-wide leading-relaxed relative z-20"
          >
            <p>
              At TAG Events, we transform your vision into beautifully curated
              experiences through thoughtful planning, clear communication, and
              flawless execution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-wrap gap-4 z-20"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
            >
              Book a Consultation
            </a>
            <a
              href="/services"
              className="px-8 py-4 border border-white/20 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
