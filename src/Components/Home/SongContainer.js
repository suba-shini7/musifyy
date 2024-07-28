import React from 'react'



export const SongContainer = ({OnShow,src,name,handleAddToWishlist,isClicked,isSongInWishlist,handlePlay}) => {
  return (
    <>
    <div className='circle ' onClick={()=>handlePlay(name,src,src,name)}>
      <div className='d-flex justify-content-center'>
      <img src={`${process.env.PUBLIC_URL}/images/${src}`}  className='disk' onClick={()=>OnShow()} />
      </div>
      <span style={{ color: isSongInWishlist(name) ? 'red' : 'gray', cursor: 'pointer' }}>
      <i class={isSongInWishlist(name) ? ' bi bi-heart-fill'  : 'bi bi-heart' }  onClick={()=>handleAddToWishlist()}></i>
      </span>
      
        <p style={{textAlign:'center',marginTop:'20px',fontWeight:'bolder'}}>{name}</p>
    </div>
    </>
  )
}
