import { BrowserRouter , Route,Routes} from "react-router-dom";
import './App.css';
import Registration from   './Registration/Registration'
import Success from './Success/Success';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element ={<Registration />}/>
          <Route path ="/Success" element ={<Success />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
