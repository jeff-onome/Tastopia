'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebookF, FaInstagram} from 'react-icons/fa';

export default function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-10 px-6"
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Company Info */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Tastopia</h3>
                    <p className="text-gray-400">Crafting delightful culinary experiences for food lovers around the world.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link href="/about-us" className="hover:text-white transition">About Us</Link></li>
                        {/* <li><Link href="/menu" className="hover:text-white transition">Menu</Link></li> */}
                        <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                        <li><Link href="/service" className="hover:text-white transition">Services</Link></li>
                        <li><Link href="/gallery" className="hover:text-white transition">Gallery</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.facebook.com/profile.php?id=61550344536372" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                            <FaFacebookF size={20} />
                        </a>
                       
                        <a href="https://www.instagram.com/try_tastopia?utm_source=qr" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                            <FaInstagram size={20} />
                        </a>
                       
                    </div>
                </div>
            </div>
            
            {/* Copyright */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500">
                &copy; {new Date().getFullYear()} Tastopia. All rights reserved.
            </div>
        </motion.footer>
    );
}
