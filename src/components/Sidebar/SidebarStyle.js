import styled from "styled-components";
import { motion } from "framer-motion";
import { isFirefox, isIE } from "react-device-detect";

const handleDevice = () => {
  return isFirefox || isIE
    ? "background-color: rgb(12, 14, 24);"
    : "backdrop-filter: blur(81.5485px);";
};

export const SidebarWrapper = styled(motion.div)`
  position: fixed;
  inset: 0 0 0 auto;
  padding: 118px 0 0 0;
  max-width: 254px;
  z-index: 140;
  width: 100%;

  ${handleDevice()}

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }

  .container {
    .content {
      margin-left: 32px;
      .link {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 250ms ease-in-out;

        &:not(:first-child) {
          margin-top: 35px;
        }

        em {
          font-family: ${(props) => props.theme.fonts.borlow};
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 2.7px;
          margin-right: 14px;
        }

        a {
          width: 100%;
          text-decoration: none;
          font-family: ${(props) => props.theme.fonts.bellefair};
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 2.7px;
          text-transform: uppercase;
          color: ${(props) => props.theme.colors.tertiary};
        }

        .block {
          width: 4px;
          height: 31px;
          transition: all 250ms ease-in-out;
        }
        .true {
          background-color: ${(props) => props.theme.colors.tertiary};
        }
      }
    }
  }
`;

export const BackdropWrapper = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 130;
`;
