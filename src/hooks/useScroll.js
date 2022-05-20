import { useEffect, useState } from "react";

function throttle(cb, delay = 1000) {
  let lastTime = 0;
  return function (...args) {
    var now = Date.now();
    if (now - lastTime >= delay) {
      cb(...args);
      lastTime = now;
    }
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

    const updateScrollThrottle = throttle(handleScroll, 100);

    window.addEventListener("scroll", updateScrollThrottle);

    return () => window.removeEventListener("scroll", updateScrollThrottle);
  }, []);

  return data;
};

export default useScroll;
