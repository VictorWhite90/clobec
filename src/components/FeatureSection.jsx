import { ArrowRight } from "lucide-react"; // optional: npm install lucide-react
import { Home, Wrench, FlaskConical } from "lucide-react";
import feautureimg from "../assets/feautureimg.jpg"


export default function FeatureSection() {
  const features = [
    {
      title: "Consistent Quality",
      text: "We have consistent passion for delivering exceptional homes with high class finishing.",
      icon: <FlaskConical className="h-8 w-8 text-black" />,
    },
    {
      title: "Reliability",
      text: "Our unwavering reliability has made us highly respected in the luxury real estate business.",
      icon: <Home className="h-8 w-8 text-black" />,
    },
    {
      title: "Advanced Technology",
      text: "Seamlessly integrated smart systems empower you to control every aspect of your home.",
      icon: <Wrench className="h-8 w-8 text-black" />,
    },
  ];

  return (
    <section className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${feautureimg})` }}    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-black/80 text-white p-8 rounded-xl overflow-hidden"
          >
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="mb-6 text-gray-200">{item.text}</p>

            {/* Arrow icon bottom left */}
            <ArrowRight className="absolute bottom-6 left-6 text-gray-300" />

            {/* White circle bottom right */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-tl-full flex items-center justify-center">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
