import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Clock
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("");
      }, 5000);
    }, 2000);
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#", name: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, url: "#", name: "YouTube" }
  ];

  return (
    <div className="min-h-screen mt-[70px] bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-12  sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#10243D] animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form - Takes up 2 columns on XL screens */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 h-full">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 mr-3 text-[#10243D]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-[#10243D]">
                    Send Message
                  </h3>
                </div>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">
                      Thank you! Your message has been sent successfully. We'll
                      get back to you soon.
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#10243D]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10243D] focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-[#10243D]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10243D] focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#10243D]">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#10243D] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-[#10243D] text-white rounded-lg font-medium transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="xl:col-span-1">
              <div className="space-y-6">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#10243D]">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 mt-1 mr-4 flex-shrink-0 text-[#10243D]" />
                      <div>
                        <h4 className="font-semibold mb-1 text-[#10243D]">
                          Address
                        </h4>
                        <p className="text-gray-600 text-sm">
                          123 Community Street
                          <br />
                          Victoria Island, Lagos
                          <br />
                          Nigeria 101241
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="w-6 h-6 mt-1 mr-4 flex-shrink-0 text-[#10243D]" />
                      <div>
                        <h4 className="font-semibold mb-1 text-[#10243D]">
                          Phone
                        </h4>
                        <p className="text-gray-600 text-sm">
                          +234 803 123 4567
                        </p>
                        <p className="text-gray-600 text-sm">
                          +234 701 987 6543
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-6 h-6 mt-1 mr-4 flex-shrink-0 text-[#10243D]" />
                      <div>
                        <h4 className="font-semibold mb-1 text-[#10243D]">
                          Email
                        </h4>
                        <p className="text-gray-600 text-sm">
                          info@organization.org
                        </p>
                        <p className="text-gray-600 text-sm">
                          support@organization.org
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-6 h-6 mt-1 mr-4 flex-shrink-0 text-[#10243D]" />
                      <div>
                        <h4 className="font-semibold mb-1 text-[#10243D]">
                          Office Hours
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600 text-sm">
                          Saturday: 10:00 AM - 4:00 PM
                        </p>
                        <p className="text-gray-600 text-sm">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                {/* <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#10243D]">
                    Find Us
                  </h3>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-500 font-medium">
                        Interactive Map
                      </p>
                      <p className="text-sm text-gray-400">
                        123 Community Street, Lagos
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Social Media */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#10243D]">
                    Follow Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="flex items-center justify-center w-12 h-12 bg-[#10243D] rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                        title={social.name}
                        aria-label={social.name}
                      >
                        <div className="text-white">{social.icon}</div>
                      </a>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    Stay connected with us on social media for the latest
                    updates, stories, and community highlights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
