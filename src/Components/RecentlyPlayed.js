import React from "react";
import RecentlyPlayedCard from "./RecentlyPlayedCard";
export const RecentlyPlayed = ({recentlyPlayed}) => {
  return (
    <main >
        {recentlyPlayed.length === 0 ? (
        <div className="mywishtlist-container">
          <h1 className="text-center">No Played Yet.</h1>
        </div>
      ) : (
        recentlyPlayed?.map((e) => {
          return (
            <>
              <RecentlyPlayedCard
                key={e}
                name={e.song_title}
                song={e.song_url}
                src={e.image_url}
                artist={e.Artist}   
                
              />
            </>
          );
        })
      )}
      
    </main>
  );
};
