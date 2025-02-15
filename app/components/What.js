export default function What() {
  return (
    <section className="">
      <div class="container flex flex-col md:flex-row items-center justify-between mx-auto px-[20px] py-[100px]">
        <div class="flex flex-col items-start">
          <h2 className="text-teal-700 text-3xl font-bold mb-6">
            What Is the <span className="text-teal-800">CapnoTrainer® GO</span>?
          </h2>
          <p className="text-gray-700 text-lg  max-w-2xl mb-8">
            The CapnoTrainer® GO isn&apos;t just a tool—it&apos;s your personal
            gateway to a healthier, more aligned you. Using advanced
            <span className="text-teal-600 font-semibold">
              {" "}
              capnography technology
            </span>
            , it provides real-time insights into your breathing behavior by
            measuring CO2 levels and visualizing your breathing patterns. Paired
            with a guided learning framework, it empowers you to:
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-start gap-3 bg-[#E6F2F2] px-[10px] py-[6px] rounded-[10px]">
              <span className="text-green-600 text-xl">✔</span>
              <p className="text-gray-700">
                Identify and correct dysfunctional breathing habits.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-[#E6F2F2] px-[10px] py-[6px] rounded-[10px]">
              <span className="text-green-600 text-xl">✔</span>
              <p className="text-gray-700">
                Understand the triggers and motivations behind your habits.
              </p>
            </div>
            <div className="flex items-start gap-3 bg-[#E6F2F2] px-[10px] py-[6px] rounded-[10px]">
              <span className="text-green-600 text-xl">✔</span>
              <p className="text-gray-700">
                Optimize your respiration for health, focus, and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
