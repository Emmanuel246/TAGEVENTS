import Gallery from "@/components/Gallery";
import FloatingDock from "@/components/FloatingDock";

export default function GalleryPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-white pt-32 pb-40">
            <FloatingDock />
            <div className="container mx-auto px-6 mb-12">
                <h1 className="text-[10vw] leading-[0.8] font-bold tracking-tighter text-white/90 mix-blend-difference">
                    SELECTED WORK
                </h1>
            </div>

            <Gallery />
        </main>
    );
}
