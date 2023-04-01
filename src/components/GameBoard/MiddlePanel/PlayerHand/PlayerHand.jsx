import React from "react";
import { useSelector } from "react-redux";
import { selectPlayer } from "../../../../features/playerSlice";

import styles from "../MiddlePanel.module.css";

const PlayerHand = () => {
  const player = useSelector(selectPlayer)
  return <div className={styles.playerHand}>Hand of {player} Player</div>;
};

export default PlayerHand;
