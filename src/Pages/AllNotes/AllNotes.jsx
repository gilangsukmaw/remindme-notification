import React, { useEffect } from "react";
// import { Container, Button, Carousel } from "react-bootstrap";
import pinAllNote from "../../assets/images/pinAllNote.png";
import PinCard from "../../assets/images/PinCard.png";
import "../AllNotes/AllNotes.scss";
import { useDispatch, useSelector } from "react-redux";
import { getNote } from "../../redux/action/note";

const AllNotesCreate = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allNote.noteData);

  useEffect(() => {
    dispatch(getNote());
  }, [dispatch]);
  console.log("note", data);
  return (
    <div>
      <div className="allNote__container">
        <h1>My All Notes</h1>
        <div className="allNote__top">
          <img src={pinAllNote} alt="" />
          <p>Pinned Notes</p>
        </div>
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
        {/* <Carousel fade> */}
        {/* <Carousel.Item> */}
        {/* </Carousel.Item> */}
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default AllNotesCreate;
