'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const openingHours = [
    { day: 'Monday', time: '8:00 AM - 10:00 PM' },
    { day: 'Tuesday', time: '8:00 AM - 10:00 PM' },
    { day: 'Wednesday', time: '8:00 AM - 10:00 PM' },
    { day: 'Thursday', time: '8:00 AM - 10:00 PM' },
    { day: 'Friday', time: '8:00 AM - 11:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '9:00 AM - 9:00 PM' }
];

export default function OpeningHours() {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: [0, 500, 0],
                y: [0, 100, 0],
                backgroundColor: ["#FF0000", "#00FF00", "#0000FF"],
                scale: [1, 1.5, 2, 2.5],
                transition: {
                    duration: 10,
                    ease: "easeInOut"
                }
            });
            setTimeout(() => controls.start({ opacity: 0, scale: 3 }), 10000);
        }
    }, [inView, controls]);

    return (
        <section ref={ref} className="container mx-auto py-16 px-6 flex flex-col md:flex-row items-center relative">
            {/* Image Column with Slide-in Effect */}
            <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Image 
                    src="/assets/chef2.jpeg" 
                    alt="Restaurant Interior" 
                    width={500} 
                    height={500} 
                    className="rounded-lg shadow-lg w-full object-cover"
                />
            </motion.div>
            
            {/* Opening Hours Column */}
            <motion.div
                className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12 text-center md:text-left relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-3xl font-bold mb-4">Our Opening Hours</h2>
                <ul className="text-lg text-gray-700">
                    {openingHours.map((entry, index) => (
                        <li key={index} className="mb-2 text-white/80">
                            <span  className="font-semibold text-white/40">{entry.day}:</span> {entry.time}
                        </li>
                    ))}
                </ul>
                
                {/* Bouncing Ball Animation (Laptop View Only) */}
                <motion.div
                    className="hidden md:block absolute top-10 left-10 w-10 h-10 rounded-full"
                    animate={controls}
                />
            </motion.div>
        </section>
    );
}
