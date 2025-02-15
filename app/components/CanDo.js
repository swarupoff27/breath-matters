export default function CanDo() {
  const audiences = [
    {
      title: "Eliminate Stress and Anxiety",
      description:
        "Learn to control overbreathing. reduce hypocapnia, and maintain balance even in challenging situations.",
      image: "/path-to-wellness-image.png", // Replace with actual image path
      alt: "Wellness Enthusiasts exercising",
    },
    {
      title: "Enhance Mental Clarity and Focus",
      description:
        "Boost oxygen and glucose supply to your brain by aligning your breathing mechanics.",
      image: "/path-to-practitioners-image.png", // Replace with actual image path
      alt: "Health practitioners smiling",
    },
    {
      title: "Achieve Peak Performance",
      description:
        " Whether you're giving a presentation, running a marathon, or meditating, experience the benefits of a well-aligned breath.",
      image: "/path-to-athletes-image.png", // Replace with actual image path
      alt: "Athletes running in a race",
    },
    {
      title: "Improve Physical Health",
      description:
        "Address symptoms like shortness of breath, dizziness, and fatigue by optimizing your acid-base physiology.",
      image: "/path-to-practitioners-image.png", // Replace with actual image path
      alt: "Health practitioners smiling",
    },
  ];

  return (
    <section className="py-12 md:py-24 px-6 bg-gray-50">
      <div class="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
          WHAT CAN THE CapnoTrainer® GO FOR YOU?
        </h2>
        <div class="text-[#ffffff] flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-[#e6f2f2] rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-48"></div>
                <div className="p-3 min-h-[50%] rounded-md bg-[#008080] mt-auto">
                  <h3 className="text-xl font-semibold mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-sm">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
