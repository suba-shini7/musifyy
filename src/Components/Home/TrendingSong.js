import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { SongContainer } from "./SongContainer";

export const TrendingSong = ({OnHide}) => {
  return (
    <>
      <Container>
        <Row className="mx-5">
          <h1
            className="text-center pb-5 trending-heading"
            style={{
              fontFamily: "revert",
              fontWeight: "bolder",
              color: "#1C1678"
            }}
          >
            Hot on this week {""}
            <span className="fire">
              <i class="bi bi-fire"></i>
            </span> 
          </h1>
          <Col>
            <SongContainer OnHide={OnHide}  /> 
          </Col>
        </Row>
      </Container>
    </>
  );
};
