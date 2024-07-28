import React from "react";
import { Row, Col, Container } from "react-bootstrap";


export const PlaylistSongs = ({ song, name, src, artist ,unLike,isSongInWishlist}) => {

  return (
    <div>
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
          <Col xs={7}>
            {/* <div style={{ fontFamily: "inherit" }}> */}
            <h3>{name}</h3>
            <p>{artist}</p>
            <audio controls="true">
              <source
                src={`${process.env.PUBLIC_URL}/songs/${song}`}
                type="audio/mpeg"
              />
            </audio>
            {/* </div> */}
          </Col>
          <Col
            md={2}
            xs={1}
            sm={2}
            className=" d-flex justify-content-center align-items-center"
          > <i 
          className={isSongInWishlist(name) ? 'bi bi-heart-fill':'bi bi-heart'} 
          onClick={()=>unLike(name)}>
        </i>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
