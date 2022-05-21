import { AnimatePresence } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { H1, H2, P } from "../../styles";
import { ContentWrapper, CrewWrapper, ImageWrapper, IMG } from "./CrewStyle";

const crews = [
  {
    name: "Douglas Hurley",
    images: {
      png: require("../../assets/crew/image-douglas-hurley.png"),
      webp: require("../../assets/crew/image-douglas-hurley.webp"),
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: require("../../assets/crew/image-mark-shuttleworth.png"),
      webp: require("../../assets/crew/image-mark-shuttleworth.webp"),
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: require("../../assets/crew/image-victor-glover.png"),
      webp: require("../../assets/crew/image-victor-glover.webp"),
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: require("../../assets/crew/image-anousheh-ansari.png"),
      webp: require("../../assets/crew/image-anousheh-ansari.webp"),
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const props = {
  transition: { duration: 0.25 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Crew({ duration }) {
  const [currentCrew, setCurrentCrew] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
    return setCurrentCrew([crews[currentIndex]]);
  }, [currentIndex]);

  // handle arrow buttons
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => {
          if (prev <= 0) return 3;
          return prev - 1;
        });
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => {
          if (prev >= 3) return 0;
          return prev + 1;
        });
      }
    };

    const updateKeyPressThrottle = throttle(handleKeyPress, 300);

    window.addEventListener("keyup", updateKeyPressThrottle);

    return () => window.removeEventListener("keyup", updateKeyPressThrottle);
  }, []);

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

  const updateSwipeDragsDebounce = debounce(swipeDrags, 100);

  return (
    <CrewWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    >
      <div className="container">
        <H2>
          <em>02</em> MEET YOUR CREW
        </H2>

        <AnimatePresence exitBeforeEnter>
          {currentCrew.map(({ name, images, role, bio }) => (
            <div key={name} id="grid">
              <ImageWrapper>
                <IMG
                  {...props}
                  src={images.webp}
                  alt={name}
                  drag={"x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDrag={(_, info) => updateSwipeDragsDebounce(info.offset.x)}
                  dragTransition={{ min: 100, max: 0 }}
                  dragSnapToOrigin
                />
                <div data-line />
              </ImageWrapper>
              <div className="navs">
                <div onClick={() => setCurrentIndex(() => 0)}>
                  <div className={`block ${currentIndex === 0}`} />
                </div>
                <div onClick={() => setCurrentIndex(() => 1)}>
                  <div className={`block ${currentIndex === 1}`} />
                </div>
                <div onClick={() => setCurrentIndex(() => 2)}>
                  <div className={`block ${currentIndex === 2}`} />
                </div>
                <div onClick={() => setCurrentIndex(() => 3)}>
                  <div className={`block ${currentIndex === 3}`} />
                </div>
              </div>
              <ContentWrapper>
                <div className="content-container">
                  <H2 props={props}>{role}</H2>
                  <H1 props={props}>{name}</H1>
                  <P props={props}>{bio}</P>
                </div>
              </ContentWrapper>
            </div>
          ))}
        </AnimatePresence>
      </div>
    </CrewWrapper>
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

function throttle(cb, delay = 1000) {
  var lastTime = 0;
  return function (...args) {
    var now = Date.now();
    console.log(now - lastTime, delay);
    if (now - lastTime >= delay) {
      cb(...args);
      lastTime = now;
    }
  };
}

export default Crew;
