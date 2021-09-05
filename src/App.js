import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./Custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import SaveChanges from "./modal/ModalSaveChanges";
import ModalDetailNote from "./modal/ModalDetailNote";
import DetailNote from "./modal/ModalDetailNote";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          {/* <SaveChanges /> */}
          {/* <DetailNote /> */}
          <Router />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
