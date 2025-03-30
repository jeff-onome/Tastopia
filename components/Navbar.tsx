'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const navLinks = [
  { value: 'Home', link: "/" },
  { value: 'About', link: "/about-us" },
  { value: 'Service', link: "/service" },
  { value: 'Gallery', link: "/gallery" },
  { value: 'Contact', link: "/contact" },
];

const getRandomColor = () => {
  const colors = ['#F59E0B', '#10B981', '#3B82F6', '#EF4444', '#8B5CF6'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const logoControls = useAnimation();

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      logoControls.start({
        color: getRandomColor(),
        transition: { duration: 0.5 },
      });
      count++;
      if (count >= 4) clearInterval(interval); // run for 4 seconds
    }, 1000);
  }, [logoControls]);

  return (
    <header className="shadow-md py-4 fixed top-0 left-0 w-full z-50 bg-[#00272b]">
      <nav className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo with animated color */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold uppercase tracking-wider"
        >
          <motion.span animate={logoControls}>
            <Link href='/'>Tastopia</Link>
          </motion.span>
        </motion.h1>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((item, index) => (
            <motion.li
              key={index}
              className="text-white font-medium hover:text-yellow-400 transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={item.link}>{item.value}</Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute top-16 left-0 w-full bg-[#00272b] shadow-lg p-6 md:hidden"
            >
              {navLinks.map((item, index) => (
                <motion.li
                  key={index}
                  className="text-white py-2 px-4 font-medium hover:text-yellow-400 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
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
