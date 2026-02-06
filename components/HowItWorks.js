export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Choose Your Yacht",
      desc: "Browse our premium yachts and select the perfect one for your occasion.",
    },
    {
      step: "02",
      title: "Pick Date & Time",
      desc: "Choose your preferred date and time with flexible scheduling options.",
    },
    {
      step: "03",
      title: "Confirm Booking",
      desc: "Confirm your booking and enjoy a seamless luxury experience at sea.",
    },
  ];

  return (
    <section className="bg-brand py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-gold text-2xl uppercase tracking-widest mb-2 font-bold">
            Book Your Yacht in 3 Simple Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center transition-all hover:scale-[1.03]"
            >
              <div className="text-gold text-3xl font-bold mb-4">
                {item.step}
              </div>

              <h3 className="text-brand text-lg font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
