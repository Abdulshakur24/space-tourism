import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function P({ text }) {
  return <PWrapper>{text}</PWrapper>;
}

const PWrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.barlow};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default P;
