import { Shield, Zap, Waves } from "lucide-react";
import luxuriaTop from "../assets/luxuria-top.jpg";
import luxuriaBottom from "../assets/luxuria-bottom.jpg";
import ApartmentHero from "./ApartmentHero.jsx";
import LuxuriaHero from "../assets/hero1.jpg"
import EquiryForm from "./EquiryForm.jsx"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function LuxuriaSection() {
  return (
    <div className="overflow-x-hidden">
    
      
      {/* <LuxuriaHero /> */}
         <ApartmentHero
        image={LuxuriaHero} // ✅ now it will load the hero background image
        title="Luxuria"
        subtitle="Modern Luxury Living in the Heart of Ikoyi"
      />

      <section className="bg-black text-white py-8 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row items-start gap-8 md:gap-12 overflow-hidden">
     

        {/* LEFT CONTENT */}
        <div className="flex-1 w-full">
          {/* Feature Icons Row */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Zap className="text-yellow-400 group-hover:scale-125 transition-transform duration-300" />
              <span className="group-hover:text-yellow-300 transition-colors duration-300 text-sm md:text-base">
                24 Hours Power
              </span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <Shield className="text-blue-400 group-hover:scale-125 transition-transform duration-300" />
              <span className="group-hover:text-blue-300 transition-colors duration-300 text-sm md:text-base">
                24 Hours Security
              </span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <Waves className="text-cyan-400 group-hover:scale-125 transition-transform duration-300" />
              <span className="group-hover:text-cyan-300 transition-colors duration-300 text-sm md:text-base">
                Swimming Pool
              </span>
            </div>
          </div>

          {/* Description */}
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            DESCRIPTION
          </h2>
          <p className="mb-4 md:mb-6 text-gray-300 text-sm md:text-base">
            Acquire your very own unit in the opulent LUXURIA apartment complex,
            featuring stunning ocean views, located on Alexander Road in the
            heart of Ikoyi.
          </p>
          <p className="mb-4 md:mb-6 text-gray-300 text-sm md:text-base">
            Explore the lavish details and exceptional living opportunities that
            await you at LUXURIA by The Address Homes.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            <ul className="space-y-2 list-disc list-inside text-sm md:text-base">
              <li>Parking Spaces</li>
              <li>Four (4) Bedroom Ensuites</li>
              <li>Sitting Area</li>
              <li>Fully fitted modern kitchen</li>
              <li>Dining room</li>
              <li>Long views through spaces</li>
              <li>One (1) maids room</li>
              <li>Innovative Lighting system</li>
              <li>Balcony</li>
              <li>Smart home system</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside text-sm md:text-base">
              <li>Three (3) Carports</li>
              <li>Adult pool and Children pool</li>
              <li>Lounge overlooking Lobby</li>
              <li>Spa</li>
              <li>Gym</li>
              <li>24hours of power</li>
              <li>2 General Lifts per Tower</li>
              <li>2 Semi lift per Tower</li>
            </ul>
          </div>

          {/* Payment Details */}
          <div className="mt-4 md:mt-6 text-gray-300 text-sm md:text-base">
            <p className="font-semibold">Payment Details:</p>
            <p>
              30% initial deposit and spread subsequent payments over
              construction period.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex-1 w-full relative flex justify-center items-center">
          {/* Mobile: slider */}
          <div className="w-full sm:hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              <SwiperSlide>
                <img
                  src={luxuriaTop}
                  alt="Luxuria Top"
                  className="w-full h-48 xs:h-56 sm:h-64 object-cover rounded-xl shadow-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={luxuriaBottom}
                  alt="Luxuria Bottom"
                  className="w-full h-48 xs:h-56 sm:h-64 object-cover rounded-xl shadow-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Desktop: overlapping images */}
          <div className="hidden sm:block relative w-full max-w-xs md:max-w-md lg:max-w-lg">
            {/* Top Image */}
            <img
              src={luxuriaTop}
              alt="Luxuria Top View"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />

            {/* Bottom Image */}
            <img
              src={luxuriaBottom}
              alt="Luxuria Bottom View"
              className="
                w-3/4 h-auto object-cover rounded-xl shadow-lg
                absolute -bottom-6 md:-bottom-10 -left-4 md:-left-8
                transform hover:scale-105 hover:shadow-2xl transition
              "
            />
          </div>
        </div>

        {/*form enquiring section*/}
      </section>
      <EquiryForm />
      
    </div>
  );
}
