import FAQ_One from "/src/components/base/FAQ_One.jsx";
import FAQ_two from "/src/components/base/FAQ_two.jsx";
import LastPage from "../components/base/LastPage";
import First from "../components/service/First";
import Header from "../components/base/Header";
import ChooseUs from "../components/service/ChooseUs";
import Choose from "../components/service/Choose";
import Services from "../components/base/Services";

const ServiceView = () => {
  return (
    <>
      <Header />
      <First />
      <Choose />
      <ChooseUs />
      <Services />
      <FAQ_One />
      <FAQ_two />
      <LastPage />
    </>
  );
};

export default ServiceView;
