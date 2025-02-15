import React from "react";

const Order = () => {
  return (
    <section className="bg-teal-700 text-white py-12 md:py-24 px-4">
      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 flex justify-center"></div>

        <div className="md:w-[60%] text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl md:text-right font-bold mb-6">
            Take Control of Your{" "}
            <span className="underline decoration-white">Breath</span> Today!
          </h1>
          <p className="text-sm mb-6">
            <span className="font-semibold">
              Invest in the Science of Better Breathing.
            </span>
            <br /> For a limited time, get your CapnoTrainer® GO at an exclusive
            launch price!
          </p>
          <div className="bg-black p-6 inline-block">
            <button className="bg-white text-teal-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition">
              Order now and receive a FREE personalized breathing evaluation
              plan!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
