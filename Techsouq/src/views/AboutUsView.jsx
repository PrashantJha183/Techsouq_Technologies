import FAQ_One from "/src/components/base/FAQ_One.jsx";

import FAQ_two from "/src/components/base/FAQ_two.jsx";

import LastPage from "../components/base/LastPage";
import Testimonial from "../components/base/Testimonial";

const AboutUsView = () => {
  return (
    <>
      <Testimonial />
      <FAQ_One />
      <FAQ_two />
      <LastPage />
    </>
  );
};

export default AboutUsView;
