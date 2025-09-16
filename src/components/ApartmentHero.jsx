// src/components/ApartmentHero.jsx
export default function ApartmentHero({ image, title, subtitle }) {
  return (
    <section
      className="relative h-[90vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Title */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-wide"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-lg md:text-2xl text-gray-300">
            {subtitle}
          </p>
        )}

        {/* Button */}
        <a
          href="#details" // <-- smooth scroll to the description section
          className="mt-6 inline-block px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition"
        >
          Property Details
        </a>
      </div>
    </section>
  );
}
