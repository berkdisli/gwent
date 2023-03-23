import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const {name, category, ability, attributes } = props.card;

  return (
    <article className={styles.card}>
      <div className={styles.card__element}>
        <img src='' alt='character'></img>
      </div>
      <div className={styles.card__element}>
        <p>Faction:</p>
        <p>{attributes.faction}</p>
      </div>
      <div className={styles.card__element}>
        <p>Name:</p>
        <p>{name}</p>
      </div>
      <div className={styles.card__element}>
        <p>Category:</p>
        <p>{category}</p>
      </div>
      <div className={styles.card__element}>
        <p>Ability:</p>
        <p>{ability}</p>
      </div>
    </article>
  );
};

export default Card;
