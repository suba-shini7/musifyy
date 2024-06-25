import React from 'react'
import disk from '../../assests/vijay.jpg'
import { PlayingSong } from '../PlayingSong'

export const SongContainer = ({OnHide}) => {
  return (
    <>
    <div className='circle'>
        <img src={disk}  className='disk' onClick={()=>OnHide()} />
        
    </div>
    </>
  )
}
