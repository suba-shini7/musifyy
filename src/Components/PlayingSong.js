import React from "react";
import Card from "react-bootstrap/Card";
import selectedsong from "../../src/assests/vijay.jpg";
import { Row, Col, Container } from "react-bootstrap";

export const PlayingSong = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={2}>
            {" "}
            <Card style={{ width: "15rem", border: 0 }} className="mt-3">
              <Card.Img variant="top" src={selectedsong} className="p-3" />
            </Card>
          </Col>
          <Col md={10}>
            <div class="container-audio">
              <audio controls loop autoplay>
                <source
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg"
                  type="audio/ogg"
                />
              </audio>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <i class="bi bi-heart"></i>
            <i class="bi bi-skip-backward"></i>
            <i class="bi bi-play-fill"></i>
            <i class="bi bi-fast-forward"></i>
          </Col>
        </Row>
      </Container>
    </>
  );
};
