import React from "react";
import { useSelector } from "react-redux";
import Board from "../components/GameBoard/Board";
import { selectPlayer } from "../features/playerSlice";

const GameBoard = () => {
  const player = useSelector(selectPlayer);
  console.log("current player is ", player);

  return <Board />;
};

export default GameBoard;
