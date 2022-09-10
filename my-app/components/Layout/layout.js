import Header from "../Header";
import Features from "./Features";
import Intro from "./Intro";
import RecentPost from "./RecentPost";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {/* {children} */}
      <Intro></Intro>
      <RecentPost></RecentPost>
      <Features></Features>
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </>
  );
};

export default Layout;
