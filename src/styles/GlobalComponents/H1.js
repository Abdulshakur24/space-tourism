import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function H1({ children }) {
  return <H1Wrapper>{children}</H1Wrapper>;
}

const H1Wrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 9.375rem;
  line-height: 10.75rem;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default H1;
