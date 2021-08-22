<<<<<<< HEAD
import Router from './routes/router';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Custom.scss'
// import NewUser from "./Pages/CreateTask/NewUser";
=======
import router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import NewUser from "./Pages/CreateTask/NewUser";
>>>>>>> e5ac9f178374e194290205b3930d3321b0803cd5
// import ModalTask from "./modal/ModalTask";
// import ModalNotes from "./modal/ModalNotes";
import ModalAddTime from "./modal/ModalAddTime";
import TaskModal from "./modal/ModalTask";
import ModalNote from "./modal/ModalNote";
import ModalDetailNote from "./modal/ModalDetailNote";
import SaveChanges from "./modal/ModalSaveChanges";
import Delete from "./modal/ModalDelete";
import CreateTask from "./modal/CreateTask";



function App() {
  return (
    <>
    <div >
      <BrowserRouter>
        <Router />
        {/* <NewUser /> */}
        {/* <ModalNotes /> */}
        {/* <ModalAddTime />
        <TaskModal /> */}
        <NewUser />
        {/* <ModalAddTime /> */}
        {/* <TaskModal /> */}
        {/* <ModalNote /> */}
        <CreateTask />
        <ModalDetailNote />
        <SaveChanges />
        <Delete />
       </BrowserRouter>
    </div>
    </>
  );
}

export default App;
