export default function SuccessStories() {
  const testimonials = [
    {
      quote:
        "I thought I knew how to breathe—until I used the CapnoTrainer® GO. This device opened my eyes to habits I never realized were harming me. I feel more energized and focused than ever before!",
      name: "Amanda K",
      title: "Entrepreneur",
      image: "/path-to-amanda-image.png", // Replace with the actual image path
    },
    {
      quote:
        "As a therapist, the CapnoTrainer® GO has completely transformed how I work with clients. It&apos;s a game-changer in helping people tackle anxiety and performance issues.",
      name: "Dr. Michael J",
      title: "Clinical Psychologist",
      image: "/path-to-michael-image.png", // Replace with the actual image path
    },
  ];

  return (
    <section className="py-12 md:py-24 px-6 bg-teal-50">
      <div class="container mx-auto ">
        <h2 className="text-3xl font-bold text-center text-teal-800 mb-8">
          Real Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md  flex flex-col items-center text-center"
            >
              <p className="text-teal-800 font-bold bg-teal-50 border-[2px] shadow-lg  p-6 border-teal-800 rounded-lg">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="relative rounded-[50%] w-12 h-12 mr-1 bg-[#e6f2f2]"></div>
                <div className="text-left py-6 px-3">
                  <p className="text-teal-800 font-bold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
