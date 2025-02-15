export default function Footer() {
  return (
    <footer className="py-12 md:py-24 px-6 bg-gray-100">
      <div className="container mx-auto">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-6">
          {/* Logo and Description */}
          <div className="md:text-left w-[100%] lg:w-[25%]">
            <h3 className="text-teal-700 font-bold text-xl mb-2">
              Breathe Matters
            </h3>
            <p className="text-gray-600 text-sm">
              Join us on a journey towards a healthier, balanced life – where
              each inhale and exhale contributes to your overall sense of
              wellness.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left  w-[10%]">
            <h4 className="font-semibold text-gray-800 text-lg mb-2">
              Contact
            </h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>Phone</li>
              <li>Email</li>
              <li>Location</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className=" flex flex-col lg:items-end">
            <h4 className=" self-start font-semibold text-gray-800 text-lg mb-2">
              Stay on touch
            </h4>
            <div className="flex lg:justify-center md:justify-start space-x-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-teal-700 w-10 h-10 bg-[#008080]"
              ></a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-teal-700 w-10 h-10 bg-[#008080]"
              ></a>
              <a
                href="#"
                aria-label="X"
                className="text-gray-600 hover:text-teal-700 w-10 h-10 bg-[#008080]"
              ></a>
              <a
                href="#"
                aria-label="Discord"
                className="text-gray-600 hover:text-teal-700 w-10 h-10 bg-[#008080]"
              ></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-28 text-gray-500 text-sm">
          ©2024 BreatheMatters all rights reserved
        </div>
      </div>
    </footer>
  );
}
