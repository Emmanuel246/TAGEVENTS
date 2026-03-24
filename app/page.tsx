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
      <main className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white">

        <FloatingDock />

        <div className="flex flex-col gap-0 pb-32">
          {/* Main Hero */}
          <Hero />

          {/* 3D Visual Gallery */}
          <HeroGallery />

          {/* Quick Intro Teaser */}
          <section className="px-6 py-16 md:py-20 md:px-12 border-t border-white/10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-light leading-tight mb-4 text-black/90">
                Redefining the art of gathering.
              </h2>
              <p className="text-black/60 text-lg">We create immersive environments that last in memory forever.</p>
            </div>
            <Link href="/about" className="px-8 py-3 border border-black/20 rounded-full hover:bg-black hover:text-white transition-all uppercase tracking-widest text-sm">
              Explore Our World
            </Link>
          </section>

          <ImageSlideshow />

          <Testimonials />

        </div>
      </main>
    </SmoothScroll>
  );
}
