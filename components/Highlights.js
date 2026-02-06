import { FaShip, FaUserTie, FaClock, FaStar } from "react-icons/fa";

export default function Highlights() {
  const items = [
    {
      icon: <FaShip />,
      title: "Premium Fleet",
      desc: "Luxury yachts maintained to the highest standards.",
    },
    {
      icon: <FaUserTie />,
      title: "Professional Crew",
      desc: "Experienced and certified crew members.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Booking",
      desc: "Easy scheduling with transparent pricing.",
    },
    {
      icon: <FaStar />,
      title: "Trusted Experience",
      desc: "Highly rated by satisfied guests.",
    },
  ];

  return (
    <section className="bg-brand py-16 px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4 text-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="glass-card p-6 transition-all hover:scale-[1.03]"
          >
            <div className=" text-3xl mb-4 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-gold font-semibold mb-2">{item.title}</h3>

            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
