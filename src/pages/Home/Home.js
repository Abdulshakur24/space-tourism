import React from "react";
import { HomeWrapper } from "./HomeStyle";
import { H1, H5, P } from "../../styles/";
import { useNavigate } from "react-router-dom";

function Home({ duration }) {
  const navigator = useNavigate();
  return (
    <HomeWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration }}
    >
      <div className="container">
        <H5>SO, YOU WANT TO TRAVEL TO</H5>
        <H1>SPACE</H1>
        <P>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </P>
      </div>
      <div className="button_container">
        <button onClick={() => navigator("/destinations")}>EXPOLORE</button>
      </div>
    </HomeWrapper>
  );
}

export default Home;
