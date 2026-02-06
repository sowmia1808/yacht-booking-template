import yachts from "../../data/yachts.json";
import YachtCard from "../../components/YachtCard";

export const metadata = {
  title: "Yacht Listings",
  description:
    "Explore our collection of luxury yachts available for booking.",
};

export default function YachtsPage() {
  return (
    <section className="bg-brand min-h-screen py-20">
      {/* Page Heading */}
      <div className="text-center mb-14 px-4">
        <h1 className="text-gold text-sm lg:text-3xl font-bold uppercase tracking-widest mb-3">
          Explore Our Luxury Yachts
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {yachts.map((yacht) => (
            <YachtCard key={yacht.id} yacht={yacht} />
          ))}
        </div>
      </div>
    </section>
  );
}
