import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function H4({ children, props }) {
  return <H4Wrapper {...props}>{children}</H4Wrapper>;
}

const H4Wrapper = styled(motion.h4)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.3125rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default H4;
