"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

export default function SocialBar() {
  return (
    <>
      {/* ================= Desktop (Right Vertical) ================= */}
      <div className="hidden md:flex fixed right-4 top-1/3 flex-col gap-4 z-50">
        {/* Facebook */}
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full bg-black hover-gold border border-gold shadow-lg transition-all duration-300 "
        >
          <FaFacebookF className="text-gold group-hover:text-black" size={18} />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full bg-black hover-gold border border-gold shadow-lg transition-all duration-300"
        >
          <FaInstagram className="text-gold group-hover:text-black" size={18} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/97100000000"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full bg-black hover-gold border border-gold shadow-lg transition-all duration-300 "
        >
          <FaWhatsapp className="text-gold group-hover:text-black" size={18} />
        </a>

        {/* Phone */}
        <a
          href="tel:+971000000000"
          className="group p-3 rounded-full bg-black hover-gold border border-gold shadow-lg transition-all duration-300 "
        >
          <FaPhoneAlt className="text-gold group-hover:text-black" size={18} />
        </a>
      </div>

      {/* ================= Mobile (Bottom Floating Bar) ================= */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center  gap-6 px-6 py-3 bg-black border border-gold rounded-full shadow-xl backdrop-blur">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" transition hover-gold"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-gold  transition "
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://wa.me/97100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-gold transition"
          >
            <FaWhatsapp size={20} />
          </a>

          <a href="tel:+97100000000" className=" transition hover-gold">
            <FaPhoneAlt size={20} />
          </a>
        </div>
      </div>
    </>
  );
}
