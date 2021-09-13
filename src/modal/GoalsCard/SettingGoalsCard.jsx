import React from "react";
import { useState } from "react";
import { Modal, Col, Form, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import "./SettingGoals.scss";
import * as dayjs from "dayjs";
import SaveLogo from "../../assets/images/saveLogo.svg";
import vectorClose from "../../assets/images/vectorClose.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import SaveGoalModal from "../SaveGoalsModal/SaveGoalsModal";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { changeStep } from "../../redux/action/global";
import { useDispatch, useSelector } from "react-redux";
import { getAllGoals, getDetailGoals } from "../../redux/action/goals";
// import 'sweetalert2/src/sweetalert2.scss'

function SettingGoalsCard({ show, onClose, props }) {
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);

  const [modalShow, setModalShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   submitGoals();
  //   console.log("hei");
  //   dispatch(changeStep("SaveGoals"));
  // };
  const Token = localStorage.getItem("Token");

  const [state, setState] = useState({
    name: "",
    goal_type: "",
    date: dayjs(),
    target: "",
    target_type: "",
    color: "",
  });

  const submitGoals = async (e) => {
    try {
      const res = await axios.post(`https://remindme.gabatch13.my.id/api/v1/goals`, state, { headers: { Authorization: `Bearer ${Token}` } });
      changeStep("");
      dispatch(getAllGoals());
            Swal.fire({
              imageUrl: (`${SaveLogo}`),
              imageWidth: 100,
              imageHeight: 100,
              imageAlt: 'Custom image',
              width: 450,
              confirmButtonText: "Ok",
              confirmButtonColor: "#625BAD",
              title: 'Congratulations!',
              text: 'You successfully saved your goal',

            })

      console.log(res);
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "warning",
          width: 450,
          confirmButtonText: "Ok",
          confirmButtonColor: "#625BAD",
          title: error.response.data.errors[0],
          text: "Please Check Again",
        });
      }
      if (error.response.status === 403) {
        alert(`Sesi anda habis, mohon login kembali`);
      }
    }
  };

  return (
    <>
      <Modal show className="GoalSetting shadow" size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <div className="SetGoalsContainer shadow text-dark">
          <Modal.Header style={{ alignItems: "flex-start" }}>
            <h1 style={{ fontSize: "1.8rem", fontWeight: "600", padding: "0" }} className="mb-4">
              My Goal
            </h1>
            <Button
              style={{
                background: "none",
                border: "none",
                marginTop: "-1.25rem",
                marginRight: "-1.25rem",
              }}
              onClick={() => {
                dispatch(changeStep(""));
              }}
            >
              <img style={{ width: "20px" }} src={vectorClose} alt="" />
            </Button>
          </Modal.Header>
          {/* onSubmit={submitGoals} */}
          <Form onSubmit={submitGoals}>
            <Form.Group className="mb-4" controlId="GoalText">
              <Form.Control
                style={{
                  textAlign: "left",
                  borderRadius: "10px",
                  height: "2.5rem",
                }}
                className="Goals__Title"
                type="text"
                placeholder="What is Your Goal?"
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
              {/* <p>{`${state.name}`}</p> */}
            </Form.Group>
            <div>
              <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>Built or Quit This Goal?</p>
            </div>

            <div className="BuiltorQuitButton mt-4 mb-4">
              <Col className="d-flex flex-row justify-content-between">
                <OverlayTrigger className="InformationPopUp" placement="bottom" overlay={<Tooltip id={`SetYourGoals`}>Build Amazing Goals</Tooltip>}>
                  <Button
                    className="BuildButton"
                    variant="secondary"
                    value={state.goal_type}
                    onClick={(e) => setState({ ...state, goal_type: "build" })}
                    style={{
                      borderRadius: "40px",
                      width: "45%",
                      fontWeight: "700",
                    }}
                  >
                    Build
                  </Button>
                </OverlayTrigger>
                <OverlayTrigger className="InformationPopUp" placement="bottom" overlay={<Tooltip id={`SetYourGoals`}>Quit Something</Tooltip>}>
                  <Button
                    className="BuildButton"
                    variant="secondary"
                    value={state.goal_type}
                    onClick={(e) => setState({ ...state, goal_type: "quit" })}
                    style={{
                      borderRadius: "40px",
                      width: "45%",
                      fontWeight: "700",
                    }}
                  >
                    Quit
                  </Button>
                </OverlayTrigger>
              </Col>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>Choose Time</p>
              <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>Set Target</p>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <Col className="kolomCalendar" style={{ maxWidth: "45%" }}>
                <Form.Control
                  style={{ background: "none", width: "9rem", textAlign: "left", borderRadius: "10px", height: "2.5rem", border: "1px solid #B6C6E5" }}
                  className="Goals__Target"
                  disabled
                  placeholder={dayjs(`${state.date}`).format("DD/MM/YYYY")}
                />
                
                <div className="MonthYear mb-1 mt-4" style={{ fontWeight: "600" }}>
                  <div>{dayjs(`${state.date}`).format("MMM,")}</div>

                  <div style={{ paddingLeft: "0.25rem" }}>{dayjs(`${state.date}`).format("YYYY")}</div>
                </div>
                <div className="Goals__calendar " style={{ float: "left" }}>
                  <DatePicker
                    selected={startDate}
                    // value={state.date}
                    // onChange={(date) => setState((date)}
                    onChange={(date) =>
                      setState({
                        ...state,
                        date: dayjs(date).format("YYYY-MM-DDTHH:mm:ss.000[Z]"),
                      })
                    }
                    inline
                  />
                </div>
              </Col>
              <Col className="kolomValue  " style={{ maxWidth: "30%" }}>
                <Form.Group className="mb-4" controlId="GoalText">
                  <Form.Control
                    style={{
                      textAlign: "left",
                      borderRadius: "10px",
                      height: "2.5rem",
                    }}
                    className="Goals__Target"
                    type="number"
                    placeholder="Target"
                    value={state.target}
                    onChange={(e) => setState({ ...state, target: e.target.value })}
                  />
                  {/* <p>{`${state.target}`}</p> */}
                </Form.Group>
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    float: "right",
                  }}
                >
                  Set Value
                </p>
                <Form.Select value={state.target_type} onChange={(e) => setState({ ...state, target_type: e.target.value })} className="PilihSatuan me-sm-2" id="PilihSatuan" style={{ borderRadius: "10px" }}>
                  <option id="PilihItem" value="0">
                    Select
                  </option>
                  <option id="PilihItem" value="Liter">
                    L (Liter)
                  </option>
                  <option id="PilihItem" value="Mililiter">
                    ML (Mililiter)
                  </option>
                  <option id="PilihItem" value="Kilometer">
                    KM (Kilometer)
                  </option>
                  <option id="PilihItem" value="Meter">
                    M (Meter)
                  </option>
                  <option id="PilihItem" value="Hours">
                    Hours
                  </option>
                  <option id="PilihItem" value="Minutes">
                    Minute
                  </option>
                  {/* <option id="PilihItem" value="Second" >
                      Second
                    </option> */}
                  <option id="PilihItem" value="Times">
                    Times
                  </option>
                  <option id="PilihItem" value="Plate">
                    Plate
                  </option>
                  <option id="PilihItem" value="Drink">
                    Drink
                  </option>
                  <option id="PilihItem" value="Other">
                    Other
                  </option>
                </Form.Select>
                {/* <p>{`${state.target_type}`}</p> */}
              </Col>
            </div>
            <div className="mt-1">
              <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>Choose Progress Bar Color</p>
            </div>
            <div className="ColorPicker mb-2">
              <Button
                style={{ backgroundColor: "#FFBCC2" }}
                // onClick={() => setbColor("#FFBCC2")}
                value={state.color}
                onClick={(e) => setState({ ...state, color: "#FFBCC2" })}
              ></Button>
              <Button style={{ backgroundColor: "#FCF3A1" }} value={state.color} onClick={(e) => setState({ ...state, color: "#FCF3A1" })}></Button>
              <Button style={{ backgroundColor: "#CCF0D7" }} value={state.color} onClick={(e) => setState({ ...state, color: "#CCF0D7" })}></Button>
              <Button style={{ backgroundColor: "#FF8888" }} value={state.color} onClick={(e) => setState({ ...state, color: "#FF8888" })}></Button>
              <Button style={{ backgroundColor: "#D1CDFA" }} value={state.color} onClick={(e) => setState({ ...state, color: "#D1CDFA" })}></Button>
            </div>
            {/* <p>{`${state.color}`}</p> */}

            <div className="saveButton d-flex justify-content-center">
              <Button
                // type="submit"
                // value="Submit"
                onClick={() => dispatch(changeStep(submitGoals()))}
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

      {/* <SaveGoalModal tutup={() => setModalShow(true)}/> */}
    </>
  );
}

export default SettingGoalsCard;
