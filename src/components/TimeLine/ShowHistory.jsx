import React from "react";
import { CiBeerMugFull } from "react-icons/ci";

const ShowHistory = ({year}) => {
  return (
    <div className="TL-1">
      <h2 className="heading-font">{year}</h2>
      <div className="mug">
        <span className="left_line" />
        
            <CiBeerMugFull />
      
        <span className="right_line" />
      </div>
      <p className="normal-font">
        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
      </p>
    </div>
  );
};


export default ShowHistory;
