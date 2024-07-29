import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavBar } from "./Components/NavBar";
import { RecentlyPlayed } from "./Components/RecentlyPlayed";
import { MyWishtlist } from "./Components/MyWishtlist";
import { Route, Routes } from "react-router-dom";
import { PlayingSong } from "./Components/PlayingSong";
import { data } from "./data/data";
import { useState, useRef } from "react";
import Footer from "./Components/Footer";

function App() {
  const audioref = useRef(new Audio());
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongImage, setCurrentSongImage] = useState("");
  const [descrption, setDescrption] = useState("");
  const [displayplayingSong, setDisplayPlayingSong] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [clickedHearts, setClickedHearts] = useState({});
  const OnShow = (url, songurl, desc) => {
    setDisplayPlayingSong(true);
    setCurrentSongImage(url);
    setCurrentSong(songurl);
    setDescrption(desc);
    if (currentSong && audioref.current) {
      audioref.current.currentTime = 0; // Reset to the start
    }
  };
  const handleAddToWishlist = (song_title, song_url, image_url, Artist) => {
    let songAlreadyAdded = wishlist.map((song) => song.song_title);
    songAlreadyAdded = songAlreadyAdded.includes(song_title);
    if (songAlreadyAdded) {
      console.log("already added");
      unLike(song_title);
    } else {
      setWishlist([...wishlist, { song_title, song_url, image_url, Artist }]);
      console.log(wishlist);
      setClickedHearts((prev) => ({ ...prev, [data.song_title]: true }));
    }
  };
  const isSongInWishlist = (song_title) => {
    return wishlist.some((song) => song.song_title === song_title);
  };
  const handlePlay = (song_title, song_url, image_url, Artist) => {
    setRecentlyPlayed((prev) => {
      const updateRecentlyplayed = [
        { song_title, song_url, image_url, Artist },
        ...prev.filter((song) => song.song_title !== data.song_title),
      ];
      return updateRecentlyplayed.slice(0, 5);
      
    });
    console.log(recentlyPlayed)
  };
  const searchClear = () => {
    setSearchField("");
  };
  const unLike = (song_title) => {
    let removeWishtlist = wishlist.filter(
      (song) => song.song_title !== song_title
    );
    setWishlist(removeWishtlist);
    setClickedHearts((prev) => ({ ...prev, [data.song_title]: false }));
    setIsClicked(!isClicked);
    console.log("removed from wishlist", removeWishtlist);
  };
  return (
    <div>
      <NavBar
        setSearchField={setSearchField}
        searchField={searchField}
        searchClear={searchClear}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              OnShow={OnShow}
              data={data}
              handleAddToWishlist={handleAddToWishlist}
              searchField={searchField}
              handlePlay={handlePlay}
              isClicked={isClicked}
              isSongInWishlist={isSongInWishlist}
              
            />
          }
        ></Route>
        <Route
          path="recentlyplayed"
          element={<RecentlyPlayed recentlyPlayed={recentlyPlayed} />}
        />
        <Route
          path="mywishtlist"
          element={
            <MyWishtlist
              wishlist={wishlist}
              unLike={unLike}
              isSongInWishlist={isSongInWishlist}
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
          descrption={descrption}
        />
      ) : null}
      <Footer/>
    </div>
  );
}

export default App;
