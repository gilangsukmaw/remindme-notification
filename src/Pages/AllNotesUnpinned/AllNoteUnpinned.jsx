import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PinCard from "../../assets/images/PinCard.png";
import unpinned from "../../assets/images/UnPinned.png";
import { getNote } from "../../redux/action/note";
import leftArrow from "../../assets/images/leftArrow.png";
import rightArrow from "../../assets/images/rightArrow.png";
import unpinnedLogo from "../../assets/images/unpinnedLogo.png";
import "../AllNotesUnpinned/AllNoteUnpinned.scss";

export default function AllNoteUnpinned(props) {
  const { data } = useSelector((state) => state.allNote.noteData);
  const { dateNote } = props;

  return (
    <div>
      <div className="unpinned__container">
        <div className="unpinned__date">
          <img src={leftArrow} alt="" />
          <h3>09-09-2021</h3>
          <img src={rightArrow} alt="" />
        </div>
        <div className="unpinned__wrapper">
          {data?.data
            ?.filter((data) => data.pinned === false)
            .map((item, index) => (
              <div key={index} className="unpinned__card">
                <div className="unpinned__title">
                  <h5 >{item?.title}</h5>
                  <img src={unpinnedLogo} alt="" />
                </div>
                <div className="unpinned__time">
                  <p >{item?.dateNote}</p>
                </div>
                <div className="unpinned__content">
                  <p >{item?.body}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
