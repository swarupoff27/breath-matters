import Image from "next/image";

const features = [
  {
    title: "See Your Breathing in Action",
    description:
      "Gain an immediate understanding of your breathing patterns. See how each breath impacts your health and performance with clear, dynamic visuals.",
    image: "/card-1.png",
  },
  {
    title: "Monitor Your Progress",
    description:
      "Track your breathing efficiency over time. By measuring your CO2 levels, the CapnoTrainer® GO provides real-time data to help you optimize your respiration.",
    image: "/card-2.png",
  },
  {
    title: "Receive Tailored Feedback",
    description:
      "Get personalized feedback to improve your breathing. Practical exercises help realign your breath for optimal benefits.",
    image: "/card-3.png",
  },
];

export default function Cards() {
  return (
    <section className="w-full bg-[#f0f7f7] py-16 md:py-24">
      <div className="container flex flex-col items-center justify-center mx-auto px-4">
        <h2 className="mb-12 ttext-center">
          <span className="block text-lg font-medium text-gray-600">
            EXPERIENCE THE
          </span>
          <span className="mt-1 block text-3xl font-bold text-teal-600 md:text-4xl">
            POWER OF CAPNOTRAINER® GO
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-teal-600 pt-1 px-5">
                {feature.title}
              </h3>
              <p className="text-gray-600 pt-1 pb-5 px-5">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
