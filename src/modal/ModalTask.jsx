import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/modal";
import "../assets/styles/ModalTask.scss";
import modalPin from "../assets/images/modalPin.png";

const ModalTask = () => {
  return (
    // modal task
    <div>
      <div
        className="modal fade"
        id="modalTask"
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
                className="btn-notes position-relative"
                data-bs-target="#modalNote"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                {/* <img classname="note-logo" src={noteLogo} alt="" />
                <img
                  className="position-absolute top-50 start-50 translate-middle"
                  src={vectorNoteLogo}
                  alt=""
                /> */}
                <p>Note</p>
              </button>
              <button
                className="btn-goals position-relative"
                data-bs-target="#modalGoal"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                {/* <img className="goals-logo" src={goalsLogo} alt="" />
                <img
                  className="position-absolute top-50 start-50 translate-middle"
                  src={vectorGoalsLogo}
                  alt=""
                /> */}
                <p>Goals</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*reference to note*/}
      {/* <div
        className="modal fade"
        id="modalNote"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
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
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-3">
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
              <button
                type="button"
                className="btn"
                data-bs-target="#addTime"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Add time
              </button>
              <button type="button" className="btn">
                Save
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/*reference to goal*/}
      <div
        className="modal fade"
        id="modalGoal"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                ModalGoals
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
                data-bs-target="#modalTask"
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
        href="#modalTask"
        role="button"
      >
        Create task
      </a>
    </div>
  );
};

export default ModalTask;
