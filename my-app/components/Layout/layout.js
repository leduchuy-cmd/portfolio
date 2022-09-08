import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* <header> */}
      <Header>a</Header>
      {/* </header> */}
      {children}
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </>
  );
};

export default Layout;
