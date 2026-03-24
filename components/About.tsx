"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="px-6 py-16 md:py-20 md:px-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row gap-16">
                <div className="w-full md:w-5/12">
                    <h2 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-8">( ABOUT US )</h2>
                    <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light">
                        TAGEVENTS is more than an event planning company; we are architects of memory. We believe that a truly great event is an art form—a temporary masterpiece built from light, sound, texture, and timing.
                    </p>
                </div>
                <div className="w-full md:w-7/12 flex flex-col justify-end">
                    <p className="text-lg text-white/50 leading-relaxed max-w-xl self-end text-right">
                        Founded with a rebellious spirit and a lofty objective: to offer a superior, cinematic alternative to the predictable event industry.
                    </p>
                </div>
            </div>
        </section>
    );
}
