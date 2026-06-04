import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
// Services will be lazy-loaded below
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Suspense, lazy } from "react";

const FAQ = lazy(() => import("./components/Faq"));
const Industries = lazy(() => import("./components/Industries"));
const Process = lazy(() => import("./components/Process"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const WhyChooseUs = lazy(() => import("./components/Whychooseus"));
const LazyServices = lazy(() => import("./components/Services"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <a className="skip-link" href="#main">Skip to main content</a>
      <Hero />
      <main id="main">
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
      <Footer />
    </div>
  );
}

export default App;