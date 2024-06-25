import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardimg from '../../src/assests/vijay.jpg'

export const ExploreCard = () => {
  return (
    <div style={{paddingTop:'50px'}} className='cardhover'>
     <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src={cardimg} />
    <Card.Body>
      <Card.Title style={{textAlign:'center', fontFamily:'fantasy'}}>Love Songs</Card.Title>
    </Card.Body>
  </Card>
    </div>
   
  )
}
