import React from "react";
import styled from "styled-components/native";

const Container = styled.Text`
  font-size: 12px;
  color: white;
  opacity: 0.8;
`;

const Votes = ({ votes }) => {
  return <Container>⭐️ {votes}/10</Container>;
};

export default Votes;
