import Contact from "./components/Contact";
import FAQ from "./components/Faq";
import Industries from "./components/Industries";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/Whychooseus";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;