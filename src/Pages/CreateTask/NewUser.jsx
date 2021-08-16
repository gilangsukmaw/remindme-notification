import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import RemindmeLogo from "../../assets/images/RemindmeLogo.png";
import "../../assets/styles/NewUser.scss";

const NewUser = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="newUser__container">
      <div className="newUser__intro">
        <div className="newUser__logo">
          <img src={RemindmeLogo} alt="" />
        </div>
        <div className="newUser__greet">
          <h3>Hi, Jane Spancer</h3>
        </div>
      </div>
      <div className="row">
        <div className="newUser__card">
          <div className="newUser__card__logo">
            <img src={RemindmeLogo} alt="" />
            <h4>Welcome to RemindMe!</h4>
            <h5>Get ready for the best turn of your life!</h5>
          </div>
          <div className="newUser__card__calendar">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
