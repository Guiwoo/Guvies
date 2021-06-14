import React from "react";
import styled from "styled-components/native";
import { View, Text, Dimensions } from "react-native";
import { apiImage } from "../../api";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Contianer = styled.View`
  padding-top: 50px;
  flex: 1;
  background-color: black;
  align-items: center;
`;

const Card = styled.View`
  top: 70px;
  height: ${HEIGHT / 1.5}px;
  width: 90%;
  position: absolute;
`;

const Poster = styled.Image`
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export default ({ results }) => {
  return (
    <Contianer>
      {results.reverse().map((result) => (
        <Card key={result.id}>
          <Poster source={{ uri: apiImage(result.poster_path) }} />
        </Card>
      ))}
    </Contianer>
  );
};
