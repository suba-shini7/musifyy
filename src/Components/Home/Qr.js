import React from 'react'
import Card from 'react-bootstrap/Card';
import qr from '../../assests/Qr.png'

const Qr = () => {
  return (
    <Card style={{ width: '16rem', border:0 }} >
      <Card.Img variant="top" src={qr} />
      <Card.Body>
        <Card.Title style={{textAlign:'center', fontSize:'25px', color:'#604CC3'}}>Scan Me</Card.Title>
        <Card.Text>
        Share with Your Friends and Families
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Qr