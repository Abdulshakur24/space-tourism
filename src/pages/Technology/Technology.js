import React from "react";
import { TechnologyWrapper } from "./TechnologyStyle";

function Technology({ duration }) {
  return (
    <TechnologyWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    >
      Technology
    </TechnologyWrapper>
  );
}

export default Technology;
