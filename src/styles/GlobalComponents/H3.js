import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function H3({ children, props }) {
  return <H3Wrapper {...props}>{children}</H3Wrapper>;
}

const H3Wrapper = styled(motion.h3)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 3.5rem;
  line-height: 4rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default H3;
