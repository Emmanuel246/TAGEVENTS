import About from "@/components/About";
import FloatingDock from "@/components/FloatingDock";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen text-white pt-24 md:pt-32 pb-32 md:pb-40 font-sans">
            <FloatingDock />
            <div className="container mx-auto px-6 md:px-12">
                <h1 className="text-7xl sm:text-8xl md:text-[10vw] leading-[0.85] font-bold tracking-tighter text-white/90 mb-12 md:mb-16">
                    OUR STORY
                </h1>

                <About />

                <div className="w-full h-[60vh] relative my-24 rounded-sm overflow-hidden transition-all duration-700">
                    <Image src="/images/TS1_5009.jpg" alt="Atmosphere" fill className="object-cover" />
                </div>

                {/* Core Values / Philosophy */}
                <section className="mt-24 md:mt-32">
                    <h2 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-12">( THE PHILOSOPHY )</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                        <div className="space-y-4">
                            <span className="text-4xl md:text-5xl font-light text-white/20">01</span>
                            <h3 className="text-2xl font-medium text-white/90">Precision & Pace</h3>
                            <p className="text-white/60 leading-relaxed">
                                We believe timing is the invisible architecture of any event. From the arrival experience to the final toast, we choreograph every second to maintain energy and engagement.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <span className="text-4xl md:text-5xl font-light text-white/20">02</span>
                            <h3 className="text-2xl font-medium text-white/90">Radical Atmosphere</h3>
                            <p className="text-white/60 leading-relaxed">
                                We don't do "decor". We build worlds. Using light, shadow, and architectural structure, we transform venues into immersive environments that transport guests.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <span className="text-4xl md:text-5xl font-light text-white/20">03</span>
                            <h3 className="text-2xl font-medium text-white/90">Invisible Service</h3>
                            <p className="text-white/60 leading-relaxed">
                                True luxury is seamlessness. Our production teams work in the shadows, ensuring that logistics never interrupt the magic of the moment.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Founder / Team Mockup */}
                <div className="mt-24 md:mt-32 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    <div className="w-full md:w-1/3 aspect-[3/4] bg-white/10 rounded-2xl relative overflow-hidden">
                        {/* Placeholder for founder image - using a generic event image for now or placeholder */}
                        <Image src="/images/oreoluwa.JPG" alt="Founder" fill className="object-cover" />
                        <div className="absolute inset-0 bg-white/20" />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h3 className="text-3xl md:text-4xl font-light mb-6">The Curator's Note</h3>
                        <p className="text-white/80 leading-relaxed text-lg mb-8 italic">
                            "We founded TAGEVENTS because we were bored of the standard. The white tablecloths, the generic centerpieces... it felt like a formula. We wanted to create events that felt like cinema."
                        </p>
                        <div>
                            <p className="font-bold text-white tracking-widest uppercase">Oreoluwa Adedapo-Adigun</p>
                            <p className="text-white/40 text-sm">Chief Executive Officer and Lead Planner</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
