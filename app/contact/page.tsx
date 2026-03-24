import FloatingDock from "@/components/FloatingDock";

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen text-black pt-32 pb-40 relative overflow-hidden">
            <FloatingDock />

            <div className="container mx-auto px-6 relative z-10">
                <h1 className="text-[10vw] leading-[0.8] font-bold tracking-tighter text-black/90 mb-12 mix-blend-difference">
                    GET IN TOUCH
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <div className="p-8 bg-black/5 backdrop-blur-2xl rounded-3xl border border-black/10">
                            <h3 className="text-xs uppercase tracking-widest text-black/40 mb-2">New Business</h3>
                            <a href="mailto:hello@tagevents.com" className="text-2xl md:text-3xl hover:text-black/70 transition-colors block mb-1">
                                hello@tagevents.com
                            </a>
                            <p className="text-black/40">+1 (555) 000-0000</p>
                        </div>

                        <div className="p-8 bg-black/5 backdrop-blur-2xl rounded-3xl border border-black/10">
                            <h3 className="text-xs uppercase tracking-widest text-black/40 mb-2">Press & Careers</h3>
                            <a href="mailto:press@tagevents.com" className="text-2xl md:text-3xl hover:text-black/70 transition-colors">
                                press@tagevents.com
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold mb-2">Lagos HQ</h4>
                                <p className="text-black/60">12 Victoria Island<br />Lagos, Nigeria</p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">London Office</h4>
                                <p className="text-black/60">44 Oxford Street<br />London, UK</p>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6 bg-black/5 backdrop-blur-xl p-8 rounded-3xl border border-black/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-black/60">Name</label>
                                <input type="text" className="w-full bg-white/50 border border-black/10 rounded-lg p-3 focus:outline-none focus:border-black/40 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-black/60">Email</label>
                                <input type="email" className="w-full bg-white/50 border border-black/10 rounded-lg p-3 focus:outline-none focus:border-black/40 transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-black/60">Subject</label>
                            <select className="w-full bg-white/50 border border-black/10 rounded-lg p-3 focus:outline-none focus:border-black/40 transition-colors text-black/80">
                                <option>Event Inquiry</option>
                                <option>Press Opportunity</option>
                                <option>General Question</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-black/60">Message</label>
                            <textarea rows={6} className="w-full bg-white/50 border border-black/10 rounded-lg p-3 focus:outline-none focus:border-black/40 transition-colors" />
                        </div>
                        <button className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest rounded-lg hover:bg-black/90 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
