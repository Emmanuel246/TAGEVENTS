"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const IMAGES = [
    "/images/uploaded_image_2_1767994397675.jpg",
    "/images/uploaded_image_0_1767994397675.jpg",
    "/images/IMG_3271.JPG",
    "/images/uploaded_image_4_1767994397675.jpg",
    "/images/TS1_7919.jpg",
    "/images/uploaded_image_3_1767994397675.jpg",
    "/images/INN_0725.jpg",
    "/images/uploaded_image_1_1767994397675.jpg",
];

export default function ImageSlideshow() {
    return (
        <section className="py-16 md:py-20 border-t border-black/5 overflow-hidden bg-white">
            <div className="mb-12 px-6 md:px-12">
                <h2 className="text-sm font-medium tracking-widest uppercase text-black/40">( VISUAL DIARY )</h2>
            </div>

            <div className="flex overflow-hidden">
                <motion.div
                    className="flex gap-8"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    style={{ width: "max-content" }}
                >
                    {[...IMAGES, ...IMAGES].map((src, i) => (
                        <div key={i} className="relative w-[80vw] md:w-[30vw] aspect-[4/3] rounded-sm overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src={src}
                                alt="Event Highlight"
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
