'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const offers = [
    { name: 'Special Breakfast Combo', image: '/assets/1.jpeg', price: '₦13,000.99' },
    { name: 'Lunch Delight', image: '/assets/2.jpeg', price: '₦1,500.99' },
    { name: 'Dinner Feast', image: '/assets/3.jpeg', price: '₦1,840.99' }
];

export default function SpecialOffers() {
    const sendToWhatsApp = (offer: { name: string; price: string }) => {
        const phoneNumber = "08151920436"; // WhatsApp Number
        const message = `Hello! I'm interested in:\n\n*${offer.name}*\nPrice: ${offer.price}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/234${phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section className="container mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Special Offers for You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {offers.map((offer, index) => (
                    <motion.div
                        key={index}
                        className="text-center bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        onClick={() => sendToWhatsApp(offer)}
                    >
                        <Image 
                            src={offer.image} 
                            alt={offer.name} 
                            width={300} 
                            height={300} 
                            className="rounded-lg w-full h-64 object-cover"
                        />
                        <h3 className="mt-4 text-xl font-semi bold text-black">{offer.name}</h3>
                        <p className="text-lg text-gray-700 font-medium">{offer.price}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
