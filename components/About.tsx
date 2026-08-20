export default function About() {
    return (
        <section id="about" className="px-6 py-16 md:py-20 md:px-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row gap-16">
                <div className="w-full md:w-5/12">
                    <h2 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-8">( ABOUT US )</h2>
                    <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light">
                        At The Assistant Guru (TAG) Events, we believe every event should feel seamless, intentional, and deeply personal. We partner closely with our clients to ensure every event reflects their unique story.
                    </p>
                </div>
                <div className="w-full md:w-7/12 flex flex-col justify-end gap-12">
                    <p className="text-lg text-white/50 leading-relaxed max-w-xl self-end text-right">
                        Our approach is simple: thoughtful planning, clear communication, and flawless execution. With a passion for excellence, we create standout events that leave lasting impressions.
                    </p>
                    <div className="self-end text-right border-t border-white/10 pt-8 mt-8">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Our Mission</h3>
                        <p className="text-xl md:text-2xl font-light text-white/90 italic">
                            &ldquo;To bring structure, creativity, and professionalism to every event while delivering unforgettable experiences that exceed expectations.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
