'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import {  useRef } from 'react';
import { useDrag } from 'react-use-gesture';

const reviews = [
    {
        id: 1,
        name: "John Doe",
        image: "/assets/user1.jpg",
        review: "Absolutely amazing! The food was delicious and the service was outstanding.",
        rating: 5
    },
    {
        id: 2,
        name: "Jane Smith",
        image: "/assets/user2.jpg",
        review: "A wonderful experience! The atmosphere was great and the dishes were fantastic.",
        rating: 5
    },
    {
        id: 3,
        name: "Mark Wilson",
        image: "/assets/user3.jpg",
        review: "Top-notch service and mouthwatering meals. Highly recommend!",
        rating: 5
    },
    {
        id: 4,
        name: "Emily Brown",
        image: "/assets/user4.jpg",
        review: "One of the best restaurants I've visited. A perfect place for food lovers!",
        rating: 5
    },
    {
        id: 5,
        name: "Michael Johnson",
        image: "/assets/user5.jpg",
        review: "Delicious meals and great ambiance. Highly recommend visiting!",
        rating: 5
    }
];

export default function Reviews() {
    const [index, setIndex] = useState(0);
    const sliderRef = useRef(null);

    const bind = useDrag(({ movement: [mx], cancel }) => {
        if (mx > 50) {
            prevSlide();
            cancel();
        } else if (mx < -50) {
            nextSlide();
            cancel();
        }
    });

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % (reviews.length - 2));
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + (reviews.length - 2)) % (reviews.length - 2));
    };

    return (
        <section className="container mx-auto py-16 px-6 text-center relative">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            
            {/* Slider Wrapper */}
            <div className="relative overflow-hidden max-w-4xl mx-auto" {...bind()}>
                <motion.div
                    ref={sliderRef}
                    className="flex gap-6"
                    initial={{ x: 0 }}
                    animate={{ x: `-${index * 33.33}%` }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    {reviews.map((review) => (
                        <motion.div
                            key={review.id}
                            className="bg-white shadow-lg p-6 rounded-lg w-1/3 flex-shrink-0"
                        >
                            {/* Stars */}
                            <div className="flex justify-center mb-2">
                                {'⭐'.repeat(review.rating)}
                            </div>
                            
                            {/* Review Text */}
                            <p className="text-gray-700 mb-4">{review.review}</p>
                            
                            {/* User Info */}
                            <div className="flex items-center gap-3 justify-center">
                                <Image 
                                    src={review.image} 
                                    alt={review.name} 
                                    width={50} 
                                    height={50} 
                                    className="w-12 h-12 rounded-full object-cover" 
                                />
                                <span className="font-semibold">{review.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition">
                <MdArrowBack size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition">
                <MdArrowForward size={24} />
            </button>
        </section>
    );
}
