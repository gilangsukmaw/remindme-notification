import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Container, Col, Carousel, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import { useState } from "react"
import NotesPinnedCard from '../../component/NotesCard/NotesCardPinned';
import SettingGoalsCard from '../../component/GoalsCard/SettingGoalsCard';


function TaskPage() {
const [show, setShow] = useState(false);
const [thisshow, setthisShow] = useState(false);

const handleClose = () => setthisShow(false);
const handleShow = () => setthisShow(true);


return (
<>
  <div>
    <h1>Ini Profile Page</h1>
    <Button variant="primary" onClick={()=> setShow(true)}>
      Custom Width Modal
    </Button>

    <Modal show={show} onHide={()=> setShow(false)}
      dialogClassName="modal-100w"
      aria-labelledby="example-custom-modal-styling-title"
      >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Custom Modal Styling
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem!
        </p>
      </Modal.Body>
    </Modal>
  </div>

  <Button variant="primary" onClick={handleShow}>
    Launch static backdrop modal
  </Button>

  <Modal show={thisshow} onHide={handleClose} backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      I will not close if you click outside me. Don't even try to press
      escape key.
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary">Understood</Button>
    </Modal.Footer>
  </Modal>
  <br></br>
  <NotesPinnedCard />
  <SettingGoalsCard />


</>
)
}

export default TaskPage