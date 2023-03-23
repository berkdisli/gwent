import React from "react";
import { DECK } from "../../static/values";
import styles from "./CardDecks.module.css";

const CardDecks = ({ handleClick }) => {
  return (
    <article className={styles.decksWrapper}>
      {Object.values(DECK).map((deck, index) => (
        <div className={styles.deck} key={index} onClick={handleClick}>
          {deck}
        </div>
      ))}
    </article>
  );
};

export default CardDecks;
