import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import Products from "./pages/Products";
import SurveyDrone from "./pages/SurveyDrone";
import CounterDrone from "./pages/CounterDrone";
import SurveillanceDrone from "./pages/SurveillanceDrone";
import Knowledge from "./pages/Knowledge";
import Article from "./pages/Article";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CaseStudies from "./components/CaseStudies";

const FAQ = lazy(() => import("./components/Faq"));
const Industries = lazy(() => import("./components/Industries"));
const Process = lazy(() => import("./components/Process"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const WhyChooseUs = lazy(() => import("./components/Whychooseus"));
const LazyServices = lazy(() => import("./components/Services"));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <a className="skip-link" href="#main">Skip to main content</a>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <main id="main">
                  <HomeContent />
                  <Suspense fallback={<div>Loading services...</div>}>
                    <LazyServices />
                  </Suspense>
                  <Suspense fallback={<div>Loading...</div>}>
                    <WhyChooseUs />
                    <Industries />
                    <Process />
                    <Testimonials />
                    <FAQ />
                  </Suspense>
                  <Contact />
                </main>
              </>
            }
          />
          {/* Support direct visits to /index.html or /index served by static servers */}
          <Route
            path="/index.html"
            element={<Navigate to="/" replace />}
          />
          <Route
            path="/index"
            element={<Navigate to="/" replace />}
          />

          <Route path="/products" element={<Products />} />
          <Route path="/survey-drone" element={<SurveyDrone />} />
          <Route path="/counter-drone" element={<CounterDrone />} />
          <Route path="/surveillance-drone" element={<SurveillanceDrone />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/knowledge/:slug" element={<Article />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;