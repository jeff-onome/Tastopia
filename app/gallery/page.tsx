'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

const galleryImages = [
    { src: '/assets/1.jpeg', link: 'https://www.instagram.com/p/example1' },
    { src: '/assets/3.jpeg', link: 'https://www.instagram.com/p/example2' },
    { src: '/assets/2.jpeg', link: 'https://www.instagram.com/p/example3' },
    { src: '/assets/4.jpeg', link: 'https://www.instagram.com/p/example4' },
    { src: '/assets/5.jpeg', link: 'https://www.instagram.com/p/example5' },
];

export default function Gallery() {
    return (
       <>
       <Navbar />
        <section className="container mx-auto py-16 px-6">
            <motion.h1 
                className="text-4xl font-bold text-center text-white mb-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Our Gallery
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                    <motion.div 
                        key={index} 
                        className="relative group overflow-hidden rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image 
                            src={image.src} 
                            alt={`Gallery Image ${index + 1}`} 
                            width={400} 
                            height={300} 
                            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
                        />
                        <Link href={image.link} target="_blank" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <FaInstagram className="text-white text-4xl" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
        <Footer />
       </>
    );
}
