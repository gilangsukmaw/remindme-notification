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

export default function DetailNote({ ...props }) {
  const [updateNote, setUpdateNote] = useState({
    title: "",
    body: "",
    dateNote: "",
    pinned: false,
    color: "",
  });
  const { changeDataPinned, noteData, stateId } = props;
  useEffect(() => {
    dispatch(getNote());
  }, []);

  // useEffect(() => {
  //   setUpdateNote({
  //     ...updateNote,
  //     title: tes?.data?.title,
  //     body: tes?.data?.body,
  //     dateNote: tes?.data?.dateNote,
  //     pinned: true,
  //     color: tes?.data?.color,
  //   });
  // }, []);
  // const { allData } = useSelector((state) => state.allNote.noteData);
  // const { detail } = useSelector((state) => state.allNote.noteDataDetail);
  const detail = useSelector((state) => state.allNote.noteDataDetail.data);
  const dispatch = useDispatch();
  console.log("prop detail", props);
  console.log(dispatch);
  console.log("allData");
  console.log("tesdetail", detail);
  // console.log("datadetail", detail?.data?.id);
  // const state = {
  //   noteDataDelete: {
  //     delete: [],
  //   },
  // };

  // const noteDelete = async (e) => {
  //   const Token = localStorage.getItem("Token");
  //   const { id } = id;
  //   try {
  //     const res = await axios.delete(
  //       `https://remindme.gabatch13.my.id/api/v1/notes/${id}`,
  //       state,
  //       { headers: { Authorization: `Bearer ${Token}` } }
  //     );
  //     dispatch(getNote());
  //     console.log(res);
  //   } catch (error) {
  //     if (error.response.status === 404) {
  //       alert(`error`);
  //     }
  //   }

  return (
    <div className="detailNote__outside modal-backdrop">
      <div className="detailNote__container position-relative">
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
                // noteDelete();
                // console.log("ini id", detail.data.id);
                // getNoteDetail(id);
                // console.log("id", id);
                // await dispatch(changeStep(""));
                await dispatch(deleteNote(detail?.id));
                console.log("bunga", detail)
                await dispatch(getNote());
                await dispatch(changeStep("DeleteSuccess"));
              }}
            >
              <img src={TrashEdit} alt="" />
            </button>
          </div>
        </div>
        <div className="detailNote__title">
          <h2>{stateId}</h2>
        </div>
        <div className="detailNote__reminder">
          <div className="detailNote__date">
            <h3>Date</h3>
            <h6>{detail?.data?.id}</h6>
          </div>
          <div className="detailNote__time">
            <div className="detailNote__clock">
              <h3>Time</h3>
              <h6>{detail?.data?.id}</h6>
            </div>
            <img src={notifLogo} alt="" />
          </div>
        </div>
        <div className="detailNote__content">
          <p>{detail?.data?.id}</p>
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
          {/* <button
            onClick={() => {
              dispatch(changeStep("SaveChanges"));
              onSave();
            }}
          >
            Mark as done
          </button> */}
        </div>
      </div>
    </div>
  );
}
