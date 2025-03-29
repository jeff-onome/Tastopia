'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const chefs = [
    { name: 'Chef Gordon', image: '/assets/flora.jpeg', qualification: 'Michelin Star Chef' },
    { name: 'Chef Efe', image: '/assets/efe.jpeg', qualification: 'Culinary Arts Specialist' },
    { name: 'Chef Blessing', image: '/assets/blessing.jpeg', qualification: 'Master Pastry Chef' },
    { name: 'Chef Chioma', image: '/assets/blessing.jpeg', qualification: 'Master Pastry Chef' }
];

export default function MeetOurChefs() {
    return (
        <section className="container mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Meet Our Professional Chefs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {chefs.map((chef, index) => (
                    <motion.div
                        key={index}
                        className="text-center bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <Image 
                            src={chef.image} 
                            alt={chef.name} 
                            width={300} 
                            height={300} 
                            className="rounded-lg w-full h-64 object-cover"
                        />
                        <h3 className="mt-4 text-xl font-semibold">{chef.name}</h3>
                        <p className="text-lg text-gray-700 font-medium">{chef.qualification}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
