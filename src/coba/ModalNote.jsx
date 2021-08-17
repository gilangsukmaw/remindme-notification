import React, { useState } from "react";
import vectorPinLogo from "../assets/images/vectorPinLogo.png";
import "../assets/styles/ModalNote.scss";

function NoteModal({ closeNote }) {
  return (
    <div className="note__outside">
      <div className="note__container">
        <button> X </button>
        <div className="note__wrapper">
          <div className="note__title">
            <h1>Note</h1>
            <div className="note__pin">
              <button>
                <img src={vectorPinLogo} alt="" />
                <h6>Pin</h6>
              </button>
            </div>
          </div>
          <div className="note__content">
            <input className="note__input" placeholder="Title" />
            <textarea className="note__textarea" placeholder="Note"></textarea>
          </div>
          <div className="note__color">
            <h5>Choose your card</h5>
            <button className="color1"></button>
            <button className="color2"></button>
            <button className="color3"></button>
            <button className="color4"></button>
            <button className="color5"></button>
          </div>
          <div className="note__footer">
            <button>Add time</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ModalNote() {
  const [openModalNote, setOpenModalNote] = useState(false);
  return (
    <div className="note__center">
      <button
        className="openNote"
        onClick={() => {
          setOpenModalNote(true);
        }}
      >
        Note
      </button>
      {openModalNote && <NoteModal closeNote={setOpenModalNote} />}
    </div>
  );
}
