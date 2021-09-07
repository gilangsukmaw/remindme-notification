import React, { useEffect } from "react";
import pinAllNote from "../../assets/images/pinAllNote.png";
import PinCard from "../../assets/images/PinCard.png";
import "../AllNotes/AllNotes.scss";
import { useDispatch, useSelector } from "react-redux";
import { getNote } from "../../redux/action/note";
import Line from "../../assets/images/GoalDetailLine.png";
import AllNoteUnpinned from "../AllNotesUnpinned/AllNoteUnpinned";
import ModalDetailNote from "../../modal/ModalDetailNote";
import ModalTest from "../../modal/modalTest";
import { changeStep } from "../../redux/action/global";
import { getNoteDetail } from "../../redux/action/note";

const AllNotesCreate = ({ ...props }) => {
  const {
    onSave,
    noteData,
    changeDataTitle,
    changeDataBody,
    changeDataColor,
    changeDataPinned,
    changeDataDate,
    changeDataTime,
  } = props;

  console.log(props);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allNote.noteData);
  // const modalStep = useSelector((state) => state.global.modalStep);

  useEffect(() => {
    dispatch(getNote());
  }, []);
  console.log("note", data);
  return (
    <div>
      <div className="allNote__container">
        <h1>My All Notes</h1>
        <div className="allNote__top">
          <img src={pinAllNote} alt="" />
          <p>Pinned Notes</p>
        </div>
        <div className="allNote__wrapper">
          {data?.data
            ?.filter((data) => data.pinned === true)
            .map((item, index) => (
              // <button >
              <div
                key={index}
                className="allNote__card"
                onClick={async () => {
                  await dispatch(changeStep("EditNote"));
                  await dispatch(getNoteDetail(item.id));
                  console.log("id", item.id);
                }}
              >
                <div className="allNote__overflow">
                  <div className="allNote__title">
                    <h5>{item?.title}</h5>
                    <img src={PinCard} alt="" />
                  </div>
                  <div className="allNote__time">
                    <p>{item?.dateNote}</p>
                  </div>
                  <div className="allNote__content">
                    <p>{item?.body}</p>
                  </div>
                </div>
              </div>
              // </button>
            ))}
        </div>
      </div>
      <div className="allNote__borderLine">
        <img src={Line} alt="" />
      </div>
      <div className="allNote__unpinned">
        <AllNoteUnpinned />
      </div>
      <ModalTest
        onSave={onSave}
        noteData={noteData}
        changeDataTitle={changeDataTitle}
        changeDataBody={changeDataBody}
        changeDataColor={changeDataColor}
        changeDataPinned={changeDataPinned}
        changeDataDate={changeDataDate}
        changeDataTime={changeDataTime}
      />
    </div>
  );
};

export default AllNotesCreate;
