import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TextAlignJustify } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav
        className="
          fixed top-0 w-full z-50 transition-colors duration-500 rosmie-regular
          min-h-[96px] sm:min-h-[120px] hidden lg:block
        "
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center relative">

            {/* LOGO */}
            <NavLink to="/" className="relative z-[60]">
              <img
                src="/logo.png"
                alt="School Logo"
                className={`transition-all duration-500 object-contain
                  ${scrolled ? 'h-28 w-28' : 'h-32 w-32 lg:h-40 lg:w-40'}
                `}
              />
            </NavLink>

            {/* NAV LINKS */}
            <div className="flex items-center bg-white backdrop-blur-md rounded-full px-2 py-1.5 border-2 border-orange-600">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `
                    px-6 py-2 rounded-full font-bold transition
                    ${isActive
                      ? 'bg-orange-600 text-white'
                      : 'text-slate-700 hover:text-orange-600'}
                  `}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* DESKTOP ACTION BUTTONS */}
            <div className="flex items-center gap-3">
              <NavLink
                to="/vivikids"
                className="border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-full font-black uppercase text-xs rosmie-bold hover:bg-orange-50 transition"
              >
                Vivikids
              </NavLink>

              <NavLink
                to="/admissions"
                className="bg-orange-600 text-white px-8 py-3 rounded-full font-black uppercase text-xs rosmie-bold"
              >
                Enquire
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="lg:hidden fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md h-[72px] flex items-center justify-between px-4">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-20 w-20 object-cover" />
        </NavLink>

        <button
          onClick={() => setIsOpen(true)}
          className="p-3 rounded-lg bg-orange-600 text-white"
        >
          <TextAlignJustify />
        </button>
      </div>

      {/* ================= MOBILE SLIDE-UP MENU ================= */}
      <div
        className={`
          lg:hidden fixed inset-0 z-[60] transition-all duration-500
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/40"
        />

        {/* MENU PANEL */}
        <div
          className={`
            absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl
            p-6 transition-transform duration-500
            ${isOpen ? 'translate-y-0' : 'translate-y-full'}
          `}
        >
          <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-6" />

          <nav className="space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `
                  block text-lg font-bold px-4 py-3 rounded-xl transition
                  ${isActive
                    ? 'bg-orange-50 text-orange-600'
                    : 'text-slate-800 hover:bg-slate-100'}
                `}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE ACTION BUTTONS */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <NavLink
              to="/vivikids"
              onClick={() => setIsOpen(false)}
              className="text-center border-2 border-orange-600 text-orange-600 py-4 rounded-xl font-black uppercase"
            >
              Vivikids
            </NavLink>

            <NavLink
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="text-center bg-orange-600 text-white py-4 rounded-xl font-black uppercase"
            >
              Enquire Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
