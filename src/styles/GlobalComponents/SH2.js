import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function SH2({ text }) {
  return <SH2Wrapper>{text}</SH2Wrapper>;
}

const SH2Wrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default SH2;
