import Link from "next/link";

export default function YachtCard({ yacht }) {
  return (
    <div className="glass-card overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={yacht.image}
          alt={yacht.name}
          className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-[220px]">
        <div>
          <h3 className="text-brand text-lg font-semibold mb-1">
            {yacht.name}
          </h3>

          <p className="text-gray-400 text-sm">
            Capacity: Up to {yacht.capacity} Guests
          </p>

          <p className="text-gold text-lg font-semibold mt-3">
            From $ {yacht.pricePerHour}
            <span className="text-sm text-gray-400"> / hour</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <Link
            href={`/yachts/${yacht.id}`}
            className="flex-1 text-center border border-gold text-gold py-2 rounded hover:bg-gold hover:text-black transition"
          >
            View Details
          </Link>

          <Link
            href={`/booking/${yacht.id}`}
            className="flex-1 text-center bg-gold hover-gold text-black py-2 rounded font-medium transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
