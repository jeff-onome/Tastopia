'use client';


import Image from 'next/image';
import { motion } from 'framer-motion';

import Chef from '../public/assets/chef.jpeg'

export default function ChefSection() {

    return (
        <>
         

         <section className="container mx-auto flex flex-col md:flex-row items-center py-16 px-6 md:px-12">
                {/* Image on the left with animation */}
                <motion.div 
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Image src={Chef} alt="Chef at work" width={500} height={500} className="rounded-lg shadow-lg" />
                </motion.div>
                
                {/* Text on the right with animation */}
                <motion.div 
                    className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-white">Meet Chef LINDA OMONONIGO</h2>
                    <p className="mt-4 text-white/70">With over 5 years of experience, Chef Omonigho has mastered the art of cooking, crafting unforgettable dining experiences. From Michelin-star kitchens to private dining events, the journey has been nothing short of extraordinary.</p>
                </motion.div>
            </section>
        </>
    );
}
