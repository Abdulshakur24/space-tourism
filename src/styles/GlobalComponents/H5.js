import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function H5({ children, props }) {
  return <H5Wrapper {...props}>{children}</H5Wrapper>;
}

const H5Wrapper = styled(motion.h5)`
  font-family: ${(props) => props.theme.fonts.barlow};
  font-style: normal;
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 2.125rem;
  text-transform: uppercase;
  letter-spacing: 0.2953rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export default H5;
