import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavBar } from "./Components/NavBar";
import "./App.css";
import { RecentlyPlayed } from "./Components/Home/RecentlyPlayed";
import { MyWishtlist } from "./Components/MyWishtlist";
import { Explore } from "./Components/Explore";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}> 
        </Route>
        <Route path="recentlyplayed" element={<RecentlyPlayed />} />
        <Route path="mywishtlist" element={<MyWishtlist />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
