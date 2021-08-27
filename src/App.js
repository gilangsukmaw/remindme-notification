import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./Custom.scss";
import AllNotes from "./Pages/AllNotes/AllNotes";
// import NotesPinnedCard from "./component/NotesCard/NotesCardPinned";
// import NotesUnPinnedCard from "./component/NotesCard/NotesUnpinned";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <AllNotes />
          {/* <Router /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
