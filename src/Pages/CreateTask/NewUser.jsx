import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import RemindmeLogo from "../../assets/images/RemindmeLogo.png";
import welcomeLogo from "../../assets/images/welcomeLogo.png";
import "../../assets/styles/NewUser.scss";
import CobaCalendar from "../../Calendar";
import ModalTest from "../../modal/modalTest";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/action/user";
import { getAllGoals, getDetailGoals } from "../../redux/action/goals";
import { getNote } from "../../redux/action/note";

import HomeExisting from "../../component/HomeExisting/Home"


const NewUser = ({ ...props }) => {
  const { step, setStep, noteData, setNoteData, onSaveNote, noteColor, setNoteColor, onSaveColor } = props;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userData.userInfo);
  const { goals } = useSelector((state) => state.allGoals.goalsData);
  const { data } = useSelector((state) => state.allNote.noteData);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllGoals());
    dispatch(getNote());
  }, [dispatch]);
  // console.log('inigoal', goals);

  return (
    <>
    
    
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
              Hi, {user ? user.data && user.data.firstname : null} {user ? user.data && user.data.lastname : null}
            </h3>
          </div>
        </div>
        { goals?.length === 0 || data?.length === 0 ? 
        
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
        : <HomeExisting/>}
        {/* </div> */}
      </div>
      <ModalTest setStep={setStep} step={step} noteData={noteData} setNoteData={setNoteData} onSaveNote={onSaveNote} noteColor={noteColor} setNoteColor={setNoteColor} onSaveColor={onSaveColor} />
    </div>
    </>
  );
};

export default NewUser;
