import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import BlogItem from "../../components/Layout/blog/BlogItem";
import BlogList from "../../components/Layout/blog/BlogList";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <BlogList></BlogList>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
