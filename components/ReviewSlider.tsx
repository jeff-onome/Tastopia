'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { useDrag } from 'react-use-gesture';

const reviews = [
    { id: 1, name: "John Doe", image: "/assets/user1.jpg", review: "One too much I really like everything .My sister set like the settings and everything", rating: 5 },
    { id: 2, name: "Egyptian king", image: "/assets/user2.jpg", review: "Make sense 😊😊😊 I just Dey eat finish Especially the shawarma 💯", rating: 5 },
    { id: 3, name: "Mrs joy", image: "/assets/user3.jpg", review: "Tastopia is definitely going places", rating: 5 },
    { id: 4, name: "Mrs Bright", image: "/assets/user4.jpg", review: "Thank you for the wonderful meal I really enjoyed it", rating: 5 },
    { id: 6, name: "Mrs Amiri", image: "/assets/user5.jpg", review: "My husband finished everything Said it was too sweet and he wants you to bring more", rating: 5 },
    { id: 7, name: "Mummy ayo", image: "/assets/user5.jpg", review: "Where have you been all my life ? It’s was very delicious and nice service", rating: 5 },
    { id: 8, name: "Vicky", image: "/assets/user5.jpg", review: "Bro take me back to yesterday abeg Thanks so much I received the biggest love from you It’s was very delicious", rating: 5 },
    { id: 9, name: "Shalokpe", image: "/assets/user5.jpg", review: "I just finished consuming it 🙂, and the taste us top notch 💃🤓 .I lick my hand and the foil just to show how sweet it was", rating: 5 },
    { id: 10, name: "Eli-b", image: "/assets/user5.jpg", review: "It was very delicious", rating: 5 },
];

export default function Reviews() {
    const [index, setIndex] = useState(0);
    const sliderRef = useRef(null);

    // Get number of items per slide based on screen size
    const getSlidesPerView = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 640) return 1; // Mobile
            if (window.innerWidth < 1024) return 2; // Tablet
        }
        return 3; // Desktop
    };

    const slidesPerView = getSlidesPerView();
    const maxIndex = reviews.length - slidesPerView;

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
        setIndex((prevIndex) => (prevIndex + 1 > maxIndex ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 < 0 ? maxIndex : prevIndex - 1));
    };

    return (
        <section className="container mx-auto py-16 px-6 text-center relative">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            
            {/* Slider Wrapper */}
            <div className="relative overflow-hidden mx-auto max-w-4xl" {...bind()}>
                <motion.div
                    ref={sliderRef}
                    className="flex flex-nowrap gap-6"
                    initial={{ x: 0 }}
                    animate={{ x: `-${index * 100}%` }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    {reviews.map((review) => (
                        <motion.div
                            key={review.id}
                            className="bg-white shadow-lg p-6 rounded-lg flex-shrink-0 w-full sm:w-1/2 md:w-1/3"
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
