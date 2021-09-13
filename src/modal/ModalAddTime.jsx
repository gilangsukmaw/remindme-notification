import React, { useState } from "react";
import buttonNotifLogo from "../assets/images/buttonNotifLogo.png";
import "../assets/styles/ModalAddTime.scss";
import "bootstrap/dist/css/bootstrap.css";
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
  dateHandle,
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
    dateNote: "",
  });
  console.log("dayjs time", noteData.time);
  console.log("dayjs date", noteData.date);
  const dispatch = useDispatch();
  // console.log("timee", noteInput.time);
  // console.log("noteInput", noteInput);
  // console.log("datenote", noteData.dateNote);
  // const [time, setTime] = useState();
  // const [date, setDate] = useState();
  // console.log("time", time);
  // console.log("date", date);
  // console.log("noteinput", noteInput);
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
                // onChange={(e) => {
                //   console.log("ini dalam e", e);
                //   setDate(e);
                // }}
                onChange={(e) => changeDataDate(e.target.value)}
                value={noteData.date}
                // value={noteInput.dateNote}
                type="text"
                disabled
                placeholder={dayjs(`${noteData.date}`).format("DD/MM/YYYY")}
                className="input-time"
                id="date"
              />
            </div>
            <div className="time__time">
              <h3>Time</h3>
              <input onChange={(e) => changeDataTime(e.target.value)} value={noteData.time} placeholder={dayjs(`${noteData.time}`).format("HH:mm A")} type="time" className="input-time" id="time" style={{ width: "120px" }} />
            </div>
          </div>
          <div className="time__calendar">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                console.log("date", dayjs(date).format("YYYY-MM-DD"));
                changeDataDate(dayjs(date).format("YYYY-MM-DD"));
              }}
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
                onSave();
                dispatch(changeStep("InputNote", noteInput));
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
