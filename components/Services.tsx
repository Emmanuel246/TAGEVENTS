"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SERVICES = [
    {
        title: "Event Planning & Coordination",
        desc: "Comprehensive planning and execution from concept to completion. We handle the heavy lifting so you can focus on the celebration.",
        tags: ["Strategy", "Execution", "Full-Service"]
    },
    {
        title: "Wedding Planning & Management",
        desc: "Personalized wedding planning designed to bring your dream day to life. From mood boards to the final toast.",
        tags: ["Weddings", "Styling", "Timelines"]
    },
    {
        title: "Corporate Event Management",
        desc: "Professional planning for conferences, launches, networking events, and corporate gatherings that reflect your brand excellence.",
        tags: ["Conferences", "Launches", "Networking"]
    },
    {
        title: "Social Events",
        desc: "Birthdays, anniversaries, and private celebrations tailored to your unique vision and personality.",
        tags: ["Birthdays", "Anniversaries", "Private"]
    },
    {
        title: "Event Styling & Experience Design",
        desc: "Creating beautiful, immersive event experiences with thoughtful design, floral curation, and lighting architecture.",
        tags: ["Design", "Aesthetics", "Atmosphere"]
    },
    {
        title: "Vendor Coordination & Logistics",
        desc: "Managing vendors, timelines, and event-day operations with precision and integrity.",
        tags: ["Logistics", "Vendors", "Operations"]
    }
];

export default function Services() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section id="services" className="px-6 py-16 md:py-20 md:px-12 border-t border-white/10">
            <h2 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-12">( WHAT WE DO )</h2>

            <div className="flex flex-col">
                {SERVICES.map((service, i) => (
                    <div
                        key={i}
                        onClick={() => setActive(active === i ? null : i)}
                        className="border-b border-white/10 cursor-pointer group"
                    >
                        <div className="py-8 flex items-center justify-between transition-colors group-hover:bg-white/5 px-4 rounded-lg">
                            <h3 className="text-2xl md:text-5xl font-light text-white/90 group-hover:text-white transition-colors">
                                {service.title}
                            </h3>
                            <span className="text-2xl font-light text-white/40 group-hover:scale-125 transition-transform duration-300">
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
                                        <p className="text-lg text-white/60 mb-6">{service.desc}</p>
                                        <div className="flex gap-3">
                                            {service.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 text-xs border border-white/20 rounded-full text-white/40 uppercase tracking-wider">
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
