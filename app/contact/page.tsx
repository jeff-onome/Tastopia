"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ContactUs() {
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
                <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                    We&apos;d love to hear from you! Reach out to us with any questions, feedback, or reservations.
                </p>
            </motion.div>

            <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
                {/* Contact Form */}
                <motion.div 
                    className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Name</label>
                            <input type="text" className="w-full p-3 border rounded" placeholder="Your Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" className="w-full p-3 border rounded " placeholder="Your Email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea className="w-full p-3 border rounded" rows={4} placeholder="Your Message"></textarea>

                        </div>
                        <motion.button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white p-3 rounded font-bold hover:bg-blue-600"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div 
                    className="w-full md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                    <p className="text-lg text-white/70 mb-2">📍 123 Culinary St, Food City</p>
                    <p className="text-lg text-white/70 mb-2">
                            📞 <a href="tel:08151920436" className="hover:text-white">08151920436</a>
                    </p>
                    <p className="text-lg text-white/70">
                        📧 <a href="mailto:contact@tastopia.com" className="hover:text-white">contact@tastopia.com</a>
                    </p>

                </motion.div>
            </div>
        </section>
        <Footer />
       </>
    );
}
