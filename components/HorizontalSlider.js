import React from "react";
import { ScrollView } from "react-native";
import Title from "./Title";
import Vertical from "./Vertical";
import PropTypes from "prop-types";

const HorizontalSlider = ({ title, children }) => {
  return (
    <>
      <Title title={title} />
      <ScrollView
        style={{ marginTop: 20, marginBottom: 40 }}
        contentContainerStyle={{ paddingLeft: 30 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </>
  );
};

HorizontalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
