import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/styles/ModalAddTime.scss";
import buttonNotifLogo from "../assets/images/buttonNotifLogo.png";

function MyVerticallyCenteredModal(props) {
  // const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState(new Date());

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal__container">
        <div className="time__title">
          <h1>Pick Date</h1>
          <button className="notification">
            <img src={buttonNotifLogo} alt="" />
            <p>Notification</p>
          </button>
          <button
            type="button"
            className="btn-close top-0 position-absolute start-100 translate-middle"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="time__container">
          <div className="time__wrapper">
            <div className="time__input">
              <div className="time__date">
                <h3>Date</h3>
                <input type="text" className="input-time" id="time" />
                {/* <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              /> */}
              </div>
              <div className="time__time">
                <h3>Time</h3>
                <input type="text" className="input-time" id="time" />
              </div>
            </div>
            <div className="time__calendar">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
          <div className="time__button">
            <button className="time__save">Save Note</button>
            <button className="time__cancel" onClick={props.onHide}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default function ModalAddTime() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add time
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
