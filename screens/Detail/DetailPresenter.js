import React from "react";
import { ActivityIndicator, Dimensions, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";
import Link from "../../components/Detail/Link";
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import Votes from "../../components/Votes";
import { formatDate } from "../../utils";

const Contianer = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const InfoDetail = styled.View`
  padding: 0 30px;
  margin-top: 80px;
`;

const InfoName = styled.Text`
  margin-top: 30px;
  color: white;
  font-weight: 600;
  opacity: 0.8;
  margin-bottom: 15px;
`;

const InfoValue = styled.Text`
  color: white;
  opacity: 0.6;
  font-weight: 500;
`;

export default ({ openBrowser, result, loading }) => {
  return (
    <ScrollContainer
      loading={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <Header>
        <BG source={{ uri: apiImage(result.backgroundImage, "-") }} />
        <Contianer>
          <Poster url={result.poster} />
          <Info>
            <Title>{result.title || result.name}</Title>
            {result.votes ? <Votes votes={result.votes} /> : null}
          </Info>
        </Contianer>
      </Header>
      <InfoDetail>
        {result.overview ? (
          <>
            <InfoName>Overview</InfoName>
            <InfoValue>{result.overview}</InfoValue>
          </>
        ) : null}
        {loading && (
          <ActivityIndicator style={{ marginTop: 30 }} color={"white"} />
        )}
        {result.spoken_languages ? (
          <>
            <InfoName>Language</InfoName>
            <InfoValue>
              {result.spoken_languages.map((l, index) =>
                index + 1 === result.spoken_languages.length
                  ? `${l.name}`
                  : `${l.name} / `
              )}
            </InfoValue>
          </>
        ) : null}
        {result.release_date ? (
          <>
            <InfoName>Release Date</InfoName>
            <InfoValue>{formatDate(result.release_date)}</InfoValue>
          </>
        ) : null}
        {result.status ? (
          <>
            <InfoName>Status</InfoName>
            <InfoValue>{result.status}</InfoValue>
          </>
        ) : null}
        {result.runtime ? (
          <>
            <InfoName>Runtime</InfoName>
            <InfoValue>{result.runtime} minutes</InfoValue>
          </>
        ) : null}
        {result.first_air_date ? (
          <>
            <InfoName>First Air Date</InfoName>
            <InfoValue>{formatDate(result.first_air_date)}</InfoValue>
          </>
        ) : null}
        {result.genres ? (
          <>
            <InfoName>Genres</InfoName>
            <InfoValue>
              {result.genres.map((g, index) =>
                index + 1 === result.genres.length ? g.name : `${g.name},`
              )}
            </InfoValue>
          </>
        ) : null}
        {result.number_of_episodes ? (
          <>
            <InfoName>Seasons / Episodes</InfoName>
            <InfoValue>
              {result.number_of_seasons} / {result.number_of_episodes}
            </InfoValue>
          </>
        ) : null}
        {result.imdb_id ? (
          <Link
            icon={"imdb"}
            text={"IMDB Page"}
            onPress={() =>
              openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
            }
          />
        ) : null}
        {result.videos.results?.length > 0 ? (
          <>
            <InfoName>????Trailer</InfoName>
            {result.videos.results.map((video, index) => (
              <Link
                text={index < 3 ? video.name : null}
                key={video.id}
                icon={index < 3 ? "youtube-play" : null}
                onPress={() =>
                  openBrowser(`https://www.youtube.com/watch?v=${video.key}`)
                }
              />
            ))}
          </>
        ) : null}
      </InfoDetail>
    </ScrollContainer>
  );
};
