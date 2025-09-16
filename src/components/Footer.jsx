import { Facebook, Twitter } from "lucide-react";
import address from "../assets/address.png";
import g1 from "../assets/gallery1.jpg";
import g2 from "../assets/gallery2.jpg";
import g3 from "../assets/gallery3.jpg";
import g4 from "../assets/gallery4.jpg";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            The Address Homes is a leading real estate company engaged in the
            acquisition, development and management of luxurious contemporary
            homes across Nigeria.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Our Properties</li>
            <li className="hover:text-white cursor-pointer">Past Projects</li>
            <li className="hover:text-white cursor-pointer">Media</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Gallery</h3>
          <div className="grid grid-cols-2 gap-3">
            <img src={g1} alt="Gallery 1" className="rounded-md" />
            <img src={g2} alt="Gallery 2" className="rounded-md" />
            <img src={g3} alt="Gallery 3" className="rounded-md" />
            <img src={g4} alt="Gallery 4" className="rounded-md" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12" />

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <img src={address} alt="Logo" className="h-10" />
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
            <Facebook size={18} />
          </a>
          <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
            <Twitter size={18} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 pb-6 text-sm">
        © Copyright {new Date().getFullYear()}. All Rights Reserved
      </div>
    </footer>
  );
}
