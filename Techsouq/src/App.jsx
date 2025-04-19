import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/base/Header";
import Home from "./views/HomepageView";
import About from "./views/AboutUsView";
import Service from "./views/ServiceView";
import Pricing from "./views/Pricingview";
import CaseStudy from "./views/CaseStudyView";
import Blog from "./views/BlogView";
import Contact from "./views/ContactView";
import Footer from "./components/base/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
