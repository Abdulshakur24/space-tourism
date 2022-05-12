import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function H5({ text }) {
  return <H5Wrapper>{text}</H5Wrapper>;
}

const H5Wrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.barlow};
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  text-transform: uppercase;
  letter-spacing: 4.725px;
  color: ${(props) => props.theme.colors.secondary};
`;

export default H5;
