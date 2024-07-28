import React from 'react'
import { Row, Col, Container } from "react-bootstrap";

const RecentlyPlayedCard = ({name,song,artist,src}) => {
  return (
    <Container className="recently-played-container">
    <Row>
      <Col md={4} xs={4} sm={2} className="text-center">
        <img
          src={`${process.env.PUBLIC_URL}/images/${src}`}
          height={100}
          width={100}
          style={{ borderRadius: "10px" }}
        />
      </Col>
      <Col xs={8}>
        <h3>{name}</h3>
        <p>{artist}</p>
        <audio controls="true">
          <source
            src={`${process.env.PUBLIC_URL}/songs/${song}`}
            type="audio/mpeg"
          />
        </audio>
      </Col>
      {/* <Col
        md={2}
        xs={2}
        sm={2}
        className=" d-flex justify-content-center align-items-center"
      >  */}
      {/* <i 
      className={isClicked ? 'bi bi-heart' : 'bi bi-heart-fill'} 
      onClick={unLike}>
    </i> */}
      {/* </Col> */}
    </Row>
  </Container>
  )
}

export default RecentlyPlayedCard