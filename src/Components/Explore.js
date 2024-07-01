import React from "react";
import Container from "react-bootstrap/Container";
import { ExploreCard } from "./ExploreCard";
import { Col, Row } from "react-bootstrap";
import { PlaylistSongs } from "./PlaylistSongs";

export const Explore = ({ music, onPlaylistArtist, selectedPlaylistSong ,backClick}) => {
  return (
    <>
     
      {selectedPlaylistSong ? <PlaylistSongs backClick={backClick} /> :
       <Container>
        <Row>
          {music?.items?.map((e) => {
            return (
              <>
                <Col md={3} xs={6}>
                  <ExploreCard
                    src={e.track?.album?.images[1]?.url}
                    name={e.track?.artists[0]?.name}
                    onPlaylistArtist={onPlaylistArtist}
                  />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>

}
    </>
  );
};
