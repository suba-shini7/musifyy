import React from 'react'

export const SongContainer = ({OnShow,src}) => {
  return (
    <>
    <div className='circle'>
        <img src={src}  className='disk' onClick={()=>OnShow()}  />
        
    </div>
    </>
  )
}
