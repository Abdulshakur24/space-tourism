import React from "react";
import { CrewWrapper } from "./CrewStyle";

function Crew({ duration }) {
  return (
    <CrewWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    >
      Crew
    </CrewWrapper>
  );
}

export default Crew;
