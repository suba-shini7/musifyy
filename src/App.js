import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavBar } from "./Components/NavBar";
import "./App.css";
import { RecentlyPlayed } from "./Components/Home/RecentlyPlayed";
import { MyWishtlist } from "./Components/MyWishtlist";
import { Explore } from "./Components/Explore";
import { Route, Routes } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { PlayingSong } from "./Components/PlayingSong";

function App() {
  const [music, setMusic] = useState(null);  
  const audioref=useRef(null)
  const [currentSong, setCurrentSong] = useState(null);

  const getMusic = async () => {
    const url =
      "https://v1.nocodeapi.com/subashini/spotify/TBjoIPHfzNEaaIcc/search?q=tamil&type=track";
     var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
         const options = {
      method: "GET",
     headers: myHeaders,
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

  const [currentSongImage, setCurrentSongImage] = useState("");
  const [displayplayingSong, setDisplayPlayingSong] = useState(false);
  const OnShow = (url,songurl) => {
    setDisplayPlayingSong(true);
    setCurrentSongImage(url);
    setCurrentSong(songurl)
    if (currentSong && audioref.current) {
      audioref.current.currentTime = 0; // Reset to the start
      audioref.current.play(); // Start playing the new song
    };
   
  };
  const [selectedPlaylistSong, setselectedPlaylistSong] = useState(false);
  const onPlaylistArtist = () => {
    setselectedPlaylistSong(true);
  };
  const backClick = () => {
    setselectedPlaylistSong(false);
  };

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
          currentSong={currentSong}
          audioref={audioref}
          // src={}
        />
      ) : null}
    </div>
  );
}

export default App;
