import styled from "styled-components/native";
import React from "react";
import Swiper from "react-native-web-swiper";
import { Dimensions, ScrollView } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 35px;
`;

const Container = styled.View``;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading}>
    <>
      <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={3} height>
          {nowPlaying?.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              backgroundImage={movie.backdrop_path}
              votes={movie.vote_average}
              poster={movie.poster_path}
            />
          ))}
        </Swiper>
      </SliderContainer>
      <Container>
        <HorizontalSlider title={"Popular Movies"}>
          {popular?.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title={"Coming Soon"}>
          {upcoming?.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              overview={movie.overview}
              releaseDate={movie.release_date}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
