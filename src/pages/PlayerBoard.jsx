import React, { useEffect, useState } from "react";
import { Loading, Error, CardsList, CardDecks } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCards,
  selectLoading,
  selectError,
  selectMonsters,
  selectNeutral,
  selectNilfgaard,
  selectNorthernRealms,
  selectScoiatael,
  selectSkellige,
} from "../features/cardsSlice";
import { DECK } from "../static/values";
import {
  selectPlayer,
  setPlayer,
  setPlayer1Deck,
  setPlayer2Deck,
} from "../features/playerSlice";
import { useNavigate } from "react-router-dom";
import styles from "../components/CardDecks/CardDecks.module.css";

const PlayerBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const player = useSelector(selectPlayer);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const monster = useSelector(selectMonsters);
  const nilfgaard = useSelector(selectNilfgaard);
  const skellige = useSelector(selectSkellige);
  const scoiatael = useSelector(selectScoiatael);
  const northernRealms = useSelector(selectNorthernRealms);
  const neutral = useSelector(selectNeutral);

  const [currentDeck, setCurrentDeck] = useState([]);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    setCurrentDeck(monster);
  }, [monster]);

  const toggleButtonGroup = (current, siblings, className) => {
    Array.from(siblings).map((sibling) => sibling.classList.remove(className));
    current.classList.add(className);
  };

  const chooseDeck = (event) => {
    switch (event.target.innerText) {
      case DECK.MONSTER:
        setCurrentDeck(monster);
        break;
      case DECK.NEUTRAL:
        setCurrentDeck(neutral);
        break;
      case DECK.NILFGAARD:
        setCurrentDeck(nilfgaard);
        break;
      case DECK.SCOIATAEL:
        setCurrentDeck(scoiatael);
        break;
      case DECK.SKELLIGE:
        setCurrentDeck(skellige);
        break;
      case DECK.NORTHERN_REALMS:
        setCurrentDeck(northernRealms);
        break;
      default:
        setCurrentDeck([]);
    }
    toggleButtonGroup(
      event.currentTarget,
      event.currentTarget.parentElement.children,
      styles.chosen
    );
    player === 1
      ? dispatch(setPlayer1Deck(currentDeck))
      : dispatch(setPlayer2Deck(currentDeck));
  };

  const handleReady = () => {
    player === 1 ? dispatch(setPlayer(2)) : navigate('/firstMove');
  };

  const handleGoBack = () => {
    dispatch(setPlayer(1));
  };

  const handleExitGame = () => {
    dispatch(setPlayer(1));
    dispatch(setPlayer1Deck([]));
    dispatch(setPlayer2Deck([]));
    navigate("/");
  };

  return (
    <section className='player-board'>
      <div onClick={handleExitGame}>Exit the game</div>
      {error && <Error message={error} />}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='player__header'>Player {player}</div>
          <CardDecks handleClick={chooseDeck} />
          <CardsList cards={currentDeck} />
          <div className='player__footer'>
            {player === 2 && (
              <div
                className='player__button'
                id='goBack-btn'
                onClick={handleGoBack}
              >
                Go Back to Player 1
              </div>
            )}

            <div className='player__button' onClick={handleReady}>
              I am ready
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default PlayerBoard;
