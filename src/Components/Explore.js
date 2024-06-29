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
          {music?.playlists?.items?.map((e) => {
            return (
              <>
                <Col md={3} xs={6}>
                  <ExploreCard
                    src={e.data?.images?.items[0]?.sources[0]?.url}
                    name={e.data?.name}
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
