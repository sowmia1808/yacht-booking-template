import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gold text-black mt-16 curved-top ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* BRAND */}
        <div className="flex flex-col gap-4 lg:-mt-8 md:-mb-5 md:-mt-12 ">
          {/* Logo */}
          <Image
            src="/images/yblogo.png"
            alt="Yacht Booking Logo"
            width={150}
            height={40}
            loading="eager"
            className="h-10 md:h-20 lg:h-30 md:w-20 w-20 object-contain"
          />

          {/* Description */}
          <p className="text-sm leading-relaxed max-w-xs">
            A modern yacht booking platform with dynamic pricing, secure
            payments, and a professional admin dashboard.
          </p>
        </div>
        {/* QUICK LINKS */}
        <div>
          <h3 className="text-black font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/yachts" className="hover:text-white">
                Yachts
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-black font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@yachtbooking.com</li>
            <li>Phone: +971 000000000</li>
            <li>Location: Dubai, UAE</li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="text-black font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.8-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.1 12.1 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.7 4.2 4.2 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 3 8.6 8.6 0 0 1-5.3 1.83c-.34 0-.68-.02-1.02-.06A12.1 12.1 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68v-.53A8.3 8.3 0 0 0 22.46 6z" />
              </svg>
            </a>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-gold"
            >
              <FaWhatsapp className="text-gold text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-black">
        © {new Date().getFullYear()} Yacht Booking Template. All rights
        reserved.
      </div>
    </footer>
  );
}
