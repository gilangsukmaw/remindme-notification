import React from "react";
import './AllGoals.scss';
import CircularGoals from "../../component/CircularGoals/CircularGoals";
import { Form, OverlayTrigger, Tooltip, Modal, Container, Col, Button,Spinner, Placeholder } from "react-bootstrap";
import Garis from "../../assets/images/GoalDetailLine.png";
import DetailCircular from "../../component/CircularGoals/DetailCircular";
import "./goalsStyle.css";
import { getAllGoals, getDetailGoals } from "../../redux/action/goals";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import SaveLogo from '../../assets/images/saveLogo.svg'
import Cross from '../../assets/images/OopsCross.svg'
import clock from '../../assets/images/clock.png' ;
import droplet from '../../assets/images/Droplet.svg' ;
import length from '../../assets/images/Length.svg' ;
import plate from '../../assets/images/plate.png' ;
import ProgressLogo from '../../assets/images/AddProgressLogo.png' ;
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../modal/GoalsCard/SettingGoals.scss'
import * as dayjs from "dayjs";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import ModalTest from "../../modal/modalTest";






function AllGoals({...props}) {
   const {
    onSave,
    noteData,
    changeDataTitle,
    changeDataBody,
    changeDataColor,
    changeDataPinned,
    changeDataDate,
    changeDataTime,
  } = props;
const dispatch = useDispatch();
const { goals } = useSelector((state) => state.allGoals.goalsData);
const {details} = useSelector((state) => state.detailGoals.detailData);
// console.log('datadetail', details);

function logo () {
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
// console.log('inigoal', goals);
// console.log('inidetil', details);
  


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

// =======================edit modal=====================================
const [EditModal, setEditModal] = useState(false);

function MyVerticallyCenteredModal(props) {
  const [startDate, setStartDate] = useState(new Date());
  const Token = localStorage.getItem("Token");
  const [state, setState] = useState({
    name: details?.name ,
     date:`${dayjs()}`,
     target:`${details?.target}`,
     color:details?.color,
     });
    //  name: details?.name ,
    //  date:dayjs(),
    //  target:details?.target,
    //  color:details?.color,
     const submitGoals = async (e) => {
        try {
            const res = await axios.put(`https://remindme.gabatch13.my.id/api/v1/goals/${details?.id}`, state, { headers: { Authorization: `Bearer ${Token}` } });
            setEditModal(false);
            dispatch(getAllGoals());
            dispatch(getDetailGoals(details?.id));
            Swal.fire({
              imageUrl: (`${SaveLogo}`),
              imageWidth: 100,
              imageHeight: 100,
              imageAlt: 'Custom image',
              width: 450,
              confirmButtonText: "Ok",
              confirmButtonColor: "#625BAD",
              // title: 'Congratulations! You successfully saved your goal',
              text: 'Congratulations! You successfully saved your goal',

            })
            
        } catch (error) {
          if (error.response.status === 400) {
            console.log("ini error" ,error.response.data.errors[0]);
            Swal.fire({
              imageUrl: (`${Cross}`),
              imageWidth: 100,
              imageHeight: 100,
              imageAlt: 'Custom image',
              width: 450,
              confirmButtonText: "Ok",
              confirmButtonColor: "#625BAD",
              title: (error.response.data.errors[0]),
              text: 'Please Check Again',
              
            })};
            if (error.response.status === 403) {
            alert(`Sesi anda habis, mohon login kembali`);
            if (error.response.status === 500) {
              alert(`Sepertinya ada yang salah`);
              
          }
            
        }}};
      
  return (
    <Modal className="GoalSetting shadow"  sytle={{ maxWidth: "1rem" }} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <div className="SetGoalsContainer shadow text-dark">
            <Modal.Header closeButton style={{ alignItems: "flex-start" }} >

              <button style={{border:'none',background:'none', }}><h1 style={{ fontSize: "1.8rem", fontWeight: "600", padding: "0" }}
                className="mb-4" >
                Edit My Goal
              </h1>
              </button>
             

            </Modal.Header>
            
            {/* onSubmit={submitGoals} */}
            <Form onSubmit={submitGoals}  >
              <Form.Group className="mb-4" controlId="GoalText">

                <Form.Control style={{textAlign:'left', borderRadius: "10px", height:'2.5rem'}}
                  className="Goals__Title"
                  type="text"
                  placeholder="What is Your Goal?"
                  value={state.name} onChange={(e) => setState({ ...state,name: e.target.value  })}
                />

              </Form.Group>
              <div>
                <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                  Built or Quit This Goal?
                </p>
              </div>
             
              <div className="BuiltorQuitButton mt-4 mb-4">
                <Col className="d-flex flex-row justify-content-between">
                <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">You already Choose "{details?.goal_type}"</Tooltip>}>
                <span style={{width: "45%", }}>
                  <Button disabled style={{ pointerEvents: 'none', width:'100%', borderRadius: "40px", fontWeight: "700", }}>
                    Build
                  </Button>
                </span>
              </OverlayTrigger>
              <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">You already Choose "{details?.goal_type}"</Tooltip>}>
                <span style={{width: "45%", }}>
                  <Button disabled style={{ pointerEvents: 'none', width:'100%', borderRadius: "40px", fontWeight: "700", }}>
                    Quit
                  </Button>
                </span>
              </OverlayTrigger>
          
                </Col>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                  Choose Time
                </p>
                <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                  Set Target
                </p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <Col className="kolomCalendar" style={{ maxWidth: "45%" }}>
                <Form.Control style={{background:'none',width:'9rem',textAlign:'left',borderRadius: "10px", height:'2.5rem',border: "1px solid #B6C6E5",}}
                  className="Goals__Target"
                  disabled
                  placeholder={dayjs(`${state.date}`).format("DD/MM/YYYY")}
                />
                 
                  <div className="MonthYear mb-1 mt-4" style={{fontWeight:'600'}}>
                    <div>{dayjs(`${state.date}`).format("MMM,")}</div>

                    <div style={{ paddingLeft: "0.25rem" }}>
                      {dayjs(`${state.date}`).format("YYYY")}
                    </div>
                  </div>
                  <div className="Goals__calendar " style={{ float: "left" }}>
                  <DatePicker
                    selected={startDate}
                    // value={state.date}
                    // onChange={(date) => setState((date)}
                    onChange={(date) => setState({ ...state,date: dayjs(date).format('YYYY-MM-DDTHH:mm:ss.000[Z]')  })}
                    inline
                  />
                    {/* <CobaCalendar value={state.date} onClick={(e) => setState({ ...state,date: e.target.value  })} /> */}
                    {/* <p>{`${state.date}`}</p> */}
                  </div>
                </Col>
                <Col className="kolomValue  " style={{ maxWidth: "30%" }}>
                <Form.Group className="mb-4" controlId="GoalText">
                <Form.Control style={{textAlign:'left',borderRadius: "10px", height:'2.5rem' }}
                  className="Goals__Target"
                  type="number"
                  placeholder="Target"
                  value={state.target} onChange={(e) => setState({ ...state,target: e.target.value  })}
                />
                  {/* <p>{`${state.target}`}</p> */}
              </Form.Group>
                <p style={{ fontSize: "1.3rem", fontWeight: "600", float:'right' }}>
                  Set Value
                </p>
                  <Form.Select disabled value={details?.target_type} 
                    className="PilihSatuan me-sm-2"
                    id="PilihSatuan"
                    style={{ borderRadius: "10px" }}
                  >
                    <option id="PilihItem" value="0">
                      Select
                    </option>
                    <option id="PilihItem" value="Liter" >
                      L (Liter)
                    </option>
                    <option id="PilihItem" value="Mililiter" >
                      ML (Mililiter)
                    </option>
                    <option id="PilihItem" value="Kilometer" >
                      KM (Kilometer)
                    </option>
                    <option id="PilihItem" value="Meter" >
                      M (Meter)
                    </option>
                    <option id="PilihItem" value="Hours">
                      Hours
                    </option>
                    <option id="PilihItem" value="Minutes" >
                      Minute
                    </option>
                    <option id="PilihItem" value="Times" >
                      Times
                    </option>
                    <option id="PilihItem" value="Plate" >
                      Plate
                    </option>
                    <option id="PilihItem" value="Drink" >
                      Drink
                    </option>
                    <option id="PilihItem" value="Other" >
                      Other
                    </option>
                  </Form.Select>
                  {/* <p>{`${state.target_type}`}</p> */}
                </Col>
              </div>
              <div className="mt-1">
                <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                  Choose Progress bar Color
                </p>
              </div>
              <div className="ColorPicker mb-2">
                
                <Button
                  style={{ backgroundColor: "#FFBCC2" }}
                  value={state.color} onClick={(e) => setState({ ...state, color: '#FFBCC2' })}
                ></Button>
                <Button
                  style={{ backgroundColor: "#FCF3A1" }}
                  value={state.color} onClick={(e) => setState({ ...state, color: '#FCF3A1' })}
                ></Button>
                <Button
                  style={{ backgroundColor: "#CCF0D7" }}
                  value={state.color} onClick={(e) => setState({ ...state, color: '#CCF0D7' })}
                ></Button>
                <Button
                  style={{ backgroundColor: "#FF8888" }}
                  value={state.color} onClick={(e) => setState({ ...state, color: '#FF8888' })}
                ></Button>
                <Button
                  style={{ backgroundColor: "#D1CDFA" }}
                  value={state.color} onClick={(e) => setState({ ...state, color: '#D1CDFA' })}
                ></Button>
              </div>
              {/* <p>{`${state.color}`}</p> */}

              <div className="saveButton d-flex justify-content-center">
                <Button
                // type="submit"
                // value="Submit"
                  onClick={() => submitGoals()}
                  
                  className="GoalSubmitButton mt-4"
                  style={{
                    width: "100%",
                    fontWeight: "700",
                    height: "3rem",
                    borderRadius: "35px",
                  }}

                  // onClick={() => {
                  //   changeStep("SaveGoals");
                  //   console.log("hello");
                  // }}
                >
                  Save
                </Button>
              </div>
            </Form>
          </div>
    
    </Modal>
  );
}


// ======================================================================
return (
<>

  <div className="bungkus" style={{ marginLeft: "340px" }}>
    {/* ==================mapping All Goals=================== */}

    <div className="PageTitle">
      <p style={{ margin: "0 2rem 0 2rem",fontSize: "34px", fontWeight: "600",  }}>My All Goals</p>
    </div>
    <div style={{margin: "0 2rem 0 2rem",}} className="GoalsContainer d-flex overflow-auto ">
      {goals?.data?.sort((a, b) => a.current_percent > b.current_percent ? 1 : -1).map((item, index) => (
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
      ,width: '129px'}} onClick={()=> {setEditModal(true)}}>Edit Goal</Button></div>
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
      {/* ==================mapping history goals========================= */}
      <Col lg={6} md={6} className='ProgressList'>
      <div className='ProgressListText'>
        <p style={{fontWeight:'600', color:'black'}}>History</p>
      </div>
      {/* {details?.progress?.map((item,index=> (item.)))} */}
      <div className='HistoryList'>
        {details?.progresses?.map((item, index) => (
        <Container key={index}>
          <div className='MappingBar mb-3' style={{background:`${item?.color}`}}>
            <div className='mappingGoals' >
              <p><img style={{margin:'0 1rem 0.25rem 0', width: "2rem", height: "2rem" }} src={logo()} alt="" />
              {item?.progress} 
              {" "}
              {details?.target_type}</p>
            </div>
          </div>
        </Container>))}
      </div>
      </Col>  

    </Container>} 

  </div>
  <MyVerticallyCenteredModal show={EditModal}  onHide={() => setEditModal(false)} />
<ModalTest
        onSave={onSave}
        noteData={noteData}
        changeDataTitle={changeDataTitle}
        changeDataBody={changeDataBody}
        changeDataColor={changeDataColor}
        changeDataPinned={changeDataPinned}
        changeDataDate={changeDataDate}
        changeDataTime={changeDataTime}
      />
</>
);
}

export default AllGoals;