import Hero from "@/components/Hero";
import HeroGallery from "@/components/HeroGallery";
import FloatingDock from "@/components/FloatingDock";
import ImageSlideshow from "@/components/ImageSlideshow";
import Testimonials from "@/components/Testimonials";
import SmoothScroll from "@/components/SmoothScroll";
import Link from "next/link";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen text-white font-sans selection:bg-white selection:text-black">

        <FloatingDock />

        <div className="flex flex-col gap-0 pb-32">
          {/* Main Hero */}
          <Hero />

          {/* 3D Visual Gallery */}
          <HeroGallery />

          {/* Quick Intro Teaser */}
          <section className="px-6 py-16 md:py-20 md:px-12 border-t border-white/10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-light leading-tight mb-4 text-white/90">
                Redefining the art of gathering.
              </h2>
              <p className="text-white/60 text-lg">We create immersive environments that last in memory forever.</p>
            </div>
            <Link href="/about" className="px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm">
              Explore Our World
            </Link>
          </section>

          <ImageSlideshow />

          {/* Why Choose Us Section */}
          <section className="px-6 py-24 md:py-32 md:px-12 border-t border-white/10 bg-white/[0.02]">
            <div className="container mx-auto">
              <h2 className="text-sm font-medium tracking-widest uppercase text-white/40 mb-16">( WHAT MAKES US DIFFERENT )</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-white/90">Client-First Approach</h3>
                  <p className="text-white/50 leading-relaxed">You are heard, understood, and valued. We prioritize your vision above all else.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-white/90">Transparent Planning</h3>
                  <p className="text-white/50 leading-relaxed">No confusion. No hidden surprises. We maintain absolute clarity throughout the journey.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-white/90">Intentional Experiences</h3>
                  <p className="text-white/50 leading-relaxed">Every detail is designed with purpose. We don't just decorate; we curate meaning.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-white/90">Structured Process</h3>
                  <p className="text-white/50 leading-relaxed">A calm and organized planning journey. We remove the pressure so you can enjoy the lead-up.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-white/90">Integrity-Driven Service</h3>
                  <p className="text-white/50 leading-relaxed">Professionalism backed by strong values. We deliver on our promises with excellence.</p>
                </div>
                <div className="space-y-4 bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col justify-center">
                   <p className="text-lg font-light italic text-white/80">"Your celebration deserves the TAG standard of excellence."</p>
                </div>
              </div>
            </div>
          </section>

          <Testimonials />

        </div>
      </main>
    </SmoothScroll>
  );
}
