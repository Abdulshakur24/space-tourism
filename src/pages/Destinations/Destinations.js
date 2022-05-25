import { AnimatePresence } from "framer-motion";
import React, { useState, useLayoutEffect } from "react";
import { H1, H2, P } from "../../styles";
import {
  ContentWrapper,
  DestinationsWrapper,
  ImageWrapper,
  IMG,
} from "./DestinationsStyle";

const destinations = [
  {
    name: "Moon",
    images: {
      png: require("../../assets/destination/image-moon.png"),
      webp: require("../../assets/destination/image-moon.webp"),
    },
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: require("../../assets/destination/image-mars.png"),
      webp: require("../../assets/destination/image-mars.webp"),
    },
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: require("../../assets/destination/image-europa.png"),
      webp: require("../../assets/destination/image-europa.webp"),
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: require("../../assets/destination/image-titan.png"),
      webp: require("../../assets/destination/image-titan.webp"),
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const props = {
  transition: { duration: 0.25 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Destinations({ duration }) {
  const [currentDestination, setCurrentDestination] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
    return setCurrentDestination([destinations[currentIndex]]);
  }, [currentIndex]);

  // handle swipe drags
  const swipeDrags = (swipeVelocity) => {
    if (swipeVelocity > 80) {
      return setCurrentIndex((prev) => {
        if (prev <= 0) return 3;
        return prev - 1;
      });
    }

    if (swipeVelocity < -80) {
      return setCurrentIndex((prev) => {
        if (prev >= 3) return 0;
        return prev + 1;
      });
    }
  };

  const debounceSwipeDrags = debounce(swipeDrags, 100);

  return (
    <DestinationsWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    >
      <div className="container">
        <AnimatePresence exitBeforeEnter>
          {currentDestination.map(
            ({ name, images, description, distance, travel }) => (
              <div id="flex" key={name}>
                <ImageWrapper>
                  <H2>
                    <em>01</em> PICK YOUR DESTINATION
                  </H2>
                  <IMG
                    transition={{ duration: 0.25 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={images.png}
                    alt={name}
                    drag={"x"}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDrag={(_, info) => debounceSwipeDrags(info.offset.x)}
                    dragTransition={{ min: 100, max: 0 }}
                    dragSnapToOrigin
                  />
                </ImageWrapper>
                <ContentWrapper>
                  <div className="contents-container">
                    <div className="navs">
                      <div onClick={() => setCurrentIndex(0)}>
                        <p>Moon</p>
                        <div className={`block ${currentIndex === 0}`} />
                      </div>
                      <div onClick={() => setCurrentIndex(1)}>
                        <p>Mars</p>
                        <div className={`block ${currentIndex === 1}`} />
                      </div>
                      <div onClick={() => setCurrentIndex(2)}>
                        <p>Europa</p>
                        <div className={`block ${currentIndex === 2}`} />
                      </div>
                      <div onClick={() => setCurrentIndex(3)}>
                        <p>Titan</p>
                        <div className={`block ${currentIndex === 3}`} />
                      </div>
                    </div>
                    <H1 props={props}>{name}</H1>
                    <P props={props}>{description}</P>
                    <div className="line" />
                    <div className="time-distance">
                      <div className="distance">
                        <P>AVG. DISTANCE</P>
                        <H2 props={props}>{distance}</H2>
                      </div>
                      <div className="time">
                        <P>EST. TRAVEL TIME</P>
                        <H2 props={props}>{travel}</H2>
                      </div>
                    </div>
                  </div>
                </ContentWrapper>
              </div>
            )
          )}
        </AnimatePresence>
      </div>
    </DestinationsWrapper>
  );
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

export default Destinations;
