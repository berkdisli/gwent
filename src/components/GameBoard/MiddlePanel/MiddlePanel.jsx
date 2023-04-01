import React from "react";
import CardsPanel from "./CardsPanel";
import { OpponentHand, PlayerHand } from "./PlayerHand";

import styles from "./MiddlePanel.module.css";

const MiddlePanel = () => {
  return (
    <article className={styles.middlePanel}>
      <OpponentHand />
      <CardsPanel />
      <PlayerHand />
    </article>
  );
};

export default MiddlePanel;
