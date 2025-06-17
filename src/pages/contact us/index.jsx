import React, { useState, useEffect } from "react";
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
  ChevronDown,
  ChevronUp,
  Users,
  Heart,
  Calendar,
  HelpCircle,
  ArrowLeft,
  ExternalLink,
  Clock,
  Globe
} from "lucide-react";

const ContactFAQPages = () => {
  const [currentPage, setCurrentPage] = useState("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, url: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, url: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#", name: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, url: "#", name: "YouTube" }
  ];

  const faqCategories = [
    {
      id: "general",
      name: "General",
      icon: <HelpCircle className="w-5 h-5" />
    },
    { id: "volunteer", name: "Volunteer", icon: <Users className="w-5 h-5" /> },
    { id: "programs", name: "Programs", icon: <Calendar className="w-5 h-5" /> }
  ];

  const faqData = {
    general: [
      {
        question: "What is your organization's mission?",
        answer:
          "Our mission is to empower communities through innovative programs and sustainable solutions that create lasting positive impact. We focus on education, community development, and environmental sustainability."
      },
      {
        question: "How can I get involved with your organization?",
        answer:
          "There are many ways to get involved! You can volunteer your time, make a donation, participate in our events, or spread awareness about our cause. Visit our volunteer section or contact us directly to learn more."
      },
      {
        question: "Where are you located?",
        answer:
          "Our main office is located at 123 Community Street, Lagos, Nigeria. We also have program locations throughout the region. Check our contact page for detailed address information."
      },
      {
        question: "How do I stay updated on your activities?",
        answer:
          "Follow us on social media, subscribe to our newsletter, or check our website regularly for updates on programs, events, and impact stories."
      }
    ],
    volunteer: [
      {
        question: "What volunteer opportunities are available?",
        answer:
          "We offer various volunteer opportunities including community outreach, educational programs, environmental projects, administrative support, and event coordination. Opportunities range from one-time events to ongoing commitments."
      },
      {
        question: "Do I need special skills to volunteer?",
        answer:
          "Not at all! We welcome volunteers from all backgrounds and skill levels. We provide training and support to help you succeed in your volunteer role. Your enthusiasm and commitment are the most important qualifications."
      },
      {
        question: "How much time commitment is required?",
        answer:
          "Time commitments vary by opportunity. Some events require just a few hours, while ongoing programs may need a few hours per week or month. We'll work with your schedule to find the right fit."
      },
      {
        question: "Is there an age requirement for volunteers?",
        answer:
          "We welcome volunteers of all ages! Minors (under 18) need parental consent and may have specific roles available to them. We also have family-friendly volunteer opportunities."
      }
    ],
    programs: [
      {
        question: "What programs do you currently offer?",
        answer:
          "We offer education support programs, community development initiatives, environmental conservation projects, youth mentorship programs, and health awareness campaigns. Each program is designed to address specific community needs."
      },
      {
        question: "How do I apply for program participation?",
        answer:
          "Application processes vary by program. Some are open enrollment while others have specific criteria. Visit our programs page or contact us directly for detailed application information."
      },
      {
        question: "Are your programs free to participants?",
        answer:
          "Yes, most of our programs are free to participants. We believe in removing barriers to access. Some specialized programs may have minimal costs, but we offer scholarships and payment plans when needed."
      },
      {
        question: "How do you measure program success?",
        answer:
          "We use various metrics including participant feedback, community impact assessments, long-term follow-ups, and quantitative measures specific to each program's goals. We publish annual impact reports to share our progress."
      }
    ]
  };

  if (currentPage === "contact") {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"
        style={{ backgroundColor: "#FEFDFD" }}
      >
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold" style={{ color: "#10243D" }}>
                Contact Us
              </h1>
              <button
                onClick={() => setCurrentPage("faq")}
                className="px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                style={{ color: "#10243D" }}
              >
                View FAQs
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in"
              style={{ color: "#10243D" }}
            >
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle
                    className="w-6 h-6 mr-3"
                    style={{ color: "#10243D" }}
                  />
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "#10243D" }}
                  >
                    Send us a message
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#10243D" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all"
                      style={{ "--tw-ring-color": "#10243D" }}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#10243D" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all"
                      style={{ "--tw-ring-color": "#10243D" }}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#10243D" }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all resize-none"
                      style={{ "--tw-ring-color": "#10243D" }}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    style={{ backgroundColor: "#10243D" }}
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
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "#10243D" }}
                  >
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin
                        className="w-6 h-6 mt-1 mr-4 flex-shrink-0"
                        style={{ color: "#10243D" }}
                      />
                      <div>
                        <h4
                          className="font-semibold mb-1"
                          style={{ color: "#10243D" }}
                        >
                          Address
                        </h4>
                        <p className="text-gray-600">
                          123 Community Street
                          <br />
                          Victoria Island, Lagos
                          <br />
                          Nigeria 101241
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone
                        className="w-6 h-6 mt-1 mr-4 flex-shrink-0"
                        style={{ color: "#10243D" }}
                      />
                      <div>
                        <h4
                          className="font-semibold mb-1"
                          style={{ color: "#10243D" }}
                        >
                          Phone
                        </h4>
                        <p className="text-gray-600">+234 803 123 4567</p>
                        <p className="text-gray-600">+234 701 987 6543</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail
                        className="w-6 h-6 mt-1 mr-4 flex-shrink-0"
                        style={{ color: "#10243D" }}
                      />
                      <div>
                        <h4
                          className="font-semibold mb-1"
                          style={{ color: "#10243D" }}
                        >
                          Email
                        </h4>
                        <p className="text-gray-600">info@organization.org</p>
                        <p className="text-gray-600">
                          support@organization.org
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock
                        className="w-6 h-6 mt-1 mr-4 flex-shrink-0"
                        style={{ color: "#10243D" }}
                      />
                      <div>
                        <h4
                          className="font-semibold mb-1"
                          style={{ color: "#10243D" }}
                        >
                          Office Hours
                        </h4>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </p>
                        <p className="text-gray-600">
                          Saturday: 10:00 AM - 4:00 PM
                        </p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "#10243D" }}
                  >
                    Find Us
                  </h3>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-500">Interactive Map</p>
                      <p className="text-sm text-gray-400">
                        123 Community Street, Lagos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "#10243D" }}
                  >
                    Follow Us
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                        style={{ backgroundColor: "#10243D" }}
                        title={social.name}
                      >
                        <div className="text-white">{social.icon}</div>
                      </a>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4">
                    Stay connected with us on social media for the latest
                    updates, stories, and community highlights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // FAQ Page
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"
      style={{ backgroundColor: "#FEFDFD" }}
    >
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentPage("contact")}
                className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" style={{ color: "#10243D" }} />
              </button>
              <h1 className="text-2xl font-bold" style={{ color: "#10243D" }}>
                Frequently Asked Questions
              </h1>
            </div>
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              style={{ color: "#10243D" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in"
            style={{ color: "#10243D" }}
          >
            How can we help?
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-delay">
            Find answers to common questions about our organization, programs,
            and how to get involved.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "text-white shadow-lg"
                    : "text-gray-600 bg-white hover:bg-gray-50"
                }`}
                style={{
                  backgroundColor:
                    activeCategory === category.id ? "#10243D" : "white"
                }}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData[activeCategory].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3
                    className="font-semibold text-lg"
                    style={{ color: "#10243D" }}
                  >
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    {openFAQ === index ? (
                      <ChevronUp
                        className="w-5 h-5"
                        style={{ color: "#10243D" }}
                      />
                    ) : (
                      <ChevronDown
                        className="w-5 h-5"
                        style={{ color: "#10243D" }}
                      />
                    )}
                  </div>
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Donation CTA */}
          <div
            className="mt-12 p-8 rounded-2xl text-center"
            style={{ backgroundColor: "#10243D" }}
          >
            <Heart className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-4 text-white">
              Have donation questions?
            </h3>
            <p className="text-gray-200 mb-6">
              For questions about donations, tax receipts, or specific giving
              opportunities, visit our dedicated donation page for detailed
              information.
            </p>
            <button
              className="px-6 py-3 bg-white rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center mx-auto"
              style={{ color: "#10243D" }}
            >
              Visit Donation Page
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 p-6 bg-white rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2" style={{ color: "#10243D" }}>
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? We're here to help!
            </p>
            <button
              onClick={() => setCurrentPage("contact")}
              className="px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: "#10243D" }}
            >
              Contact Us
            </button>
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

export default ContactFAQPages;
