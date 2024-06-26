import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavBar } from "./Components/NavBar";
import "./App.css";
import { RecentlyPlayed } from "./Components/Home/RecentlyPlayed";
import { MyWishtlist } from "./Components/MyWishtlist";
import { Explore } from "./Components/Explore";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const getMusic = async () => {
    const url = 'https://spotify23.p.rapidapi.com/search/?q=5lfuu0un8XjAtUdxwtqjm4&type=multi&offset=0&limit=10&numberOfTopResults=5';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'c214c11fd1msh0f20252d7d3bc03p14ecfdjsnba10e8984f43',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMusic();
  }, []);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="recentlyplayed" element={<RecentlyPlayed />} />
        <Route path="mywishtlist" element={<MyWishtlist />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
