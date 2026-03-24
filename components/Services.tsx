"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SERVICES = [
    {
        title: "Event Design & Styling",
        desc: "Full-scale aesthetic curation including floral design, custom furniture fabrication, and lighting architecture.",
        tags: ["Decor", "Florals", "Lighting"]
    },
    {
        title: "Technical Production",
        desc: "Seamless audiovisual integration, stage design, and live show direction for high-impact moments.",
        tags: ["Sound", "Visuals", "Staging"]
    },
    {
        title: "Logistics & Management",
        desc: "Precision timeline management, vendor coordination, and on-site execution for flawless delivery.",
        tags: ["Planning", "Coordination", "Security"]
    },
    {
        title: "Venue Architecture",
        desc: "Transforming raw spaces into bespoke environments through custom build-outs and spatial planning.",
        tags: ["Build-outs", "Floorplans", "Permits"]
    }
];

export default function Services() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section id="services" className="px-6 py-16 md:py-20 md:px-12 border-t border-black/10">
            <h2 className="text-sm font-medium tracking-widest uppercase text-black/40 mb-12">( WHAT WE DO )</h2>

            <div className="flex flex-col">
                {SERVICES.map((service, i) => (
                    <div
                        key={i}
                        onClick={() => setActive(active === i ? null : i)}
                        className="border-b border-black/10 cursor-pointer group"
                    >
                        <div className="py-8 flex items-center justify-between transition-colors group-hover:bg-black/5 px-4 rounded-lg">
                            <h3 className="text-2xl md:text-5xl font-light text-black/90 group-hover:text-black transition-colors">
                                {service.title}
                            </h3>
                            <span className="text-2xl font-light text-black/40 group-hover:scale-125 transition-transform duration-300">
                                {active === i ? "—" : "+"}
                            </span>
                        </div>

                        <AnimatePresence>
                            {active === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-8 pl-4 md:pl-8 max-w-3xl">
                                        <p className="text-lg text-black/60 mb-6">{service.desc}</p>
                                        <div className="flex gap-3">
                                            {service.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 text-xs border border-black/20 rounded-full text-black/40 uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
