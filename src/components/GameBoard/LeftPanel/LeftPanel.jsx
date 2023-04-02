import React from "react";

import { OpponentPanel, PlayerPanel } from "./PlayerPanel";

import styles from "./LeftPanel.module.css";


const LeftPanel = () => {

  return (
    <article className={styles.leftPanel}>
      <OpponentPanel />
      <PlayerPanel />
    </article>
  );
};

export default LeftPanel;
