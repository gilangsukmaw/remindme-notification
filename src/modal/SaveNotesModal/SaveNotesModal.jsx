import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./SaveNotesModal.scss";
import Ceklis from "../../assets/images/signupChecklist.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeStep } from "../../redux/action/global";
import { getNote } from "../../redux/action/note";

function SaveNotes() {
  const [modalShow, setModalShow] = React.useState(true);
  const dispatch = useDispatch();

  function SaveNotesModal(props) {
    return (
      <>
        <Modal
          className="SaveNotes shadow"
          sytle={{ maxWidth: "1rem" }}
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <img style={{ width: "57px" }} src={Ceklis} alt="" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{}}>
            <p
              className="text-dark "
              style={{ fontWeight: "580", fontSize: "1.5rem" }}
            >
              Congratulations!<br></br>
              You successfully saved <br></br>
              your Note
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Link to="#">
              <Button
                style={{
                  backgroundColor: "#625BAD",
                  padding: "0.5rem 2rem 0.5rem 2rem",
                  height: "3.5rem",
                  width: "18rem",
                  borderRadius: "35px",
                  fontWeight: "700",
                  fontSize: "1.5rem",
                }}
                onClick={async () => {
                  await dispatch(changeStep(""));
                  await dispatch(getNote());
                  // await window.location.reload();
                }}
              >
                Ok
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <div>
      {/* <Button onClick={()=> setModalShow(true)}>SaveNotes Modal (Tombol Sementara)</Button> */}
      <SaveNotesModal show={modalShow} onHide={changeStep} />
    </div>
  );
}
export default SaveNotes;
