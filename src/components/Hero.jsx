import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg";

export default function HeroSlider() {
  const slides = [
    {
      img: img1,
      heading: "WELCOME / TO THE FUTURE",
      sub: "OF LIVING",
    },
    {
      img: img2,
      heading: "EXPERIENCE / MODERN LUXURY",
      sub: "IN EVERY DETAIL",
    },
    {
      img: img3,
      heading: "BUILDING / DREAM HOMES",
      sub: "WITH YOU IN MIND",
    },
  ];

  return (
    <section className="relative h-screen w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-screen bg-cover bg-center flex items-center justify-end"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Right-side animated text */}
              <div className="relative z-10 text-right text-white px-8 md:px-20 animate-fadeIn">
                <h2 className="text-2xl md:text-4xl font-light">
                  {s.heading.split("/")[0]}
                  <span className="font-bold"> {s.heading.split("/")[1]}</span>
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold mt-2">
                  {s.sub}
                </h1>
                <button className="mt-6 px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition">
                  View Properties
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
         {/* ✅ Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg z-50 hover:bg-green-600 transition"
      >
        💬 Hi, how can we help?
      </a>
      </Swiper>
    </section>
  );
}
