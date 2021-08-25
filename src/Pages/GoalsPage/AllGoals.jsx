import React from "react";
import CircularGoals from "../../component/CircularGoals/CircularGoals";
import Garis from "../../assets/images/GoalDetailLine.png";

function AllGoals() {
  return (
    <>
      <div className="GoalsContainer d-flex overflow-auto mt-5" style={{ maxWidth: "1440px", margin: "2rem" }}>
        <CircularGoals />
      </div>
      <div>
        <img style={{ width: "100%", height: "15px", padding: "0 2rem 0 2rem" }} src={Garis}></img>
      </div>
    </>
  );
}

export default AllGoals;
