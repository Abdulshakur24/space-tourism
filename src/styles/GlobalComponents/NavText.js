import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function NavText({ text }) {
  return <SH1Wrapper>{text}</SH1Wrapper>;
}

const SH1Wrapper = styled(motion.h1)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default NavText;
