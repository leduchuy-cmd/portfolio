import Header from "../Header/Header";
import FeatureList from "./feature/FeatureList";
import Features from "./feature/Features";
import Intro from "./Intro";
import RecentPost from "./RecentPost";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <RecentPost></RecentPost>
      <FeatureList></FeatureList>
    </>
  );
};

export default Layout;
