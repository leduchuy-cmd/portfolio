import React from "react";
import { data } from "../../../pages/title";
import Features from "./Features";

const FeatureList = (props) => {
  return (
    <div>
      {data.info.map((item) => {
        return (
          <Features
            key={item.id}
            image={item.image}
            title={item.title}
            year={item.year}
            description={item.description}
            subtitle={item.subtitle}
          ></Features>
        );
      })}
    </div>
  );
};

export default FeatureList;
