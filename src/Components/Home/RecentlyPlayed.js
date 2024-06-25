import React from "react";
import song from "../../assests/vijay.jpg";
import {Row, Col, Container } from "react-bootstrap";
export const RecentlyPlayed = () => {
  return (
    <main >
        <Container className="recently-played-container">
            <Row>
                <Col md={6} xs={12}>
                <div>
                <img
            src={song}
            width={150}
            height={150}
            style={{ borderRadius: "10px" }}
          />
         </div>
                </Col>
                <Col md={6} xs={12}>
                <div style={{fontFamily:"inherit"}}>
          <h3 >Life of Ram</h3>
          <p>Pradeep Kumar</p>
          <audio   controls="true">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
          </audio>
        </div>
                </Col>
            </Row>
       
        </Container>
      
    </main>
  );
};
