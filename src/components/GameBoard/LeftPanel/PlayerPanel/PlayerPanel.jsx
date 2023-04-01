import React from 'react';
import { useSelector } from 'react-redux';


import { useDispatch } from "react-redux";
import { selectPlayer, setPlayer } from '../../../../features/playerSlice';


import styles from "../LeftPanel.module.css";

const PlayerPanel = () => {
  const dispatch = useDispatch();

  const player = useSelector(selectPlayer);

  const handlePlayerSwitch = () => {
    dispatch(setPlayer(player === 1 ? 2 : 1))
  }

  return (
    <>
    <div className={styles.playerSwitch} onClick={handlePlayerSwitch}>
    Finish Move
  </div>
    <div className={styles.player}>Player {player}</div>
    </>
  )
}

export default PlayerPanel;