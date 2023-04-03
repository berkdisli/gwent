import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPlayer } from "../../features/playerSlice";
import styles from "./FirstMove.module.css";
import { BsPerson } from "react-icons/bs";

// TODO:
// add getting a player who makes a first move randomly
// it would be super cool to roll dices
const FirstMove = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event) => {
    Number(event.target.id) === 1
      ? dispatch(setPlayer(1))
      : dispatch(setPlayer(2));
    navigate("/game");
  };

  return (
    <section className={styles.moveChooser}>
      <h1>Who starts to play?</h1>
      <button className={styles.playerChoose} onClick={handleClick} id="1">
        Player 1 <BsPerson />
      </button>

      <button className={styles.playerChoose} onClick={handleClick} id="2">
        Player 2 <BsPerson />
      </button>
    </section>
  );
};

export default FirstMove;
