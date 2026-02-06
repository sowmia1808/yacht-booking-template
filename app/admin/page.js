export const metadata = {
  title: "Admin Dashboard | Yacht Booking",
};

export default function AdminPage() {
  return (
    <section className="bg-brand min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-brand text-4xl font-semibold mb-3">
            Admin Dashboard
          </h1>
          <p className="text-gray-400 text-sm">
            Manage bookings and customer inquiries
          </p>
        </div>

        {/* ACTION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* BOOKINGS */}
          <a
            href="/admin/bookings"
            className="glass-card p-8 rounded-2xl border border-gold/30 hover:border-gold transition group"
          >
            <h2 className="text-gold text-xl font-semibold mb-3">
              View Bookings
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              See all yacht booking requests, customer details, and payment
              info.
            </p>

            <span className="inline-block mt-6 text-gold group-hover:underline">
              Open Bookings →
            </span>
          </a>

          {/* INQUIRIES */}
          <a
            href="/admin/inquiries"
            className="glass-card p-8 rounded-2xl border border-gold/30 hover:border-gold transition group"
          >
            <h2 className="text-gold text-xl font-semibold mb-3">
              View Inquiries
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Read messages submitted via the contact form.
            </p>

            <span className="inline-block mt-6 text-gold group-hover:underline">
              Open Inquiries →
            </span>
          </a>
        </div>

        {/* FOOTER */}
        <p className="text-sm text-gray-500 mt-14 text-center">
          * Demo admin dashboard for template buyers
        </p>
      </div>
    </section>
  );
}
