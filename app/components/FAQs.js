"use client";
import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "Do I need prior experience with breathing exercises to use the CapnoTrainer® GO?",
      answer:
        "No prior experience is necessary. The CapnoTrainer® GO is designed for all skill levels, providing guidance tailored to your needs.",
    },
    {
      question:
        "Is it safe to use for health conditions like asthma or anxiety?",
      answer:
        "Yes, the CapnoTrainer® GO is safe to use. However, consult with your healthcare provider if you have specific medical concerns.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy. Simply order the CapnoTrainer® GO, follow the included instructions, and begin transforming your breathing habits today.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-24 p-6 bg-white rounded-xl ">
      <div class="container w-[100%] md:max-w-[60%] mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-[1px] px-4 py-1 rounded-md border-teal-600"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="text-left flex justify-between items-center w-full py-3 text-sm font-medium text-teal-600 focus:outline-none"
              >
                {faq.question}
                <span className="text-teal-600">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-700 text-sm pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
