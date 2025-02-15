import "./App.css";

// import Home from "../src/pages/Home.jsx";
// import AboutUS from "../src/pages/AboutUS.jsx";
// import Services from "../src/pages/Services.jsx";

// import Questions1 from "./pages/Questions1.jsx";
// import Questions2 from "./pages/Questions2.jsx";
// import Phase from "./pages/Phase.jsx";
// import ContactUS from "./pages/ContactUs.jsx";
// import Last_page from "./pages/Last_page.jsx";
// import Others from "./pages/Others.jsx";
import Header from "./components/base/Header.jsx";
import FAQ_One from "./components/base/FAQ_One.jsx";
import Footer from "./components/base/Footer.jsx";
import FAQ_two from "./components/base/FAQ_two.jsx";
function App() {
  return (
    <>
      <Header />
      {/* <Home />
      <AboutUS />
      <Services />
      <Questions1 />
      <Questions2 />
      <Others />
      <Phase />
      <Last_page />

      <ContactUS />
      <Others /> */}
      <FAQ_One />
      <FAQ_two />
      <Footer />
    </>
  );
}

export default App;
