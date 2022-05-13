import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    background-color: ${(props) => props.theme.colors.primary};
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 400;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.tertiary};
    cursor: default;
  }

`;

export default GlobalStyles;
