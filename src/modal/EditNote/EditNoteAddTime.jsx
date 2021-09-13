import React, { useState, useEffect } from "react";
import buttonNotifLogo from "../../assets/images/buttonNotifLogo.png";
import "./EditNoteAddTime.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { changeStep } from "../../redux/action/global";
import * as dayjs from "dayjs";
import DatePicker from "react-datepicker";
import { putUpdateNote } from "../../redux/action/note";

export default function EditNoteAddTime({ updateNote, noteData }) {
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);

  const data = useSelector((state) => state.global.data);
  const [startDate, setStartDate] = useState(new Date());
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
      dateNote: data?.dateNote,
      pinned: data?.pinned,
      color: data?.color,
    });
  }, [data]);
  const dispatch = useDispatch();
  // console.log("input date==>", noteInput);
  // console.log("tanggal edit", noteInput.dateNote);
  // console.log("tanggal update", updateNote.dateNote);
  return (
    <div className="time__outside modal-backdrop">
      <div
        className="time__container"
        style={{ backgroundColor: `${updateNote?.color}` }}
        value={noteInput.color}
      >
        <div className="time__wrapper">
          <div className="time__title">
            <h1>Pick Date</h1>
          </div>
          <div className="time__input">
            <div className="time__date">
              <h3>Date</h3>
              <input
                value={noteInput.dateNote}
                type="text"
                disabled
                placeholder={dayjs(`${updateNote.dateNote}`).format(
                  "DD/MM/YYYY"
                )}
                className="input-time"
                id="date"
              />
            </div>
            <div className="time__time">
              <h3>Time</h3>
              <input
                onChange={(e) =>
                  setNoteInput({ ...noteInput, dateNote: e.target.value })
                }
                value={noteInput.dateNote}
                placeholder={dayjs(`${updateNote.dateNote}`).format("hh:mm")}
                type="time"
                className="input-time"
                id="time"
              />
            </div>
          </div>
          <div className="time__calendar">
            <DatePicker
              selected={startDate}
              onChange={(e) => {
                // console.log("date", dayjs(date).format("YYYY-MM-DD"));
                setNoteInput({
                  ...noteInput,
                  dateNote: dayjs(e).format("YYYY-MM-DD"),
                });
                // setStartDate(dayjs(dateNote).format("YYYY-MM-DDTHH:mm:ss"));
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
                await dispatch(changeStep("EditNoteInput", noteInput));
                // onSave();
                // handleAddEvent();
              }}
            >
              Save
            </button>
            <button
              className="time__cancel"
              onClick={() => dispatch(changeStep("EditNoteInput"))}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
