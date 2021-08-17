import React, { useState } from "react";
import noteLogo from "../assets/images/vectorNoteLogo.png";
import goalsLogo from "../assets/images/vektorGoalsLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/ModalTask.scss";

function CreateTask({ closeTask }) {
  return (
    <div className="task__container position-relative">
      <div className="task__close position-absolute top-0 end-0">
        <button
          onClick={() => {
            closeTask(false);
          }}
        >
          X
        </button>
      </div>
      <div className="task__wrapper">
        <h1>Which task you want to create?</h1>
        <div className="task__button__note">
          <button className="task__note">
            <img src={noteLogo} alt="" />
            <p>Note</p>
          </button>
        </div>
        <div className="task__button__goals">
          <button className="task__goals">
            <img src={goalsLogo} alt="" />
            <p>Goals</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TaskModal() {
  const [openTaskModal, setOpenTaskModal] = useState(false);
  return (
    <>
      <button
        className="openTaskModal"
        onClick={() => {
          setOpenTaskModal(true);
        }}
      >
        Create Task
      </button>
      {openTaskModal && <CreateTask closeTask={setOpenTaskModal} />}
    </>
  );
}
