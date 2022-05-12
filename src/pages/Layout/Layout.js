import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "./LayoutStyle";
import { Header } from "../../components";

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
        <Outlet />
      </ToggleContext.Provider>
    </LayoutWrapper>
  );
}

export default Layout;
