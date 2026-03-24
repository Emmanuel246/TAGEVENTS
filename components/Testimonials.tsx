"use client";

import { useRef, useState } from "react";

const REVIEWS = [
    {
        client: "Mrs. Akinrin Adepeju",
        text: "A big thank you to The Assistant Guru Events and your amazing team for the impeccable service at Eliana's Naming Ceremony. Everything was handled with great professionalism and excellence."
    },
    {
        client: "Bride Fahktah",
        text: "From start to finish, you were professional, organised, and incredibly attentive to every detail. Your calm approach and confidence gave me so much peace of mind throughout the entire process."
    },
    {
        client: "Vogue",
        text: "A masterclass in atmospheric design."
    },
    {
        client: "Forbes",
        text: "Redefining luxury event management."
    },
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollPosition = scrollRef.current.scrollLeft;
        const width = scrollRef.current.offsetWidth;
        setCurrentIndex(Math.round(scrollPosition / width));
    };

    const scrollToSlide = (index: number) => {
        if (!scrollRef.current) return;
        const width = scrollRef.current.offsetWidth;
        scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    };

    const nextSlide = () => scrollToSlide((currentIndex + 1) % REVIEWS.length);
    const prevSlide = () => scrollToSlide((currentIndex === 0 ? REVIEWS.length - 1 : currentIndex - 1));

    return (
        <section id="testimonials" className="py-20 md:py-24 border-t border-black/10 relative group">
            <div className="px-6 md:px-12 mb-12 flex justify-between items-center">
                <h2 className="text-sm font-medium tracking-widest uppercase text-black/40">( TESTIMONIALS )</h2>

                {/* Desktop Navigation Arrows */}
                <div className="hidden md:flex gap-4">
                    <button
                        onClick={prevSlide}
                        className="p-3 border border-black/10 rounded-full hover:bg-black/5 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 border border-black/10 rounded-full hover:bg-black/5 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="w-full">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex w-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {REVIEWS.map((review, i) => (
                        <div key={i} className="w-[85vw] md:w-[50vw] flex-shrink-0 snap-center px-4 md:px-6">
                            <div className="flex flex-col gap-8 h-full bg-black/5 hover:bg-black/10 transition-colors border border-black/10 rounded-3xl p-8 md:p-12">
                                <p className="text-xl md:text-2xl font-light leading-snug tracking-tight text-black/90">
                                    "{review.text}"
                                </p>
                                <div className="mt-auto pt-8 border-t border-black/10">
                                    <span className="text-xs font-bold uppercase tracking-widest text-black/40">
                                        Client
                                    </span>
                                    <h4 className="text-lg font-medium text-black/90 mt-1">
                                        {review.client}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation / Pagination Dots */}
            <div className="mt-8 px-6 md:px-12 flex justify-between items-center md:justify-start gap-4">
                <div className="flex gap-2">
                    {REVIEWS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollToSlide(i)}
                            className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-8 bg-black' : 'w-2 bg-black/20 hover:bg-black/40'}`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Mobile Navigation Arrows */}
                <div className="flex md:hidden gap-3">
                    <button onClick={prevSlide} className="p-2 border border-black/10 rounded-full active:bg-black/5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={nextSlide} className="p-2 border border-black/10 rounded-full active:bg-black/5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
