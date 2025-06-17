import React, { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DonationModal from "../pages/donations";
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Programs", path: "/programs" },
    { label: "News", path: "/news" },
    { label: "Contact", path: "/contact" },
    { label: "Gallery", path: "/gallery" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50  transition-all duration-300 ${
          scrollY > 50 ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                {/* <Heart className="w-6 h-6 text-white" /> */}
                <img src={logo} className="w-full " alt="" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-[#020202]">
                ArchBridge Foundation
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="text-[#3C6674] cursor-pointer hover:text-[#195C70] transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => navigate("/contact")}
                  className="px-4 py-2 text-[#195C70] border cursor-pointer border-[#195C70] rounded-full hover:bg-[#195C70] hover:text-white transition-all font-medium"
                >
                  Volunteer
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-2 bg-[#195C70] cursor-pointer text-white rounded-full hover:bg-[#3C6674] transition-all font-medium"
                >
                  Donate Now
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    navigate(link.path);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full cursor-pointer text-left text-[#3C6674] hover:text-[#195C70] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    navigate("/contact");
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 text-[#195C70] cursor-pointer border border-[#195C70] rounded-full hover:bg-[#195C70] hover:text-white transition-all"
                >
                  Volunteer
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-6 py-2 bg-[#195C70] cursor-pointer text-white rounded-full hover:bg-[#3C6674] transition-all"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
