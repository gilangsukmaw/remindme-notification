// import router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import NewUser from "./Pages/CreateTask/NewUser";
import CreateTask from "./modal/CreateTask";




function App() {
  return (
    <>
    <div >
      <BrowserRouter>
        <NewUser />
        <CreateTask />
        <router />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
