import FAQ_One from "/src/components/base/FAQ_One.jsx";
import FAQ_two from "/src/components/base/FAQ_two.jsx";
import LastPage from "../components/base/LastPage";
import Service from "../components/base/Services";

const ServiceView = () => {
  return (
    <>
      <Service />
      <FAQ_One />
      <FAQ_two />
      <LastPage />
    </>
  );
};

export default ServiceView;
