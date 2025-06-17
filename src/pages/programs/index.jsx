import React, { useState } from "react";
import {
  Calendar,
  Users,
  Target,
  CheckCircle,
  Clock,
  Heart,
  UserPlus,
  ChevronDown,
  ChevronUp,
  Play,
  Image,
  MapPin,
  Award,
  Book,
  Home,
  Utensils,
  GraduationCap,
  Plus,
  Minus
} from "lucide-react";

const ProgramsProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    "All",
    "Education",
    "Healthcare",
    "Community Development",
    "Emergency Relief",
    "Youth Programs"
  ];
  const years = ["All", "2024", "2023", "2022", "2021"];

  const programs = [
    {
      id: 1,
      title: "Digital Literacy for All",
      category: "Education",
      year: 2024,
      status: "Ongoing",
      description:
        "Empowering communities with essential digital skills through comprehensive training programs and technology access.",
      goals: [
        "Train 500+ individuals",
        "Establish 5 computer labs",
        "Create online learning platform"
      ],
      progress: 75,
      beneficiaries: 342,
      location: "Lagos, Nigeria",
      images: [
        "/api/placeholder/400/250",
        "/api/placeholder/400/250",
        "/api/placeholder/400/250"
      ],
      videoThumbnail: "/api/placeholder/400/250",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      category: "Community Development",
      year: 2024,
      status: "Ongoing",
      description:
        "Providing sustainable access to clean water through well drilling, filtration systems, and community education.",
      goals: [
        "Install 20 water points",
        "Serve 2000+ people",
        "Train local maintenance teams"
      ],
      progress: 60,
      beneficiaries: 1250,
      location: "Rural Communities",
      images: ["/api/placeholder/400/250", "/api/placeholder/400/250"],
      videoThumbnail: "/api/placeholder/400/250",
      icon: <Home className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Mobile Health Clinics",
      category: "Healthcare",
      year: 2023,
      status: "Completed",
      description:
        "Brought essential healthcare services to underserved communities through mobile medical units.",
      goals: [
        "Serve 50 communities",
        "Conduct 1000+ consultations",
        "Provide vaccinations"
      ],
      progress: 100,
      beneficiaries: 1800,
      location: "Northern Nigeria",
      images: [
        "/api/placeholder/400/250",
        "/api/placeholder/400/250",
        "/api/placeholder/400/250",
        "/api/placeholder/400/250"
      ],
      videoThumbnail: "/api/placeholder/400/250",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Youth Leadership Academy",
      category: "Youth Programs",
      year: 2023,
      status: "Completed",
      description:
        "Developing the next generation of leaders through mentorship, skills training, and community service projects.",
      goals: [
        "Train 100 youth leaders",
        "Complete 20 community projects",
        "Establish mentorship network"
      ],
      progress: 100,
      beneficiaries: 156,
      location: "Abuja & Lagos",
      images: ["/api/placeholder/400/250", "/api/placeholder/400/250"],
      videoThumbnail: "/api/placeholder/400/250",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Emergency Food Relief",
      category: "Emergency Relief",
      year: 2022,
      status: "Completed",
      description:
        "Provided critical food assistance during regional crisis, ensuring families had access to nutritious meals.",
      goals: [
        "Distribute 10,000 food packages",
        "Serve 5000 families",
        "Establish food distribution centers"
      ],
      progress: 100,
      beneficiaries: 5200,
      location: "Northeastern Nigeria",
      images: [
        "/api/placeholder/400/250",
        "/api/placeholder/400/250",
        "/api/placeholder/400/250"
      ],
      videoThumbnail: "/api/placeholder/400/250",
      icon: <Utensils className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Scholarship Program",
      category: "Education",
      year: 2022,
      status: "Ongoing",
      description:
        "Supporting promising students from disadvantaged backgrounds to pursue higher education and achieve their dreams.",
      goals: [
        "Award 50 scholarships",
        "Maintain 95% graduation rate",
        "Provide mentorship support"
      ],
      progress: 85,
      beneficiaries: 47,
      location: "National",
      images: ["/api/placeholder/400/250", "/api/placeholder/400/250"],
      videoThumbnail: "/api/placeholder/400/250",
      icon: <Book className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      question: "How can I volunteer for your programs?",
      answer:
        "We welcome volunteers! You can apply through our volunteer portal on our website, attend one of our orientation sessions, or contact us directly. We have opportunities for various skills and time commitments, from one-day events to long-term project involvement."
    },
    {
      question: "What types of support do you accept?",
      answer:
        "We accept financial donations, in-kind contributions (supplies, equipment), professional services (legal, accounting, marketing), and volunteer time. Corporate partnerships and grant funding are also welcome. All contributions are tax-deductible."
    },
    {
      question: "How do you select communities for your programs?",
      answer:
        "We use a comprehensive needs assessment process that includes community consultations, demographic analysis, and partnership with local organizations. Priority is given to underserved areas with the greatest need and community readiness for collaboration."
    },
    {
      question: "Can I start a program in my community?",
      answer:
        "Absolutely! We encourage community-led initiatives. Contact our Community Outreach team to discuss your ideas. We provide guidance on program development, funding opportunities, and implementation support for viable community-driven projects."
    },
    {
      question: "How do you measure program success?",
      answer:
        "We use both quantitative metrics (beneficiaries served, goals achieved) and qualitative assessments (community feedback, long-term impact studies). Regular monitoring and evaluation ensure programs meet their objectives and create lasting positive change."
    }
  ];

  const filteredPrograms = programs.filter((program) => {
    const categoryMatch =
      selectedCategory === "All" || program.category === selectedCategory;
    const yearMatch =
      selectedYear === "All" || program.year.toString() === selectedYear;
    return categoryMatch && yearMatch;
  });

  const getStatusColor = (status) => {
    return status === "Ongoing" ? "text-green-600" : "text-blue-600";
  };

  const getStatusBg = (status) => {
    return status === "Ongoing" ? "bg-green-100" : "bg-blue-100";
  };

  return (
    <div className="min-h-screen bg-white" style={{ marginTop: "70px" }}>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0A3549] to-[#286374] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Programs & Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Transforming communities through impactful initiatives that
              address real needs and create lasting change
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#286374] focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#286374] focus:border-transparent"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={program.images[0]}
                  alt={program.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBg(
                      program.status
                    )} ${getStatusColor(program.status)}`}
                  >
                    {program.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-[#286374] text-white p-2 rounded-full">
                  {program.icon}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#020202] mb-2">
                      {program.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>
                        {program.year} • {program.category}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{program.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Progress Bar */}
                {program.status === "Ongoing" && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{program.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#286374] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${program.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Users className="w-6 h-6 text-[#286374] mx-auto mb-1" />
                    <div className="text-2xl font-bold text-[#020202]">
                      {program.beneficiaries.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Beneficiaries</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Target className="w-6 h-6 text-[#286374] mx-auto mb-1" />
                    <div className="text-2xl font-bold text-[#020202]">
                      {program.goals.length}
                    </div>
                    <div className="text-sm text-gray-600">Key Goals</div>
                  </div>
                </div>

                {/* Goals */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#020202] mb-3">
                    Program Goals:
                  </h4>
                  <ul className="space-y-2">
                    {program.goals.map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#286374] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Media Gallery Preview */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#020202] mb-3">
                    Media Gallery:
                  </h4>
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {program.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${program.title} gallery ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    ))}
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <img
                        src={program.videoThumbnail}
                        alt="Video thumbnail"
                        className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-[#286374] text-white py-3 px-4 rounded-lg hover:bg-[#0A3549] transition-colors duration-200 flex items-center justify-center">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Volunteer
                  </button>
                  <button className="flex-1 bg-white text-[#286374] py-3 px-4 rounded-lg border-2 border-[#286374] hover:bg-[#286374] hover:text-white transition-all duration-200 flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Support
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#020202] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our programs and how you can
              get involved
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                >
                  <span className="font-semibold text-[#020202] text-lg">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <Minus className="w-5 h-5 text-[#286374] flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#286374] flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-[#0A3549] to-[#286374] text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in creating positive change in communities across Nigeria.
            Whether through volunteering, donations, or partnerships, every
            contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#286374] py-4 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              <UserPlus className="w-5 h-5 mr-2" />
              Become a Volunteer
            </button>
            <button className="bg-transparent text-white py-4 px-8 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-[#286374] transition-all duration-200 flex items-center justify-center">
              <Heart className="w-5 h-5 mr-2" />
              Make a Donation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsProjects;
