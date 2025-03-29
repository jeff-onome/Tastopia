'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const navLinks = [
    { value: 'Home', link: "/" },
    { value: 'About', link: "/about-us" },
    { value: 'Service', link: "/service" },
    { value: 'Gallery', link: "/gallery" },
    { value: 'Contact', link: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="shadow-md py-4" style={{ backgroundColor: '#00272b' }}>
            <nav className="container mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-xl font-bold text-white"
                >
                    Tastopia
                </motion.h1>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Navigation Links    md:block*/}
                <div className="md:flex md:space-x-6 hidden ">
                    {navLinks.map((item, index) => (
                        <motion.li 
                            key={index}
                            className="inline-block py-2 px-4 text-white hover:text-blue-500"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link href={item.link}>{item.value}</Link>
                        </motion.li>
                    ))}
                </div>
                
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            style={{ backgroundColor: '#00272b' }}
                            className="md:hidden absolute top-16 left-0 w-full shadow-md p-6"
                        >
                            {navLinks.map((item, index) => (
                                <motion.li 
                                    key={index}
                                    className="block py-2 px-4 text-white hover:text-blue-500"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link href={item.link}>{item.value}</Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
