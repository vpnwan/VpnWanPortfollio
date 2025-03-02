"use client"; // Needed if using Next.js App Router

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setIsVisible(false); // Scrolling down, hide navbar
      } else {
        setIsVisible(true); // Scrolling up, show navbar
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`bg-black fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center h-16 md:h-17 lg:h-24 px-5 sm:px-10 lg:px-20 text-white">
          {/* Logo */}
          <Link href="/" className="text-2xl text-center lg:text-3xl justify-center flex items-center gap-2 font-serif">
            <i className="fa-solid fa-shop text-green-700"></i>
            <span className="font-extrabold text-center justify-center items-center self-center ">VpnWan</span>
          </Link>

          {/* Navbar Links (Desktop) */}
          <ul className="hidden md:flex gap-8 text-lg font-extrabold mt-9">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/Projects" className="hover:underline">Our Work</Link></li>
            <li><Link href="/AboutUs" className="hover:underline">About Us</Link></li>
            <li><Link href="/Blog" className="hover:underline">Blogs</Link></li>
           
          </ul>
          {pathname === "/" && (
  <li className="list-none">
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={isClicked ? { opacity: 0, scale: 0.9 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/DesignBuilder"
        className="xfd list-none"
        onClick={() => setIsClicked(true)}
      >
        Create
      </Link>
    </motion.div>
  </li>
)}
          

          {/* Actions */}
          <div className="flex items-center gap-5">
            {/* User Icon */}
            <i className="fa-solid fa-circle-user text-2xl lg:text-3xl hover:cursor-pointer"></i>

            {/* Mobile Hamburger Menu */}
            <button className="md:hidden text-2xl mr-4" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <i className="fa-solid fa-bars">=</i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isDropdownOpen && (
          
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={isDropdownOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-1/2 bg-black text-white shadow-lg z-40"
            ref={dropdownRef}
          >
            <button
              onClick={() => setIsDropdownOpen(false)}
              className="absolute top-4 right-4 text-xl font-bold"
            >
              ✖
            </button>
            <div className="mt-16 p-6">
              <Link href="/" className="block px-4 py-4 text-lg hover:bg-gray-500">Home</Link>
              <Link href="/Projects" className="block px-4 py-4 text-lg hover:bg-gray-500">Our Work</Link>
              <Link href="/AboutUs" className="block px-4 py-4 text-lg hover:bg-gray-500">About Us</Link>
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}
