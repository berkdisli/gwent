import React from "react";
import { DECK } from "../../static/values";
import styles from "./CardDecks.module.css";

const CardDecks = ({chooseDeck}) => {
  

  return (
    <article className={styles.decksWrapper}>
      {Object.values(DECK).map((deck, index) => (
        <div className={styles.deck} key={index} onClick={chooseDeck}>
          {deck}
        </div>
      ))}
    </article>
  );
};

export default CardDecks;
