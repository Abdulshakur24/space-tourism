import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function SH2({ children, props }) {
  return <SH2Wrapper {...props}>{children}</SH2Wrapper>;
}

const SH2Wrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  letter-spacing: 0.1477rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default SH2;
