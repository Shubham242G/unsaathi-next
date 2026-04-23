'use client'

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  { label: "Restitution of Conjugal Rights", path: "/services/conjugal-Rights" },
  { label: "Contested Divorce", path: "/services/contested-Divorce" },
  { label: "Maintenance and Alimony", path: "/services/maintanance-And-Alimony" },
  { label: "Dowry Cases", path: "/services/dowry" },
  { label: "Child Custody", path: "/services/child-Custody" },
  { label: "Cruelty", path: "/services/cruelty" },
  { label: "Judicial separation", path: "/services/judicial-Separation" },
  { label: "Child Visitation", path: "/services/child-Visitation" },
  { label: "Annulment of Marriage", path: "/services/annulment-Of-Marriage" },
  { label: "Mutual Divorce", path: "/services/mutual-Divorce" },
];

function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setHoveredMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function onNavItemHover(name: string) {
    setHoveredMenu(name);
  }

  return (
    <nav
      ref={navRef}
      className="bg-[#f5f1ed] shadow-sm sticky top-0 z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/Unsaathi-logo1.png"
                alt="Unsaathi Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              href="/about-us"
              onMouseEnter={() => onNavItemHover("About Us")}
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors duration-200"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => onNavItemHover("Services")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href="/services"
                className="text-[#232122] hover:text-[#b88b6c] text-[15px] flex items-center gap-1 transition-colors duration-200"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    hoveredMenu === "Services" ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <ul
                className={`absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-lg z-50 border border-[#ece2d7] py-2 transition-all duration-200 origin-top
                  ${
                    hoveredMenu === "Services"
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
              >
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.path}
                      className="block px-6 py-2 text-[#232122] hover:bg-[#f2f2ee] hover:text-[#b88b6c] text-[15px] whitespace-nowrap transition-colors"
                      onClick={() => setHoveredMenu(null)}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/why-unsaathi"
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors duration-200"
            >
              Why Unsaathi?
            </Link>
            <Link
              href="/how-unsaathi"
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors duration-200"
            >
              How Unsaathi Works
            </Link>
            <Link
              href="/blogs"
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors duration-200"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="text-[#232122] hover:text-[#b88b6c] text-[15px] transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#232122] hover:text-[#b88b6c] focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden bg-[#f5f1ed] border-t border-[#e6e1dc] overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link
            href="/about-us"
            className="block py-2 text-[#232122] hover:text-[#b88b6c]"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>

          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between items-center w-full py-2 text-[#232122] hover:text-[#b88b6c]"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : "rotate-0"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-96" : "max-h-0"}`}>
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.path}
                  className="block py-2 text-sm text-[#232122] hover:text-[#b88b6c]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/why-unsaathi"
            className="block py-2 text-[#232122] hover:text-[#b88b6c]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Why Unsaathi?
          </Link>
          <Link
            href="/how-unsaathi"
            className="block py-2 text-[#232122] hover:text-[#b88b6c]"
            onClick={() => setMobileMenuOpen(false)}
          >
            How Unsaathi Works
          </Link>
          <Link
            href="/blogs"
            className="block py-2 text-[#232122] hover:text-[#b88b6c]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-[#232122] hover:text-[#b88b6c]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;