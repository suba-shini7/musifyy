import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const ExploreCard = ({src,name,onPlaylistArtist}) => {
  return (
    <div style={{paddingTop:'50px'}} className='cardhover'>
     <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src={src}  onClick={()=>onPlaylistArtist()}/>
    <Card.Body>
      <Card.Title style={{textAlign:'center', fontFamily:'fantasy'}}>{name}</Card.Title>
    </Card.Body>
  </Card>
    </div>
   
  )
}
