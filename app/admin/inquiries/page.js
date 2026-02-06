import fs from "fs";
import path from "path";
import InquiriesTable from "./InquiriesTable";

export const metadata = {
  title: "Admin | Contact Inquiries",
};

export default function AdminInquiriesPage() {
  const filePath = path.join(process.cwd(), "data", "inquiries.json");

  let inquiries = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    inquiries = data ? JSON.parse(data) : [];
  }

  return (
    <section className="min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-gold text-3xl font-semibold mb-2">
            Contact Inquiries
          </h1>
          <p className="text-gray-400 text-sm">
            Messages submitted from the contact form
          </p>
        </div>

        {/* BACK LINK */}
        <a
          href="/admin"
          className="inline-block mb-6 text-gold hover:underline text-sm"
        >
          ← Back to Admin Dashboard
        </a>

        {/* TABLE */}
        <InquiriesTable inquiries={inquiries} />

        <p className="text-sm text-gray-400 mt-6">
          * This section is visible only to authorized administrators
        </p>
      </div>
    </section>
  );
}
