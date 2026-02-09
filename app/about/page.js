import Image from "next/image";
export const metadata = {
  title: "About Us",
  description:
    "Learn more about our luxury yacht booking platform and the experience we provide.",
};


export default function AboutPage() {
  
  return (
    <section className="bg-brand min-h-screen ">
      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[60vh] md:h-[75vh] w-full rounded-lg">
        <Image
          src="/images/about-pic.jpg"
          alt="Luxury Yacht Experience"
          fill
          priority
          className="object-cover curved-bottom"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-7xl">
            <h1 className="text-gold lg:text-5xl uppercase tracking-widest mb-4 font-bold">
              Crafting Luxury Yacht Experiences
            </h1>
          </div>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="max-w-7xl mx-auto py-20 px-6 text-justify">
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          We specialize in delivering premium yacht experiences designed for
          comfort, elegance, and unforgettable moments at sea. Whether you’re
          celebrating a special occasion or enjoying a relaxing getaway, our
          personalized service ensures a seamless journey.
        </p>
      </div>

      {/* ================= INFO CARDS ================= */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2">
        {/* Who We Are */}
        <div className="glass-card p-8">
          <h2 className="text-gold text-xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            We are a team of professionals passionate about providing
            world-class yacht experiences. Our fleet is carefully maintained to
            meet the highest standards of safety, comfort, and luxury.
          </p>
        </div>

        {/* What We Offer */}
        <div className="glass-card p-8">
          <h2 className="text-gold text-xl font-semibold mb-4">
            What We Offer
          </h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            From private cruises and celebrations to corporate events and sunset
            experiences, we offer tailored yacht services supported by an
            experienced crew and premium amenities.
          </p>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="glass-card p-10 text-center">
          <h2 className="text-gold text-xl font-semibold mb-10">
            Why Choose Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-gold font-medium mb-2">Premium Fleet</p>
              <p className="text-gray-300 text-sm">
                Luxury yachts maintained to exceptional standards.
              </p>
            </div>

            <div>
              <p className="text-gold font-medium mb-2">Professional Crew</p>
              <p className="text-gray-300 text-sm">
                Certified and experienced crew focused on your comfort.
              </p>
            </div>

            <div>
              <p className="text-gold font-medium mb-2">Seamless Experience</p>
              <p className="text-gray-300 text-sm">
                Simple booking, transparent pricing, and personalized service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="text-center pb-24">
        <p className="text-gold text-2xl font-semibold mb-6">
          Ready to Experience Luxury at Sea?
        </p>
        <a
          href="/yachts"
          className="inline-block bg-gold hover-gold text-black font-medium px-10 py-3 rounded transition-all"
        >
          View Our Yachts
        </a>
      </div>
    </section>
  );
}
