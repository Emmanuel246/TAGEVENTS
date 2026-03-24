"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const CAROUSEL_IMAGES = [
    { src: "/images/uploaded_image_0_1767994397675.jpg", rotation: -5, scale: 0.9, z: 10 },
    { src: "/images/uploaded_image_4_1767994397675.jpg", rotation: 5, scale: 1.1, z: 20 },
    { src: "/images/uploaded_image_3_1767994397675.jpg", rotation: -8, scale: 0.95, z: 15 },
    { src: "/images/TS2_7859.jpg", rotation: 3, scale: 1.05, z: 25 },
    { src: "/images/uploaded_image_1_1767994397675.jpg", rotation: -3, scale: 1, z: 12 },
];

export default function HeroGallery() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), { stiffness: 100, damping: 30 });
    const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 10]), { stiffness: 100, damping: 30 });

    return (
        <div ref={containerRef} className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden perspective-1000">

            {/* 3D Floating Clouds of Images */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {CAROUSEL_IMAGES.map((img, i) => {
                    // Wider horizontal distribution
                    // Center is 50%. We want to spread from like 10% to 90%
                    const totalImages = CAROUSEL_IMAGES.length;
                    const spread = 80; // percent width to cover
                    const start = 50 - (spread / 2);
                    const step = spread / (totalImages - 1);

                    // Add some randomness/offset so it's not a perfect line
                    const randomY = (i % 2 === 0 ? -1 : 1) * (i % 3 === 0 ? 5 : 10);
                    const leftPos = start + (step * i);

                    return (
                        <motion.div
                            key={i}
                            style={{
                                y: useTransform(scrollYProgress, [0, 1], [0, (i % 2 === 0 ? -50 : -100)]),
                                rotate: img.rotation,
                                zIndex: img.z,
                                left: `${leftPos}%`,
                                top: `${45 + randomY}%`, // Center vertically roughly
                            }}
                            className="absolute w-[45vw] md:w-[25vw] aspect-[3/4] shadow-2xl rounded-sm border-[6px] border-white/10 bg-black transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src={img.src}
                                    alt="Gallery Image"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Glossy Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none" />
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* Gradient fade at bottom to blend */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-40" />
        </div>
    );
}
