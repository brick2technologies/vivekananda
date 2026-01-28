import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import AboutVivekananda from "./pages/AboutPage";
import Admissions from "./pages/AdmissionPage";
import GalleryPage from "./pages/GalleryPage";
import Contact from "./pages/ContactPage";
import ViviKidsPage from "./pages/ViviKidsPage";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";






function App() {
  return (
    <Router>
      <main className="min-h-screen bg-gray-50">
        {/* The Navbar stays visible on all pages */}
        <Navbar />
        <ScrollToTop />

        {/* This area switches content based on the URL */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutVivekananda />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vivikids" element={<ViviKidsPage />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

export default App;