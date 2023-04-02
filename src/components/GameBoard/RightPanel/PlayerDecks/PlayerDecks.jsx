import React from 'react'
import { useSelector } from 'react-redux';
import { selectPlayer } from '../../../../features/playerSlice';

import styles from '../RightPanel.module.css';

const PlayerDecks = () => {
  const player = useSelector(selectPlayer)
  return (
    <div className={styles.decksWrapper}>Player {player} Deck and Graveyard</div>
  )
}

export default PlayerDecks