"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function FloatingDock() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const pathname = usePathname();

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95vw] md:w-auto flex justify-center">
            <motion.div
                layout
                className="flex items-center gap-1 md:gap-2 p-1 md:p-2 rounded-full bg-black/5 backdrop-blur-2xl border border-black/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] overflow-x-auto no-scrollbar"
            >
                {LINKS.map((link, i) => {
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`
                    relative px-3 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 group whitespace-nowrap
                    ${isActive ? 'bg-black text-white' : 'hover:bg-black/5'}
                `}
                        >
                            <span className={`
                    relative z-10 text-[10px] md:text-sm font-medium tracking-wide uppercase transition-colors
                    ${isActive ? 'text-white' : 'text-black/70 group-hover:text-black'}
                `}>
                                {link.name}
                            </span>

                            {/* Optional: Add a subtle glow for active/hover if desired, but the bg change is cleaner */}
                        </Link>
                    );
                })}
            </motion.div>
        </div>
    );
}
