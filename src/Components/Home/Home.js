import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import banner from "../../assests/Banner.png";
import Qr from "./Qr";
import { TrendingSong } from "./TrendingSong";
import { PlayingSong } from "../PlayingSong";

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={6} className="align-self-center">
          <h1>Listen <spna className="App-name">Musifyy <i class="bi bi-balloon-heart"></i> </spna> anywhere at anytime</h1>
          <Button  size="lg" className="m-4 hero-button">
            Large button
          </Button>
          <p></p>
        </Col>
        <Col xs={12} md={6}>
          <img src={banner} alt="Banner" />
        </Col>
      </Row>
      <Row>
        <Col md={2} className="d-flex justify-content-center">
          <div>
            <Qr />
            <PlayingSong />
          </div>
        </Col>
        <Col md={10}>
          <TrendingSong />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Home;
