import React from "react";
import LeftPanel from "./LeftPanel/LeftPanel";
import MiddlePanel from "./MiddlePanel/MiddlePanel";
import RightPanel from "./RightPanel/RightPanel";

const Board = () => {
  return (
    <section className="game-board">
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </section>
  );
};

export default Board;
