'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUsPage() {
    return (
        <>
        <Navbar />
        <section className="container mx-auto py-16 px-6">
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                    Welcome to Tastopia, where culinary artistry meets passion. Our chefs craft 
                    delicious meals using fresh, high-quality ingredients to deliver an unforgettable dining experience.
                </p>
            </motion.div>

            <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
                {/* Image Section */}
                <motion.div 
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image 
                        src="/assets/chef2.jpeg" 
                        alt="Our Team" 
                        width={600} 
                        height={300} 
                        className="rounded-lg shadow-lg w-full object-cover"
                    />
                </motion.div>
                
                {/* Text Section */}
                <motion.div 
                    className="w-full md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
                    <p className="text-lg text-white/70 mb-4">
                        Founded with a love for exquisite cuisine, Tastopia has been serving 
                        mouth-watering dishes that blend tradition with modern flavors.
                    </p>
                    <p className="text-lg text-white/70">
                        We take pride in creating memorable experiences for our guests, 
                        offering a warm ambiance, exceptional service, and a menu filled 
                        with delightful surprises.
                    </p>
                </motion.div>
            </div>
        </section>

        <Footer />
        </>
    );
}
