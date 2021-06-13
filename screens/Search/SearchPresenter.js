import React from "react";
import { onChange } from "react-native-reanimated";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Input from "../../components/Search/Input";
import Vertical from "../../components/Vertical";

const Container = styled.ScrollView`
  background-color: black;
`;

const TestText = styled.Text`
  color: white;
  font-size: 22px;
`;

export default ({ movies, shows, keyword, onSubmit, onChange }) => (
  <ScrollContainer
    refreshFn={onSubmit}
    loading={false}
    contentContainerStyle={{ paddingTop: 10 }}
  >
    <Input
      placeholder={"Search Movie or Tv"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalSlider title={"Movie Resutls"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path || movie.backdrop_path}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
    {shows.length !== 0 && (
      <HorizontalSlider title={"Tv Results"}>
        {shows.map((show) => (
          <Vertical
            isTv={true}
            key={show.id}
            id={show.id}
            title={show.original_name}
            poster={show.poster_path || show.backdrop_path}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);
