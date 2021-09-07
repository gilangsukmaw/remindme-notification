import React, { useState } from "react";
import vectorPinLogo from "../assets/images/vectorPinLogo.png";
import "../assets/styles/ModalNote.scss";
import vectorClose from "../assets/images/vectorClose.png";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { useDispatch } from "react-redux";
// import { setNote } from "../redux/action/note";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeStep } from "../redux/action/global";

export default function NoteModal({
  onClose,
  changeDataBody,
  changeDataTitle,
  noteData,
  changeDataColor,
  changeDataPinned,
  onSave,
}) {
  // console.log(noteData);
  const dispatch = useDispatch();
  return (
    <div className="note__outside modal-backdrop">
      <div
        className="note__container position-relative"
        style={{ backgroundColor: `${noteData.color}` }}
      >
        <div className="note__close position-absolute top-0 start-100 translate-middle">
          <button
            onClick={() => {
              dispatch(changeStep(""));
            }}
          >
            <img src={vectorClose} alt="" />
          </button>
        </div>
        <div className="note__wrapper">
          <div className="note__title">
            <h1>Note</h1>
            <div className="note__pin">
              <button onClick={() => changeDataPinned(!noteData.pinned)}>
                <img src={vectorPinLogo} alt="" />
                <h6>Pin</h6>
              </button>
            </div>
          </div>
          <div className="note__content">
            <input
              className="note__input"
              placeholder="Title"
              value={noteData.title}
              onChange={(e) => changeDataTitle(e.target.value)}
            />
            <textarea
              className="note__textarea"
              placeholder="Note"
              value={noteData.body}
              onChange={(e) => changeDataBody(e.target.value)}
            ></textarea>
          </div>
          <div className="note__color">
            <h5>Choose your card</h5>
            <button
              value={noteData.color}
              onChange={() => changeDataColor("#FFBCC2")}
              className="color1"
            ></button>
            <button
              value={noteData.color}
              onChange={() => changeDataColor("#FCF3A1")}
              className="color2"
            ></button>
            <button
              value={noteData.color}
              onClick={() => changeDataColor("#D1CDFA")}
              className="color3"
            ></button>
            <button
              value={noteData.color}
              onClick={() => changeDataColor("#FF8888")}
              className="color4"
            ></button>
            <button
              value={noteData.color}
              onClick={() => changeDataColor("#CCF0D7")}
              className="color5"
            ></button>
          </div>
          <div className="note__footer">
            <button
              onClick={() => {
                dispatch(changeStep("AddTime"));
                // submitNote();
              }}
            >
              Add time
            </button>
            <button
              className="SaveButton"
              onClick={() => {
                dispatch(changeStep("SaveNotes"));
                onSave();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
