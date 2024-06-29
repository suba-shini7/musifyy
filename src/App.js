import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavBar } from "./Components/NavBar";
import "./App.css";
import { RecentlyPlayed } from "./Components/Home/RecentlyPlayed";
import { MyWishtlist } from "./Components/MyWishtlist";
import { Explore } from "./Components/Explore";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { PlayingSong } from "./Components/PlayingSong";


function App() {
 
  const getMusic = async () => {
    const url =
      "https://spotify23.p.rapidapi.com/search/?q=tamil%20songs&type=multi&offset=0&limit=20&numberOfTopResults=20";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c214c11fd1msh0f20252d7d3bc03p14ecfdjsnba10e8984f43",
        "x-rapidapi-host": "spotify23.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setMusic(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMusic();
  }, []);

  const [music, setMusic] = useState([]);
  const [currentSongImage, setCurrentSongImage] = useState("");
  const [displayplayingSong, setDisplayPlayingSong] = useState(false);
  const OnShow = (url) => {
    setDisplayPlayingSong(true);
    setCurrentSongImage(url);
  };
  const [selectedPlaylistSong, setselectedPlaylistSong] = useState(false);
  const onPlaylistArtist = () => {
    setselectedPlaylistSong(true);
  };
  const backClick=()=>{
    setselectedPlaylistSong(false);

  }

  return (
    <div>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<Home music={music} OnShow={OnShow} />}
        ></Route>
        <Route path="recentlyplayed" element={<RecentlyPlayed />} />
        <Route path="mywishtlist" element={<MyWishtlist />} />
        <Route
          path="explore"
          element={
            <Explore
              music={music}
              onPlaylistArtist={onPlaylistArtist}
              selectedPlaylistSong={selectedPlaylistSong}
              backClick={backClick}
            />
          }
        />
      </Routes>
      {displayplayingSong ? (
        <PlayingSong
          currentSongImage={currentSongImage}
          setCurrentSongImage={setCurrentSongImage}
        />
      ) : null}
    </div>
  );
}

export default App;
