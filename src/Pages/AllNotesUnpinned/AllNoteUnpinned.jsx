import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PinCard from "../../assets/images/PinCard.png";
import unpinned from "../../assets/images/UnPinned.png";
import { getNote, getNoteDetail } from "../../redux/action/note";
import leftArrow from "../../assets/images/leftArrow.png";
import rightArrow from "../../assets/images/rightArrow.png";
import unpinnedLogo from "../../assets/images/unpinnedLogo.png";
import "../AllNotesUnpinned/AllNoteUnpinned.scss";
import { changeStep } from "../../redux/action/global";
import * as dayjs from "dayjs";

export default function AllNoteUnpinned({ ...props }) {
  const {
    onSave,
    noteData,
    changeDataTitle,
    changeDataBody,
    changeDataColor,
    changeDataPinned,
    changeDataDate,
    changeDataTime,
    // noteId: stateId,
  } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNote());
  }, []);
  const data = useSelector((state) => state.allNote.noteData.data);
  console.log("note unpinned", data);
  const b = useSelector((state) => state.allNote.noteData);
  console.log("==>", b);

  const [date, setDate] = useState();

  const d = new Date();
  const day = dayjs(d);

  return (
    <div>
      <div className="unpinned__container">
        <div className="unpinned__date">
          <img src={leftArrow} alt="" />
          <h3>{`${day}`}</h3>
          <img src={rightArrow} alt="" />
        </div>
        <div className="unpinned__wrapper">
          {typeof data == "undefined" ? (
            <div>
              <h1>Loading...</h1>
            </div>
          ) : (
            data?.data
              ?.filter((data) => data?.pinned === false)
              .map((item, index) => (
                <div
                  style={{ backgroundColor: `${item?.color}` }}
                  key={index}
                  className="unpinned__card"
                  onClick={async () => {
                    await dispatch(changeStep("EditNote"));
                    await dispatch(getNoteDetail(item?.id));
                    console.log("id", item.id);
                  }}
                >
                  <div className="unpinned__title">
                    <h5>{item?.title}</h5>
                    <img src={unpinnedLogo} alt="" />
                  </div>
                  <div className="unpinned__time">
                    <p>{item?.date}</p>
                  </div>
                  <div className="unpinned__content">
                    <p>{item?.body}</p>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}
