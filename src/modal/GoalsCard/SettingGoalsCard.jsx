import React from "react";
import { useState } from "react";
import { Modal, Col, Form, Button, SplitButton } from "react-bootstrap";
import CobaCalendar from "../../Calendar";
import "./SettingGoals.scss";
import * as dayjs from "dayjs";
import vectorClose from "../../assets/images/vectorClose.png";


function SettingGoalsCard({ changeStep,onClose }) {
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);
  const [modalShow, setModalShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  console.log (dayjs(startDate));
  const [bColor, setbColor] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hei");
    changeStep("SaveGoals");
  };

  const [state, setState] = useState({
    name: "",
    goal_type: "",
    date: "",
    target: "",
    lastname: "",
  });

  return (
      <>
        <Modal
          show
          className="GoalSetting shadow"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className="SetGoalsContainer shadow text-dark">
            <Modal.Header style={{ alignItems: "flex-start" }} >
            

              <h1
                style={{ fontSize: "1.8rem", fontWeight: "600", padding: "0" }}
                className="mb-4"
              >
                My Goal
              </h1>
              <Button style={{background:'none',border:'none', marginTop:'-1.25rem',marginRight:'-1.25rem'}}
            onClick={() => {
              onClose("");
            }}
          >
            <img style={{width:"20px", }} src={vectorClose} alt="" />
          </Button>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="GoalText">
                <Form.Control
                  className="Goals__Title"
                  type="text"
                  placeholder="What is Your Goal?"
                />
              </Form.Group>
              <div>
                <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                  Built or Quit This Goal?
                </p>
              </div>

              <div className="BuiltorQuitButton mt-4 mb-4">
                <Col className="d-flex flex-row justify-content-between">
                  <Button
                    className="BuildButton"
                    variant="secondary"
                    style={{
                      borderRadius: "40px",
                      width: "45%",
                      fontWeight: "700",
                    }}
                  >
                    Build
                  </Button>
                  <Button
                    className="BuildButton"
                    variant="secondary"
                    style={{
                      borderRadius: "40px",
                      width: "45%",
                      fontWeight: "700",
                    }}
                  >
                    Quit
                  </Button>
                </Col>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                  Choose Time
                </p>
                <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                  Set Value
                </p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <Col className="kolomCalendar" style={{ maxWidth: "45%" }}>
                  <SplitButton
                    disabled
                    align="end"
                    className="ChooseValue mb-3"
                    style={{
                      float: "left",
                      // paddingLeft: "0.5rem",
                      borderRadius: "10px",
                      border: "1px solid #B6C6E5",
                    }}
                    title={dayjs(`${startDate}`).format("DD/MM/YYYY")}
                    id="ChooseValue"
                  ></SplitButton>
                  <div className="MonthYear mb-3 mt-5" style={{}}>
                    <div>{dayjs(`${startDate}`).format("MMM,")}</div>

                    <div style={{ paddingLeft: "0.25rem" }}>
                      {dayjs(`${startDate}`).format("YYYY")}
                    </div>
                  </div>
                  <div className="Goals__calendar " style={{ float: "left" }}>
                    <CobaCalendar onClick={() => setStartDate()} onChange={() => setStartDate()} />
                    <h1>{dayjs(startDate).format("DD/MM/YYYY")}</h1>
                  </div>
                </Col>
                <Col className="kolomValue  " style={{ maxWidth: "30%" }}>
                  <Form.Select
                    className="PilihSatuan me-sm-2"
                    id="PilihSatuan"
                    style={{ borderRadius: "10px" }}
                  >
                    <option id="PilihItem" value="0">
                      Select
                    </option>
                    <option id="PilihItem" value="1">
                      ml (Mili Liter)
                    </option>
                    <option id="PilihItem" value="2">
                      km (Kilo Meter)
                    </option>
                    <option id="PilihItem" value="3">
                      m (Meter)
                    </option>
                    <option id="PilihItem" value="4">
                      Hours
                    </option>
                    <option id="PilihItem" value="5">
                      Minute
                    </option>
                    <option id="PilihItem" value="6">
                      Second
                    </option>
                    <option id="PilihItem" value="7">
                      Times
                    </option>
                  </Form.Select>
                </Col>
              </div>
              <div className="mt-1">
                <p style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                  Choose Progress bar Color
                </p>
              </div>
              <div className="ColorPicker">
                <Button
                  style={{ backgroundColor: "#FFBCC2" }}
                  onClick={() => setbColor("#FFBCC2")}
                ></Button>
                <Button
                  style={{ backgroundColor: "#FCF3A1" }}
                  onClick={() => setbColor("#FCF3A1")}
                ></Button>
                <Button
                  style={{ backgroundColor: "#CCF0D7" }}
                  onClick={() => setbColor("#CCF0D7")}
                ></Button>
                <Button
                  style={{ backgroundColor: "#FF8888" }}
                  onClick={() => setbColor("#FF8888")}
                ></Button>
                <Button
                  style={{ backgroundColor: "#D1CDFA" }}
                  onClick={() => setbColor("#D1CDFA")}
                ></Button>
              </div>
              {/* <h1>{`${bColor}`}</h1> */}

              <div className="saveButton d-flex justify-content-center">
                <Button
                  type="submit"
                  className="GoalSubmitButton mt-4"
                  style={{
                    width: "100%",
                    fontWeight: "700",
                    height: "3rem",
                    borderRadius: "35px",
                  }}

                  // onClick={() => {
                  //   props.changeStep("SaveGoals");
                  //   console.log("hello");
                  // }}
                >
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </>
  );
}

export default SettingGoalsCard;
