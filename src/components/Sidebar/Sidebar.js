import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { BackdropWrapper, SidebarWrapper } from "./SidebarStyle";
import { isFirefox, isIE } from "react-device-detect";
import { ToggleContext } from "../../pages/Layout/Layout";

function Sidebar() {
  const { pathname } = useLocation();
  const { setToggle } = useContext(ToggleContext);

  const handleClick = (path) => {
    if (pathname === path) return;
    setToggle((prev) => {
      return { ...prev, burger: false };
    });
  };

  return (
    <>
      <SidebarWrapper
        initial={{ x: "100vh" }}
        animate={{ x: 0 }}
        exit={{ x: "100vh" }}
        transition={{ damping: false }}
        style={
          isFirefox || isIE
            ? { backgroundColor: "rgb(12, 14, 24)" }
            : { backdropFilter: "blur(81.5485px)" }
        }
      >
        <div className="container">
          <div className="content">
            <div className="link">
              <Link onClick={() => handleClick("/")} to={"/"}>
                <em>00</em>Home
              </Link>
              <div className={`block ${pathname === "/"}`} />
            </div>
            <div className="link">
              <Link
                onClick={() => handleClick("/destinations")}
                to={"/destinations"}
              >
                <em>01</em>Destinations
              </Link>
              <div className={`block ${pathname === "/destinations"}`} />
            </div>
            <div className="link">
              <Link onClick={() => handleClick("/crew")} to={"/crew"}>
                <em>02</em>Crew
              </Link>
              <div className={`block ${pathname === "/crew"}`} />
            </div>
            <div className="link">
              <Link
                onClick={() => handleClick("/technology")}
                to={"/technology"}
              >
                <em>03</em>Technology
              </Link>
              <div className={`block ${pathname === "/technology"}`} />
            </div>
          </div>
        </div>
      </SidebarWrapper>
      <BackdropWrapper
        onClick={() =>
          setToggle((prev) => {
            return { ...prev, burger: false };
          })
        }
      />
    </>
  );
}

export default Sidebar;
