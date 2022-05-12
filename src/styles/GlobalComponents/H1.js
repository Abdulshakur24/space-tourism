import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function H1({ text }) {
  return <H1Wrapper>{text}</H1Wrapper>;
}

const H1Wrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 150px;
  line-height: 172px;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default H1;
