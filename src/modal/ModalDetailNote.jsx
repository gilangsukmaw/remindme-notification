import React, { useState, useEffect } from "react";
import "../assets/styles/ModalDetailNote.scss";
import PinEdit from "../assets/images/PinEdit.png";
import TrashEdit from "../assets/images/TrashEdit.png";
import vectorClose from "../assets/images/vectorClose.png";
import notifLogo from "../assets/images/notifLogo.png";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getNote, getNoteDetail } from "../redux/action/note";

export default function DetailNote({
  onClose,
  changeDataBody,
  changeDataTitle,
  noteData,
  changeDataColor,
  changeDataPinned,
  onSave,
  setStep,
  changeStep,
}) {
  const { allData } = useSelector((state) => state.allNote.noteData);
  const { detail } = useSelector((state) => state.allNote.noteDataDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNote());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNoteDetail());
  }, [dispatch]);

  console.log("allData", allData);
  console.log("datadetail", detail?.data?.id);
  return (
    <div className="detailNote__outside modal-backdrop">
      <div className="detailNote__container position-relative">
        <div className="detailNote__close position-absolute top-0 start-100 translate-middle">
          <button
            onClick={() => {
              onClose(false);
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
            <button>
              <img src={TrashEdit} alt="" />
            </button>
          </div>
        </div>
        <div className="detailNote__title">
          <h2>{}</h2>
        </div>
        <div className="detailNote__reminder">
          <div className="detailNote__date">
            <h3>Date</h3>
            <h6>date</h6>
          </div>
          <div className="detailNote__time">
            <div className="detailNote__clock">
              <h3>Time</h3>
              <h6>time</h6>
            </div>
            <img src={notifLogo} alt="" />
          </div>
        </div>
        {/* <div className="detailNote__titleContent">
          <h3>Title: Understanding Business</h3>
        </div> */}
        <div className="detailNote__content">
          <p>hei</p>
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
          <button onClick={() => changeStep("NoteModal")}>Edit</button>
          <button onClick={() => setStep("SaveChanges")}>Mark as done</button>
        </div>
      </div>
    </div>
  );
}

// export default function ModalDetailNote() {
//   const [modalDetailNote, setModalDetailNote] = useState(false);
//   return (
//     <div className="detailNote__openNote">
//       <button
//         className="openDetailNote"
//         onClick={() => {
//           setModalDetailNote(true);
//         }}
//       >
//         Detail Note
//       </button>
//       {modalDetailNote && <DetailNote closeDetailNote={setModalDetailNote} />}
//     </div>
//   );
// }
