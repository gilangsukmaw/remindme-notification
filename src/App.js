import router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
// import NewUser from "./Pages/CreateTask/NewUser";
// import ModalTask from "./modal/ModalTask";
// import ModalNotes from "./modal/ModalNotes";
import ModalAddTime from "./modal/ModalAddTime";
import TaskModal from "./coba/ModalTask";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <NewUser /> */}
        {/* <ModalNotes /> */}
        <ModalAddTime />
        <TaskModal />
        <router />
      </BrowserRouter>
    </div>
  );
}

export default App;
