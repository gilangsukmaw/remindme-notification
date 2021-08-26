// import router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import NewUser from "./Pages/CreateTask/NewUser";
import CreateTask from "./modal/CreateTask";
import SaveGoals from "./modal/SaveGoalsModal/SaveGoalsModal";
import ProfilePage from "./Pages/ProfilePage";
import Router from "./routes/router";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          {/* <LandingPage /> */}
          {/* <NewUser /> */}
          {/* <CreateTask /> */}
          <Router />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
