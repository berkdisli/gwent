import React from "react";
import Card from "../Card/Card";
import styles from './CardsList.module.css';

const CardsList = (props) => {
  const { cards } = props;

  return (
    <section className={styles.cardsList}>
      {cards && cards.map((card, index) => <Card card={card} key={index}/>)}
      <div className={styles.overlay}></div>
    </section>
  );
};
export default CardsList;
