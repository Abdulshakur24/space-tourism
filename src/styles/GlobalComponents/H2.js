import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function H2({ text }) {
  return <H2Wrapper>{text}</H2Wrapper>;
}

const H2Wrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 115px;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default H2;
