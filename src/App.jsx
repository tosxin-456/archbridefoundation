import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/home";
import AboutUsPage from "./pages/about";
import ContactFAQPages from "./pages/contact us";
import NewsPage from "./pages/news";
import Gallery from "./pages/gallery";
import ProgramsProjects from "./pages/programs";
import ScrollToTopButton from "./components/TopScroll";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Wrapper to access location inside Router
const AppContent = () => {
  const location = useLocation();

  const showScrollButton = location.pathname !== "/";

  return (
    <>
      <GoogleOAuthProvider clientId="569787261643-4um4s5h4a81km5od7ju1hacplki0372h.apps.googleusercontent.com">
        <Navbar />
        <main className="min-h-[calc(100vh-200px)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactFAQPages />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/programs" element={<ProgramsProjects />} />
          </Routes>
        </main>
        {showScrollButton && <ScrollToTopButton />}
        <Footer />
      </GoogleOAuthProvider>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
