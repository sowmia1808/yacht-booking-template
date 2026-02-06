export async function generateMetadata({ params }) {
  const { id } = params;

  const yacht = yachts.find((y) => y.id === id);

  if (!yacht) {
    return {
      title: "Yacht Not Found",
      description: "The requested yacht could not be found.",
    };
  }

  return {
    title: `${yacht.name} | Luxury Yacht Booking`,
    description: yacht.description,
  };
}

import yachts from "../../../data/yachts.json";
import Link from "next/link";
import Image from "next/image";

export default async function YachtDetailPage({ params }) {
  const { id } = await params;

  const yacht = yachts.find((y) => y.id === id);

  if (!yacht) {
    return <p className="text-center mt-20 text-brand">Yacht not found</p>;
  }

  return (
    <section className="bg-brand min-h-screen py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Image
              src={yacht.image}
              alt={`${yacht.name} luxury yacht`}
              width={800}
              height={500}
              className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover rounded-2xl"
              priority
            />

            <h1 className="text-brand text-3xl font-semibold mt-8">
              {yacht.name}
            </h1>

            <p className="text-gray-300 mt-6 leading-relaxed">
              {yacht.description}
            </p>

            <p className="text-gray-400 mt-4 leading-relaxed">{yacht.about}</p>
          </div>
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <div>
              <p className="text-gray-400 line-through">
                $ {yacht.regularPrice}
              </p>
              <p className="text-gold text-3xl font-semibold">
                $ {yacht.pricePerHour}
                <span className="text-sm text-gray-400"> / hour</span>
              </p>
            </div>

            <div className="text-gray-300 space-y-2">
              <p>✓ Up to {yacht.capacity} Guests</p>
              <p>
                ✓ {yacht.crew.captain} Captain · {yacht.crew.crew} Crew
              </p>
              <p className="text-green-400">
                ✓ Free Cancellation (48hr Notice)
              </p>
              <p className="text-green-400">✓ Pay 10% to Confirm</p>
            </div>

            <Link
              href={`/booking/${yacht.id}`}
              className="block bg-gold hover-gold text-black py-3 rounded-lg text-center font-medium"
            >
              Book Online Now
            </Link>
          </div>
        </div>

        {/* FEATURES */}
        <div>
          <h2 className="text-brand text-2xl font-semibold mb-6">
            Yacht Features
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {yacht.features.map((item, index) => (
              <div
                key={index}
                className="bg-black/40 border border-gold/20 rounded-lg p-3 text-gray-300 text-sm text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-6">
          <h2 className="text-brand text-2xl font-semibold mb-6 ">
            Highlights
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            {yacht.highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-gold mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ADD-ONS */}
        <div>
          <h2 className="text-brand text-2xl font-semibold mb-6">
            Optional Add-ons
          </h2>

          <div className="flex flex-wrap gap-3">
            {yacht.addons.map((addon, index) => (
              <span
                key={index}
                className="border border-gold/30 text-gold px-4 py-2 rounded-full text-sm"
              >
                {addon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
