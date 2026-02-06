"use client";

import { useState } from "react";

export default function InquiriesTable({ inquiries }) {
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(inquiries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentInquiries = inquiries.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  if (inquiries.length === 0) {
    return <p className="text-gray-400">No inquiries yet.</p>;
  }

  return (
    <>
      <div className="overflow-x-auto ">
        {/* MOBILE CARD VIEW */}
        <div className="md:hidden space-y-4">
          {currentInquiries.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-4 border border-white/10"
            >
              {/* Header */}
              <div className="mb-2">
                <p className="text-gold font-semibold">{item.name}</p>
                <p className="text-xs text-gray-400">{item.email}</p>
              </div>

              {/* Body */}
              <div className="text-sm text-brand space-y-1">
                <p>
                  <span className="text-gray-400">Mobile:</span> {item.mobile}
                </p>

                <p>
                  <span className="text-gray-400">Address:</span> {item.address}
                </p>

                <p className="leading-relaxed">
                  <span className="text-gray-400">Message:</span> {item.message}
                </p>

                <p className="text-xs text-gray-400 pt-2">
                  {new Date(item.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr className="border-b border-gold/40">
                <th className="p-4 text-left text-gold">Name</th>
                <th className="p-4 text-left text-gold">Email</th>
                <th className="p-4 text-left text-gold">Mobile</th>
                <th className="p-4 text-left text-gold">Address</th>
                <th className="p-4 text-left text-gold">Message</th>
                <th className="p-4 text-left text-gold">Date</th>
              </tr>
            </thead>

            <tbody>
              {currentInquiries.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-white/10 hover:bg-white/5 transition"
                >
                  <td className="p-4 text-brand font-medium">{item.name}</td>
                  <td className="p-4 text-brand">{item.email}</td>
                  <td className="p-4 text-brand">{item.mobile}</td>
                  <td className="p-4 text-brand">{item.address}</td>
                  <td className="p-4 text-brand max-w-sm leading-relaxed">
                    {item.message}
                  </td>
                  <td className="p-4 text-brand whitespace-nowrap">
                    {new Date(item.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
