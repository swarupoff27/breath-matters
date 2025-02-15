export default function KeyFeatures() {
  const features = [
    {
      icon: <></>,
      title: "Real-Time Monitoring",
      description:
        "Track your breathing metrics like CO2 concentration, breathing rate, and rhythm.",
    },
    {
      icon: <></>,
      title: "Capnogram Visualization",
      description:
        "Get instant feedback on your breathing mechanics and see the impact of adjustments in real-time.",
    },
    {
      icon: <></>,
      title: "Custom Learning Plans",
      description:
        "Tailored strategies to help you unlearn bad habits and master new ones.",
    },
    {
      icon: <></>,
      title: "Interactive Practicums",
      description:
        "Experiment with guided breathing challenges to align behavior with physiology.",
    },
  ];

  return (
    <section className="py-12 md:py-24 px-6 bg-white">
      <div class="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
          Key Features You&apos;ll Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col p-6">
              <div className="mb-4  w-24 h-24 bg-teal-800">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-teal-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
