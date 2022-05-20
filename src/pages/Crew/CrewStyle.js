import styled from "styled-components";
import { motion } from "framer-motion";
import backgroundMobile from "../../assets/crew/background-crew-mobile.jpg";
import backgroundTablet from "../../assets/crew/background-crew-tablet.jpg";
import backgroundDesktop from "../../assets/crew/background-crew-desktop.jpg";

export const CrewWrapper = styled(motion.div)`
  min-height: 100vh;
  padding: 5.5rem 0 0 0;
  position: relative;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${`url(${backgroundMobile})`};

  @media ${(props) => props.theme.breakpoints.md} {
    background-image: ${`url(${backgroundTablet})`};
    padding: calc(6rem + 2.5rem) 0 0 0;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    background-image: ${`url(${backgroundDesktop})`};
    padding: calc(8.5rem + 2.5rem) 0 0 0;
    min-height: clamp(0rem, 100vh, 56.25rem);
  }

  .container {
    h2 {
      font-family: ${(props) => props.theme.fonts.barlow};
      font-size: 1rem;
      line-height: 1.1875rem;
      letter-spacing: 0.1688rem;
      width: max-content;
      margin: 0 auto 2rem auto;

      @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1.25rem;
        line-height: 1.5rem;
        letter-spacing: 0.2109rem;
        margin-bottom: 3.75rem;
        align-self: flex-start;
        margin: 0 auto 2rem 2.4063rem;
      }

      @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 1.75rem;
        line-height: 2.125rem;
        letter-spacing: 0.2953rem;
        margin-bottom: 6.0625rem;
        margin: 0 auto 2rem 10.4063rem;
      }

      em {
        font-family: ${(props) => props.theme.fonts.barlow};
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.1875rem;
        letter-spacing: 0.1688rem;
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

    #grid {
      display: grid;
      grid-template: 1fr 0fr minmax(auto, 13.25rem) / 1fr;
      justify-content: center;

      @media ${(props) => props.theme.breakpoints.md} {
        grid-template: minmax(auto, 14.5rem) 0fr 1fr / 1fr;
      }
      @media ${(props) => props.theme.breakpoints.lg} {
        grid-template: 1fr / 1fr 1fr;
      }

      .navs {
        display: flex;
        justify-content: space-between;
        grid-area: 2 / 1 / 2 / 1;
        align-items: center;
        width: 5.5rem;
        margin: 2rem auto;

        div {
          .block {
            width: 0.625rem;
            height: 0.625rem;
            border-radius: 100%;
            transition: all 250ms ease-in-out;
            cursor: pointer;

            @media ${(props) => props.theme.breakpoints.md} {
            }
            @media ${(props) => props.theme.breakpoints.lg} {
              width: 0.9375rem;
              height: 0.9375rem;
            }

            &:hover {
              opacity: 0.5;
            }

            &.true {
              background-color: ${(props) => props.theme.colors.tertiary};
              opacity: unset;
              cursor: unset;
            }
            background-color: ${(props) => props.theme.colors.tertiary};
            opacity: 0.17;
          }
        }

        @media ${(props) => props.theme.breakpoints.md} {
          margin: 2.5rem auto;
        }

        @media ${(props) => props.theme.breakpoints.lg} {
          margin: 0 0 0 10.4063rem;
          position: absolute;
          bottom: 5.875rem;
        }
      }
    }
  }
`;

export const ImageWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  padding: 0 1.5rem;

  [data-line] {
    height: 0.0625rem;
    width: 100%;
    background-color: #383b4b;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-area: 1 / 2 / 1 / 2;
    [data-line] {
      display: none;
    }
  }
`;

export const ContentWrapper = styled(motion.div)`
  .content-container {
    padding: 0 1.5rem;
    margin: 0 auto;
    @media ${(props) => props.theme.breakpoints.md} {
      max-width: 32.5rem;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
      margin: 9.625rem 0 0 10.4063rem;
      padding: 0;
      max-width: unset;
    }
    h2 {
      margin: 0 auto;
      font-family: ${(props) => props.theme.fonts.bellefair};
      font-size: 1rem;
      line-height: 1.125rem;
      text-align: center;
      text-transform: uppercase;
      color: #909296;
      mix-blend-mode: normal;

      @media ${(props) => props.theme.breakpoints.md} {
        margin: 0 auto;
        font-size: 1.5rem;
        line-height: 1.75rem;
      }
      @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 2rem;
        line-height: 2.3125rem;
        text-align: start;
        margin: 0;
      }
    }

    h1 {
      font-family: ${(props) => props.theme.fonts.bellefair};
      font-size: 1.5rem;
      line-height: 1.75rem;
      text-align: center;
      text-transform: uppercase;
      margin: 0.5rem 0 1rem 0;

      @media ${(props) => props.theme.breakpoints.md} {
        font-size: 2.5rem;
        line-height: 2.875rem;
      }

      @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 3.5rem;
        line-height: 4rem;
        text-align: start;
        margin: 0.9375rem 0 1.6875rem 0;
      }
    }

    p {
      text-align: center;
      font-family: ${(props) => props.theme.fonts.barlow};
      font-size: 0.9375rem;
      line-height: 1.5625rem;

      @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1rem;
        line-height: 1.75rem;
      }

      @media ${(props) => props.theme.breakpoints.lg} {
        font-size: 1.125rem;
        line-height: 2rem;
        text-align: start;
        max-width: 27.75rem;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 1 / 1 / 1;
  }
`;

export const IMG = styled(motion.img)`
  width: min-content;
  height: 13.875rem;

  @media ${(props) => props.theme.breakpoints.md} {
    height: 33.25rem;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 40.875rem;
  }
`;
