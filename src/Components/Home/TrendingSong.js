import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { SongContainer } from "./SongContainer";

export const TrendingSong = ({
  OnShow,
  data,
  handleAddToWishlist,
  searchField,
  handlePlay,
  isClicked,
  isSongInWishlist
}) => {
  const filterSongs = data?.filter((e) => {
    const songTitle = e.song_title ? e.song_title.toLowerCase() : "";
    const searchText = searchField ? searchField.toLowerCase() : "";
    return songTitle.includes(searchText);
  });

  return (
    <>
      <Container className="xs-stitcky">
        <Row className="mx-5">
          <h1
            className="text-center pb-5 trending-heading"
            style={{
              fontFamily: "revert",
              fontWeight: "bolder",
              color: "#1C1678",
            }}
          >
            Hot on this week {""}
            <span className="fire">
              <i class="bi bi-fire"></i>
            </span>
          </h1>
          <div></div>
          {filterSongs.map((e) => {
            return (
              <>
                <Col md={3} xs={12}>
                  <SongContainer 
                    key={e.id}
                    OnShow={() => OnShow(e.image_url, e.song_url, e.desc)}
                    src={e.image_url}
                    name={e.song_title}
                    handleAddToWishlist={() =>
                      handleAddToWishlist(
                        e.song_title,
                        e.song_url,
                        e.image_url,
                        e.Artist
                      )
                    }
                    handlePlay={() =>
                      handlePlay(
                        e.song_title,
                        e.song_url,
                        e.image_url,
                        e.Artist)
                    }
                    isClicked={isClicked}
                    isSongInWishlist={isSongInWishlist}
                  />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
