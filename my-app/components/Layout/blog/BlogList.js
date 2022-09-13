import React from "react";
import { data } from "../../../pages/title";
import BlogItem from "./BlogItem";

const BlogList = () => {
  return (
    <div>
      {data.blog.map((item) => {
        return (
          <BlogItem
            key={item.id}
            title={item.title}
            year={item.year}
            description={item.description}
            subtitle={item.subtitle}
          ></BlogItem>
        );
      })}
    </div>
  );
};

export default BlogList;
