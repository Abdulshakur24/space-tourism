import React, { useEffect, useState } from "react";
import useScroll from "../../hooks/useScroll";
import { HeaderWrapper } from "./HeaderStyle";

function Header() {
  const scroll = useScroll();

  const [navClassList, setNavClassList] = useState([]);

  useEffect(() => {
    const _classList = [];
    if (scroll.currentY > 0 && scroll.currentY - scroll.lastY > 0) {
      _classList.push("hidden");
    }
    setNavClassList(_classList);
  }, [scroll.currentY, scroll.lastY]);
  return (
    <HeaderWrapper className={`${navClassList.join(" ")}`}>
      Header
    </HeaderWrapper>
  );
}

export default Header;
