import React, { useState, useEffect } from "react";
import logo from "../assets/images/academy-logo.png";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Coaches", href: "#coaches" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" }
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-panel py-3 shadow-lg shadow-black/30 border-b border-cricket-gold/25"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              className="h-14 w-auto object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-105"
              alt="MR Firstgen Cricket Academy Logo"
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xl text-white group-hover:text-cricket-gold transition-colors">
                MR FIRSTGEN
              </span>
              <span className="text-xs tracking-[0.25em] text-cricket-gold uppercase">
                Cricket Academy
              </span>
            </div>
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-200 hover:text-cricket-gold transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-cricket-gold text-white hover:bg-cricket-gold hover:text-black transition"
            >
              <Calendar className="w-4 h-4" />
              Book Free Trial
            </a>
          </div>
          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur border-t border-cricket-gold/25"
          >
            <ul className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block text-white hover:text-cricket-gold py-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="p-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-cricket-gold text-black font-semibold"
              >
                <Calendar className="w-5 h-5" />
                Book Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
export default Navbar;