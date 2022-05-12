import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function H4({ text }) {
  return <H4Wrapper>{text}</H4Wrapper>;
}

const H4Wrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default H4;
