import React from "react";
import { useNavigate } from "react-router-dom";
import { DestinationsWrapper } from "./DestinationsStyle";

function Destinations({ duration }) {
  const navigator = useNavigate();

  return (
    <DestinationsWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    >
      Destinations
      <button onClick={() => navigator("/")}>Home</button>
    </DestinationsWrapper>
  );
}

export default Destinations;
