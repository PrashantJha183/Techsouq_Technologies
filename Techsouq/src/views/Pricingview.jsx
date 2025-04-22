import FAQ_One from "/src/components/base/FAQ_One.jsx";
import Hero from "../components/pricing/Hero";
import FAQ_two from "/src/components/base/FAQ_two.jsx";
import LastPage from "../components/base/LastPage";
import Header from "../components/base/Header";
import Custom from "../components/pricing/Custom";
import Pricing from "../components/pricing/Pricing";

const PricingView = () => {
  return (
    <>
      <Header />
      <Hero />
      <Custom />
      <Pricing />
      <FAQ_One />
      <FAQ_two />
      <LastPage />
    </>
  );
};

export default PricingView;
