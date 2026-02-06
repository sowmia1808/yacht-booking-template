"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How can I book a yacht?",
    answer:
      "You can book a yacht by browsing our available yachts, selecting your preferred date and time, and confirming your booking online or by contacting our team directly.",
  },

  {
    question: "Are babies and pets allowed aboard the yacht?",
    answer:
      "Babies are allowed on board with adult supervision. Pets are subject to approval and may depend on the yacht type and booking conditions.",
  },
  {
    question: "When is the best time to go cruising or yachting?",
    answer:
      "The best time for cruising is during the cooler months, especially in the morning or evening. Sunset cruises are particularly popular for a memorable experience.",
  },
  {
    question: "Can I bring food, drinks, and music on board?",
    answer:
      "Yes, you are welcome to bring your own food, drinks, and music. Our yachts are equipped with sound systems for your entertainment.",
  },

  {
    question: "What is the menu like?",
    answer:
      "Food and drinks are available aboard our yachts, and customized menus can be arranged for parties and events. For elaborate barbecues and special menus, a minimum 3-hour yacht booking is required.\n\nStandard Live BBQ Grill includes: Chicken, Meat Kebab, Hummus, Salad, Arabic Bread, and Soft Drinks.\n\nPremium Live BBQ Grill includes: Chicken, Meat Kebab, Fish, Shrimps, Hummus, Salad, Arabic Bread, and Soft Drinks.",
  },
  {
    question: "What water sports do you provide?",
    answer:
      "Water sports availability depends on the yacht type and booking package. Please contact us to learn more about the water sports options offered.",
  },
  {
    question: "What if the weather is bad on the day of the cruise?",
    answer:
      "In case of unfavorable weather conditions, we will assist you with rescheduling your booking or discussing alternative options for your cruise.",
  },
  {
    question: "Is there an option to cancel?",
    answer:
      "Yes, cancellations are possible depending on the booking terms. Please contact our team to understand the cancellation policy applicable to your booking.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-brand py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-gold text-2xl font-bold uppercase tracking-widest mb-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card transition-all">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-brand font-medium text-gold">
                  {faq.question}
                </span>

                <span className="text-gold text-xl font-semibold">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
