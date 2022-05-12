import React from "react";
import { HomeWrapper } from "./HomeStyle";

function Home({ duration }) {
  return (
    <HomeWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    ></HomeWrapper>
  );
}

export default Home;
