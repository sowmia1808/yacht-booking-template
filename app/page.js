import yachts from "../data/yachts.json";
import YachtCard from "../components/YachtCard";
import Hero from "../components/Hero";
import FAQSection from "../components/FAQSection";
import TestimonialSection from "../components/TestimonialSection";
import HowItWorks from "../components/HowItWorks";
import Highlights from "../components/Highlights";
import Link from "next/link";

export const metadata = {
  title: "Luxury Yacht Booking",
  description:
    "Book luxury yachts easily with a modern yacht booking platform built using Next.js.",
};


export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="bg-brand py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-gold font-bold text-2xl tracking-widest uppercase mb-3 mt-10">
            About Us
          </h2>

          <p className="text-brand text-xl md:text-2xl leading-relaxed">
            We deliver premium yacht experiences designed for comfort, luxury,
            and unforgettable moments at sea.Whether you’re celebrating a
            special occasion or enjoying a relaxing day on the water, our
            premium yachts and personalized service promise an unforgettable
            experience.
          </p>
        </div>
      </section>
      <Highlights />

      <section className="bg-brand py-20">
        {/* Section heading */}
        <div className="text-center mb-14 px-4">
          <h2 className="text-gold text-sm lg:text-2xl font-bold uppercase tracking-widest mb-3">
            Featured Yachts
          </h2>
          <p className="text-brand text-3xl md:text-4xl font-semibold"></p>
        </div>

        {/* Yacht cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {yachts.slice(0, 4).map((yacht) => (
              <YachtCard key={yacht.id} yacht={yacht} />
            ))}
          </div>

          {/* Explore More */}
          <div className="text-center mt-14">
            <Link
              href="/yachts"
              className="inline-block border border-gold text-gold px-10 py-3 rounded hover:bg-gold hover:text-black transition font-medium"
            >
              Explore More Yachts
            </Link>
          </div>
        </div>
      </section>
      <HowItWorks />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
