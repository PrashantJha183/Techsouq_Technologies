import FAQ_One from "/src/components/base/FAQ_One.jsx";
import FAQ_two from "/src/components/base/FAQ_two.jsx";
import LastPage from "../components/base/LastPage";
import Header from "../components/base/Header";
import Hero from "../components/case/Hero";
import Discover from "../components/case/Discover";
import Challenge from "../components/case/Challenge";
import Solution from "../components/case/Solution";
import Results from "../components/case/Results";
const CaseStudyView = () => {
  return (
    <>
      <Header />
      <Hero />
      <Discover />
      <Challenge />
      <Solution />
      <Results />
      <FAQ_One />
      <FAQ_two />
      <LastPage />
    </>
  );
};

export default CaseStudyView;
