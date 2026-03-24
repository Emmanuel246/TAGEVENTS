import Services from "@/components/Services";
import FloatingDock from "@/components/FloatingDock";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <main className="min-h-screen text-white pt-24 md:pt-32 pb-32 md:pb-40 font-sans">
            <FloatingDock />
            <div className="container mx-auto px-6 md:px-12">
                <h1 className="text-[14vw] sm:text-[11vw] md:text-[10vw] leading-[0.85] font-bold tracking-tighter text-white/90 mb-16 break-words">
                    EXPERTISE
                </h1>

                <Services />

                {/* The Process Section */}
                <section className="mt-24 md:mt-32 pt-24 border-t border-white/10">
                    <h2 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-16">( HOW WE WORK )</h2>

                    <div className="space-y-24">
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                            <div className="w-full md:w-1/4 md:sticky md:top-32">
                                <span className="text-xs uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">Phase 01</span>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-3xl md:text-5xl font-light mb-6 text-white/90">Discovery & Concept</h3>
                                <p className="text-white/60 text-lg leading-relaxed mb-8">
                                    We start by listening. We dive deep into your objective, your audience, and your visual preferences. Then, we return with a comprehensive mood board and spatial plan that sets the tone for the entire project.
                                </p>
                            </div>
                            <div className="w-full md:w-1/4 aspect-square relative rounded-sm overflow-hidden transition-all">
                                <Image src="/images/MLG_1144_Original.JPG" alt="Concept Phase" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                            <div className="w-full md:w-1/4 sticky top-32">
                                <span className="text-xs uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">Phase 02</span>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-3xl md:text-5xl font-light mb-6 text-white/90">Design & Architecture</h3>
                                <p className="text-white/60 text-lg leading-relaxed mb-8">
                                    This is where the magic happens. We produce detailed renderings, source bespoke furniture, and design custom lighting rigs. Every aesthetic decision is made with the final guest experience in mind.
                                </p>
                            </div>
                            <div className="w-full md:w-1/4 aspect-square relative rounded-sm overflow-hidden transition-all">
                                <Image src="/images/TS2_8700.jpg" alt="Design Phase" fill className="object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                            <div className="w-full md:w-1/4 sticky top-32">
                                <span className="text-xs uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full">Phase 03</span>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-3xl md:text-5xl font-light mb-6 text-white/90">Execution & Production</h3>
                                <p className="text-white/60 text-lg leading-relaxed mb-8">
                                    On the day, we are the first to arrive and the last to leave. Our production managers oversee the build, manage the run-of-show, and ensure that the only surprise is the sheer beauty of the event.
                                </p>
                            </div>
                            <div className="w-full md:w-1/4 aspect-square relative rounded-sm overflow-hidden transition-all">
                                <Image src="/images/YOM09013_Original.JPG" alt="Execution Phase" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mt-32 p-8 md:p-12 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 text-center">
                    <h3 className="text-2xl md:text-3xl font-light mb-6">Need something bespoke?</h3>
                    <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                        Our capabilities extend beyond this list. We specialize in solving complex logistical and creative challenges for high-net-worth clients and global brands.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform uppercase tracking-widest text-sm">
                        Start a Project
                    </a>
                </div>
            </div>
        </main>
    );
}
