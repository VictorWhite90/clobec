import { useState, useEffect } from "react";
import { Popover } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import address from "../assets/address.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={address} alt="Logo" className="h-10" />
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-white font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <Popover className="relative">
              <Popover.Button className="focus:outline-none">
                Our Properties ▾
              </Popover.Button>
              <Popover.Panel className="absolute right-0 mt-2 w-56 rounded-lg bg-white text-black shadow-lg ring-1 ring-black/10 z-50">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Luxury Apartments
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Villas
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Commercial Spaces
                  </li>
                </ul>
              </Popover.Panel>
            </Popover>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (not full height) */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 bg-white text-black shadow-lg z-50 transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 px-6 pb-6 font-medium">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <Popover className="relative">
            <Popover.Button className="w-full text-left">
              Our Properties ▾
            </Popover.Button>
            <Popover.Panel className="mt-2 w-full rounded-lg bg-white text-black shadow-lg ring-1 ring-black/10">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Luxury Apartments
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Villas
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Commercial Spaces
                </li>
              </ul>
            </Popover.Panel>
          </Popover>
          <li className="cursor-pointer">Past Projects</li>
          <li className="cursor-pointer">Media</li>
          <li className="cursor-pointer">Privacy Policy</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
