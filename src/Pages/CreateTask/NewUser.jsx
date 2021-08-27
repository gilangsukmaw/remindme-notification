import React from "react";
import RemindmeLogo from "../../assets/images/RemindmeLogo.png";
import welcomeLogo from "../../assets/images/welcomeLogo.png";
import "../../assets/styles/NewUser.scss";
import CobaCalendar from "../../Calendar";
import Navbar from "../../component/navbar/navbar";
import ModalTest from "../../modal/modalTest";

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
  return (
    <div className="newUser__page">
      <div className="newUser__sideBar col-lg-3"></div>
      <div className="newUser__container col-lg-9">
        {/* <div className="row"> */}
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
            <CobaCalendar />
            <div className="newUser__card__exp">
              <button className="exp__today"></button>
              <p>Chosen Date</p>
              <button className="exp__chosen"></button>
              <p>Today</p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <ModalTest
        setStep={setStep}
        step={step}
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
