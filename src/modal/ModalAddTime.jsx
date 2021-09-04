import React, { useState } from "react";
import buttonNotifLogo from "../assets/images/buttonNotifLogo.png";
import "../assets/styles/ModalAddTime.scss";
import "bootstrap/dist/css/bootstrap.css";
import CobaCalendar from "../../src/Calendar";

export default function TimeModal({
  // onClose,
  changeStep,
  changeColor,
  changeDataDate,
  changeDataTime,
  noteData,
  onSave,
  props,
}) {
  const [newEvent, setNewEvent] = useState({ start: "", end: "" });
  const [noteInput, setNoteInput] = useState({
    title: "",
    body: "",
    dateNote: "",
    timeNote: "",
    pinned: false,
    color: "",
  });

  return (
    <div className="time__outside modal-backdrop">
      <div
        className="time__container"
        style={{ backgroundColor: `${changeColor}` }}
        value={noteData.color}
      >
        <div className="time__wrapper">
          <div className="time__title">
            <h1>Pick Date</h1>
          </div>
          <div className="time__input">
            <div className="time__date">
              <h3>Date</h3>
              <input
                onChange={(e) => changeDataDate(e.target.value)}
                value={noteData.dateNote}
                type="text"
                className="input-time"
                id="time"
              />
            </div>
            <div className="time__time">
              <h3>Time</h3>
              <input
                onChange={(e) => changeDataTime(e.target.value)}
                value={noteData.timeNote}
                type="text"
                className="input-time"
                id="time"
              />
            </div>
          </div>
          <div className="time__calendar">
            <CobaCalendar />
          </div>
        </div>
        <div className="time__button">
          <button className="notification">
            <img src={buttonNotifLogo} alt="" />
            <p>Notification</p>
          </button>
          <div className="time__button2">
            <button
              className="time__save"
              onClick={() => {
                changeStep("InputNote");
                // onSave();
                // handleAddEvent();
              }}
            >
              Save
            </button>
            <button
              className="time__cancel"
              onClick={() => changeStep("InputNote")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
