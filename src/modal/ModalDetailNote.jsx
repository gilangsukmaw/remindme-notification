import React, { useEffect, useState } from "react";
import "../assets/styles/ModalDetailNote.scss";
import PinEdit from "../assets/images/PinEdit.png";
import TrashEdit from "../assets/images/TrashEdit.png";
import vectorClose from "../assets/images/vectorClose.png";
import notifLogo from "../assets/images/notifLogo.png";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getNote, getNoteDetail } from "../redux/action/note";
import { changeStep } from "../redux/action/global";
import { deleteNote } from "../redux/action/note";
import * as dayjs from "dayjs";

export default function DetailNote({ ...props }) {
  const [updateNote, setUpdateNote] = useState({
    title: "",
    body: "",
    dateNote: "",
    pinned: false,
    color: "",
  });
  const { changeDataPinned, noteData, onSave, changeDataColor } = props;

  // const { allData } = useSelector((state) => state.allNote.noteData);
  // const { detail } = useSelector((state) => state.allNote.noteDataDetail);
  // useEffect(() => {
  //   dispatch(getNoteDetail());
  // }, []);
  const noteDetail = useSelector((state) => state.allNote.noteDataDetail.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    setUpdateNote({
      ...updateNote,
      title: noteDetail?.title,
      body: noteDetail?.detail?.body,
      dateNote: noteDetail?.detail?.dateNote,
      pinned: true,
      color: noteDetail?.detail?.color,
    });
  }, []);
  console.log("prop noteDetail", props);
  console.log(dispatch);
  console.log("allData");
  console.log("tesnoteDetail", noteDetail);
  useEffect(() => {
    dispatch(getNote());
  }, []);

  return (
    <div className="detailNote__outside modal-backdrop">
      <div
        className="detailNote__container position-relative"
        style={{ backgroundColor: `${noteDetail?.color}` }}
      >
        <div className="detailNote__close position-absolute top-0 start-100 translate-middle">
          <button
            onClick={() => {
              dispatch(changeStep(""));
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
            <button onClick={() => changeDataPinned(!noteData.pinned)}>
              <img src={PinEdit} alt="" />
            </button>
            <button
              onClick={async () => {
                await dispatch(deleteNote(noteDetail?.id));
                console.log("bunga", noteDetail);
                await dispatch(getNote());
                await dispatch(changeStep("DeleteSuccess"));
              }}
            >
              <img src={TrashEdit} alt="" />
            </button>
          </div>
        </div>
        <div className="detailNote__title">
          <h2>{noteDetail?.title}</h2>
        </div>
        <div className="detailNote__reminder">
          <div className="detailNote__date">
            <h3>Date</h3>
            <h6>{noteDetail?.date}</h6>
          </div>
          <div className="detailNote__time">
            <div className="detailNote__clock">
              <h3>Time</h3>
              <h6>{noteDetail?.time}</h6>
            </div>
            <img src={notifLogo} alt="" />
          </div>
        </div>
        <div className="detailNote__content">
          <p>{noteDetail?.body}</p>
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
          <button
            onClick={() => {
              dispatch(changeStep("InputNote"));
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              // dispatch(changeStep("SaveUpdateNote"));
              dispatch(changeStep("SaveNotes"));
              onSave();
            }}
          >
            Mark as done
          </button>
        </div>
      </div>
    </div>
  );
}
