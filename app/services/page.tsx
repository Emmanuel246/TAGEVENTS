import Services from "@/components/Services";
import FloatingDock from "@/components/FloatingDock";

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

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {[
                            { step: "1", title: "Consultation", desc: "Understanding your vision, goals, budget, and expectations." },
                            { step: "2", title: "Planning & Design", desc: "Vendor sourcing, theme development, and event strategy." },
                            { step: "3", title: "Coordination", desc: "Timeline creation, logistics management, and vendor oversight." },
                            { step: "4", title: "Management", desc: "On-site coordination, setup supervision, and seamless execution." },
                            { step: "5", title: "Celebration", desc: "Enjoy your event while we handle every detail." }
                        ].map((p, i) => (
                            <div key={i} className="space-y-4">
                                <span className="text-4xl font-bold text-white/10">{p.step}</span>
                                <h3 className="text-xl font-medium text-white/90">{p.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Featured Packages Section */}
                <section className="mt-32 pt-24 border-t border-white/10">
                    <h2 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-16">( FEATURED PACKAGES )</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "TAG Legacy", desc: "Premium event planning for large-scale celebrations and luxury events." },
                            { name: "TAG Essence", desc: "Comprehensive planning package for medium to large events." },
                            { name: "TAG Prime", desc: "Ideal for intimate weddings and social events." },
                            { name: "TAG Nook", desc: "Perfect for smaller, personalized celebrations." },
                            { name: "TAG Seamless Day", desc: "Event-day coordination for clients who have already planned their event." },
                            { name: "TAG Vision Consult", desc: "Professional event consultation and planning guidance." }
                        ].map((pkg, i) => (
                            <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-colors group">
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/100">{pkg.name}</h3>
                                <p className="text-sm text-white/60 leading-relaxed mb-6">{pkg.desc}</p>
                                <a href="/contact" className="text-xs uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-colors">Request Details</a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Specialized Services Section */}
                <section className="mt-32 pt-24 border-t border-white/10">
                    <div className="bg-white/5 p-8 md:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden">
                        <div className="max-w-3xl relative z-10">
                            <h2 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-8">SPECIALIZED SERVICES</h2>
                            <h3 className="text-3xl md:text-5xl font-light text-white/90 mb-8">Funeral & Memorial Event Coordination</h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-12">
                                We provide compassionate planning and coordination during difficult times, handling every detail with care, respect, and professionalism. We believe in honoring legacies with grace and precision.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Full planning support
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Vendor management
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Family liaison services
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" /> Respectful execution
                                </li>
                            </ul>
                        </div>
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none hidden lg:block" />
                    </div>
                </section>

                <div className="mt-32 p-8 md:p-12 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 text-center">
                    <h3 className="text-2xl md:text-3xl font-light mb-6">Let&apos;s Bring Your Vision To Life</h3>
                    <p className="text-white/60 mb-8 max-w-2xl mx-auto italic">
                        Beautifully. Thoughtfully. Stress-Free.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform uppercase tracking-widest text-sm">
                        Book a Consultation
                    </a>
                </div>
            </div>
        </main>
    );
}
