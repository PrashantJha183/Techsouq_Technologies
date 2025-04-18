import Header from "/src/components/base/Header.jsx";
import FAQ_One from "/src/components/base/FAQ_One.jsx";
import Footer from "/src/components/base/Footer.jsx";
import FAQ_two from "/src/components/base/FAQ_two.jsx";
// import Home from "/src/components/homepage/Home.jsx";
import AboutUS from "/src/components/homepage/AboutUS.jsx";
import Services from "/src/components/homepage/Services.jsx";
import Choose from "/src/components/homepage/ChooseUS.jsx";
function HomepageView() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <AboutUS />
      <Services />
      <Choose />
      <FAQ_One />
      <FAQ_two />
      <Footer />
    </>
  );
}

export default HomepageView;
