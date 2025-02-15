export default function How() {
  return (
    <section className="py-12 md:py-24 px-6 bg-[#e6f2f2]">
      <div class="container  mx-auto">
        <h2 className="text-3xl font-bold text-teal-800 mb-8">
          How the CapnoTrainer® GO Works
        </h2>
        <div className="gap-8 items-center">
          <div className="text-[#ffffff] grid grid-cols-1 md:grid-cols-2 gap-6 w-[100%] md:w-[60%]">
            <div className="bg-[#008080] p-6 rounded-lg shadow-md">
              <h3 className="text-md font-semibold mb-2">
                Measure What Matters
              </h3>
              <p className="text-sm">
                Monitor your End-Tidal CO2 (PetCO2) in real time to assess how
                effectively your breathing supports acid-base balance and
                health.
              </p>
            </div>
            <div className="bg-[#008080] p-6 rounded-lg shadow-md">
              <h3 className="text-md font-semibold mb-2">
                Customized Interventions
              </h3>
              <p className="text-sm">
                Based on your unique breathing habits, receive tailored
                exercises and interventions to dismantle bad habits and
                cultivate optimal ones.
              </p>
            </div>
            <div className="bg-[#008080] p-6 rounded-lg shadow-md">
              <h3 className="text-md font-semibold mb-2">
                Visualize Your Breathing
              </h3>
              <p className="text-sm">
                See your breathing habits on a capnogram, a dynamic display of
                your inhalation and exhalation patterns. Pinpoint issues like
                overbreathing, gasps, or shallow breaths.
              </p>
            </div>
            <div className="bg-[#008080] p-6 rounded-lg shadow-md">
              <h3 className="text-md font-semibold mb-2">
                Engage in Practicums
              </h3>
              <p className="text-sm">
                Explore playful self-intervention techniques to realign
                breathing mechanics with your body&apos;s needs—whether through
                nose-breathing challenges or CO2 biofeedback training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
