import React from "react";
import Card from "../Card/Card";
import styles from './CardsDeck.module.css';

const CardsList = (props) => {
  const { cards } = props;

  return (
    <section className={styles.cardsList}>
      {cards && cards.map((card, index) => <Card card={card} key={index}/>)}
    </section>
  );
};
export default CardsList;
