import React, { useEffect, useState } from "react";
import {
  Heart,
  Users,
  Globe,
  Shield,
  CreditCard,
  Check,
  X
} from "lucide-react";

const DonationModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(
      "script[src='https://js.paystack.co/v1/inline.js']"
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://js.paystack.co/v1/inline.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen && !showSuccess) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose, showSuccess]);

  const quickAmounts = [1000, 5000, 10000, 25000];

  const handlePayment = () => {
    if (!amount || !email || !name) {
      alert("Please fill in all required fields");
      return;
    }

    if (!window.PaystackPop) {
      alert("Payment system not ready. Please wait a moment and try again.");
      return;
    }

    setIsLoading(true);

    const handler = window.PaystackPop.setup({
      key: "pk_test_436e86416c550950ca0fc375b7f0638c194b80cd", // Replace with your live key in production
      email,
      amount: parseFloat(amount) * 100, // Paystack uses kobo
      currency: "NGN",
      ref: `archbridge_${Date.now()}`,
      metadata: {
        custom_fields: [
          {
            display_name: "Donor Name",
            variable_name: "donor_name",
            value: name
          },
          {
            display_name: "Foundation",
            variable_name: "foundation",
            value: "ArchBridge Foundation"
          }
        ]
      },
      callback: (response) => {
        console.log("Payment successful", response);
        setIsLoading(false);
        setShowSuccess(true);
        setTimeout(() => {
          setAmount("");
          setEmail("");
          setName("");
          setShowSuccess(false);
          onClose();
        }, 3000);
      },
      onClose: () => {
        console.log("Payment closed");
        setIsLoading(false);
      }
    });

    handler.openIframe();
  };

  const handleBackdropClick = (e) => {
    // Only close if clicking the backdrop (not the modal content) and not during success state
    if (e.target === e.currentTarget && !showSuccess && !isLoading) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    // Don't allow closing during payment processing or success state
    if (!isLoading && !showSuccess) {
      onClose();
    }
  };

  if (!isOpen) return null;

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center mx-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-4">
            Your donation has been processed successfully. ArchBridge Foundation
            appreciates your generous support!
          </p>
          <div className="flex items-center justify-center text-sm text-gray-500">
            <Heart className="w-4 h-4 text-red-500 mr-1" />
            Making a difference together
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4 my-4">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl flex items-center justify-between z-10">
          <div className="flex items-center">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-[#0A3549] rounded-full mr-3">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#0A3549]">
              Support ArchBridge Foundation
            </h2>
          </div>
          <button
            onClick={handleCloseClick}
            disabled={isLoading}
            className={`p-2 rounded-full transition-colors ${
              isLoading
                ? "text-gray-300 cursor-not-allowed"
                : "hover:bg-gray-100 text-gray-500"
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in building bridges to a better future. Your donation
              helps create lasting impact in communities worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Section - Impact */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#0A3549] mb-4">
                  Your Impact
                </h3>
                <div className="space-y-4">
                  {[
                    [
                      "Community Development",
                      "Supporting local communities with essential resources and infrastructure",
                      Users,
                      "bg-blue-100 text-blue-600"
                    ],
                    [
                      "Global Outreach",
                      "Connecting communities across borders to share knowledge and resources",
                      Globe,
                      "bg-green-100 text-green-600"
                    ],
                    [
                      "Sustainable Solutions",
                      "Creating long-term solutions that empower communities",
                      Shield,
                      "bg-purple-100 text-purple-600"
                    ]
                  ].map(([title, desc, Icon, colorClass]) => (
                    <div className="flex items-start space-x-3" key={title}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${colorClass}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {title}
                        </h4>
                        <p className="text-gray-600 text-xs">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Donation Form */}
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <CreditCard className="w-5 h-5 text-[#0A3549] mr-2" />
                <h3 className="text-xl font-bold text-[#0A3549]">
                  Make a Donation
                </h3>
              </div>

              {/* Quick Amounts */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Quick Select Amount (NGN)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt.toString())}
                      disabled={isLoading}
                      className={`px-4 py-3 text-sm font-medium rounded-lg border transition-all ${
                        amount === amt.toString()
                          ? "bg-[#0A3549] text-white border-[#0A3549]"
                          : "bg-white text-[#0A3549] border-gray-300 hover:border-[#0A3549]"
                      } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      ₦{amt.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or Enter Custom Amount *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                    ₦
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    min="100"
                    step="0.01"
                    disabled={isLoading}
                    className={`w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3549] focus:border-[#0A3549] outline-none ${
                      isLoading
                        ? "opacity-50 cursor-not-allowed bg-gray-50"
                        : ""
                    }`}
                  />
                </div>
              </div>

              {/* Name & Email */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    disabled={isLoading}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3549] focus:border-[#0A3549] outline-none ${
                      isLoading
                        ? "opacity-50 cursor-not-allowed bg-gray-50"
                        : ""
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    disabled={isLoading}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A3549] focus:border-[#0A3549] outline-none ${
                      isLoading
                        ? "opacity-50 cursor-not-allowed bg-gray-50"
                        : ""
                    }`}
                  />
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={handlePayment}
                disabled={isLoading || !amount || !email || !name}
                className="w-full bg-[#0A3549] hover:bg-[#0A3549]/90 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.01] disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Donate{" "}
                    {amount ? `₦${parseFloat(amount).toLocaleString()}` : ""}
                  </div>
                )}
              </button>

              {/* Security */}
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Shield className="w-4 h-4 mr-1" />
                Secured by Paystack - Your payment is protected
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200 text-gray-600">
            <p className="mb-1">
              Thank you for supporting ArchBridge Foundation
            </p>
            <p className="text-sm">
              Every donation makes a difference in building stronger communities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DonationModal;
