import React, { useState } from "react";
import "../assets/styles/ModalDetailNote.scss";
import PinEdit from "../assets/images/PinEdit.png";
import TrashEdit from "../assets/images/TrashEdit.png";
import vectorClose from "../assets/images/vectorClose.png";
import notifLogo from "../assets/images/notifLogo.png";
import "bootstrap/dist/css/bootstrap.css";

function DetailNote({ closeDetailNote }) {
  return (
    <div className="detailNote__outside modal-backdrop">
      <div className="detailNote__container position-relative">
        <div className="detailNote__close position-absolute top-0 start-100 translate-middle">
          <button
            onClick={() => {
              closeDetailNote(false);
            }}
          >
            <img src={vectorClose} alt="" />
          </button>
        </div>
        <div className="detailNote__wrapper">
          <div className="detailNote__top">
            <h1>Note Details</h1>
          </div>
          <div className="detailNote__icon">
            <button>
              <img src={PinEdit} alt="" />
            </button>
            <button>
              <img src={TrashEdit} alt="" />
            </button>
          </div>
        </div>
        <div className="detailNote__title">
          <h2>UI Seminar</h2>
        </div>
        <div className="detailNote__reminder">
          <div className="detailNote__date">
            <h3>Date</h3>
          </div>
          <div className="detailNote__time">
            <h3>Time</h3>
            <img src={notifLogo} alt="" />
          </div>
        </div>
        <div className="detailNote__titleContent">
          <h3>Title: Understanding Business</h3>
        </div>
        <div className="detailNote__content">
          <p>
            As designer that understands how to continually bring value to the
            business while also advocating for the user is a golden egg for
            organizations. As designer that understands how to continually bring
            value to the business while also advocating for the user is a golden
            egg for organizations.
          </p>
        </div>
        <div className="detailNote__color">
          <button className="color0"></button>
          <button className="color1"></button>
          <button className="color2"></button>
          <button className="color3"></button>
          <button className="color4"></button>
          <button className="color5"></button>
        </div>
        <div className="detailNote__button">
          <button>Edit</button>
          <button>Mark as done</button>
        </div>
      </div>
    </div>
  );
}

export default function ModalDetailNote() {
  const [modalDetailNote, setModalDetailNote] = useState(false);
  return (
    <div className="detailNote__openNote">
      <button
        className="openDetailNote"
        onClick={() => {
          setModalDetailNote(true);
        }}
      >
        Detail Note
      </button>
      {modalDetailNote && <DetailNote closeDetailNote={setModalDetailNote} />}
    </div>
  );
}
