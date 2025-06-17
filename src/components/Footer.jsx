import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#020202] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#195C70] rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Foundation</h3>
            </div>
            <p className="text-[#A9B1B2] mb-6 leading-relaxed">
              Building bridges to brighter futures through education,
              healthcare, and sustainable development initiatives worldwide.
              Together, we can create lasting change.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              <a
                href="/"
                className="block text-[#A9B1B2] hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-[#A9B1B2] hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="/gallery"
                className="block text-[#A9B1B2] hover:text-white transition-colors"
              >
                Gallery
              </a>
              <button className="block text-[#A9B1B2] hover:text-white transition-colors">
                Donate
              </button>
              <button className="block text-[#A9B1B2] hover:text-white transition-colors">
                Volunteer
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-6">
              Contact Info
            </h4>
            <div className="space-y-4 text-[#A9B1B2]">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-[#44A7B6]" />
                <span className="text-sm sm:text-base">
                  123 Foundation St, City 12345
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#44A7B6]" />
                <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#44A7B6]" />
                <span className="text-sm sm:text-base">
                  info@foundation.org
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-[#A9B1B2]">
          <p>&copy; 2025 Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
