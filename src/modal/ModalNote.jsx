import React, { useState } from "react";
import vectorPinLogo from "../assets/images/vectorPinLogo.png";
import "../assets/styles/ModalNote.scss";
import vectorClose from "../assets/images/vectorClose.png";
import "bootstrap/dist/css/bootstrap.css";
// import { useDispatch } from "react-redux";
// import { setNote } from "../redux/action/note";
import axios from "axios";

export default function NoteModal({
  onClose,
  changeDataNote,
  changeDataTitle,
  noteData,
  onSave,
  changeStep,
}) {
  const [noteInput, setNoteInput] = useState({
    title: "",
    body: "",
    dateNote: "",
    pinned: "false",
    color: "",
  });
  // const dispatch = useDispatch();
  // const changeNote = (e) => {
  //   setNoteInput({
  //     ...noteInput,
  //     title: e.target.value,
  //     body: e.target.value,
  //     dateNote: e.target.value,
  //     pinned: e.target.value,
  //     color: e.target.value,
  //   });
  // };
  const handlePostNote = (e) => {
    // e.preventDefault();
    submitNote();
    console.log("hei");
    // await dispatch(setNote(noteInput));
  };
  const Token = localStorage.getItem("Token");
  const submitNote = async (e) => {
    try {
      const res = await axios.post(
        "https://remindme.gabatch13.my.id/api/v1/notes",
        noteInput,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      onClose("");
      console.log(res);
    } catch (error) {
      if (error.response.status === 400) {
        alert("Harap diisi semua");
      }
    }
  };
  // console.log(noteData);
  return (
    <div className="note__outside modal-backdrop">
      <div
        className="note__container position-relative"
        style={{ backgroundColor: `${noteInput.color}` }}
      >
        <div className="note__close position-absolute top-0 start-100 translate-middle">
          <button
            onClick={() => {
              onClose("");
            }}
          >
            <img src={vectorClose} alt="" />
          </button>
        </div>
        <div className="note__wrapper">
          <div className="note__title">
            <h1>Note</h1>
            <div className="note__pin">
              <button
                onClick={() => setNoteInput({ ...noteInput, pinned: "true" })}
              >
                <img src={vectorPinLogo} alt="" />
                <h6>Pin</h6>
              </button>
            </div>
          </div>
          <div onSubmit={() => handlePostNote()} className="note__content">
            <input
              className="note__input"
              placeholder="Title"
              // name="title"
              value={noteInput.title}
              onChange={(e) =>
                setNoteInput({ ...noteInput, title: e.target.value })
              }
            />
            <textarea
              className="note__textarea"
              placeholder="Note"
              // name="body"
              value={noteInput.body}
              onChange={(e) =>
                setNoteInput({ ...noteInput, body: e.target.value })
              }
            ></textarea>
          </div>
          {/* <p>{`${noteInput.title}`}</p>
          <p>{`${noteInput.body}`}</p> */}
          <div className="note__color">
            <h5>Choose your card</h5>
            <button
              onClick={() => setNoteInput({ ...noteInput, color: "#FFBCC2" })}
              className="color1"
            ></button>
            <button
              onClick={() => setNoteInput({ ...noteInput, color: "#FCF3A1" })}
              className="color2"
            ></button>
            <button
              onClick={() => setNoteInput({ ...noteInput, color: "#D1CDFA" })}
              className="color3"
            ></button>
            <button
              onClick={() => setNoteInput({ ...noteInput, color: "#FF8888" })}
              className="color4"
            ></button>
            <button
              onClick={() => setNoteInput({ ...noteInput, color: "#CCF0D7" })}
              className="color5"
            ></button>
          </div>
          <div className="note__footer">
            <button
              onClick={() => {
                changeStep("AddTime");
                // submitNote();
              }}
            >
              Add time
            </button>
            <button
              className="SaveButton"
              onClick={() => {
                onSave();
                submitNote();
                changeStep("SaveNotes");
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
