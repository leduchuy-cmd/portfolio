import React from "react";
const Features = (props) => {
  console.log(props);
  return (
    <div className="mb-5 max-w-5xl mx-auto">
      <div className="flex">
        <div>
          <a href="">
            <img src={props.image} alt="" />
          </a>
        </div>
        <div className="ml-5">
          <h3 className="font-bold text-3xl mb-6">
            <a href="">{props.title}</a>
          </h3>
          <div className="mb-6">
            <span className="mr-3 text-lg font-black text-white bg-black rounded-2xl py-1 px-2">
              {props.year}
            </span>
            <span className="text-slate-300 text-xl font-normal">
              {props.description}
            </span>
          </div>
          <p className="text-base">{props.subtitle}</p>
        </div>
      </div>
      <div className="border-b-4 border-indigo-500 mt-6"></div>
    </div>
  );
};

export default Features;
