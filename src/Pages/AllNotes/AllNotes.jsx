import React, { useEffect } from "react";
import pinAllNote from "../../assets/images/pinAllNote.png";
import PinCard from "../../assets/images/PinCard.png";
import "../AllNotes/AllNotes.scss";
import { useDispatch, useSelector } from "react-redux";
import { getNote } from "../../redux/action/note";
import Line from "../../assets/images/GoalDetailLine.png";
import AllNoteUnpinned from "../AllNotesUnpinned/AllNoteUnpinned";

const AllNotesCreate = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allNote.noteData);

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
          {data?.data?.map((item, index) => (
            <div key={index} className="allNote__card">
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
          ))}
        </div>
      </div>
      <div className="allNote__borderLine">
        <img src={Line} alt="" />
      </div>
      <div className="allNote__unpinned">
        <AllNoteUnpinned />
      </div>
    </div>
  );
};

export default AllNotesCreate;
