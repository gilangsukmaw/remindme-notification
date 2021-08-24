import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Container, Col, Carousel, Form, Button, FormControl, InputGroup} from 'react-bootstrap';
import { useState } from "react"
import NotesPinnedCard from '../../component/NotesCard/NotesCardPinned';
import SettingGoalsCard from '../../modal/GoalsCard/SettingGoalsCard';
import OopsModal from '../../modal/OopsModal/OopsModal';
import AskModal from '../../modal/AskModal/AskModal';
import SaveNotes from '../../modal/SaveNotesModal/SaveNotesModal';
import CircularGoals from '../../component/CircularGoals/CircularGoals';

import * as dayjs from 'dayjs'


function TaskPage() {
  const [startDate, setStartDate] = useState(new Date());
const [show, setShow] = useState(false);
const [thisshow, setthisShow] = useState(false);

const handleClose = () => setthisShow(false);
const handleShow = () => setthisShow(true);


return (
<>
    <h1>Ini Profile Page</h1>
   <CircularGoals/>
  <br></br>
  <NotesPinnedCard />
  <SettingGoalsCard />
<OopsModal/>
<AskModal/>
<SaveNotes/>





</>
)
}

export default TaskPage