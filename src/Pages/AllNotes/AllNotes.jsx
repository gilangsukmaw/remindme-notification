import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import pinAllNote from "../../assets/images/pinAllNote.png";
const AllNotesCreate = () => {
  return (
    <div>
      <div className="allNote__navbar col-lg-3"></div>
      <div className="allNote__container col-lg-9">
        <h1>My All Notes</h1>
        <div className="allNote__top">
          <img src={pinAllNote} alt="" />
          <p>Pinned Notes</p>
        </div>
        <Container>
          <div className="allNote">
            <div className="allNote__title">
              <h1></h1>
              <img />
            </div>
            <div className="allNote__content"></div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllNotesCreate;
