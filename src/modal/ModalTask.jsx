import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/modal";
import "../assets/styles/ModalTask.css";
import buttonModalNotes from "../assets/images/buttonModalNotes.png";
import buttonModalGoals from "../assets/images/buttonModalGoals.png";

const ModalTask = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            {/* </div> */}
            <div className="modal-body">
              <div>
                <h5 className="modal-title" id="exampleModalToggleLabel">
                  Which task you want to create?
                </h5>
              </div>
              <button
                className="btn-notes"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                <img src={buttonModalNotes} alt="" />
              </button>
              <button
                className="btn-goals"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                <img src={buttonModalGoals} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Modal 2
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        className="btn btn-primary"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Create task
      </a>
    </div>
  );
};

export default ModalTask;
