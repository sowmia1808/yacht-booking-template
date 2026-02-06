"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactClient() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
    captchaAnswer: "",
  });

  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  function generateCaptcha() {
    setCaptcha({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1,
    });
    setForm((prev) => ({ ...prev, captchaAnswer: "" }));
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        captchaExpected: captcha.a + captcha.b,
      }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Invalid captcha or server error");
      generateCaptcha();
      return;
    }

    setSuccess(true);
    setForm({
      name: "",
      email: "",
      mobile: "",
      address: "",
      message: "",
      captchaAnswer: "",
    });

    generateCaptcha();

    setTimeout(() => {
      router.push("/");
    }, 3000);
  }

  return (
    <div className="min-h-screen bg-brand flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-2xl glass-card p-10 relative">
        {/* SUCCESS TOAST */}
        {success && (
          <div className="absolute top-4 right-4 bg-gold text-black px-4 py-2 rounded font-medium">
            Message sent successfully!
          </div>
        )}

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-gold text-sm font-bold lg:text-2xl uppercase tracking-widest mb-2">
            Get in Touch With Us
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-black/60 border border-gold/40 rounded-lg p-3 text-brand placeholder-gray-400 focus:outline-none focus:border-gold"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-black/60 border border-gold/40 rounded-lg p-3 text-brand placeholder-gray-400 focus:outline-none focus:border-gold"
          />

          {/* Mobile */}
          <input
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
            className="w-full bg-black/60 border border-gold/40 rounded-lg p-3 text-brand placeholder-gray-400 focus:outline-none focus:border-gold"
          />

          {/* Address */}
          <input
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full bg-black/60 border border-gold/40 rounded-lg p-3 text-brand placeholder-gray-400 focus:outline-none focus:border-gold"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full bg-black/60 border border-gold/40 rounded-lg p-3 text-brand placeholder-gray-400 focus:outline-none focus:border-gold"
          />

          {/* CAPTCHA */}
          <div className="flex items-center gap-4">
            <span className="text-brand font-medium">
              {captcha.a} + {captcha.b} =
            </span>
            <input
              name="captchaAnswer"
              value={form.captchaAnswer}
              onChange={handleChange}
              required
              className="bg-black/60 border border-gold/40 rounded-lg p-2 w-24 text-brand focus:outline-none focus:border-gold"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <button
            disabled={loading}
            className="w-full bg-gold hover-gold text-black py-3 rounded-lg font-medium transition-all disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          We usually respond within 24 hours
        </p>
      </div>
    </div>
  );
}
