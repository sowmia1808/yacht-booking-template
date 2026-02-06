"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav className="  sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="relative -mt-5 lg:-mb-5 ">
          <Image
            src="/images/yblogo.png"
            alt="Yacht Booking Logo"
            width={200}
            height={40}
            loading="eager"
            className="h-20 md:h-20 md:w-30 lg:h-30 lg:w-30 w-20 object-contain"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-gold p-2 rounded-l md:text-sm text-xl lg:text-xl hover-text font-bold"
          >
            Home
          </Link>
          <Link
            href="/yachts"
            className="text-gold md:text-sm text-xl lg:text-xl hover-text font-bold"
          >
            Yachts
          </Link>

          <Link
            href="/about"
            className="text-gold md:text-sm text-xl lg:text-xl hover-text font-bold"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gold md:text-sm  lg:text-xl text-xl hover-text font-bold"
          >
            Contact
          </Link>
          {/* CALL */}
          <a
            href="tel:+971501234567"
            className="flex items-center gap-3 font-medium md:text-sm lg:text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              style={{ fill: "#f5c77a" }} // 👈 GUARANTEED GOLD
            >
              <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.56 3.5.56a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C9.8 21 3 14.2 3 6.9a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.25 1l-2.2 2.2z" />
            </svg>

            <span className="text-gold">+971 000000000</span>
          </a>

          <Link
            href="/yachts"
            className=" px-4 py-2 rounded bg-gold hover-gold text-xl text-black md:text-sm lg:text-xl"
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="text-gold md:hidden focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      {open && <div className="fixed inset-0 bg-black/40 z-40"></div>}

      {/* MOBILE DRAWER */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-4 border-b border-gold">
          <span className="font-bold text-lg text-gold">Yacht Booking</span>
          <button onClick={() => setOpen(false)} className="text-xl text-gold">
            ✕
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col p-4 space-y-4">
          {/* CALL */}
          <a
            href="tel:+971501234567"
            className="flex items-center gap-3 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              style={{ fill: "#f5c77a" }} // 👈 GUARANTEED GOLD
            >
              <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.56 3.5.56a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C9.8 21 3 14.2 3 6.9a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.25 1l-2.2 2.2z" />
            </svg>

            <span className="text-gold">+971 000000000</span>
          </a>

          <Link className="text-gold" href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            className="text-gold"
            href="/yachts"
            onClick={() => setOpen(false)}
          >
            Yachts
          </Link>

          <Link
            className="text-gold"
            href="/about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            className="text-gold"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/yachts"
            onClick={() => setOpen(false)}
            className="text-black text-center py-2 rounded bg-gold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
