'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const categories = [
    { name: 'Breakfast', image: '/assets/1.jpeg' },
    { name: 'Lunch', image: '/assets/2.jpeg' },
    { name: 'Dinner', image: '/assets/3.jpeg' },
    { name: 'Dessert', image: '/assets/4.jpeg' }
];

export default function BestCategoryMenu() {
    return (
        <section className="container mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Best Food Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <Image 
                            src={category.image}
                            alt={category.name} 
                            width={300} 
                            height={300} 
                            className="rounded-lg shadow-lg w-full h-64 object-cover"
                        />
                        <p className="mt-4 text-lg font-semibold">{category.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
