import React, { useState } from "react";
import saveLogo from "../assets/images/saveLogo.png";
import "../assets/styles/ModalDelete.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDelete({ closeModal }) {
  return (
    <div id="modal">
      <div className="delete__outside modal-backdrop">
        <div className="click__outside" onClick={() => closeModal()}></div>
        <div className="delete__container">
          <div className="delete__wrapper">
            <img src={saveLogo} alt="" />
            <p>
              Delete note success. <br /> Let’s make another note!
            </p>
            <button type="submit">Ok</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Delete() {
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <>
      <button
        className="openDelete
    "
        onClick={() => {
          setOpenDelete(true);
        }}
      >
        delete success!
      </button>
      {openDelete && <ModalDelete closeModal={() => setOpenDelete(false)} />}
    </>
  );
}
