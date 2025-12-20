"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("https://formspree.io/f/myzyaqbw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-orbitron text-3xl font-bold text-center mb-10">
          Request Information
        </h2>

        {submitted ? (
          <div className="text-center p-8 bg-emerald-950/60 border border-emerald-500/30 rounded-2xl">
            <h3 className="text-xl font-bold text-emerald-300 mb-2">
              Thank you — message received!
            </h3>
            <p className="text-gray-200">
              We’ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/30 text-red-200 text-sm">
                {errorMsg}
              </div>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-white/15 rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-white/15 rounded-xl"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="City, date, attendance, special requests…"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-900 border border-white/15 rounded-xl resize-y"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-full font-orbitron font-bold bg-gradient-to-r from-red-500 via-white to-blue-500 text-black"
            >
              {isSubmitting ? "Submitting…" : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
