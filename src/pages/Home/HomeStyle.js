import styled from "styled-components";
import { motion } from "framer-motion";
import backgroundMobile from "../../assets/home/background-home-mobile.jpg";
import backgroundTablet from "../../assets/home/background-home-tablet.jpg";
import backgroundDesktop from "../../assets/home/background-home-desktop.jpg";

export const HomeWrapper = styled(motion.div)`
  min-height: 100vh;
  padding: 5.5rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${`url(${backgroundMobile})`};

  @media ${(props) => props.theme.breakpoints.md} {
    background-image: ${`url(${backgroundTablet})`};
    justify-content: space-between;
    gap: 6.75rem;
    padding: 8.5rem 0 0 0;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: ${`url(${backgroundDesktop})`};
    min-height: clamp(0rem, 100vh, 56.25rem);
    flex-direction: row;
    align-items: flex-end;
    padding: calc(6rem + 2.5rem) 0 0 0;
  }

  .container {
    width: 100%;
    max-width: 28.125rem;
    height: clamp(0rem, 100vh, 23.875rem);
    margin: 0 auto;
    padding: 1.5rem 1.5rem 0 1.5rem;
    display: flex;
    flex-direction: column;

    @media ${(props) => props.theme.breakpoints.md} {
      margin-top: 7.125rem;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
      padding: unset;
      margin: 0 0 8.1875rem 10.3125rem;
    }

    h5,
    h1 {
      margin-bottom: 1rem;
      @media ${(props) => props.theme.breakpoints.md} {
        margin-bottom: 1.5rem;
      }
    }

    h5 {
      font-family: ${(props) => props.theme.fonts.barlow};
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.1875rem;
      text-align: center;
      letter-spacing: 0.1688rem;

      @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1.25rem;
        line-height: 1.5rem;
        letter-spacing: 0.2109rem;
      }

      @media ${(props) => props.theme.breakpoints.lg} {
        line-height: 2.125rem;
        text-align: start;
        letter-spacing: 0.2953rem;
      }
    }
    h1 {
      font-size: 5rem;
      line-height: 6.25rem;
      text-align: center;
      @media ${(props) => props.theme.breakpoints.md} {
        font-size: 9.375rem;
        line-height: 9.375rem;
      }
      @media ${(props) => props.theme.breakpoints.lg} {
        text-align: start;
      }
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.5625rem;
      text-align: center;
      color: ${(props) => props.theme.colors.secondary};
      @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1rem;
        line-height: 1.75rem;
      }
      @media ${(props) => props.theme.breakpoints.lg} {
        text-align: start;
        font-size: 1.125rem;
        line-height: 2rem;
      }
    }
  }

  .button_container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.lg} {
      margin: 0 10.3125rem 8.1875rem 0;
      justify-content: flex-end;
    }
    button {
      cursor: pointer;
      margin: 0 auto 3rem auto;
      border-radius: 100%;
      border: none;
      width: 9.375rem;
      height: 9.375rem;
      color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.tertiary};
      font-family: ${(props) => props.theme.fonts.bellefair};
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.4375rem;
      text-align: center;
      letter-spacing: 0.0781rem;
      @media ${(props) => props.theme.breakpoints.md} {
        width: 15.125rem;
        height: 15.125rem;
        font-size: 2rem;
        line-height: 2.3125rem;
        margin: 0 auto 5.625rem auto;
      }
      @media ${(props) => props.theme.breakpoints.lg} {
        width: 17.125rem;
        height: 17.125rem;
        inset: auto 10.3125rem 8.1875rem auto;
        transition: all 250ms ease-in-out;
        outline: solid 5.5rem rgba(255, 255, 255, 0);
        margin: 0;

        &:hover {
          outline: solid 5.5rem rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
`;
