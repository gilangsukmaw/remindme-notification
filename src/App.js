import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./Custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTask from "./modal/CreateTask";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Router />
          {/* <CreateTask /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
