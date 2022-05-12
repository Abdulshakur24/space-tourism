import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function SH1({ text }) {
  return <SH1Wrapper>{text}</SH1Wrapper>;
}

const SH1Wrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default SH1;
