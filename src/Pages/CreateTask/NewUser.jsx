import React from "react";
import Calendar from "react-awesome-calendar";
import RemindmeLogo from "../../assets/images/RemindmeLogo.png";
import welcomeLogo from "../../assets/images/welcomeLogo.png";
import "../../assets/styles/NewUser.scss";

const NewUser = () => {
  return (
    <div className="newUser__page">
      <div className="newUser__sideBar col-lg-3">Sidebar</div>
      <div className="newUser__container">
        <div className="row col-lg-11">
          <div className="newUser__intro">
            <div className="newUser__logo">
              <img src={RemindmeLogo} alt="" />
            </div>
            <div className="newUser__greet">
              <h3>Hi, Jane Spancer</h3>
            </div>
          </div>
          <div className="newUser__card">
            <div className="newUser__card__logo">
              <img src={welcomeLogo} alt="" />
            </div>
            <div className="newUser__card__calendar">
              <Calendar />
              <div className="newUser__card__exp">
                <button className="exp__today"></button>
                <p>Today</p>
                <button className="exp__chosen"></button>
                <p>Chosen Date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
