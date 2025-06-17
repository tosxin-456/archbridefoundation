import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation(); // Detect route changes

  // Automatically scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Toggle button visibility on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Manual scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#195C70] text-white hover:bg-[#3C6674] shadow-lg transition"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
};

export default ScrollToTopButton;
