import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./Custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
