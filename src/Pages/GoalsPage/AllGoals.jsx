import React from "react";
import CircularGoals from "../../component/CircularGoals/CircularGoals";
import { Container, Col, Carousel } from "react-bootstrap";
import Garis from "../../assets/images/GoalDetailLine.png";
import DetailCircular from "../../component/CircularGoals/DetailCircular";
import "./goalsStyle.css";

function AllGoals() {
  return (
    <>
      <div className="bungkus" style={{ marginLeft: "340px" }}>
        <div className="PageTitle">
          <p style={{ fontSize: "34px", fontWeight: "500", paddingTop: "2rem" }}>My All Goals</p>
        </div>
        <div className="GoalsContainer d-flex overflow-auto ">
          <CircularGoals />
        </div>
        <br />
        <div>
          <img style={{ width: "100%", height: "15px", padding: "0 2rem 0 2rem" }} src={Garis} alt="" />
        </div>

        <div>
          <DetailCircular />
        </div>
      </div>
    </>
  );
}

export default AllGoals;
