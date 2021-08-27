import Router from "./routes/router";
import { BrowserRouter } from "react-router-dom";
import SignInUpPage from "./Pages/SigninPage/SignInBase";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <SignInUpPage/>
          {/* <Router /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
