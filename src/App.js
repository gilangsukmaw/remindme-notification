import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./Custom.scss";
// import NotesPinnedCard from "./component/NotesCard/NotesCardPinned";
// import NotesUnPinnedCard from "./component/NotesCard/NotesUnpinned";
// import HomeExisting from "./component/HomeExisting/Home";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          {/* <HomeExisting /> */}
          <Router />
          {/* <NotesPinnedCard />
          <NotesUnPinnedCard /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
