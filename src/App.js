import router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import NewUser from "./Pages/CreateTask/NewUser";
import ModalTask from "./modal/ModalTask";
import ModalNotes from "./modal/ModalNotes";
import ModalGoals from "./modal/ModalGoals";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NewUser />
        <ModalTask />
        <ModalNotes />
        <ModalGoals />
        <router />
      </BrowserRouter>
    </div>
  );
}

export default App;
