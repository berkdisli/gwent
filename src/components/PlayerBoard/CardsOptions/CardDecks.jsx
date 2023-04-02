import React from "react";
import { DECK } from "../../../static/values";

import styles from "../PlayersSetup.module.css";

const CardDecks = ({ handleClick }) => {
  
  const decksPanel = Object.values(DECK).map((deck, index) => (
    <div
      className={`${styles.deck} ${deck === DECK.MONSTER && styles.chosen}`}
      id={deck}
      key={index}
      onClick={handleClick}
    >
      {deck}
    </div>
  ));

  return <article className={styles.decksWrapper}>{decksPanel}</article>;
};

export default CardDecks;
