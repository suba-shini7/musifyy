import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { SongContainer } from "./SongContainer";

export const TrendingSong = ({OnShow,music}) => {
  return (
    <>
      <Container>
        <Row className="mx-5 g-5">
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
         
          {music?.albums?.items?.map((e)=> {
            return <>
             <Col md={3} xs={6} >
            <SongContainer OnShow={()=>OnShow(e.data?.coverArt?.sources[0].url)} src={e.data?.coverArt?.sources[0].url}/>
              </Col>
            </>
          })}       
        
        </Row>
      </Container>
    </>
  );
};
