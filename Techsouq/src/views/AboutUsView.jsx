import FAQ_One from "/src/components/base/FAQ_One.jsx";
import FAQ_two from "/src/components/base/FAQ_two.jsx";
import LastPage from "../components/base/LastPage";
import Testimonial from "../components/base/Testimonial";
import Hero from "../components/about/Hero";
import Header from "../components/base/Header";
import AboutUs from "../components/about/AboutUs";
import Team from "../components/about/Team";

const AboutUsView = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Team />
      <Testimonial />
      <FAQ_One />
      <FAQ_two />
      <LastPage />
    </>
  );
};

export default AboutUsView;
