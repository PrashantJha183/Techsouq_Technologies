import FAQ_One from "/src/components/base/FAQ_One.jsx";
import FAQ_two from "/src/components/base/FAQ_two.jsx";
import LastPage from "../components/base/LastPage";
import Header from "../components/base/Header";
import Hero from "../components/base/Hero";

const BlogView = () => {
  return (
    <>
      <Header />
      <Hero />
      <FAQ_One />
      <FAQ_two />
      <LastPage />
    </>
  );
};

export default BlogView;
