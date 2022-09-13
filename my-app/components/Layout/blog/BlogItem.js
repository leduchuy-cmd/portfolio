import React from "react";

const BlogItem = (props) => {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl font-medium">
            <a href="">{props.title}</a>
          </h2>
          <p className="mb-6 mt-4 text-2xl">
            <span className="text-xl font-normal">{props.year}</span>{" "}
            <span className="mx-6">|</span>
            <span className="text-orange-400">{props.description}</span>
          </p>
          <p className="font-normal">{props.subtitle}</p>
        </div>
        <div className="border-b-4 border-indigo-500 my-5"></div>
      </div>
    </>
  );
};

export default BlogItem;
