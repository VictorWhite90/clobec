import {
  User,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  MessageSquare,
} from "lucide-react";

export default function EnquiryForm() {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 py-12 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

      <div className="relative max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl p-6 sm:p-10">
        {/* Title */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-600">
            Drop a Message
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black">
            Enquiry Form
          </h2>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First & Last Name */}
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="First Name"
              className="w-full pl-10 pr-3 border border-gray-300 rounded-md py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full pl-10 pr-3 border border-gray-300 rounded-md py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone & Email */}
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-10 pr-3 border border-gray-300 rounded-md py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-3 border border-gray-300 rounded-md py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address (full width) */}
          <div className="relative sm:col-span-2">
            <MapPin className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Address"
              className="w-full pl-10 pr-3 border border-gray-300 rounded-md py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Location + Location of Interest */}
          <div className="relative">
            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-5 h-5 pointer-events-none" />
            <select className="appearance-none w-full border border-gray-300 rounded-md pl-4 pr-10 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Your Location</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Other</option>
            </select>
          </div>
          <div className="relative">
            <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-5 h-5 pointer-events-none" />
            <select className="appearance-none w-full border border-gray-300 rounded-md pl-4 pr-10 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Location Of Interest</option>
              <option>Ikoyi</option>
              <option>Victoria Island</option>
              <option>Banana Island</option>
            </select>
          </div>

          {/* Message */}
          <div className="relative sm:col-span-2">
            <MessageSquare className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full pl-10 pr-3 border border-gray-300 rounded-md py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 rounded-md font-semibold hover:from-blue-600 hover:to-blue-800 transition flex items-center justify-center gap-2"
            >
              Request Submit Now →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
