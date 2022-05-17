import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function SH1({ children }) {
  return <SH1Wrapper>{children}</SH1Wrapper>;
}

const SH1Wrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default SH1;
