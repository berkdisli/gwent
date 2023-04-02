import React from "react";
import { useSelector } from "react-redux";
import { selectPlayer, selectPlayer1Deck, selectPlayer2Deck } from "../../../../features/playerSlice";

import styles from "../MiddlePanel.module.css";

const PlayerHand = () => {
  const player = useSelector(selectPlayer);
  const deck = useSelector(player === 1 ? selectPlayer1Deck : selectPlayer2Deck);

  return <div className={styles.playerHand}>Hand of {player} Player which plays "{deck[0].attributes.faction}" deck</div>;
};

export default PlayerHand;
