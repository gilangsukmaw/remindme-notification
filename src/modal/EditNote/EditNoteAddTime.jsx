import React, { useState, useEffect } from "react";
import buttonNotifLogo from "../../assets/images/buttonNotifLogo.png";
import "./EditNoteAddTime.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { changeStep } from "../../redux/action/global";
import * as dayjs from "dayjs";
import DatePicker from "react-datepicker";
import { putUpdateNote } from "../../redux/action/note";

export default function EditNoteAddTime({
  updateNote,
  changeDataDate,
  changeDataTime,
  changeDataReminder,
  noteData,
  onUpdate,
  onSave,
}) {
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);

  const data = useSelector((state) => state.global.data);
  const [dateHandle, setDateHandle] = useState({
    time: dayjs().format("HH:mm A"),
    date: dayjs().format("YYYY/MM/DD"),
  });
  const [startDate, setStartDate] = useState(new Date());
  const [noteInput, setNoteInput] = useState({
    id: "",
    title: "",
    body: "",
    color: "",
    dateNote: dayjs(`${dateHandle.date} ${dateHandle.time}`),
    pinned: false,
    reminder: "",
  });
  useEffect(() => {
    setNoteInput({
      ...noteInput,
      id: data?.id,
      title: data?.title,
      body: data?.body,
      dateNote: data?.dateNote,
      pinned: data?.pinned,
      reminder: data?.reminder,
      color: data?.color,
    });
  }, [data]);

  const dispatch = useDispatch();
  const Test = () => {
    const newObject = {
      ...noteInput,
      dateNote: dayjs(`${dateHandle.date} ${dateHandle.time}`)
        .utc(true)
        .format(),
    };
    dispatch(changeStep("EditNoteInput", newObject));
    // console.log("clicked update");
    // setNoteInput({
    //   ...noteInput,
    //   dateNote: dayjs(`${dateHandle.date} ${dateHandle.time}`)
    //     .utc(true)
    //     .format(),
    // });
  };
  console.log("ini time", dateHandle.time);
  console.log("ini date", dateHandle.date);
  console.log("ini update==>", updateNote);
  console.log("datenote===>", updateNote.dateNote);
  console.log("noteinput==", noteInput);
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
                onChange={(e) => {
                  setDateHandle({ ...dateHandle, date: e.target.value });
                  // changeDataDate(e.target.value);
                  console.log("ini date==", updateNote);
                }}
                value={updateNote.date}
                type="text"
                disabled
                placeholder={dayjs(`${updateNote.date}`).format("YYYY/MM/DD")}
                className="input-date"
                id="date"
              />
            </div>
            <div className="time__time">
              <h3>Time</h3>
              <input
                onChange={(e) =>
                  setDateHandle({ ...dateHandle, time: e.target.value })
                }
                value={dateHandle.time}
                placeholder={dayjs(`${dateHandle.time}`).format("HH:mm A")}
                type="time"
                className="input-time"
                id="time"
                style={{ width: "120px" }}
              />
            </div>
          </div>
          <div className="time__calendar">
            <DatePicker
              selected={startDate}
              onChange={(e) => {
                console.log("datepicker ==>", updateNote);
                changeDataDate(dayjs(e).format("YYYY/MM/DD"));
                setDateHandle({
                  ...dateHandle,
                  date: dayjs(e).format("YYYY/MM/DD"),
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
                // await onSave();
                await Test();
                // await dispatch(changeStep("EditNoteInput", noteInput));
                // console.log("tombol notein", onSave());
              }}
            >
              Save
            </button>
            <button
              className="time__cancel"
              onClick={() => dispatch(changeStep("EditNoteInput", updateNote))}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
