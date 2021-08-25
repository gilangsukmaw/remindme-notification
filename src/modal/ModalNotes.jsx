import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/modal";
import "../assets/styles/ModalNotes.scss";
import modalPin from "../assets/images/modalPin.png";
import Modal from "react-bootstrap/Modal";


const ModalNotes = () => {
  return (
    <Modal>
    <div className="container m-0 p-0">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
      >
        Notes
      </button>
      <div
        className="modal fade"
        id="modalNote"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title m-0" id="exampleModalLabel">
                Note
              </h5>
              <div className="modal-pin">
                <button>
                  <img src={modalPin} alt="" />
                  <p>Pin</p>
                </button>
              </div>
              <button
                type="button"
                className="btn-close top-0 position-absolute start-100 translate-middle"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="modal-input-title mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Title"
                  />
                </div>
                <div className="modal-input-note mb-3">
                  <textarea
                    className="form-control"
                    id="message-text"
                    placeholder="Note"
                  ></textarea>
                </div>
              </form>
              <div className="modal-color">
                <h6>Choose your card</h6>
                <button className="color1"></button>
                <button className="color2"></button>
                <button className="color3"></button>
                <button className="color4"></button>
                <button className="color5"></button>
              </div>
            </div>
            <div className="modal-footer border-0 d-flex justify-content-center">
              <button type="button" className="btn" data-bs-dismiss="modal">
                Add time
              </button>
              <button type="button" className="btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Modal>
  );
};

export default ModalNotes;
