import React from 'react'
import Card from 'react-bootstrap/Card';
import selectedsong from '../../src/assests/vijay.jpg'

export const PlayingSong = () => {
  return (
    <>
    <Card style={{ width: '16rem' ,border:0}} className='mt-3'>
      <Card.Img variant="top" src={selectedsong} className='p-3' />
      <Card.Body>
        <Card.Title>Current Playing Song❤️</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}
