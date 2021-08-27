import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import NewUser from "./Pages/CreateTask/NewUser";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Router />
          {/* <NewUser /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
