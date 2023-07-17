import About from "../components/About";
import Contact from "../components/Contact";
import Events from "../components/Events";
import Hero from "../components/Hero";
import Leadership from "../components/Leadership";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Partners from "../components/partners/Partners";
import Testimonial from "../components/testimonial/Testimonial";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Events />
      <Services />
      <Projects />
      {/* <Testimonial /> */}
      <Contact />
      <Partners />
    </div>
  );
};

export default Landing;
