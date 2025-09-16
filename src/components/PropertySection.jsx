import luxuria from "../assets/luxuria.jpg";
import fubara from "../assets/fubara.jpg";
import dan from "../assets/dan.jpg";
import aunty from "../assets/aunty.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const properties = [
  { id: 1, name: "Luxuria", image: luxuria, path: "/luxurious" },
  { id: 2, name: "Fubara Dublin Green", image: fubara, path: "/fubara" },
  { id: 3, name: "Dan & Dan", image: dan, path: "/dan" },
  { id: 4, name: "Aunty Ayo", image: aunty, path: "/aunty" },
];

function PropertySection() {
  return (
    <section className="bg-black py-16">
      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-gray-300 uppercase tracking-wide">What We Do</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Properties
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12">
        {properties.map((property) => (
          <Link
            key={property.id}
            to={property.path}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
          >
            {/* Image */}
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Text + Arrow */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <h3 className="text-lg font-semibold">{property.name}</h3>
              <span className="bg-white text-black p-2 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowRight size={18} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PropertySection;
