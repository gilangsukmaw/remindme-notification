import React, { useState } from "react";
import saveLogo from "../assets/images/saveLogo.png";
import "../assets/styles/ModalDelete.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function ModalDelete({ closeDelete }) {
  return (
    <div className="delete__outside modal-backdrop">
      <div className="delete__container">
        <div className="delete__wrapper">
          <img src={saveLogo} alt="" />
          <p>
            Delete note success. <br /> Let’s make another note!
          </p>
          <button
            onClick={() => {
              closeDelete(false);
            }}
          >
            Ok
          </button>
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
        deleted changes!
      </button>
      {openDelete && <ModalDelete closeChanges={setOpenDelete} />}
    </>
  );
}
