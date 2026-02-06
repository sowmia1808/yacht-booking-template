"use client";

import { useState } from "react";

export default function BookingsTable({ bookings }) {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(bookings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBookings = bookings.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  if (bookings.length === 0) {
    return <p className="text-gray-400">No bookings yet.</p>;
  }

  return (
    <>
      <div className="overflow-x-auto ">
        {/* MOBILE CARD VIEW */}
        <div className="lg:hidden space-y-4">
          {currentBookings.map((b, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-4 border border-white/10"
            >
              {/* Top Row */}
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-gold font-semibold">{b.customerName}</p>
                  <p className="text-xs text-gray-400">{b.mobile}</p>
                </div>

                <p className="text-gold font-medium">AED {b.amount}</p>
              </div>

              {/* Details */}
              <div className="text-sm text-brand space-y-1">
                <p>
                  <span className="text-gray-400">Yacht:</span> {b.yacht}
                </p>

                <p>
                  <span className="text-gray-400">Date:</span>{" "}
                  {new Date(b.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  ·{" "}
                  {new Date(`1970-01-01T${b.time}`).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    },
                  )}
                </p>

                <p>
                  <span className="text-gray-400">Hours:</span> {b.hours} hrs
                </p>

                <p>
                  <span className="text-gray-400">Payment:</span>{" "}
                  {b.paymentType}
                </p>
              </div>
            </div>
          ))}
        </div>

        <table className="w-full min-w-[1000px] border-collapse hidden lg:block ">
          <thead>
            <tr className="border-b border-gold/40">
              <th className="p-4 text-left text-gold">Booking ID</th>
              <th className="p-4 text-left text-gold">Customer</th>
              <th className="p-4 text-left text-gold">Yacht</th>
              <th className="p-4 text-left text-gold">Date & Time</th>
              <th className="p-4 text-left text-gold">Hours</th>
              <th className="p-4 text-left text-gold">Payment</th>
              <th className="p-4 text-left text-gold">Amount</th>
            </tr>
          </thead>

          <tbody>
            {currentBookings.map((b, index) => (
              <tr
                key={index}
                className="border-b border-white/10 hover:bg-white/5 transition"
              >
                <td className="p-4 text-brand">{b.id}</td>
                <td className="p-4 text-brand">
                  {b.customerName}
                  <br />
                  <span className="text-xs text-gray-400">{b.mobile}</span>
                </td>
                <td className="p-4 text-brand">{b.yacht}</td>
                <td className="p-4 text-brand">
                  {new Date(b.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  ·{" "}
                  {new Date(`1970-01-01T${b.time}`).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    },
                  )}
                </td>
                <td className="p-4 text-brand">{b.hours} hrs</td>
                <td className="p-4 text-brand">{b.paymentType}</td>
                <td className="p-4 text-gold font-medium">AED {b.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gold text-gold rounded disabled:opacity-40"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-gold text-black"
                  : "border border-gold text-gold"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gold text-gold rounded disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
