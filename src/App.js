import router from './routes/router';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div >
   <BrowserRouter>
        <router />
      </BrowserRouter>
    </div>
  );
}

export default App;
