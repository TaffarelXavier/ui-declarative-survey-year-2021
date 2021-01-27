import React from "react";
import Highlight from "react-highlight.js";
import { NextPage } from "next";

const App: NextPage = () => {
  return (
    <>
      <Highlight language={"javascript"}>
        {"var three = 1 + 2; // This is a comment"}
      </Highlight>
    </>
  );
};
export default App;
