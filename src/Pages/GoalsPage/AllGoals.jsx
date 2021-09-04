import React from "react";
import CircularGoals from "../../component/CircularGoals/CircularGoals";
import { Container, Col, Carousel } from "react-bootstrap";
import Garis from "../../assets/images/GoalDetailLine.png";
import DetailCircular from "../../component/CircularGoals/DetailCircular";
import "./goalsStyle.css";
import { getAllGoals, getDetailGoals } from "../../redux/action/goals";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";


function AllGoals() {
const dispatch = useDispatch();
const { goals } = useSelector((state) => state.allGoals.goalsData);
// const { details } = useSelector((state) => state.detailGoals.detailData);

const [goalsId, setgoalsId] = useState(0);
const Token = localStorage.getItem("Token");
const [detailGoals, setdetailGoals] = useState([]);


useEffect(() => {
dispatch(getAllGoals());
}, [dispatch]);
console.log(goals);
console.log(detailGoals);


// dispatch(getAllGoals(item?.id))

//===========ambil detail goals===================
const GetDetailGoals = async (e) => {
try {
const res = await axios.get(`https://remindme.gabatch13.my.id/api/v1/goals/${goalsId}`, 
{ headers: { Authorization:`Bearer ${Token}` } })
;
const data = await res.data;console.log(data);
setdetailGoals(data.data)
} catch (error) {
if (error.response.status === 400) {
alert(`error`)};
if (error.response.status === 403) {
alert(`Sesi anda habis, mohon login kembali`);
}}};

return (
<>

  <div className="bungkus" style={{ marginLeft: "340px" }}>

    <div className="PageTitle">
      <p style={{ fontSize: "34px", fontWeight: "500",  }}>My All Goals</p>
    </div>
    <div style={{margin: "0 2rem 0 2rem",}} className="GoalsContainer d-flex overflow-auto ">
      {/* <Carousel>
        <Carousel.Item></Carousel.Item>
      </Carousel> */}
      {goals?.data?.map((item, index) => (
      <div className='mappingGoals' key={index}>
        <button style={{background:'none', border:'none'}} onClick={()=> {setgoalsId(item?.id);GetDetailGoals()}}>
          <CircularGoals color={item?.color} current_percent={item?.current_percent} id={item?.id} name={item?.name} />
        </button>
      </div>
      ))}

    </div>
    {/* <p>{`${goalsId}`}</p> */}
    {/* <br /> */}
    <div>
      <img style={{ width: "100%", height: "15px", padding: "0 2rem 0 2rem" }} src={Garis} alt="" />
    </div>
    {/* <p>{`${detailGoals?.current_percent}`}</p> */}
    {/* <p>{`${detailGoals?.data.progresses.color}`}</p> */}

    <div className='mappingDetailGoals'>
      {goalsId === 0 | detailGoals.length === 0 ? null :
      <DetailCircular color={detailGoals?.color} title={detailGoals?.name} target={detailGoals?.target}
        remaining={detailGoals?.remaining} currentProgress={detailGoals?.current}
        currentPercentage={detailGoals?.current_percent} type={detailGoals?.target_type} id={detailGoals?.id}/>}
    </div>

  </div>
</>
);
}

export default AllGoals;