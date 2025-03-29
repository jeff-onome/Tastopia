'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function UnderConstruction() {
    return (
        <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <Image 
                    src="/assets/under-construction.svg" 
                    alt="Under Construction" 
                    width={300} 
                    height={300} 
                />
                <h1 className="text-4xl font-bold mt-6">Service Under Construction</h1>
                <p className="text-lg mt-2">We're working on this page. Check back soon!</p>
            </motion.div>
        </div>
        <Footer />
        </>
    );
}
