import Home from './Components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavBar } from './Components/NavBar';
import './App.css';


function App() {
  return (
    <div>
      <NavBar/>
    <Home/>
    </div>
  );
}

export default App;
