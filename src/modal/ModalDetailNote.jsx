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
import { putUpdateNote } from "../redux/action/note";

export default function DetailNote({ ...props }) {
  // const [updateNote, setUpdateNote] = useState({
  //   title: "",
  //   body: "",
  //   dateNote: "",
  //   pinned: false,
  //   color: "",
  // });
  const { changeDataPinned, noteData, onSave, changeDataColor } = props;

  // const { allData } = useSelector((state) => state.allNote.noteData);
  // const { detail } = useSelector((state) => state.allNote.noteDataDetail);
  // useEffect(() => {
  //   dispatch(getNoteDetail());
  // }, []);
  const noteDetail = useSelector((state) => state.allNote.noteDataDetail.detail);

  const dispatch = useDispatch();
  console.log("prop noteDetail", props);
  console.log(dispatch);
  console.log("allData");
  console.log("tesnoteDetail", noteDetail);
  useEffect(() => {
    dispatch(getNote());
  }, []);
  // useEffect(() => {
  //   dispatch(getNoteDetail());
  // }, []);
  const [updateNote, setUpdateNote] = useState({
    title: "",
    body: "",
    dateNote: "",
    date: "",
    item: "",
    pinned: false,
    color: "",
  });
  useEffect(() => {
    setUpdateNote({
      ...updateNote,
      title: noteDetail?.title,
      body: noteDetail?.body,
      dateNote: noteDetail?.dateNote,
      pinned: noteDetail?.pinned,
      color: noteDetail?.color,
    });
  }, []);
  console.log("bunga", noteDetail);
  // console.log("noteinput", noteInput.date);
  return (
    <div className="detailNote__outside modal-backdrop">
      <div
        className="detailNote__container position-relative"
        style={{
          backgroundColor: `${updateNote.color}` && `${noteDetail?.color}`,
        }}
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
            <button
              onClick={() => {
                setUpdateNote({ ...updateNote, pinned: !updateNote.pinned });
                changeDataPinned(!updateNote.pinned);
              }}
            >
              <img src={PinEdit} alt="" />
            </button>
            <button
              onClick={async () => {
                await dispatch(deleteNote(noteDetail?.id));
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
        <div className="detailNote__button">
          <button
            onClick={async () => {
              await dispatch(getNoteDetail(noteDetail?.id));
              await dispatch(changeStep("EditNoteInput"));
            }}
          >
            Edit
          </button>
          <button
            onClick={async () => {
              // dispatch(changeStep("SaveUpdateNote"));
              await onSave();
              await dispatch(changeStep("SaveUpdateNote"));
            }}
          >
            Mark as done
          </button>
        </div>
      </div>
    </div>
  );
}
