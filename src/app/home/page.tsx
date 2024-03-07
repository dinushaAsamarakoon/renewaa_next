import Banner from "./components/Banner";
import Working from "./components/Working";
import About from "./components/About";
import Funfact from "./components/Funfat";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="boxed_wrapper blue-color">
      <Banner />
      {/* banner-section end */}
      {/* about-section */}
      <About />

      {/* about-section end */}
      {/* funfact-section */}
      <Funfact />
      {/* funfact-section end */}
      {/* service-style-two */}
      <Services />
      {/* service-style-two end */}
      {/* working-section */}
      <Working />
      {/* working-section end */}
      {/* project-section */}
      <Projects />
      {/* project-section end */}

      {/* scroll to top */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="flaticon-up-arrow" />
      </button>
    </div>
  );
}
