import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  Eye,
  Calendar,
  Award,
  Heart,
  Shield,
  Lightbulb,
  Globe,
  Linkedin,
  ChevronDown,
  Star
} from "lucide-react";

const AboutUsPage = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      year: "2018",
      title: "Foundation",
      description:
        "Started with a vision to transform the industry with innovative solutions."
    },
    {
      year: "2019",
      title: "First Major Milestone",
      description:
        "Launched our flagship product and gained our first 1000 customers."
    },
    {
      year: "2021",
      title: "Global Expansion",
      description:
        "Expanded operations to 15 countries across three continents."
    },
    {
      year: "2023",
      title: "Innovation Award",
      description:
        "Received the prestigious Innovation Excellence Award for our breakthrough technology."
    },
    {
      year: "2024",
      title: "Sustainability Focus",
      description:
        "Launched our green initiative and achieved carbon neutral operations."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      title: "Chief Executive Officer",
      bio: "With over 15 years of experience in tech leadership, Sarah drives our strategic vision and company culture.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      title: "Chief Technology Officer",
      bio: "Michael leads our technical innovation with expertise in AI, cloud computing, and scalable architecture.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez",
      title: "Head of Operations",
      bio: "Emily ensures smooth operations across all departments with her exceptional organizational skills.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "David Thompson",
      title: "Creative Director",
      bio: "David brings creative vision to our brand and user experience with over 12 years in design.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description:
        "Every decision we make starts with our customers' needs and satisfaction."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to stay ahead."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description:
        "Transparency, honesty, and ethical practices guide everything we do."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "We're committed to creating a positive impact on our planet and communities."
    }
  ];

  const partners = [
    {
      name: "TechCorp",
      logo: "https://via.placeholder.com/120x60/10243D/FEFDFD?text=TechCorp"
    },
    {
      name: "InnovateLabs",
      logo: "https://via.placeholder.com/120x60/10243D/FEFDFD?text=InnovateLabs"
    },
    {
      name: "GlobalSolutions",
      logo: "https://via.placeholder.com/120x60/10243D/FEFDFD?text=GlobalSolutions"
    },
    {
      name: "FutureVentures",
      logo: "https://via.placeholder.com/120x60/10243D/FEFDFD?text=FutureVentures"
    }
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"
      style={{ backgroundColor: "#FEFDFD" }}
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-20 left-10 w-64 h-64 rounded-full"
            style={{ backgroundColor: "#10243D" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-48 h-48 rounded-full"
            style={{ backgroundColor: "#10243D" }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1
            className="text-5xl md:text-5xl font-bold mb-6 animate-fade-in-up"
            style={{ color: "#10243D" }}
          >
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
            Building the future through innovation, dedication, and unwavering
            commitment to excellence.
          </p>
          <div className="animate-bounce mt-12">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        id="mission-vision"
        className={`py-20 px-4 transition-all duration-1000 ${
          isVisible["mission-vision"]
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div
              className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              style={{ backgroundColor: "#FEFDFD" }}
            >
              <div
                className="w-16 h-16 mx-auto mb-6 p-4 rounded-full"
                style={{ backgroundColor: "#10243D" }}
              >
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#10243D" }}
              >
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower businesses and individuals through cutting-edge
                technology solutions that simplify complex challenges and drive
                meaningful growth in an ever-evolving digital landscape.
              </p>
            </div>
            <div
              className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              style={{ backgroundColor: "#FEFDFD" }}
            >
              <div
                className="w-16 h-16 mx-auto mb-6 p-4 rounded-full"
                style={{ backgroundColor: "#10243D" }}
              >
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2
                className="text-3xl font-bold mb-4"
                style={{ color: "#10243D" }}
              >
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the global leader in innovative technology solutions,
                creating a world where technology seamlessly integrates with
                human potential to unlock unprecedented possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section
        id="history"
        className={`py-20 px-4 transition-all duration-1000 ${
          isVisible["history"]
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
        style={{ backgroundColor: "#10243D" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-white opacity-30"></div>
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 cursor-pointer transition-all duration-500 ${
                  activeTimelineItem === index ? "scale-105" : "hover:scale-102"
                }`}
                onClick={() => setActiveTimelineItem(index)}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "text-right pr-8"
                      : "text-left pl-8 order-2"
                  }`}
                >
                  <div
                    className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
                      activeTimelineItem === index
                        ? "bg-white shadow-xl"
                        : "bg-white bg-opacity-90"
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <Calendar
                        className="w-5 h-5 mr-2"
                        style={{ color: "#10243D" }}
                      />
                      <span
                        className="font-bold text-xl"
                        style={{ color: "#10243D" }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "#10243D" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4"
                  style={{ borderColor: "#10243D" }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className={`py-20 px-4 transition-all duration-1000 ${
          isVisible["team"]
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-16"
            style={{ color: "#10243D" }}
          >
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <a
                    href={member.linkedin}
                    className="absolute bottom-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <Linkedin
                      className="w-5 h-5"
                      style={{ color: "#10243D" }}
                    />
                  </a>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: "#10243D" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-gray-500 font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        id="values"
        className={`py-20 px-4 transition-all duration-1000 ${
          isVisible["values"]
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
        style={{ backgroundColor: "#FEFDFD" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-16"
            style={{ color: "#10243D" }}
          >
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 bg-white group"
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 p-4 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "#10243D" }}
                >
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "#10243D" }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className={`py-20 px-4 transition-all duration-1000 ${
          isVisible["partners"]
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
        style={{ backgroundColor: "#10243D" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-white">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6" style={{ color: "#10243D" }}>
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join us in shaping the future through innovation and collaboration.
          </p>
          <button
            className="px-8 py-4 rounded-full font-bold text-white text-lg hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: "#10243D" }}
          >
            Get In Touch
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default AboutUsPage;
