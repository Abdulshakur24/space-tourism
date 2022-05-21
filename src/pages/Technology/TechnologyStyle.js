import styled from "styled-components";
import { motion } from "framer-motion";
import backgroundMobile from "../../assets/technology/background-technology-mobile.jpg";
import backgroundTablet from "../../assets/technology/background-technology-tablet.jpg";
import backgroundDesktop from "../../assets/technology/background-technology-desktop.jpg";

const technologies = [
  {
    name: "Launch vehicle",
    images: {
      portrait: require("../../assets/technology/image-launch-vehicle-portrait.jpg"),
      landscape: require("../../assets/technology/image-launch-vehicle-landscape.jpg"),
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: require("../../assets/technology/image-spaceport-portrait.jpg"),
      landscape: require("../../assets/technology/image-spaceport-landscape.jpg"),
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: require("../../assets/technology/image-space-capsule-portrait.jpg"),
      landscape: require("../../assets/technology/image-space-capsule-landscape.jpg"),
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export const TechnologyWrapper = styled(motion.div)`
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
        margin: 0 auto 2.5rem 10.4063rem;
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

    #flex {
      display: flex;
      flex-direction: column;

      @media ${(props) => props.theme.breakpoints.md} {
      }
      @media ${(props) => props.theme.breakpoints.lg} {
        margin-left: 165px;
        height: 527px;
        flex-direction: row-reverse;
        align-items: center;
        gap: 40px;
      }
    }
  }
`;

export const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  margin: 0 auto;
  flex-grow: 1;

  max-width: 425px;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 1000px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 515px;
  }
`;

export const ContentWrapper = styled(motion.div)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: row;
  }
  .navs {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 34px 0 26px 0;

    @media ${(props) => props.theme.breakpoints.md} {
      margin: 56px 0 44px 0;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
      justify-content: flex-start;
      margin: unset;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      gap: 16px;

      button {
        width: 40px;
        height: 40px;
        transition: all 250ms ease-in-out;
        border: 1px solid #4c4e56;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.colors.tertiary};
        background-color: transparent;
        cursor: pointer;

        &.true {
          color: ${(props) => props.theme.colors.primary};
          background-color: ${(props) => props.theme.colors.tertiary};
          border: 1px solid ${(props) => props.theme.colors.tertiary};
        }

        &:hover {
          border: 1px solid ${(props) => props.theme.colors.tertiary};
        }

        @media ${(props) => props.theme.breakpoints.md} {
          width: 60px;
          height: 60px;
        }

        @media ${(props) => props.theme.breakpoints.lg} {
          width: 80px;
          height: 80px;
        }
      }

      @media ${(props) => props.theme.breakpoints.lg} {
        gap: 32px;
        flex-direction: column;
      }
    }
  }
  .content-container {
    padding: 0 1.5rem 1.5rem 1.5rem;
    margin: 0 auto;
    @media ${(props) => props.theme.breakpoints.md} {
      max-width: 28.625rem;
      padding: unset;
    }
    @media ${(props) => props.theme.breakpoints.lg} {
      margin: 0 0 0 80px;
      max-width: unset;
    }
    h2 {
      margin: 0 auto;
      font-family: ${(props) => props.theme.fonts.bellefair};
      text-align: center;
      text-transform: uppercase;
      color: #909296;
      mix-blend-mode: normal;
      font-size: 0.875rem;
      line-height: 1.0625rem;
      letter-spacing: 0.1477rem;

      @media ${(props) => props.theme.breakpoints.md} {
        margin: 0 auto;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.7px;
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
      color: ${(props) => props.theme.colors.secondary};

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
`;

export const IMG = styled(motion.img)`
  background-size: cover;
  /* background-image: ${(props) => {
    return `url(${technologies[props.currentindex].images.landscape})`;
  }}; */
  width: 100%;
  height: 170px;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 768px;
    height: 310px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 527px;
    max-width: 515px;
    /* background-image: ${(props) => {
      return `url(${technologies[props.currentindex].images.portrait})`;
    }}; */
  }
`;
