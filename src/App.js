import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./Custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailNote from "./modal/ModalDetailNote";
// import ModalEditSuccess from "./modal/ModalEditSuccess";
// import SaveEdits from "./modal/ModalEditSuccess";
// import ModalEditPhoto from "./modal/ModalEditPhoto";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          {/* <ModalEditPhoto /> */}
          <Router />
          {/* <DetailNote /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
