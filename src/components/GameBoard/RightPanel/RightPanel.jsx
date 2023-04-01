import React from "react";
import { OpponentDecks, PlayerDecks } from "./PlayerDecks";

import styles from "./RightPanel.module.css";

const RightPanel = () => {
  return (
    <article className={styles.rightPanel}>
      <OpponentDecks />
      <PlayerDecks />
    </article>
  );
};

export default RightPanel;
