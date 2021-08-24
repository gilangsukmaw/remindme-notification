import Router from "./routes/router";
import { BrowserRouter, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./Custom.scss";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Router />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
