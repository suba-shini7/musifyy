import React from 'react'
import Card from 'react-bootstrap/Card';
const Footer = () => {
  return (
    <>
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className='text-center'> 
            {' '}
            Made with Love form India❤️ {' '}
          </p>
          <footer className="blockquote-footer float-end">
            Copyright <cite title="Source Title">@ subashini </cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </>
  )
}

export default Footer