"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function ConfirmationPage() {
  const [booking, setBooking] = useState({
    name: "",
    yacht: "",
    date: "",
    time: "",
    amount: "",
    payment: "",
  });

  // ✅ Browser-only code
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBooking({
        name: localStorage.getItem("bookingName") || "",
        yacht: localStorage.getItem("bookingYacht") || "",
        date: localStorage.getItem("bookingDate") || "",
        time: localStorage.getItem("bookingTime") || "",
        amount: localStorage.getItem("bookingAmount") || "",
        payment: localStorage.getItem("bookingPayment") || "",
      });
    }
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Hello 👋\n\nYour yacht booking is confirmed 🎉\n\n` +
      `Name: ${booking.name}\n` +
      `Yacht: ${booking.yacht}\n` +
      `Date: ${booking.date}\n` +
      `Time: ${booking.time}\n` +
      `Payment: AED ${booking.amount} (${booking.payment})\n\n` +
      `Please confirm. Thank you!`,
  );

  return (
    <section className="bg-brand min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full glass-card p-10 text-center">
        <FaCheckCircle className="text-green-400 text-6xl mx-auto mb-4" />

        <h1 className="text-brand text-2xl font-semibold mb-2">
          Booking Confirmed!
        </h1>

        <p className="text-gray-300 mb-6">
          Your yacht reservation has been successfully confirmed.
        </p>

        <div className="bg-black/40 border border-gold/30 rounded-lg p-4 text-left text-gray-300 mb-6">
          <p>✓ Please arrive 15 minutes before departure</p>
          <p>✓ Carry a valid ID for verification</p>
          <p className="mt-2 text-gold">
            ✓ Send your booking details via WhatsApp
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={`https://wa.me/971566440702?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium"
          >
            <FaWhatsapp />
            Send Booking via WhatsApp
          </a>

          <Link
            href="/"
            className="flex-1 border border-gold text-gold py-3 rounded-lg hover:bg-gold hover:text-black transition"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-gray-400 text-sm mt-6">
          WhatsApp will open with your booking details pre-filled.
        </p>
      </div>
    </section>
  );
}
