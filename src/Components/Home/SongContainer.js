import React from 'react'

export const SongContainer = ({OnShow,src,name}) => {
  return (
    <>
    <div className='circle ' >
      <div className='d-flex justify-content-center'>
      <img src={src}  className='disk' onClick={()=>OnShow()} />

      </div>
        <p style={{textAlign:'center',marginTop:'20px',fontWeight:'bolder'}}>{name}</p>
    </div>
    </>
  )
}
