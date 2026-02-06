import fs from "fs";
import path from "path";
import BookingsTable from "./BookingsTable";

export const metadata = {
  title: "Admin | Bookings",
};

export default function AdminBookingsPage() {
  const filePath = path.join(process.cwd(), "data", "bookings.json");

  let bookings = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    bookings = data ? JSON.parse(data) : [];
  }

  return (
    <section className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-gold text-3xl font-semibold mb-2">
            Booking List
          </h1>
          <p className="text-gray-400 text-sm">All yacht booking requests</p>
        </div>

        {/* BACK LINK */}
        <a
          href="/admin"
          className="inline-block mb-6 text-gold hover:underline text-sm"
        >
          ← Back to Admin Dashboard
        </a>

        {/* TABLE */}
        <BookingsTable bookings={bookings} />

        <p className="text-sm text-gray-400 mt-6">
          * Demo booking data stored in JSON for template preview
        </p>
      </div>
    </section>
  );
}
