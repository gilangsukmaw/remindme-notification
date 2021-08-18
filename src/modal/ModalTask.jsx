import React, { useState } from "react";
import noteLogos from "../assets/images/noteLogos.png";
import goalsLogo from "../assets/images/goalsLogo.png";
import vectorClose from "../assets/images/vectorClose.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/ModalTask.scss";

export default function CreateTask({ onClose, changeStep }) {
  // const [openCreateNote, setOpenCreateNote] = useState(false);
  // const [openCreateGoals, setOpenCreateGoals] = useState(false);
  return (
    <div className="task__outside modal-backdrop">
      <div className="task__container position-relative">
        <div className="task__close position-absolute top-0 end-0">
          <button onClick={() => onClose("")}>
            <img src={vectorClose} alt="" />
          </button>
        </div>
        <div className="task__wrapper">
          <h1>Which task you want to create?</h1>
          <div className="task__button__note">
            <button
              className="task__note"
              onClick={() => changeStep("InputNote")}
            >
              <img src={noteLogos} alt="" />
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
    </div>
  );
}

// export default function TaskModal() {
//
// }
