import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function H3({ text }) {
  return <H3Wrapper>{text}</H3Wrapper>;
}

const H3Wrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default H3;
