export default function Different() {
  return (
    <section className="">
      {/* Image Section */}
      <div class="flex flex-col md:flex-row justify-center items-center py-12 px-6 bg-white container mx-auto">
        <div className="relative w-full lg:w-1/2 h-64 lg:h-96 mb-6 lg:mb-0 bg-[#e6f2f2]"></div>

        {/* Content Section */}
        <div className="lg:w-[100%] md:pl-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-teal-800 mb-4 text-center md:text-left">
            What Makes the CapnoTrainer® GO Different?
          </h2>
          <p className="text-gray-700 md:w-2/3 text-sm mb-6 text-center md:text-left">
            Unlike traditional breathing tools that focus on shallow techniques,
            the CapnoTrainer® GO goes deeper. It integrates{" "}
            <span className="text-teal-600 font-semibold">
              psychophysiology
            </span>
            ,{" "}
            <span className="text-teal-600 font-semibold">
              behavioral analysis
            </span>
            , and{" "}
            <span className="text-teal-600 font-semibold">
              cutting-edge technology
            </span>{" "}
            to provide a complete understanding of your breath&apos;s role in
            health and performance.
          </p>
          <blockquote className="md:relative left-[-70px] bg-[#ffffff] text-teal-800 text-lg italic px-6 py-4 rounded-lg shadow-lg">
            “Breathing is behavior. And behavior can be changed. The
            CapnoTrainer® helps you edit, optimize, and own your breath for
            life.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
