import React, { useState } from "react";
import background from "../../assets/images/background.png";
import takePicture from "../../assets/images/takePicture.png";
import removePhoto from "../../assets/images/removePhoto.png";
import addGallery from "../../assets/images/addGallery.png";
import Close from "../../assets/images/vectorClose.png";
import DefUser from "../../assets/images/user_dev8vy.png";
import Lego from "../../assets/images/Photo.png";
import closeX from "../../assets/images/closeX.png";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "./editPhoto.scss";
import { Modal, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import edit from "../../assets/images/Ellipse 107.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/action/user";
import Cross from '../../assets/images/OopsCross.svg'


function EditPhotoProfile(props) {
  const USEREMAIL = localStorage.getItem("USEREMAIL");
  const [EditPhotoShow, setEditPhotoShow] = useState(false);
  const { firstname, lastname, username, onHide } = props;
  // console.log (firstname, lastname , username, USEREMAIL)
  // console.log (color)
  // console.log (id)

  function EditPhotoProfile(props) {
    const Token = localStorage.getItem("Token");
    const { firstname, lastname, username, email, onHide } = props;

    const [PhotoGalleryShow, setPhotoGalleryShow] = useState(false);

    const [state, setState] = useState({
      image: null,
    });
    // console.log (Token ,state.firstname, state.lastname , state.username, state.email, state.image)


    
    const swalRemove = () => Swal.fire({
      icon: 'warning',
      width: 450,
      confirmButtonText: "Delete Photo",
      confirmButtonColor: "#FF8888",
      allowEnterKey: false,
      // showCancelButton: true,
      // cancelButtonText: 'Cancel',
      title: 'Are You Sure!?',
      text: 'Click Outside if you want to Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          {
            // console.log(state);
            let form_data = new FormData();
            form_data.append("firstname", `${firstname}`);
            form_data.append("lastname", `${lastname}`);
            form_data.append("username", `${username}`);
            form_data.append("email", `${email}`);
            form_data.append("image", `${DefUser}`);
            let url = `https://remindme.gabatch13.my.id/api/v1/user/`;
            try {axios.put(url, form_data, {
                headers: { Authorization: `Bearer ${Token}` },
              })
              .then((res) => {
                // console.log(res.data);
                dispatch(getUser());
                setPhotoGalleryShow(false);
              })
            }catch(err) { console.log(err)};};
        } 
      });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (state.image === null) {Swal.fire({
        imageUrl: (`${Lego}`),
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: 'Custom image',
        width: 450,
        confirmButtonText: "Ok",
        confirmButtonColor: "#625BAD",
        title: 'No File Found',
        text: 'Please Check Again',
        });
      return} else {
        // console.log(state);
        let form_data = new FormData();
        form_data.append("firstname", `${firstname}`);
        form_data.append("lastname", `${lastname}`);
        form_data.append("username", `${username}`);
        form_data.append("email", `${email}`);
        form_data.append("image", state.image, state.image.name);
        let url = `https://remindme.gabatch13.my.id/api/v1/user/`;
        try {axios.put(url, form_data, {
            headers: { Authorization: `Bearer ${Token}` },
          })
          .then((res) => {
            // console.log(res.data);
            dispatch(getUser());
            setPhotoGalleryShow(false);
          })
        }catch(err) { console.log(err)};}
      
    };

    return (
      <>
        <Modal className=" shadow" {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          {/* <Modal.Header closeButton>
        </Modal.Header> */}
          <div>
            <div className="edit__outside modal-backdrop">
              <div className="edit__container">
                <div className="edit__wrapper">
                  <div className="edit__title">
                    <p>Edit Photo</p>
                    <p style={{ color: "#f1f4fa" }}>klafnaslkfnaklsfnas</p>
                    <img style={{ cursor: "pointer",width:'20px', height:'20px' }} src={Close} onClick={onHide} alt='close'/>
                 </div>
                  <div className="edit__button">
                    <div className="edit__remove">
                      <button className="position-relative" onClick={swalRemove}>
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
                        <Modal centered onHide={() => setPhotoGalleryShow(false)} show={PhotoGalleryShow} >
                          <Modal.Header style={{backgroundColor:'#625BAD'}} >
                            <Modal.Title style={{color:'white'}} id="contained-modal-title-vcenter">
                              Choose Your Great Photo
                              <OverlayTrigger placement="top" overlay={<Tooltip id={`SetYourGoals`}><div>(If this didn't work)<br/>Press Esc</div></Tooltip>} >
                              <button style={{background:'none', border:'none', marginLeft:'8rem'}} onClick={() => setPhotoGalleryShow(false)} ><img style={{ cursor: "pointer",width:'20px', height:'20px' }} src={closeX} alt='close'/></button>
                              </OverlayTrigger>
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div>
                            <form>
                              <input type="file" id="photo" accept="image/png, image/jpeg" onChange={(e) => setState({ image: e.target.files[0] })} required />

                              <button className='ButtonUngu' style={{padding:'0 1.5rem 0 1.5rem', }} onClick={handleSubmit}>Submit</button>

                              {/* <Photo firstname={this.props.firstname} lastname={lastname} ></Photo> */}
                            </form>
                            </div>
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
      <button id="ButtonPhoto" style={{}} onClick={() => setEditPhotoShow(true)}>
        <img src={edit} style={{ width: "12.5rem" }} alt="edit"></img>
        <div style={{ color: "White", marginTop: "-2.5rem" }} className="AddProgressText">
          Edit Photo
        </div>
      </button>
      <EditPhotoProfile email={`${USEREMAIL}`} username={username} firstname={firstname} lastname={lastname} show={EditPhotoShow} onHide={() => setEditPhotoShow(false)} />
    </div>
  );
}

export default EditPhotoProfile;
