import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import buttonNotifLogo from "../assets/images/buttonNotifLogo.png";
import "../assets/styles/ModalAddTime.scss";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.css";

export default function TimeModal({ onClose }) {
  const [value, onChange] = useState(new Date());

  return (
    <div className="time__outside modal-backdrop">
      <div className="time__container">
        <div className="time__wrapper">
          <div className="time__title">
            <h1>Pick Date</h1>
          </div>
          <div className="time__input">
            <div className="time__date">
              <h3>Date</h3>
              <input type="text" className="input-time" id="time" />
            </div>
            <div className="time__time">
              <h3>Time</h3>
              <input type="text" className="input-time" id="time" />
            </div>
          </div>
          <div className="time__calendar">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
        <div className="time__button">
          <button className="notification">
            <img src={buttonNotifLogo} alt="" />
            <p>Notification</p>
          </button>
          <div className="time__button2">
            <button className="time__save">Save</button>
            <button
              className="time__cancel"
              onClick={() => {
                onClose("");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function ModalAddTime() {
//   const [openAddTime, setOpenAddTime] = useState(false);
//   return (
//     <div className="time__center">
//       <button
//         className="openModal"
//         onClick={() => {
//           setOpenAddTime(true);
//         }}
//       >
//         Add Time
//       </button>
//       {openAddTime && <TimeModal closeModal={setOpenAddTime} />}
//     </div>
//   );
// }
