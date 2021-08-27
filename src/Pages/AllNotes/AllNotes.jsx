import React from "react";
import { useState } from "react";
import Horizontal from "@alphasquad/horizontal-scroll-view";

const AllNotesCreate = () => {
  const Item = (props) => {
    let { item } = props;
    return (
      <div className="contentWrapper">
        <img src={item.image} alt="" />
        <h1>{item.title}</h1>
        <p>{item.content}</p>
      </div>
    );
  };

  return (
    <div>
      <Horizontal
        // data={data} // Array of object
        Component={Item} // Component that is going to be rendered and recieve object from above array
        wrapperClass="customClass"
        scrollLength={100} // How much the scroll should jump on left or right contorl click
        showControls={true}
      />
    </div>
  );
};

export default AllNotesCreate;
