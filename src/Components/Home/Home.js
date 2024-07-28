import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import banner from "../../assests/Banner.png";
import Qr from "./Qr";
import { TrendingSong } from "./TrendingSong";


const Home = ({  OnShow, data, handleAddToWishlist ,searchField,handlePlay,isClicked,isSongInWishlist}) => {
  return (
    <Container>
      <Row className="mt-2">
        <Col xs={12} md={6} className="align-self-center">
          <h1>
            Listen{" "}
            <spna className="App-name">
              Musifyy<i class="bi bi-balloon-heart"></i>
            </spna>
            anywhere at anytime
          </h1>
          <Button size="lg" className="m-4 hero-button">
            Explore
          </Button>
          <p></p>
        </Col>
        <Col xs={12} md={6}>
          <img src={banner} alt="Banner" height={400} />
        </Col>
      </Row>
      <Row>
        <Col md={2} className="d-flex justify-content-center">
          <div>
            <Qr />
          </div>
        </Col>
        <Col md={10}>
          <TrendingSong
            OnShow={OnShow}
            data={data}
            handleAddToWishlist={handleAddToWishlist}
            searchField={searchField}
            handlePlay={handlePlay}
            isClicked={isClicked}
            isSongInWishlist={isSongInWishlist}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
