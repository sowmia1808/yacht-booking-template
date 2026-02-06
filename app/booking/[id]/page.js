"use client";

import { use, useState, useEffect } from "react";
import yachts from "../../../data/yachts.json";
import BookingDatePicker from "../../../components/DatePicker";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function BookingPage({ params }) {
  const { id } = use(params);
  const [loading, setLoading] = useState(false);

  const [yacht, setYacht] = useState(null);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [date, setDate] = useState(null);
  const [persons, setPersons] = useState(1);
  const [hours, setHours] = useState(2);
  const [startTime, setStartTime] = useState("");
  const [paymentType, setPaymentType] = useState("advance");

  useEffect(() => {
    if (!id) return;

    const foundYacht = yachts.find((y) => y.id === String(id));

    setYacht(foundYacht);
  }, [id]);

  if (!yacht) {
    return <p className="text-center mt-20 text-brand">Loading yacht...</p>;
  }

  // 💰 Price calculation
  const totalPrice = hours * yacht.pricePerHour;
  const payableAmount =
    paymentType === "advance" ? Math.round(totalPrice * 0.1) : totalPrice;

  // 🔹 Checkout
  async function handleCheckout() {
    setLoading(true);

    localStorage.setItem("bookingName", customer.name);
    localStorage.setItem("bookingEmail", customer.email);
    localStorage.setItem("bookingMobile", customer.mobile);
    localStorage.setItem("bookingYacht", yacht.name);
    localStorage.setItem("bookingDate", date?.toString());
    localStorage.setItem("bookingTime", startTime);
    localStorage.setItem("bookingAmount", payableAmount);
    localStorage.setItem("bookingPayment", paymentType);

    await fetch("/api/save-booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName: customer.name,
        email: customer.email,
        mobile: customer.mobile,
        yacht: yacht.name,
        date,
        time: startTime,
        hours,
        paymentType,
        amount: payableAmount,
      }),
    });

    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        yachtId: yacht.id,
        date,
        startTime,
        persons,
        hours,
        paymentType,
        customer,
      }),
    });

    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <section className="bg-brand min-h-screen py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto glass-card p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-start">
          <div className="w-full h-[260px] lg:h-[1000px] overflow-hidden rounded-xl">
            <img
              src={yacht.image}
              alt={yacht.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="w-full text-4xl mx-auto text-gold">
              Book {yacht.name}
            </h1>

            {/* DATE */}
            <label className="block mb-2 text-gray-300">Select Date</label>
            <BookingDatePicker date={date} setDate={setDate} />

            {/* START TIME */}
            <label className="block mt-6 mb-2 text-gray-300">Start Time</label>
            <select
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full bg-black/60 border border-gold/40 rounded-lg p-3 text-brand"
            >
              <option value="">Select Start Time</option>
              <option value="08:00">08:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="16:00">04:00 PM</option>
              <option value="18:00">06:00 PM</option>
              <option value="20:00">08:00 PM</option>
            </select>

            {/* CUSTOMER DETAILS */}
            <input
              type="text"
              placeholder="Full Name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
              className="w-full mt-6 bg-black/60 border border-gold/40 rounded-lg p-3 text-brand"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={customer.email}
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
              className="w-full mt-4 bg-black/60 border border-gold/40 rounded-lg p-3 text-brand"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={customer.mobile}
              onChange={(e) =>
                setCustomer({ ...customer, mobile: e.target.value })
              }
              className="w-full mt-4 bg-black/60 border border-gold/40 rounded-lg p-3 text-brand"
            />

            {/* PERSONS */}
            <label className="block mt-6 mb-2 text-gray-300">
              Guests (Max {yacht.capacity})
            </label>
            <input
              type="number"
              min="1"
              max={yacht.capacity}
              value={persons}
              onChange={(e) => setPersons(Number(e.target.value))}
              className="w-full bg-black/60 border border-gold/40 rounded-lg p-3 text-brand"
            />

            {/* HOURS */}
            <label className="block mt-6 mb-2 text-gray-300">Duration</label>
            <select
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full bg-black/60 border border-gold/40 rounded-lg p-3 text-brand"
            >
              <option value={2}>2 Hours</option>
              <option value={4}>4 Hours</option>
              <option value={6}>6 Hours</option>
              <option value={8}>Full Day (8 Hours)</option>
            </select>

            {/* PAYMENT */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => setPaymentType("advance")}
                className={`flex-1 py-2 rounded ${
                  paymentType === "advance"
                    ? "bg-gold text-black"
                    : "border border-gold text-gold"
                }`}
              >
                Pay 10% to Confirm
              </button>

              <button
                onClick={() => setPaymentType("full")}
                className={`flex-1 py-2 rounded ${
                  paymentType === "full"
                    ? "bg-gold text-black"
                    : "border border-gold text-gold"
                }`}
              >
                Pay Full Amount
              </button>
            </div>

            {/* PRICE */}
            <div className="mt-8 p-4 border border-gold/30 rounded bg-black/40">
              <p className="text-gold text-xl font-semibold">
                Pay Now: $ {payableAmount}
              </p>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Free Cancellation{" "}
                <span className="text-gray-400">(48hr Notice)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Pay 10% to Confirm
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-col gap-4">
              <button
                onClick={handleCheckout}
                disabled={
                  !date ||
                  !startTime ||
                  !customer.name ||
                  !customer.email ||
                  !customer.mobile
                }
                className="bg-gold text-black py-3 rounded-lg font-medium disabled:opacity-50"
              >
                Book Online Now
              </button>

              <a
                href={`https://wa.me/971XXXXXXXXX`}
                target="_blank"
                className="flex items-center justify-center gap-2 border border-gold text-gold py-3 rounded-lg"
              >
                <FaWhatsapp />
                WhatsApp Us
              </a>

              <Link
                href="/contact"
                className="text-center border border-gold text-gold py-3 rounded-lg"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
