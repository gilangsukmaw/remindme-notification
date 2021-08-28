import Router from "./routes/router";
import { BrowserRouter, Route } from "react-router-dom";

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
