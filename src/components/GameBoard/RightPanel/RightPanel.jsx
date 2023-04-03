import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setPlayer,
  setPlayer1Deck,
  setPlayer2Deck,
} from "../../../features/playerSlice";
import { OpponentDecks, PlayerDecks } from "./PlayerDecks";

import styles from "./RightPanel.module.css";

const RightPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleExitGame = () => {
    const confirmation = prompt("Are you sure you wanna leave? lol", "Yes");
    if (confirmation === "Yes") {
      dispatch(setPlayer(1));
      dispatch(setPlayer1Deck([]));
      dispatch(setPlayer2Deck([]));
      navigate("/");
    }
  };

  return (
    <article className={styles.rightPanel}>
      <OpponentDecks />
      <button className={styles.exitGameBtn} onClick={handleExitGame}>
        Exit the game
      </button>
      <PlayerDecks />
    </article>
  );
};

export default RightPanel;
