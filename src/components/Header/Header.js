import React, { useContext, useState, useEffect } from "react";
import { HeaderWrapper } from "./HeaderStyle";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { isFirefox, isIE } from "react-device-detect";
import { ToggleContext } from "../../pages/Layout/Layout";
import { Link, useLocation } from "react-router-dom";
import useScroll from "../../hooks/useScroll.js";

function Header() {
  const scroll = useScroll();
  const [navClassList, setNavClassList] = useState([]);

  useEffect(() => {
    const _classList = [];
    if (scroll.currentY > 50 && scroll.currentY - scroll.lastY > 0) {
      _classList.push("hidden");
    }
    setNavClassList(_classList);
  }, [scroll.currentY, scroll.lastY]);

  return (
    <HeaderWrapper className={`${navClassList.join(" ")}`}>
      <div className="container">
        <Logo />
        <div className="line" />
        <Burger />
        <Navigations />
      </div>
    </HeaderWrapper>
  );
}

const Burger = () => {
  const { toggle, setToggle } = useContext(ToggleContext);
  return (
    <div
      onClick={() =>
        setToggle((prev) => {
          return { ...prev, burger: !prev.burger };
        })
      }
      className={`burger ${toggle.burger ? "opened" : "closed"}`}
    >
      <div className="burger__line" />
      <div className="burger__line" />
      <div className="burger__line" />
    </div>
  );
};

const Navigations = () => {
  const { pathname } = useLocation();
  return (
    <div
      className="navigations"
      style={
        isFirefox || isIE
          ? { backgroundColor: "rgb(12, 14, 24)" }
          : { backdropFilter: "blur(81.5485px)" }
      }
    >
      <div className="nav-container">
        <Link to={"/"}>
          <div>
            <em>00</em>
            <p>Home</p>
          </div>
          <div className={`block ${pathname === "/"}`} />
        </Link>
        <Link to={"/destinations"}>
          <div>
            <em>01</em>
            <p>Destinations</p>
          </div>
          <div className={`block ${pathname === "/destinations"}`} />
        </Link>
        <Link to={"/crew"}>
          <div>
            <em>02</em>
            <p>Crew</p>
          </div>
          <div className={`block ${pathname === "/crew"}`} />
        </Link>
        <Link to={"/technology"}>
          <div>
            <em>03</em>
            <p>Technology</p>
          </div>
          <div className={`block ${pathname === "/technology"}`} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
