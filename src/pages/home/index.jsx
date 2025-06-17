import React, { useState, useEffect } from "react";
import {
  Heart,
  ArrowRight,
  Users,
  MapPin,
  TrendingUp,
  Target,
  Award,
  Lightbulb,
  Activity,
  Globe,
  UserPlus,
  Mail,
  Phone,
  ChevronRight,
  Star
} from "lucide-react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");

  const heroSlides = [
    {
      title: "Building Bridges to Brighter Futures",
      subtitle:
        "Empowering communities through education, healthcare, and sustainable development initiatives worldwide.",
      bgColor: "from-[#3C6674] to-[#286374]"
    },
    {
      title: "Transforming Lives Through Education",
      subtitle:
        "Providing quality education and learning opportunities to underserved communities across the globe.",
      bgColor: "from-[#286374] to-[#44A7B6]"
    },
    {
      title: "Healthcare for Everyone",
      subtitle:
        "Bringing essential medical services and health education to remote and underserved areas.",
      bgColor: "from-[#44A7B6] to-[#195C70]"
    }
  ];

  const stats = [
    { icon: Users, number: "50K+", label: "Lives Impacted" },
    { icon: MapPin, number: "125", label: "Communities Served" },
    { icon: TrendingUp, number: "$2.5M", label: "Funds Raised" },
    { icon: Heart, number: "500+", label: "Volunteers" }
  ];

  const programs = [
    {
      icon: Lightbulb,
      title: "Education Initiative",
      description:
        "Building schools and providing educational resources to underserved communities.",
      image: "📚"
    },
    {
      icon: Activity,
      title: "Healthcare Access",
      description:
        "Mobile clinics and medical programs bringing healthcare to remote areas.",
      image: "🏥"
    },
    {
      icon: Globe,
      title: "Sustainable Development",
      description:
        "Environmental and economic sustainability projects for lasting impact.",
      image: "🌱"
    },
    {
      icon: UserPlus,
      title: "Community Empowerment",
      description:
        "Training programs and resources to help communities become self-sufficient.",
      image: "🤝"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Leader",
      content:
        "The foundation's education program has transformed our children's futures. We now have hope.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Volunteer",
      content:
        "Being part of this mission has been life-changing. Every project makes a real difference.",
      rating: 5
    },
    {
      name: "Dr. Amara Okafor",
      role: "Medical Partner",
      content:
        "Their healthcare initiatives have reached thousands in remote areas where help was desperately needed.",
      rating: 5
    }
  ];

  const newsItems = [
    {
      title: "New School Opens in Rural Tanzania",
      date: "June 15, 2025",
      excerpt:
        "Celebrating the opening of our 25th school, bringing quality education to 400 more children.",
      image: "🎓"
    },
    {
      title: "Healthcare Campaign Reaches 10,000 People",
      date: "June 10, 2025",
      excerpt:
        "Our mobile clinic initiative has provided essential medical care to underserved communities.",
      image: "⚕️"
    },
    {
      title: "Sustainability Project Wins Global Award",
      date: "June 5, 2025",
      excerpt:
        "Our environmental conservation project recognized for outstanding community impact.",
      image: "🌍"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].bgColor} transition-all duration-1000`}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4 sm:px-6">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
                {heroSlides[currentSlide].title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#195C70] text-white rounded-full hover:bg-[#3C6674] transform hover:scale-105 transition-all text-lg font-semibold">
                  Donate Now <Heart className="inline w-5 h-5 ml-2" />
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#195C70] transition-all text-lg font-semibold">
                  Learn More <ArrowRight className="inline w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#195C70] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3C6674] transition-all">
                    <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#020202] mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-[#3C6674] font-medium text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Foundation Intro */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#020202] mb-6 sm:mb-8">
              About Our Foundation
            </h2>
            <p className="text-lg sm:text-xl text-[#3C6674] mb-8 sm:mb-12 leading-relaxed">
              For over a decade, we have been dedicated to creating lasting
              change in underserved communities worldwide. We believe that every
              person deserves access to education, healthcare, and opportunities
              for growth. Our comprehensive approach ensures sustainable impact
              that transforms lives and builds stronger communities.
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#195C70] text-white rounded-full hover:bg-[#3C6674] transition-all font-semibold">
              Learn More About Us <ArrowRight className="inline w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#020202] mb-4 sm:mb-6">
              Latest News
            </h2>
            <p className="text-lg sm:text-xl text-[#3C6674] max-w-3xl mx-auto">
              Stay updated with our recent achievements and ongoing initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="text-4xl sm:text-5xl mb-4">{item.image}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#020202] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#44A7B6] text-sm sm:text-base mb-4">
                    {item.date}
                  </p>
                  <p className="text-[#3C6674] mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <button className="text-[#195C70] font-semibold hover:text-[#3C6674] transition-colors flex items-center">
                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Programs */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#020202] mb-4 sm:mb-6">
              Our Programs
            </h2>
            <p className="text-lg sm:text-xl text-[#3C6674] max-w-3xl mx-auto">
              Comprehensive initiatives designed to address the most pressing
              needs in communities worldwide
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-[#195C70] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl sm:text-5xl mb-4">
                    {program.image}
                  </div>
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[#195C70] group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 transition-all">
                    <IconComponent className="w-6 sm:w-8 h-6 sm:h-8 text-white group-hover:text-[#195C70]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#020202] group-hover:text-white mb-4 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-[#3C6674] group-hover:text-white/90 leading-relaxed mb-6 transition-colors">
                    {program.description}
                  </p>
                  <button className="text-[#195C70] group-hover:text-white font-semibold transition-colors flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#020202] mb-4 sm:mb-6">
              Impact Stories
            </h2>
            <p className="text-lg sm:text-xl text-[#3C6674] max-w-3xl mx-auto">
              Hear from the people whose lives have been transformed by our work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-[#3C6674] mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-bold text-[#020202]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#44A7B6] text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-r from-[#195C70] to-[#3C6674] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Make a Difference Today
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join our mission to create lasting change. Whether through
            donations, volunteering, or partnerships, your contribution helps us
            build bridges to brighter futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#195C70] rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all text-lg font-semibold">
              <Heart className="inline w-5 h-5 mr-2" />
              Donate Now
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#195C70] transition-all text-lg font-semibold">
              <UserPlus className="inline w-5 h-5 mr-2" />
              Become a Volunteer
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#195C70] transition-all text-lg font-semibold">
              <Globe className="inline w-5 h-5 mr-2" />
              Partner With Us
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#020202] mb-4 sm:mb-6">
              Stay Connected
            </h2>
            <p className="text-lg sm:text-xl text-[#3C6674] mb-8">
              Subscribe to our newsletter for updates on our latest projects and
              impact stories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#195C70] focus:ring-2 focus:ring-[#195C70]/20"
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-[#195C70] text-white rounded-full hover:bg-[#3C6674] transition-all font-semibold whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Donate Button */}
      <div className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 z-40">
        <button className="w-12 sm:w-16 h-12 sm:h-16 bg-[#195C70] text-white rounded-full shadow-2xl hover:bg-[#3C6674] transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <Heart className="w-5 sm:w-6 h-5 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default HomePage;