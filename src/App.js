import Router from './routes/router';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Custom.scss'




function App() {
  return (
    <>
    <div >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
