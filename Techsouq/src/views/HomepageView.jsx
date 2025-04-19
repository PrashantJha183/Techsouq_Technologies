import FAQ_One from "/src/components/base/FAQ_One.jsx";
import FAQ_two from "/src/components/base/FAQ_two.jsx";
import Home from "/src/components/homepage/Home.jsx";
import AboutUS from "/src/components/homepage/AboutUS.jsx";
import Services from "/src/components/homepage/Services.jsx";
import Choose from "/src/components/homepage/ChooseUS.jsx";
import LastPage from "../components/base/LastPage";
import Testimonial from "../components/homepage/Testimonial";

const HomepageView = () => {
  return (
    <>
      {/* <Header /> */}
      <Home />
      <AboutUS />
      <Services />
      <Choose />
      <Testimonial />
      <FAQ_One />
      <FAQ_two />
      <LastPage />
    </>
  );
};

export default HomepageView;
