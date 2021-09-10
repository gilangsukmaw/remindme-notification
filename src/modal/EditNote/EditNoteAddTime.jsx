import React, { useState, useEffect } from "react";
import buttonNotifLogo from "../../assets/images/buttonNotifLogo.png";
import "./EditNoteAddTime.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { changeStep } from "../../redux/action/global";
import * as dayjs from "dayjs";
import DatePicker from "react-datepicker";
import { getNoteDetail } from "../../redux/action/note";

export default function EditNoteAddTime({
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
  const [updateNote, setUpdateNote] = useState({
    title: "",
    body: "",
    dateNote: "",
    pinned: false,
    color: "",
  });
  const noteDetail = useSelector(
    (state) => state.allNote.noteDataDetail.detail
  );
  useEffect(() => {
    setUpdateNote({
      ...updateNote,
      title: noteDetail?.title,
      body: noteDetail?.body,
      dateNote: noteDetail?.dateNote,
      pinned: true,
      color: noteDetail?.color,
    });
  }, []);
  const dispatch = useDispatch();

  return (
    <div className="time__outside modal-backdrop">
      <div
        className="time__container"
        style={{ backgroundColor: `${updateNote.color}` }}
        value={updateNote.color}
      >
        <div className="time__wrapper">
          <div className="time__title">
            <h1>Pick Date</h1>
          </div>
          <div className="time__input">
            <div className="time__date">
              <h3>Date</h3>
              <input
                onChange={(e) => {
                  setUpdateNote({ ...updateNote, dateNote: e.target.value });
                  changeDataDate(e.target.value);
                }}
                // value={noteData.date}
                value={updateNote.dateNote}
                type="text"
                disabled
                placeholder={dayjs(`${updateNote?.dateNote}`).format(
                  "DD/MM/YYYY"
                )}
                className="input-time"
                id="time"
              />
            </div>
            <div className="time__time">
              <h3>Time</h3>
              <input
                onChange={(e) => changeDataTime(e.target.value)}
                value={noteData.time}
                type="text"
                className="input-time"
                id="time"
              />
            </div>
          </div>
          <div className="time__calendar">
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                console.log("date", dayjs(date).format("YYYY-MM-DD"));
                changeDataDate(dayjs(date).format("YYYY-MM-DDTHH:mm:ss"));
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
                await dispatch(getNoteDetail(noteDetail?.id));
                await dispatch(changeStep("EditNoteInput"));
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
