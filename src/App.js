import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Destinations, Crew, Technology, Layout } from "./pages";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home duration={0.25} />} />
          <Route
            path="/destinations"
            element={<Destinations duration={0.25} />}
          />
          <Route path="/crew" element={<Crew duration={0.25} />} />
          <Route path="/technology" element={<Technology duration={0.25} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
