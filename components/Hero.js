"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center md:top-16 lg:top-16 top-20 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('/images/yatch-hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h1 className="text-4xl bg-gold p-2  rounded-lg text-black md:text-6xl font-bold mb-6">
          Luxury Yacht Booking
        </h1>

        <p className="text-lg md:text-2xl mb-8 md:mb-10 text-white text-bold">
          We provide premium yacht experiences with world-class service and
          unforgettable moments.
        </p>

        <Link
          href="/yachts"
          className="inline-block bg-gold lg:text-2xl hover-gold px-6 py-3 md:px-8 md:py-4 rounded text-black md:text-lg font-bold"
        >
          Book Your Yacht
        </Link>
      </motion.div>
      {/* 🌊 Animated Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-[200%] h-5  md:h-20 animate-wave"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,29.05,158,17.39C230.59,48.9,284.4,8.5,339,0c54.41-8.5,109.21,14.38,163,35.92C559.79,57.38,613.59,85,668,90.58c54.41,5.58,109.21-9.42,163-26.24C889.79,47.52,943.59,24.64,998,17.82c54.41-6.82,109.21,3.73,163,15.91V0Z"
            fill="bg-brand"
          />
        </svg>
      </div>

      {/* 🌊 Animated Wave (Bottom Up) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-[175%] h-10 md:h-30 animate-wave transform scale-y-[-1]"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,29.05,158,17.39C230.59,48.9,284.4,8.5,339,0c54.41-8.5,109.21,14.38,163,35.92C559.79,57.38,613.59,85,668,90.58c54.41,5.58,109.21-9.42,163-26.24C889.79,47.52,943.59,24.64,998,17.82c54.41-6.82,109.21,3.73,163,15.91V0Z"
            fill=""
          />
        </svg>
      </div>
    </section>
  );
}
