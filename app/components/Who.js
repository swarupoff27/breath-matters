export default function Who() {
  const audiences = [
    {
      title: "Wellness Enthusiasts",
      description:
        "Achieve better sleep, reduce anxiety, and enhance overall vitality.",
      image: "/path-to-wellness-image.png", // Replace with actual image path
      alt: "Wellness Enthusiasts exercising",
    },
    {
      title: "Health Practitioners",
      description:
        "Provide clients with revolutionary breathing behavior analysis for lasting results.",
      image: "/path-to-practitioners-image.png", // Replace with actual image path
      alt: "Health practitioners smiling",
    },
    {
      title: "Athletes & Performers",
      description: "Boost endurance, focus, and physical resilience.",
      image: "/path-to-athletes-image.png", // Replace with actual image path
      alt: "Athletes running in a race",
    },
    {
      title: "Healthcare Professionals",
      description:
        "Enhance patient care with cutting-edge breathing assessment tools & technologies",
      image: "/path-to-practitioners-image.png", // Replace with actual image path
      alt: "Health practitioners smiling",
    },
    {
      title: "Educators & Trainers",
      description:
        "Incorporate  evidence-based breathing techniques into your teaching or coaching.",
      image: "/path-to-athletes-image.png", // Replace with actual image path
      alt: "Educators/Trainers is teaching",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
        Who Is the CapnoTrainer® GO For?
      </h2>
      <div class="text-[#ffffff] flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.slice(0, 3).map((audience, index) => (
            <div
              key={index}
              className="bg-[#e6f2f2] rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-full h-48"></div>
              <div className="p-3 mx-6 mb-6 rounded-md bg-[#008080]">
                <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                <p className="">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.slice(3, 5).map((audience, index) => (
            <div
              key={index}
              className="bg-[#e6f2f2] rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-full h-48"></div>
              <div className="p-3 mx-6 mb-6 rounded-md bg-[#008080]">
                <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                <p className="">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
