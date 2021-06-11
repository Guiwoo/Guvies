import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Title from "./Title";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  margin: 20px 0px 35px 0px;
  width: 100%;
  height: ${HEIGHT / 4}px;
`;

const SlideContainer = ({ title, children }) => {
  return (
    <>
      <Title title={title} />
      <Container>
        <Swiper controlsEnabled={false} loop timeout={3} height>
          {children}
        </Swiper>
      </Container>
    </>
  );
};

SlideContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SlideContainer;
