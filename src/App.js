import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./Custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalEditSuccess from "./modal/ModalEditSuccess";
import SaveEdits from "./modal/ModalEditSuccess";
// import ModalEditPhoto from "./modal/ModalEditPhoto";
import Photo from './Pages/ProfilePage/Photo.jsx'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          {/* <ModalEditPhoto /> */}
          {/* <Photo/> */}
          <Router />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
