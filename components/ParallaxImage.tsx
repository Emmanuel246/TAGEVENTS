"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number; // Speed multiplier (e.g. 0.1 to 0.3)
}

export default function ParallaxImage({ src, alt, className = "", speed = 0.15 }: ParallaxImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll position relative to the element's container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // Trigger when top of element enters viewport until bottom leaves
    });

    // Map scroll progress to vertical translation (e.g. from -50px to 50px)
    const yTransform = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

    // Apply spring physics for ultra-smooth easing
    const ySpring = useSpring(yTransform, {
        stiffness: 80,
        damping: 25,
        mass: 0.5,
    });

    return (
        <div 
            ref={containerRef} 
            className={`relative overflow-hidden ${className}`}
        >
            <motion.div 
                style={{ y: ySpring }} 
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </motion.div>
        </div>
    );
}
