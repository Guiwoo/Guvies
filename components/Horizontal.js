import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { apiImage } from "../api";

import Votes from "./Votes";
import { trimText } from "../utils";

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View``;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 14px;
`;

const Overview = styled.Text`
  color: white;
`;

const Horizontal = ({ id, title, votes, poster, overview }) => {
  return (
    <Container>
      <Poster url={poster} />
      <Data>
        <Title>{trimText(title, 30)}</Title>
        <Votes votes={votes} />
        <Overview>{trimText(overview, 110)}</Overview>
      </Data>
    </Container>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Horizontal;
