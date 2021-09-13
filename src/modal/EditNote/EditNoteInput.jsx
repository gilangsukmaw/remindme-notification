import React, { useEffect, useState } from "react";
import vectorPinLogo from "../../assets/images/vectorPinLogo.png";
import "./EditNoteInput.scss";
import vectorClose from "../../assets/images/vectorClose.png";
import "bootstrap/dist/css/bootstrap.css";
import "react-datepicker/dist/react-datepicker.css";
// import { useDispatch } from "react-redux";
// import { setNote } from "../redux/action/note";
import { useDispatch, useSelector } from "react-redux";
import { changeStep } from "../../redux/action/global";
import { putUpdateNote, getNote } from "../../redux/action/note";

export default function EditNoteInput({
  changeDataBody,
  changeDataTitle,
  noteData,
  changeDataColor,
  changeDataPinned,
  onSave,
}) {
  const noteDetail = useSelector(
    (state) => state.allNote.noteDataDetail.detail
  );
  // console.log("note ==>", noteDetail);
  const dataUpdate = useSelector((state) => state.global.data);

  const [updateNote, setUpdateNote] = useState({
    id: "",
    title: "",
    body: "",
    dateNote: "",
    date: "",
    time: "",
    pinned: false,
    color: "",
  });
  useEffect(() => {
    setUpdateNote({
      ...updateNote,
      id: noteDetail?.id,
      title: noteDetail?.title,
      body: noteDetail?.body,
      dateNote: noteDetail?.dateNote,
      pinned: noteDetail?.pinned,
      color: noteDetail?.color,
    });
  }, [noteDetail]);
  useEffect(() => {
    setUpdateNote({
      ...updateNote,
      id: dataUpdate?.id,
      title: dataUpdate?.title,
      body: dataUpdate?.body,
      dateNote: dataUpdate?.dateNote,
      pinned: dataUpdate?.pinned,
      color: dataUpdate?.color,
    });
  }, [dataUpdate]);
  // console.log("update==>", updateNote);
  const dispatch = useDispatch();
  return (
    <div className="note__outside modal-backdrop">
      <div
        className="note__container position-relative"
        style={{ backgroundColor: `${updateNote.color}` }}
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
            <h1>Edit Note</h1>
            <div className="note__pin">
              <button
                onClick={() => {
                  setUpdateNote({ ...updateNote, pinned: !updateNote.pinned });
                  changeDataPinned(!updateNote.pinned);
                }}
              >
                <img src={vectorPinLogo} alt="" />
                <h6>Pin</h6>
              </button>
            </div>
          </div>
          <div className="note__content">
            <input
              className="note__input"
              placeholder={updateNote?.title}
              value={updateNote?.title}
              onChange={(e) => {
                setUpdateNote({ ...updateNote, title: e.target.value });
                changeDataTitle(e.target.value);
              }}
            />
            <textarea
              className="note__textarea"
              placeholder={updateNote.body}
              value={updateNote.body}
              onChange={(e) => {
                setUpdateNote({ ...updateNote, body: e.target.value });
                changeDataBody(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="note__color">
            <h5>Choose your card</h5>
            <button
              value={updateNote.color}
              onClick={() => {
                setUpdateNote({ ...updateNote, color: "#FFBCC2" });
                changeDataColor("#FFBCC2");
              }}
              className="color1"
            ></button>
            <button
              value={updateNote.color}
              onClick={() => {
                setUpdateNote({ ...updateNote, color: "#FCF3A1" });
                changeDataColor("#FCF3A1");
              }}
              className="color2"
            ></button>
            <button
              value={updateNote.color}
              onClick={() => {
                setUpdateNote({ ...updateNote, color: "#D1CDFA" });
                changeDataColor("#D1CDFA");
              }}
              className="color3"
            ></button>
            <button
              value={updateNote.color}
              onClick={() => {
                setUpdateNote({ ...updateNote, color: "#FF8888" });
                changeDataColor("#FF8888");
              }}
              className="color4"
            ></button>
            <button
              value={updateNote.color}
              onClick={() => {
                setUpdateNote({ ...updateNote, color: "#CCF0D7" });
                changeDataColor("#CCF0D7");
              }}
              className="color5"
            ></button>
          </div>
          <div className="note__footer">
            <button
              onClick={() => {
                dispatch(changeStep("EditNoteAddTime", updateNote));
                // submitNote();
                // onSave();
              }}
            >
              Add time
            </button>
            <button
              className="SaveButton"
              onClick={async () => {
                // await onSave();
                await dispatch(putUpdateNote(noteDetail?.id, updateNote));
                await dispatch(changeStep("SaveNotes"));
                await dispatch(getNote());
                // await dispatch(deleteNote(noteDetail?.id));
              }}
              disabled={
                !updateNote.title ||
                !updateNote.body ||
                !updateNote.color ||
                !updateNote.dateNote
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
