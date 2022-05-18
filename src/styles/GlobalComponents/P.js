import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function P({ children, props }) {
  return <PWrapper {...props}>{children}</PWrapper>;
}

const PWrapper = styled(motion.p)`
  font-family: ${(props) => props.theme.fonts.barlow};
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default P;
