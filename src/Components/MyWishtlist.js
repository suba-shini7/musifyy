import React from "react";
import { PlaylistSongs } from "./PlaylistSongs";

export const MyWishtlist = ({ wishlist,unLike,isSongInWishlist }) => {
  return (
    <main className="mywishtlist">
      {wishlist.length === 0 ? (
        <div className="mywishtlist-container">
          <h1 className="text-center">No liked songs yet.</h1>
        </div>
      ) : (
        wishlist?.map((e) => {
          return (
            <>
              <PlaylistSongs
                key={e}
                name={e.song_title}
                song={e.song_url}
                src={e.image_url}
                artist={e.Artist}   
                unLike={unLike}
                isSongInWishlist={isSongInWishlist}
                
              />
            </>
          );
        })
      )}
    </main>
  );
};
