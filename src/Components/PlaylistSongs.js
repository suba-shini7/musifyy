import React from 'react'
import song from '../../src/assests/vijay.jpg'

export const PlaylistSongs = ({backClick}) => {
  return (
    <div className='ArtistSongs'>
      <i class="bi bi-arrow-left-circle-fill" onClick={()=>backClick()}></i>
    <div className="mywishtlist-container d-flex  justify-content-between align-items-center">
    
      <div>
        <img
          src={song}
          width={150}
          height={150}
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div style={{fontFamily:"inherit"}}>
        <h3 >Life of Ram</h3>
        <p>Pradeep Kumar</p>
        <audio   controls="true">
          <source src="horse.ogg" type="audio/ogg" />
          <source src="horse.mp3" type="audio/mpeg" />
        </audio>
      </div>
      <div>
      <i class="bi bi-heart song-icon"></i>
      </div>
    </div>
    
  
    </div>
  )
}
