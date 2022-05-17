import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function H2({ children }) {
  return <H2Wrapper>{children}</H2Wrapper>;
}

const H2Wrapper = styled(motion.h2)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 6.25rem;
  line-height: 7.1875rem;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default H2;
