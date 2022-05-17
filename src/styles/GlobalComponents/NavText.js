import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function NavText({ children }) {
  return <SH1Wrapper>{children}</SH1Wrapper>;
}

const SH1Wrapper = styled(motion.p)`
  font-family: ${(props) => props.theme.fonts.bellefair};
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  letter-spacing: 0.1688rem;
  color: ${(props) => props.theme.colors.tertiary};
`;

export default NavText;
