import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import RemindmeLogo from "../../assets/images/RemindmeLogo.png";
import welcomeLogo from "../../assets/images/welcomeLogo.png";
import "../../assets/styles/NewUser.scss";
import CobaCalendar from "../../Calendar";
import ModalTest from "../../modal/modalTest";
import axios from "axios";

const NewUser = ({ ...props }) => {
  const {
    step,
    setStep,
    noteData,
    setNoteData,
    onSaveNote,
    noteColor,
    setNoteColor,
    onSaveColor,
  } = props;
  const [user, setUser] = useState([]);
  const Token = localStorage.getItem("Token");
  const getData = async () => {
    await axios
      .get(`https://remindme.gabatch13.my.id/api/v1/user/getinfo`, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  };
  console.log("user", user);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="newUser__page">
      <div className="newUser__sideBar col-lg-3 col-md-6"></div>
      <div className="newUser__container col-lg-9 col-md-6">
        {/* <div className="row"> */}
        <div className="newUser__intro">
          <div className="newUser__logo">
            <img src={RemindmeLogo} alt="" />
          </div>
          <div className="newUser__greet">
            <h3>
              Hi, {user.data ? user.data.firstname : null}{" "}
              {user.data ? user.data.lastname : null}
            </h3>
          </div>
        </div>
        <div className="newUser__card">
          <div className="newUser__card__logo">
            <img src={welcomeLogo} alt="" />
          </div>
          <Container className="newUser__card__calendar">
            <CobaCalendar />
            <div className="newUser__card__exp">
              <button className="exp__today"></button>
              <p>Chosen Date</p>
              <button className="exp__chosen"></button>
              <p>Today</p>
            </div>
          </Container>
        </div>
        {/* </div> */}
      </div>
      <ModalTest
        setStep={setStep}
        step={step}
        noteData={noteData}
        setNoteData={setNoteData}
        onSaveNote={onSaveNote}
        noteColor={noteColor}
        setNoteColor={setNoteColor}
        onSaveColor={onSaveColor}
      />
    </div>
  );
};

export default NewUser;
