import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./LayoutStyle";
import { Header, Sidebar } from "../../components";
import { AnimatePresence } from "framer-motion";

export const ToggleContext = createContext({
  burger: false,
});

function Layout() {
  const [toggle, setToggle] = useState({
    burger: false,
  });

  return (
    <LayoutWrapper>
      <ToggleContext.Provider value={{ toggle, setToggle }}>
        <Header />
        <AnimatePresence>{toggle.burger && <Sidebar />}</AnimatePresence>
        <Outlet />
      </ToggleContext.Provider>
    </LayoutWrapper>
  );
}

export default Layout;
