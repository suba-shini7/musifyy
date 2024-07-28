import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";

export const PlayingSong = ({
  currentSongImage,
  currentSong,
  audioref,
  descrption,
}) => {
  useEffect(() => {
    if (currentSong && audioref.current) {
      audioref.current.load();
      audioref.current
        .play()
        .catch((e) => console.error("Audio play error:", e));
    }
  }, [currentSong]);
  return (
    <div className="ps sticky-bottom">
      <Container>
        <Row>
          <Col md={4} xs={4}>
            {" "}
            <Card style={{ width: "10rem", border: 0 }} className="mt-3">
              <Card.Img
                variant="top"
                src={`${process.env.PUBLIC_URL}/images/${currentSongImage}`}
                className="p-2 "
              />
              <div className="animation">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Card>
          </Col>
          <Col md={8} xs={10}>
            <div class="container-audio">
              <audio controls ref={audioref}>
                <source
                  src={`${process.env.PUBLIC_URL}/songs/${currentSong}`}
                  type="audio/mpeg"
                />
              </audio>
            </div>
            <div style={{backgroundColor:'#604CC3'}}>
              <h5 style={{color:'white' , textAlign:'center'}}>Song : Descrption</h5>
            <p className="text-center" style={{color:'white' ,fontWeight:'600'}}>{descrption}</p>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};
