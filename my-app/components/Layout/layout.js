import Footer from "../footer/Footer";
import Header from "../Header/Header";
import FeatureList from "./feature/FeatureList";
import Intro from "./Intro";
import RecentPost from "./RecentPost";

const Layout = () => {
  return (
    <>
      <div>
        <Header></Header>
        <Intro></Intro>
        <RecentPost></RecentPost>
        <FeatureList></FeatureList>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
