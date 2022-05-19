import { useEffect, useState } from "react";

function throttle(cb, delay = 100) {
  let shouldWait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}

const useScroll = () => {
  const [data, setData] = useState({
    currentY: 0,
    lastY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setData((last) => {
        return {
          currentY: window.scrollY,
          lastY: last.currentY,
        };
      });
    };

    const updateThrottle = throttle(handleScroll);

    window.addEventListener("scroll", updateThrottle);

    return () => window.removeEventListener("scroll", updateThrottle);
  }, []);

  return data;
};

export default useScroll;
