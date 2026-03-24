"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// All available images from the folder
const GALLERY_IMAGES = [
    { src: "/images/IMG_0346.JPG", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
    { src: "/images/IMG_0350.JPG", span: "col-span-12 md:col-span-4", height: "h-[50vh]" },
    { src: "/images/IMG_0362.JPG", span: "col-span-12 md:col-span-8", height: "h-[45vh]" },
    { src: "/images/IMG_0429.JPG", span: "col-span-12 md:col-span-5", height: "h-[70vh]" },
    { src: "/images/IMG_0517.JPG", span: "col-span-12 md:col-span-7", height: "h-[85vh]" },
    { src: "/images/IMG_0526.JPG", span: "col-span-12 md:col-span-12", height: "h-[40vh]" },
    { src: "/images/IMG_3267.JPG", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
    { src: "/images/IMG_3268.JPG", span: "col-span-12 md:col-span-4", height: "h-[50vh]" },
    { src: "/images/IMG_3270.JPG", span: "col-span-12 md:col-span-8", height: "h-[45vh]" },
    { src: "/images/IMG_3271.JPG", span: "col-span-12 md:col-span-5", height: "h-[70vh]" },
    { src: "/images/IMG_3272.JPG", span: "col-span-12 md:col-span-7", height: "h-[85vh]" },
    { src: "/images/IMG_3273.JPG", span: "col-span-12 md:col-span-12", height: "h-[40vh]" },
    { src: "/images/IMG_3275.JPG", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
    { src: "/images/IMG_3276.JPG", span: "col-span-12 md:col-span-4", height: "h-[50vh]" },
    { src: "/images/IMG_3412.JPG", span: "col-span-12 md:col-span-8", height: "h-[45vh]" },
    { src: "/images/IMG_4538.JPG", span: "col-span-12 md:col-span-5", height: "h-[70vh]" },
    { src: "/images/IMG_7114.JPG", span: "col-span-12 md:col-span-7", height: "h-[85vh]" },
    { src: "/images/IMG_7119.JPG", span: "col-span-12 md:col-span-12", height: "h-[40vh]" },
    { src: "/images/IMG_7121.JPG", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
    { src: "/images/IMG_7122.JPG", span: "col-span-12 md:col-span-4", height: "h-[50vh]" },
    { src: "/images/IMG_7123.JPG", span: "col-span-12 md:col-span-8", height: "h-[45vh]" },
    { src: "/images/IMG_7930.JPG", span: "col-span-12 md:col-span-5", height: "h-[70vh]" },
    { src: "/images/IMG_7936.JPG", span: "col-span-12 md:col-span-7", height: "h-[85vh]" },
    { src: "/images/IMG_7941.JPG", span: "col-span-12 md:col-span-12", height: "h-[40vh]" },
    { src: "/images/IMG_9689.JPG", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
    { src: "/images/IMG_9694.JPG", span: "col-span-12 md:col-span-4", height: "h-[50vh]" },
    { src: "/images/INN_0666.jpg", span: "col-span-12 md:col-span-8", height: "h-[45vh]" },
    { src: "/images/INN_0725.jpg", span: "col-span-12 md:col-span-5", height: "h-[70vh]" },
    { src: "/images/INN_1040.jpg", span: "col-span-12 md:col-span-7", height: "h-[85vh]" },
    { src: "/images/INN_1310.jpg", span: "col-span-12 md:col-span-12", height: "h-[40vh]" },
    { src: "/images/INN_1338.jpg", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
    { src: "/images/INN_8297.jpg", span: "col-span-12 md:col-span-4", height: "h-[50vh]" },
    { src: "/images/INN_8459.jpg", span: "col-span-12 md:col-span-8", height: "h-[45vh]" },
    { src: "/images/INN_8992.jpg", span: "col-span-12 md:col-span-5", height: "h-[70vh]" },
    { src: "/images/INN_9043.jpg", span: "col-span-12 md:col-span-7", height: "h-[85vh]" },
    { src: "/images/INN_9253.jpg", span: "col-span-12 md:col-span-12", height: "h-[40vh]" },
    { src: "/images/INN_9269.jpg", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
    { src: "/images/INN_9600.jpg", span: "col-span-12 md:col-span-4", height: "h-[50vh]" },
    { src: "/images/MLG_1144_Original.JPG", span: "col-span-12 md:col-span-8", height: "h-[45vh]" },
    { src: "/images/TS1_4043.jpg", span: "col-span-12 md:col-span-5", height: "h-[70vh]" },
    { src: "/images/TS1_4442.jpg", span: "col-span-12 md:col-span-7", height: "h-[85vh]" },
    { src: "/images/TS1_4519.jpg", span: "col-span-12 md:col-span-12", height: "h-[40vh]" },
    { src: "/images/TS1_4806.jpg", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
    { src: "/images/TS1_4936.jpg", span: "col-span-12 md:col-span-4", height: "h-[50vh]" },
    { src: "/images/TS1_4954.jpg", span: "col-span-12 md:col-span-8", height: "h-[45vh]" },
    { src: "/images/TS1_5000.jpg", span: "col-span-12 md:col-span-5", height: "h-[70vh]" },
    { src: "/images/TS1_5009.jpg", span: "col-span-12 md:col-span-7", height: "h-[85vh]" },
    { src: "/images/TS1_7919.jpg", span: "col-span-12 md:col-span-12", height: "h-[40vh]" },
    { src: "/images/TS1_8471.jpg", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
    { src: "/images/TS1_8518.jpg", span: "col-span-12 md:col-span-4", height: "h-[50vh]" },
    { src: "/images/TS2_7795.jpg", span: "col-span-12 md:col-span-8", height: "h-[45vh]" },
    { src: "/images/TS2_7859.jpg", span: "col-span-12 md:col-span-5", height: "h-[70vh]" },
    { src: "/images/TS2_7881.jpg", span: "col-span-12 md:col-span-7", height: "h-[85vh]" },
    { src: "/images/TS2_8700.jpg", span: "col-span-12 md:col-span-12", height: "h-[40vh]" },
    { src: "/images/YOM08877_Original.JPG", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
    { src: "/images/YOM08891_Original.JPG", span: "col-span-12 md:col-span-4", height: "h-[50vh]" },
    { src: "/images/YOM09013_Original.JPG", span: "col-span-12 md:col-span-8", height: "h-[45vh]" },
    { src: "/images/uploaded_image_0_1767994002744.jpg", span: "col-span-12 md:col-span-5", height: "h-[70vh]" },
    { src: "/images/uploaded_image_0_1767994397675.jpg", span: "col-span-12 md:col-span-7", height: "h-[85vh]" },
    { src: "/images/uploaded_image_1_1767994002744.jpg", span: "col-span-12 md:col-span-12", height: "h-[40vh]" },
    { src: "/images/uploaded_image_1_1767994397675.jpg", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
    { src: "/images/uploaded_image_2_1767994002744.jpg", span: "col-span-12 md:col-span-4", height: "h-[50vh]" },
    { src: "/images/uploaded_image_2_1767994397675.jpg", span: "col-span-12 md:col-span-8", height: "h-[45vh]" },
    { src: "/images/uploaded_image_3_1767994002744.jpg", span: "col-span-12 md:col-span-5", height: "h-[70vh]" },
    { src: "/images/uploaded_image_3_1767994397675.jpg", span: "col-span-12 md:col-span-7", height: "h-[85vh]" },
    { src: "/images/uploaded_image_4_1767994002744.jpg", span: "col-span-12 md:col-span-12", height: "h-[40vh]" },
    { src: "/images/uploaded_image_4_1767994397675.jpg", span: "col-span-12 md:col-span-6", height: "h-[60vh]" },
];

export default function Gallery() {
    return (
        <section id="gallery" className="px-4 py-16 md:py-20 md:px-12 bg-white">
            <div className="mb-24">
                <h2 className="text-sm font-medium tracking-widest uppercase text-black/40 mb-4">( SELECTED WORKS )</h2>
                <div className="h-[1px] w-full bg-black/10" />
            </div>

            <div className="grid grid-cols-12 gap-x-4 gap-y-12 md:gap-x-12 md:gap-y-24">
                {GALLERY_IMAGES.map((img, i) => (
                    <div key={i} className={`relative block ${img.span} ${img.height}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full h-full overflow-hidden group shadow-lg rounded-sm"
                        >
                            <Image
                                src={img.src}
                                alt="Event visual"
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
