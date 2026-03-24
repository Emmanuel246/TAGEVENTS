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
        <section ref={containerRef} className="relative min-h-[100svh] md:h-[90vh] flex flex-col px-6 md:px-12 pb-32 md:py-0 overflow-hidden pt-28 md:pt-0">
            {/* Logo Placement */}
            <div className="absolute top-6 md:top-8 left-6 md:left-12 z-50">
                <Image src="/images/TAGLOGO.PNG" alt="TAGEVENTS" width={220} height={70} className="w-32 md:w-56 xl:w-64 object-contain brightness-0 invert" />
            </div>

            {/* Mobile Image Layer (Sits below logo, above text) */}
            <motion.div
                style={{ y, opacity }}
                className="relative md:absolute w-full h-[40vh] mt-4 mb-8 rounded-[2rem] overflow-hidden md:top-[20%] md:bottom-auto md:left-auto md:right-[5%] md:w-[40vw] md:h-[60vh] md:rounded-none z-0 md:mt-0 md:mb-0 transition-all duration-700 opacity-100 block"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 md:hidden pointer-events-none" />
                <Image
                    src="/images/TS2_7859.jpg"
                    alt="Hero visual"
                    fill
                    className="object-cover md:opacity-80"
                    priority
                />
            </motion.div>

            {/* Text Content */}
            <div className="relative z-20 flex flex-col justify-start md:justify-center h-full pb-6 md:pb-0 -mt-16 md:mt-0 px-2 md:px-0">
                <h1 className="text-[12vw] sm:text-[11vw] md:text-[10vw] leading-[1] md:leading-[0.85] font-bold tracking-tighter text-white/90 md:mt-0 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] md:drop-shadow-none mix-blend-normal">
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}>
                        CRAFTING
                    </motion.div>
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}>
                        THE
                    </motion.div>
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }} className="text-white/40 text-[9.5vw] sm:text-[10vw] md:text-[10vw] -mt-[1vw] md:mt-0">
                        UNFORGETTABLE
                    </motion.div>
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="max-w-sm text-sm text-white/60 tracking-wide leading-relaxed mt-6 md:absolute md:bottom-12 md:left-12 relative z-20"
                >
                    <p>
                        TAGEVENTS is a premier styling and planning agency curating atmospheric experiences for the modern world.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
