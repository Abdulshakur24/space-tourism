import { AnimatePresence } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { H1, H2, P } from "../../styles";
import {
  ContentWrapper,
  ImageWrapper,
  IMG,
  TechnologyWrapper,
} from "./TechnologyStyle";

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

const props = {
  transition: { duration: 0.25, damping: 0 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Technology({ duration }) {
  const [currentTechnology, setCurrentTechnology] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useLayoutEffect(
    () => setCurrentTechnology([technologies[currentIndex]]),
    [currentIndex]
  );

  // Determine whether it is on the desktop on the first render.
  useLayoutEffect(() => {
    const viewport = window.visualViewport.width;
    if (viewport >= 1220) {
      return setIsDesktop(() => true);
    }
    return setIsDesktop(() => false);
  }, [setIsDesktop]);

  // handle images sizes depending on viewport.
  useEffect(() => {
    const handleOnResize = (event) => {
      const currentWidth = event.target.innerWidth;

      if (currentWidth >= 1220) {
        setIsDesktop(() => true);
      } else {
        setIsDesktop(() => false);
      }
    };
    const throttleHandleOnResize = throttle(handleOnResize, 250);
    window.addEventListener("resize", throttleHandleOnResize);
    return () => window.removeEventListener("resize", throttleHandleOnResize);
  });

  // handle arrow buttons
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => {
          if (prev <= 0) return technologies.length - 1;
          return prev - 1;
        });
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => {
          if (prev >= technologies.length - 1) return 0;
          return prev + 1;
        });
      }
    };

    const throttleKeyPress = throttle(handleKeyPress, 250);

    window.addEventListener("keyup", throttleKeyPress);

    return () => window.removeEventListener("keyup", throttleKeyPress);
  }, []);

  const swipeDrags = (swipeVelocity) => {
    if (swipeVelocity > 80) {
      return setCurrentIndex((prev) => {
        if (prev <= 0) return technologies.length - 1;
        return prev - 1;
      });
    }

    if (swipeVelocity < -80) {
      return setCurrentIndex((prev) => {
        if (prev >= technologies.length - 1) return 0;
        return prev + 1;
      });
    }
  };

  const debounceSwipeDrags = debounce(swipeDrags, 100);
  return (
    <TechnologyWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    >
      <div className="container">
        <H2>
          <em>03</em> SPACE LAUNCH 101
        </H2>
        <AnimatePresence exitBeforeEnter>
          {currentTechnology.map(({ name, images, description }) => (
            <div key={name} id="flex">
              <ImageWrapper>
                <IMG
                  {...props}
                  src={isDesktop ? images.portrait : images.landscape}
                  alt={name}
                  currentindex={currentIndex}
                  drag={"x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDrag={(_, info) => debounceSwipeDrags(info.offset.x)}
                  dragTransition={{ min: 0, max: 0 }}
                  dragSnapToOrigin
                />
              </ImageWrapper>
              <ContentWrapper>
                <div className="navs">
                  <div className="nav">
                    <button
                      onClick={() => setCurrentIndex(() => 0)}
                      className={`${currentIndex === 0}`}
                    >
                      1
                    </button>
                    <button
                      onClick={() => setCurrentIndex(() => 1)}
                      className={`${currentIndex === 1}`}
                    >
                      2
                    </button>
                    <button
                      onClick={() => setCurrentIndex(() => 2)}
                      className={`${currentIndex === 2}`}
                    >
                      3
                    </button>
                  </div>
                </div>
                <div className="content-container">
                  <H2 props={props}>The Terminology</H2>
                  <H1 props={props}>{name}</H1>
                  <P props={props}>{description}</P>
                </div>
              </ContentWrapper>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </TechnologyWrapper>
  );
}

export default Technology;

function throttle(cb, delay = 1000) {
  let lastTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastTime >= delay) {
      cb(...args);
      lastTime = now;
    }
  };
}

function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
