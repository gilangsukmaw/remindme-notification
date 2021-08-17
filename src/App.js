import Router from './routes/router';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Custom.scss'
// import NewUser from "./Pages/CreateTask/NewUser";
// import ModalTask from "./modal/ModalTask";
// import ModalNotes from "./modal/ModalNotes";
import ModalAddTime from "./modal/ModalAddTime";
import TaskModal from "./coba/ModalTask";



function App() {
  return (
    <>
    <div >
      <BrowserRouter>
        <Router />

        {/* <NewUser /> */}
        {/* <ModalNotes /> */}
        <ModalAddTime />
        <TaskModal />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
