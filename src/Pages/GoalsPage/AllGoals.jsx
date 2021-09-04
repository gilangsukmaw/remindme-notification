import React from "react";
import './AllGoals.scss';
import CircularGoals from "../../component/CircularGoals/CircularGoals";
import { Container,Row, Col, Button, Carousel,Spinner, Placeholder } from "react-bootstrap";
import Garis from "../../assets/images/GoalDetailLine.png";
import DetailCircular from "../../component/CircularGoals/DetailCircular";
import "./goalsStyle.css";
import { getAllGoals, getDetailGoals } from "../../redux/action/goals";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import clock from '../../assets/images/clock.png' ;
import droplet from '../../assets/images/Droplet.svg' ;
import length from '../../assets/images/Length.svg' ;
import plate from '../../assets/images/plate.png' ;
import ProgressLogo from '../../assets/images/AddProgressLogo.png' ;


function AllGoals() {
const dispatch = useDispatch();
const { goals } = useSelector((state) => state.allGoals.goalsData);
const {details} = useSelector((state) => state.detailGoals.detailData);
console.log('datadetail', details);

function picture () {
  if (details?.target_type === 'Mililiter') {return droplet};
  if (details?.target_type === 'Kilometer') {return length};
  if (details?.target_type === 'Meter') {return length};
  if (details?.target_type === 'Hours') {return clock};
  if (details?.target_type === 'Minutes') {return clock};
  if (details?.target_type === 'Liter') {return droplet};
  if (details?.target_type === 'Times') {return clock};
  if (details?.target_type === 'Plate') {return plate};
  if (details?.target_type === 'Drink') {return droplet};
  if (details?.target_type === 'Other') {return ProgressLogo};
  
  } ;



useEffect(() => {
  dispatch(getAllGoals());
}, [dispatch]);
console.log(goals);
// console.log(details);


// dispatch(getAllGoals(item?.id))

//===========ambil detail goals manual - sdh diganti pakai redux===================
// const Token = localStorage.getItem("Token");
// const GetDetailGoals = async (e) => {
// try {
// const res = await axios.get(`https://remindme.gabatch13.my.id/api/v1/goals/${e}`,
// { headers: { Authorization:`Bearer ${Token}` } })
// ;
// const data = await res.data;console.log(data);
// setdetailGoals(data.data);
// } catch (error) {
// if (error.response.status === 400) {
// alert(`error`)};
// if (error.response.status === 403) {
// alert(`Sesi anda habis, mohon login kembali`);
// }}};
// onClick={()=> {GetDetailGoals(item?.id)}}

return (
<>

  <div className="bungkus" style={{ marginLeft: "340px" }}>
    {/* ==================mapping All Goals=================== */}

    <div className="PageTitle">
      <p style={{ fontSize: "34px", fontWeight: "500",  }}>My All Goals</p>
    </div>
    <div style={{margin: "0 2rem 0 2rem",}} className="GoalsContainer d-flex overflow-auto ">
      {goals?.data?.map((item, index) => (
      <div className='mappingGoals' key={index}>
        <button style={{background:'none', border:'none'}} onClick={()=> {dispatch(getDetailGoals(item?.id))}}>
          <CircularGoals color={item?.color} current_percent={item?.current_percent} id={item?.id} name={item?.name} />
        </button>
      </div>
      ))}

    </div>
    {/* ==================line devider=================== */}
    <div>
      <img style={{ width: "100%", height: "15px", padding: "0 2rem 0 2rem" }} src={Garis} alt="" />
    </div>
    {/* ==================detail headers=================== */}
    {details?.length === 0 ? null : <div className='GoalDetails d-flex flex-row justify-content-between' style={{ padding: "0 2rem 0 2rem" }}>
      <p>Goal Detail</p>
      <div className='EditButton'><Button style={{fontSize:'20px',
      fontWeight: '600',border:'0',background: '#625BAD',borderRadius:'21px',height: '38px'
      ,width: '129px'}}>Edit Goal</Button></div>
    </div>} 
    {/* ==================mapping detail goals=================== */}
    {details?.length === 0 ? null :
    <Container className='DetailBox '>
      <Col lg={6} md={12}>
      <div className='mappingDetailGoals'>
        {details?.length === 0 ? null : (details?.current_percent === undefined ?
        <div className='SkeletonLoading'>
          <Button disabled
            style={{margin:'7rem 0 0 12rem',alignItem:'center',alignContent:'center',backgroundColor:'#F1F4FA',border:'none',borderRadius:'100%',height:'300px', width:'300px'}}>
            <Spinner style={{height:'280px', width:'280px'}} as="span" animation="grow" size="lg" role="status"
              aria-hidden="true" />
            <span className="visually-hidden">Loading...</span>
          </Button>
        </div> :
        <DetailCircular color={details?.color} title={details?.name} target={details?.target}
          remaining={details?.remaining} currentProgress={details?.current} currentPercentage={details?.current_percent}
          type={details?.target_type} id={details?.id} />)}
      </div>
      </Col>
      {/* ==================mapping history goals=================== */}

      <Col lg={6} md={6} className='ProgressList'>
      <div className='ProgressListText'>
        <p style={{fontWeight:'600', color:'black'}}>History</p>
      </div>
      {/* {details?.progress?.map((item,index=> (item.)))} */}
      <div>
        {details?.progresses?.map((item, index) => (
        <Container>
          <div className='MappingBar mb-3' style={{background:`${item?.color}`}}>
            {/* logo buat maping blm dimasukin */}

            <div className='mappingGoals' key={index}>
              <p><img style={{margin:'0 1rem 0.25rem 0', width: "2.5rem", height: "2.5rem" }} src={picture()} alt="" />
              {item?.progress} 
              {" "}
              {details?.target_type}</p>
            </div>
            {/* text mapping */}
          </div>
        </Container>))}

      </div>
      </Col>
    </Container>} 

  </div>
</>
);
}

export default AllGoals;