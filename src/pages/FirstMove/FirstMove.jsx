import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPlayer } from "../../features/playerSlice";
import styles from "./FirstMove.module.css";

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
      First move makes
      <div onClick={handleClick} id='1'>
        Player 1
      </div>
      <div onClick={handleClick} id='2'>
        Player 2
      </div>
    </section>
  );
};

export default FirstMove;
