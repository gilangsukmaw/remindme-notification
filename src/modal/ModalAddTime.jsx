import React, { useState } from "react";
import buttonNotifLogo from "../assets/images/buttonNotifLogo.png";
import "../assets/styles/ModalAddTime.scss";
import "bootstrap/dist/css/bootstrap.css";
import CobaCalendar from "../../src/Calendar";
import { useDispatch } from "react-redux";
import { changeStep } from "../redux/action/global";
import * as dayjs from "dayjs";
import DatePicker from "react-datepicker";

export default function TimeModal({
  // onClose,

  changeColor,
  changeDataDate,
  changeDataTime,
  noteData,
  onSave,
  props,
}) {
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);
  const [startDate, setStartDate] = useState(new Date());
  const [noteInput, setNoteInput] = useState({
    title: "",
    body: "",
    time: "",
    date: "",
    timeNote: "",
    pinned: false,
    color: "",
  });

  console.log("noteInput", noteInput);
  const dispatch = useDispatch();
  return (
    <div className="time__outside modal-backdrop">
      <div className="time__container" style={{ backgroundColor: `${noteData.color}` }} value={noteData.color}>
        <div className="time__wrapper">
          <div className="time__title">
            <h1>Pick Date</h1>
          </div>
          <div className="time__input">
            <div className="time__date">
              <h3>Date</h3>
              <input
                onChange={(e) => changeDataDate(e.target.value)}
                // value={noteData.date}
                value={noteInput.date}
                type="text"
                disabled
                placeholder={dayjs(`${noteInput.date}`).format("DD/MM/YYYY")}
                className="input-time"
                id="time"
              />
            </div>
            <div className="time__time">
              <h3>Time</h3>
              <input onChange={(e) => setNoteInput({ ...noteInput, time: e.target.value })} value={noteInput.time} type="text" className="input-time" id="time" />
            </div>
          </div>
          <div className="time__calendar">
            <DatePicker
              selected={startDate}
              onChange={(date) =>
                setNoteInput({
                  ...noteInput,
                  date: dayjs(date).format("YYYY-MM-DD"),
                })
              }
              inline
            />
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
                dispatch(changeStep("InputNote"));
                // onSave();
                // handleAddEvent();
              }}
            >
              Save
            </button>
            <button className="time__cancel" onClick={() => dispatch(changeStep("InputNote"))}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
