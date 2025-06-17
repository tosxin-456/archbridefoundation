import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/home";
import AboutUsPage from "./pages/about";
import ContactFAQPages from "./pages/contact us";
import NewsPage from "./pages/news";
import DonationComponent from "./pages/donations";
// import other pages when available
// import AboutPage from "./pages/about";
// import GalleryPage from "./pages/gallery";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-[calc(100vh-200px)]">
        {" "}
        {/* adjust for footer height */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactFAQPages />} />
          <Route path="/news" element={<NewsPage />} />
          {/* <Route path="/donate" element={<DonationComponent />} /> */}

          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/gallery" element={<GalleryPage />} /> */}
          {/* Add more routes here as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
