import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderWrapper = styled(motion.div)`
  position: fixed;
  inset: 0 0 auto 0;
  transition: all 250ms ease-in-out;
  z-index: 160;
  max-width: 1440px;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 40px auto 0 auto;
  }

  &.hidden {
    transform: translateY(-100%);
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    @media ${(props) => props.theme.breakpoints.md} {
      height: 96px;
      padding: unset;
      margin: 0 0 0 39px;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
      margin: 0 0 0 55px;
    }

    svg {
      width: 40px;
      height: 40px;

      @media ${(props) => props.theme.breakpoints.md} {
        width: 48px;
        height: 48px;
        min-width: 48px;
      }
    }

    .line-container {
      display: none;

      .line {
        width: 100%;
        height: 1px;
        z-index: 1;
        background-color: ${(props) => props.theme.colors.tertiary};
        opacity: 0.25;
        transform: translateX(48px);
      }
      @media ${(props) => props.theme.breakpoints.lg} {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        max-width: 473px;
      }
    }

    .burger {
      cursor: pointer;
      &__line {
        width: 24px;
        height: 3px;
        background-color: ${(props) => props.theme.colors.tertiary};
        transition: all 250ms ease-in-out;

        &:not(:first-child) {
          margin-top: 6px;
        }
      }

      &.opened {
        .burger__line {
          &:nth-child(1) {
            transform: rotate(45deg) translateY(7px) translateX(6px);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            transform: rotate(-45deg) translateY(-7px) translateX(6px);
          }
        }
      }

      @media ${(props) => props.theme.breakpoints.md} {
        display: none;
      }
    }

    .navigations {
      display: none;

      @media ${(props) => props.theme.breakpoints.md} {
        display: block;
        height: 100%;
        background: rgba(255, 255, 255, 0.04);
      }
      @media ${(props) => props.theme.breakpoints.lg} {
        width: clamp(0px, 100%, 830px);
      }

      .nav-container {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        height: 100%;
        gap: 27px;
        padding: 0 48px;

        @media ${(props) => props.theme.breakpoints.lg} {
          gap: 48px;
        }

        a {
          width: min-content;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-decoration: none;
          padding-top: 39px;
          font-family: ${(props) => props.theme.fonts.barlow};
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 2.7px;
          text-transform: uppercase;
          color: ${(props) => props.theme.colors.tertiary};

          div {
            display: flex;
            justify-content: center;
            gap: 11px;
            em {
              display: none;
              font-family: "Barlow Condensed";
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 2.7px;

              @media ${(props) => props.theme.breakpoints.lg} {
                display: block;
              }
            }
            p {
              font-weight: 400;
              font-size: 12px;
              line-height: 17px;
              letter-spacing: 2.3625px;
              @media ${(props) => props.theme.breakpoints.lg} {
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 2.7px;
              }
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

          .block {
            width: 100%;
            height: 3px;
            transition: all 250ms ease-in-out;

            &.true {
              background-color: ${(props) => props.theme.colors.tertiary};
            }
          }
        }
      }
    }
  }
`;
