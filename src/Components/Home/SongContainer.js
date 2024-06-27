import React from 'react'
import disk from '../../assests/vijay.jpg'
import { PlayingSong } from '../PlayingSong'

export const SongContainer = ({OnHide,src}) => {
  return (
    <>
    <div className='circle'>
        <img src={src}  className='disk' onClick={()=>OnHide()}  />
        
    </div>
    </>
  )
}
