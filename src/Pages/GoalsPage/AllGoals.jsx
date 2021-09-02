import React from "react";
import CircularGoals from "../../component/CircularGoals/CircularGoals";
import { Container, Col, Carousel } from "react-bootstrap";
import Garis from "../../assets/images/GoalDetailLine.png";
import DetailCircular from "../../component/CircularGoals/DetailCircular";
import "./goalsStyle.css";
import { getAllGoals } from "../../redux/action/goals";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function AllGoals() {
  const dispatch = useDispatch();
  const { goals } = useSelector((state) => state.allGoals.goalsData);

  useEffect(() => {
    dispatch(getAllGoals());
  }, [dispatch]);
  console.log(goals);

  

  return (
    <>
    
      <div className="bungkus" style={{ marginLeft: "340px" }}>
        
        <div className="PageTitle">
          <p style={{ fontSize: "34px", fontWeight: "500",  }}>My All Goals</p>
        </div>
        <div className="GoalsContainer d-flex overflow-auto ">
        <Carousel><Carousel.Item></Carousel.Item></Carousel>
          {goals?.data?.map((item, index) => ( 
          <div key={index}>
          <CircularGoals color={item?.color} current_percent={item?.current_percent} id={item?.id} name={item?.name}/>
          </div>))}
          
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
