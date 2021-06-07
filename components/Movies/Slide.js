import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { apiImage } from "../../api";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  margin-bottom: 7px;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const Vote = styled.Text`
  margin-bottom: 5px;
  font-size: 12px;
  color: white;
  opacity: 0.8;
`;

const Overview = styled.Text`
  color: white;
  opacity: 0.8;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 8px;
  background-color: #e74c3c;
  padding: 5px 10px;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => {
  return (
    <Container>
      <BG source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={apiImage(poster)} />
        <Data>
          <Title>{title}</Title>
          <Vote>⭐️ {votes}/10</Vote>
          <Overview>
            {overview ? `${overview.slice(0, 120)}...` : overview}
          </Overview>
          <TouchableOpacity>
            <Button>
              <ButtonText>View details..</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Slide;
