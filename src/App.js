// import router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import NewUser from "./Pages/CreateTask/NewUser";
import CreateTask from "./modal/CreateTask";
import SaveGoals from "./modal/SaveGoalsModal/SaveGoalsModal";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NewUser />
          <CreateTask />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
