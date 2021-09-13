/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import background from "../assets/images/background.png";
// import takePicture from "../assets/images/takePicture.png";
// import removePhoto from "../assets/images/removePhoto.png";
// import addGallery from "../assets/images/addGallery.png";
import "../assets/styles/ModalEditPhoto.scss";

export default function ModalEditPhoto() {
  return (
    <>
    {/* <div id="modal">
      <div className="edit__outside modal-backdrop">
        <div className="click__outside"></div>
        <div className="edit__container">
          <div className="edit__wrapper">
            <div className="edit__title">
              <p>Edit Photo</p>
            </div>
            <div className="edit__button">
              <div className="edit__remove">
                <button className="position-relative" onClick={EditPhoto}>
                  <img src={background} alt="" />
                  <img className="position-absolute top-50 start-50 translate-middle" src={removePhoto} alt="" />
                </button>
                <p>Remove Photo</p>
              </div>
              <div className="edit__take">
                <button className="position-relative">
                  <img src={background} alt="" />
                  <img className="position-absolute top-50 start-50 translate-middle" src={takePicture} alt="" />
                </button>
                <p>Take a Picture</p>
              </div>
              <div className="edit__add">
                <button className="position-relative">
                  <img src={background} alt="" />
                  <img className="position-absolute top-50 start-50 translate-middle" src={addGallery} alt="" />
                </button>
                <p>Add from gallery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
}

function EditPhoto() {
  // const [openEdit, setOpenEdit] = useState(false);

  return (
    <>
      {/* <button
        className="openEdit
    "
        onClick={() => {
          setOpenEdit(true);
        }}
      >
        edit success!
      </button>
      {openEdit && <ModalEditPhoto closeModal={() => setOpenEdit(false)} />} */}
    </>
  );
}
