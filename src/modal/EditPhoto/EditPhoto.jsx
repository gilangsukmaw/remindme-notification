import React, { useState } from "react";
import background from "../../assets/images/background.png";
import takePicture from "../../assets/images/takePicture.png";
import removePhoto from "../../assets/images/removePhoto.png";
import addGallery from "../../assets/images/addGallery.png";
import "./editPhoto.scss";
import { Modal, Button } from "react-bootstrap";
import edit from "../../assets/images/Ellipse 107.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/action/user";

function EditPhotoProfile(props) {
  const USEREMAIL = localStorage.getItem("USEREMAIL");
  const [EditPhotoShow, setEditPhotoShow] = useState(false);
  const { firstname, lastname, username } = props;
  // console.log (firstname, lastname , username, USEREMAIL)
  // console.log (color)
  // console.log (id)

  function EditPhotoProfile(props) {
    const Token = localStorage.getItem("Token");
    const { firstname, lastname, username, email } = props;

    const [PhotoGalleryShow, setPhotoGalleryShow] = useState(false);

    const [state, setState] = useState({
      image: null,
    });
    // console.log (Token ,state.firstname, state.lastname , state.username, state.email, state.image)

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      // e.preventDefault();
      console.log(state);
      let form_data = new FormData();
      form_data.append("firstname", `${firstname}`);
      form_data.append("lastname", `${lastname}`);
      form_data.append("username", `${username}`);
      form_data.append("email", `${email}`);
      form_data.append("image", state.image, state.image.name);

      let url = `https://remindme.gabatch13.my.id/api/v1/user/`;
      axios
        .put(url, form_data, {
          headers: { Authorization: `Bearer ${Token}` },
        })
        .then((res) => {
          console.log(res.data);
          dispatch(getUser());
          setPhotoGalleryShow(false);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    };

    return (
      <>
        <Modal className=" shadow" {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          {/* <Modal.Header closeButton>
        </Modal.Header> */}
          <div>
            <div className="edit__outside modal-backdrop">
              <div className="click__outside"></div>
              <div className="edit__container">
                <div className="edit__wrapper">
                  <div className="edit__title">
                    <p>Edit Photo</p>
                  </div>
                  <div className="edit__button">
                    <div className="edit__remove">
                      <button className="position-relative" onClick={"EditPhoto"}>
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
                      <button className="position-relative" onClick={() => setPhotoGalleryShow(true)}>
                        <img src={background} alt="" />
                        <img className="position-absolute top-50 start-50 translate-middle" src={addGallery} alt="" />
                        <Modal centered onHide={() => setPhotoGalleryShow(false)} show={PhotoGalleryShow} closeButton>
                          <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">Choose Your Great Photo</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <form>
                              <input type="file" id="photo" accept="image/png, image/jpeg" onChange={(e) => setState({ image: e.target.files[0] })} required />

                              <Button onClick={handleSubmit}>Submit</Button>

                              {/* <Photo firstname={this.props.firstname} lastname={lastname} ></Photo> */}
                            </form>
                          </Modal.Body>

                          {/* <Button onClick={()=> setPhotoGalleryShow(false)}>hahahha</Button> */}
                        </Modal>
                      </button>
                      <p>Add from gallery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }

  return (
    <div className="EditPhotoButton d-flex flex-column" style={{}}>
      {/* Background Color akan diganti sesuai warna background Detail Progress */}
      <Button id="ButtonPhoto" variant="outline-light" style={{}} onClick={() => setEditPhotoShow(true)}>
        <img src={edit} style={{ width: "12.5rem" }} alt="edit"></img>
        <div style={{ color: "White", marginTop: "-2.5rem" }} className="AddProgressText">
          Edit Photo
        </div>
      </Button>
      <EditPhotoProfile email={`${USEREMAIL}`} username={username} firstname={firstname} lastname={lastname} show={EditPhotoShow} onHide={() => setEditPhotoShow(false)} />
    </div>
  );
}

export default EditPhotoProfile;
