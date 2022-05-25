import styled from "styled-components";
import { motion } from "framer-motion";
import backgroundMobile from "../../assets/destination/background-destination-mobile.jpg";
import backgroundTablet from "../../assets/destination/background-destination-tablet.jpg";
import backgroundDesktop from "../../assets/destination/background-destination-desktop.jpg";

export const DestinationsWrapper = styled(motion.div)`
  min-height: 100vh;
  position: relative;
  padding: 88px 0 0 0;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${`url(${backgroundMobile})`};

  @media ${(props) => props.theme.breakpoints.md} {
    background-image: ${`url(${backgroundTablet})`};
    padding: 96px 0 0 0;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: ${`url(${backgroundDesktop})`};
    padding: 136px 0 0 0;
    min-height: clamp(0px, 100vh, 900px);
  }

  .container {
    margin-top: 24px;
    height: 100%;
    width: 100%;

    @media ${(props) => props.theme.breakpoints.md} {
      margin-top: 40xp;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
      margin-top: 76px;
    }

    #flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;

      @media ${(props) => props.theme.breakpoints.md} {
        align-items: flex-start;
      }

      @media ${(props) => props.theme.breakpoints.lg} {
        flex-direction: row;
      }
    }
  }
`;

export const ImageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 26px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 38.5px;
  }

  h2 {
    font-family: ${(props) => props.theme.fonts.barlow};
    font-size: 1rem;
    line-height: 1.1875rem;
    letter-spacing: 0.1688rem;
    margin-bottom: 32px;

    @media ${(props) => props.theme.breakpoints.md} {
      font-size: 1.25rem;
      line-height: 1.5rem;
      letter-spacing: 0.2109rem;
      margin-bottom: 60px;
      align-self: flex-start;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
      font-size: 1.75rem;
      line-height: 2.125rem;
      letter-spacing: 0.2953rem;
      margin-bottom: 97px;
    }

    em {
      font-family: ${(props) => props.theme.fonts.barlow};
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
      color: ${(props) => props.theme.colors.tertiary};
      mix-blend-mode: normal;
      opacity: 0.25;

      @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1.25rem;
        line-height: 1.5rem;
        letter-spacing: 0.2109rem;
      }

      @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 1.75rem;
        line-height: 2.125rem;
        letter-spacing: 0.2953rem;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 53px;
  }
`;

export const ContentWrapper = styled(motion.div)`
  padding: 0 24px;
  margin: 0 auto;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: auto 0;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: auto 0;
    padding: 0;
  }

  .contents-container {
    margin: 0 auto;

    @media ${(props) => props.theme.breakpoints.lg} {
      max-width: 445px;
    }

    p {
      font-family: ${(props) => props.theme.fonts.barlow};
      font-size: 15px;
      line-height: 25px;
      text-align: center;
      max-width: 573px;
      margin: 0 auto;
      color: ${(props) => props.theme.colors.secondary};

      @media ${(props) => props.theme.breakpoints.md} {
        font-size: 16px;
        line-height: 28px;
      }

      @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 18px;
        line-height: 32px;
        text-align: start;
      }
    }

    .navs {
      display: flex;
      justify-content: center;
      width: 237.5px;
      height: 28px;
      margin: 0 auto;
      gap: 26px;
      margin-bottom: 20px;

      @media ${(props) => props.theme.breakpoints.md} {
        margin-bottom: 32px;
      }

      @media ${(props) => props.theme.breakpoints.lg} {
        margin-bottom: 37px;
        width: 100%;
        justify-content: flex-start;
      }

      div {
        cursor: pointer;

        p {
          margin-bottom: unset;
          text-transform: uppercase;
          padding-bottom: 8px;
        }

        .block {
          width: 100%;
          height: 3px;
          transition: all 250ms ease-in-out;

          &.true {
            background-color: ${(props) => props.theme.colors.tertiary};
          }
        }

        &:hover {
          .block {
            &.true {
              background-color: ${(props) => props.theme.colors.tertiary};
              opacity: unset;
            }
            background-color: ${(props) => props.theme.colors.tertiary};
            opacity: 0.5;
          }
        }
      }
    }

    h1 {
      font-family: ${(props) => props.theme.fonts.bellefair};
      font-weight: 400;
      font-size: 56px;
      line-height: 64px;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 1px;

      @media ${(props) => props.theme.breakpoints.md} {
        margin-bottom: 8px;
      }

      @media ${(props) => props.theme.breakpoints.lg} {
        margin-bottom: 14px;
        text-align: start;
        font-size: 100px;
        line-height: 115px;
      }
    }

    p {
      margin-bottom: 32px;
    }

    .line {
      width: 100%;
      height: 1px;
      z-index: 1;
      background-color: ${(props) => props.theme.colors.tertiary};
      opacity: 0.25;
    }

    .time-distance {
      margin: 32px 0;
      display: flex;
      flex-direction: column;
      gap: 32px;

      @media ${(props) => props.theme.breakpoints.md} {
        flex-direction: row;
        justify-content: space-evenly;
        gap: 0;
      }

      div {
        h2 {
          font-family: "Bellefair";
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 32px;
          text-align: center;
          text-transform: uppercase;
        }
      }

      p {
        margin-bottom: 12px;
      }
    }
  }
`;

export const IMG = styled(motion.img)`
  width: 170px;
  height: 170px;
  z-index: 10;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 300px;
    height: 300px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 445px;
    height: 445px;
  }
`;
