import router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import NewUser from "./Pages/CreateTask/NewUser";
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
    <div>
      <BrowserRouter>
        <CreateTask />
        {/* <ModalDetailNote /> */}
        <NewUser />
        {/* <ModalAddTime /> */}
        {/* <TaskModal /> */}
        {/* <ModalNote /> */}
        {/* <SaveChanges /> */}
        {/* <Delete /> */}
        <router />
      </BrowserRouter>
    </div>
  );
}

export default App;
