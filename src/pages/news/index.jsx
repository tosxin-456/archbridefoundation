import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  User,
  Tag,
  ChevronLeft,
  ChevronRight,
  Filter
} from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import SignInWithGoogle from "../../components/GoogleSignIn";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");

  const articlesPerPage = 6;
  const categories = [
    "All",
    "Announcements",
    "Events",
    "Partnerships",
    "Technology",
    "Community"
  ];

  // Dummy news data
  const dummyArticles = [
    {
      id: 1,
      title: "Major Partnership Announcement: Expanding Global Reach",
      excerpt:
        "We're excited to announce our strategic partnership with leading international organizations to expand our services globally.",
      content:
        "In a groundbreaking move that will reshape our industry landscape, we are thrilled to announce our strategic partnership with three leading international organizations. This collaboration will enable us to expand our services to over 50 new markets worldwide, bringing innovative solutions to millions of new users.\n\nThe partnership, which has been in development for over 18 months, represents a significant milestone in our company's growth trajectory. Our CEO stated, 'This alliance will not only expand our global footprint but also enhance our ability to deliver cutting-edge solutions that meet the diverse needs of our international customer base.'\n\nKey benefits of this partnership include enhanced technological capabilities, expanded market reach, and improved customer support across multiple time zones. We expect to see the first implementations of this partnership in Q3 2025, with full global rollout planned for early 2026.",
      category: "Partnerships",
      author: "Sarah Johnson",
      date: "2025-06-15",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
      likes: 234,
      isLiked: false,
      tags: ["Partnership", "Global", "Expansion"]
    },
    {
      id: 2,
      title: "Annual Tech Conference 2025: Innovation Showcase",
      excerpt:
        "Join us for our biggest technology conference yet, featuring cutting-edge innovations and industry leaders.",
      content:
        "Our Annual Tech Conference 2025 is set to be our most ambitious event yet, bringing together over 5,000 technology enthusiasts, industry leaders, and innovators from around the world. The three-day event will showcase the latest technological advancements and provide networking opportunities like never before.\n\nThis year's theme, 'Innovation Beyond Boundaries,' reflects our commitment to pushing the limits of what's possible in technology. Attendees will have access to over 100 sessions, workshops, and demonstrations across multiple tracks including AI, blockchain, cybersecurity, and sustainable technology.\n\nKeynote speakers include renowned industry leaders and visionaries who will share insights on the future of technology and its impact on society. Early bird registration is now open with special discounts for students and nonprofit organizations.",
      category: "Events",
      author: "Michael Chen",
      date: "2025-06-14",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
      likes: 187,
      isLiked: false,
      tags: ["Conference", "Technology", "Innovation"]
    },
    {
      id: 3,
      title: "Product Update: Enhanced Security Features",
      excerpt:
        "We've implemented advanced security measures to protect your data and ensure privacy compliance.",
      content:
        "Security has always been our top priority, and today we're excited to announce significant enhancements to our platform's security infrastructure. These updates include advanced encryption protocols, multi-factor authentication improvements, and enhanced privacy controls.\n\nThe new security features include end-to-end encryption for all data transmissions, advanced threat detection systems, and comprehensive audit logging. We've also implemented zero-trust architecture principles to ensure that every access request is thoroughly verified.\n\nOur security team has worked tirelessly to ensure these updates meet the highest industry standards while maintaining the seamless user experience our customers expect. All existing users will automatically benefit from these enhancements with no action required on their part.",
      category: "Announcements",
      author: "David Rodriguez",
      date: "2025-06-13",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
      likes: 156,
      isLiked: false,
      tags: ["Security", "Privacy", "Update"]
    },
    {
      id: 4,
      title: "Community Spotlight: Local Impact Initiative",
      excerpt:
        "Highlighting our community's efforts in making a positive impact through technology and innovation.",
      content:
        "Our community continues to amaze us with their innovative use of our platform to create positive change in their local communities. This month, we're spotlighting several remarkable initiatives that demonstrate the power of technology to solve real-world problems.\n\nFrom educational programs that teach coding to underserved youth, to environmental monitoring systems that help communities track and improve air quality, our users are leveraging technology for social good. These initiatives have reached over 10,000 individuals across 25 communities worldwide.\n\nWe're committed to supporting these efforts through our Community Impact Grant program, which provides funding and technical support to qualifying projects. Applications for the next round of grants open next month, and we encourage all community members to consider how they might contribute to positive change in their area.",
      category: "Community",
      author: "Emily Watson",
      date: "2025-06-12",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop",
      likes: 298,
      isLiked: false,
      tags: ["Community", "Impact", "Social Good"]
    },
    {
      id: 5,
      title: "AI Integration: The Future of Automation",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing our platform and creating new possibilities.",
      content:
        "Artificial Intelligence is transforming the way we approach problem-solving and automation. Our latest AI integration brings unprecedented capabilities to our platform, enabling users to accomplish tasks faster and more efficiently than ever before.\n\nThe new AI features include intelligent data analysis, automated workflow optimization, and predictive analytics that help users make informed decisions. Machine learning algorithms continuously improve the system's performance based on user interactions and feedback.\n\nWe've designed these AI capabilities with user privacy and control in mind. Users maintain full ownership of their data, and the AI operates transparently, providing explanations for its recommendations and decisions. This approach ensures that AI enhances human capabilities rather than replacing human judgment.",
      category: "Technology",
      author: "Alex Thompson",
      date: "2025-06-11",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      likes: 412,
      isLiked: false,
      tags: ["AI", "Automation", "Machine Learning"]
    },
    {
      id: 6,
      title: "Quarterly Results: Record Growth and Expansion",
      excerpt:
        "Our Q2 2025 results show exceptional growth across all key metrics and successful market expansion.",
      content:
        "We're thrilled to share our Q2 2025 quarterly results, which demonstrate record-breaking growth and successful execution of our strategic initiatives. Revenue increased by 45% year-over-year, while user engagement metrics reached all-time highs.\n\nKey highlights include the successful launch of our services in 15 new markets, the acquisition of two complementary technology companies, and the expansion of our team by 200 talented professionals. Customer satisfaction scores have also improved significantly, with our Net Promoter Score reaching 78.\n\nLooking ahead to Q3, we remain optimistic about our growth trajectory and are excited about several upcoming product launches that will further enhance our market position. We thank our customers, partners, and team members for their continued support and dedication.",
      category: "Announcements",
      author: "Jennifer Park",
      date: "2025-06-10",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      likes: 189,
      isLiked: false,
      tags: ["Growth", "Results", "Business"]
    }
  ];

  useEffect(() => {
    setArticles(dummyArticles);
    setFilteredArticles(dummyArticles);

    // Initialize comments
    const initialComments = {};
    dummyArticles.forEach((article) => {
      initialComments[article.id] = [
        {
          id: 1,
          author: "John Doe",
          content: "Great article! Very informative.",
          date: "2025-06-16"
        },
        {
          id: 2,
          author: "Jane Smith",
          content: "Thanks for sharing this insight.",
          date: "2025-06-16"
        }
      ];
    });
    setComments(initialComments);
  }, []);

  useEffect(() => {
    let filtered = articles;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredArticles(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm, articles]);

  const handleLike = (articleId) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    setArticles(
      articles.map((article) =>
        article.id === articleId
          ? {
              ...article,
              likes: article.isLiked ? article.likes - 1 : article.likes + 1,
              isLiked: !article.isLiked
            }
          : article
      )
    );
  };

  const handleComment = (articleId) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }

    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "Current User",
        content: newComment,
        date: new Date().toISOString().split("T")[0]
      };

      setComments((prev) => ({
        ...prev,
        [articleId]: [...(prev[articleId] || []), comment]
      }));
      setNewComment("");
    }
  };

  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const LoginModal = () => {
    const modalRef = useRef(null);

    // Close modal on outside click
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowLoginModal(false);
      }
    };

    // Attach event listener to handle outside clicks
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div
          ref={modalRef}
          className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4"
        >
          {/* X Close Button */}
          <button
            onClick={() => setShowLoginModal(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Login Required
          </h3>
          <SignInWithGoogle />
        </div>
      </div>
    );
  };

  const ArticleModal = ({ article, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900 pr-4">
              {article.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>

          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                {article.category}
              </span>
            </div>
          </div>

          <div className="prose max-w-none mb-6">
            {article.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex gap-2 mb-6">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pb-6 border-b">
            <button
              onClick={() => handleLike(article.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                article.isLiked
                  ? "bg-red-100 text-red-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${article.isLiked ? "fill-current" : ""}`}
              />
              <span>{article.likes}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{comments[article.id]?.length || 0}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
              <Share2 className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-4">Comments</h4>

            <div className="mb-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={
                  isLoggedIn ? "Write a comment..." : "Please log in to comment"
                }
                disabled={!isLoggedIn}
                className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
              <button
                onClick={() => handleComment(article.id)}
                disabled={!isLoggedIn || !newComment.trim()}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Post Comment
              </button>
            </div>

            <div className="space-y-4">
              {comments[article.id]?.map((comment) => (
                <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-900">
                      {comment.author}
                    </span>
                    <span className="text-sm text-gray-500">
                      {comment.date}
                    </span>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="min-h-screen mt-[70px] "
      style={{ backgroundColor: "#020202" }}
    >
      {/* Header */}
      <header className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">News & Updates</h1>
          <p className="text-gray-300">
            Stay updated with our latest announcements and insights
          </p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ color: "#0A3549" }}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                style={{
                  backgroundColor:
                    selectedCategory === category ? "#286374" : undefined
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: "#286374" }}
                    >
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.date}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(article.id);
                        }}
                        className={`flex items-center gap-1 text-sm transition-colors ${
                          article.isLiked
                            ? "text-red-600"
                            : "text-gray-500 hover:text-red-600"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            article.isLiked ? "fill-current" : ""
                          }`}
                        />
                        <span>{article.likes}</span>
                      </button>

                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MessageCircle className="w-4 h-4" />
                        <span>{comments[article.id]?.length || 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-4 mb-12">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex gap-1">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === index + 1
                      ? "text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{
                    backgroundColor:
                      currentPage === index + 1 ? "#286374" : undefined
                  }}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Login Status */}
      <div className="px-4 mb-8">
        <div className="max-w-6xl mx-auto text-center">
          {isLoggedIn ? (
            <div className="flex items-center justify-center gap-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Logged in as Current User</span>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="ml-4 px-3 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="text-gray-400">
              <span>Not logged in - </span>
              <button
                onClick={() => setShowLoginModal(true)}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Login to like and comment
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {showLoginModal && <LoginModal />}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
};

export default NewsPage;
