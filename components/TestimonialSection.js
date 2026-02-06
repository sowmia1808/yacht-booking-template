"use client";

const testimonials = [
  {
    name: "Client Review",
    role: "Luxury Yacht Experience",
    review:
      "An exceptional yacht experience with outstanding service and attention to detail. Everything was seamless and well organized.",
    rating: 5,
  },
  {
    name: "Happy Customer",
    role: "Private Charter",
    review:
      "From booking to the final moment on board, the experience was smooth, professional, and truly luxurious.",
    rating: 5,
  },
  {
    name: "Verified Guest",
    role: "Special Occasion",
    review:
      "Perfect for celebrations. The yacht, crew, and overall service exceeded expectations.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-brand py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-gold text-2xl font-bold uppercase tracking-widest mb-2">
            What Our Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 flex flex-col justify-between transition-all hover:scale-[1.02]"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-gold text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-relaxed mb-6">
                “{item.review}”
              </p>

              {/* Name */}
              <div>
                <p className="text-brand font-medium">{item.name}</p>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
