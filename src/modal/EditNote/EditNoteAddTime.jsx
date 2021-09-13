import React, { useState, useEffect } from "react";
import buttonNotifLogo from "../../assets/images/buttonNotifLogo.png";
import "./EditNoteAddTime.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { changeStep } from "../../redux/action/global";
import * as dayjs from "dayjs";
import DatePicker from "react-datepicker";
import { putUpdateNote } from "../../redux/action/note";

export default function EditNoteAddTime({ updateNote, changeDataDate, changeDataTime, onSave }) {
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);

  const data = useSelector((state) => state.global.data);
  const [startDate] = useState(new Date());
  const [noteInput, setNoteInput] = useState({
    id: "",
    title: "",
    body: "",
    color: "",
    dateNote: "",
    pinned: false,
  });
  useEffect(() => {
    setNoteInput({
      ...noteInput,
      id: data?.id,
      title: data?.title,
      body: data?.body,
      dateNote: data?.datenote,
      pinned: data?.pinned,
      color: data?.color,
    });
  }, [data]);

  const dispatch = useDispatch();
  const [dateHandle] = useState({
    time: dayjs().format("HH:mm A"),
    date: dayjs().format("YYYY/MM/DD"),
  });
  const Test = () => {
    // console.log("clicked update");
    setNoteInput({
      ...data,
      dateNote: dayjs(`${dateHandle.date} ${dateHandle.time}`).utc(true).format(),
    });
  };

  // console.log("ini time", updateNote.time);
  // console.log("ini date", updateNote.date);
  console.log("ini update==>", updateNote);
  console.log("datenote===>", noteInput);
  // console.log("noteinput==", noteInput);
  return (
    <div className="time__outside modal-backdrop">
      <div className="time__container" style={{ backgroundColor: `${updateNote?.color}` }} value={noteInput.color}>
        <div className="time__wrapper">
          <div className="time__title">
            <h1>Pick Date</h1>
          </div>
          <div className="time__input">
            <div className="time__date">
              <h3>Date</h3>
              <input
                onChange={(e) => {
                  changeDataDate(e.target.value);
                  console.log("ini e", e);
                }}
                value={updateNote.date}
                type="text"
                disabled
                placeholder={dayjs(`${updateNote.date}`).format("DD/MM/YYYY")}
                className="input-date"
                id="date"
              />
            </div>
            <div className="time__time">
              <h3>Time</h3>
              <input onChange={(e) => changeDataTime(e.target.value)} value={updateNote.time} placeholder={dayjs(`${updateNote.time}`).format("HH:mm A")} type="time" className="input-time" id="time" style={{ width: "120px" }} />
            </div>
          </div>
          <div className="time__calendar">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                // console.log("date", dayjs(date).format("YYYY-MM-DD"));
                changeDataDate(dayjs(date).format("YYYY-MM-DD"));
                Test();
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
              onClick={async () => {
                // await Test();
                await onSave();
                await dispatch(changeStep("EditNoteInput", noteInput));
                // console.log("tombol save", Test());
                console.log("clicked 1");
              }}
            >
              Save
            </button>
            <button className="time__cancel" onClick={() => dispatch(changeStep("EditNoteInput", updateNote))}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
