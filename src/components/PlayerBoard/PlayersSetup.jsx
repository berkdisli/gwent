import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchCards,
  selectError,
  selectLoading,
  selectMonsters,
  selectNeutral,
  selectNilfgaard,
  selectNorthernRealms,
  selectScoiatael,
  selectSkellige,
} from "../../features/cardsSlice";
import {
  selectPlayer,
  setPlayer,
  setPlayer1Deck,
  setPlayer2Deck,
} from "../../features/playerSlice";
import { DECK } from "../../static/values";
import { CardDecks, CardsList } from "./CardsOptions";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

import styles from "./PlayersSetup.module.css";
import { useMemo } from "react";

const PlayersSetup = () => {
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

  useMemo(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useMemo(() => {
    setCurrentDeck(monster);
  }, [monster])

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
  };

  useEffect(() => {
    player === 1
      ? dispatch(setPlayer1Deck(currentDeck))
      : dispatch(setPlayer2Deck(currentDeck));
  }, [currentDeck, dispatch, player]);

  const handleReady = () => {
    if (player === 1) {
      dispatch(setPlayer(2));
      // set to default (monster)
      toggleButtonGroup(
        document.querySelector(`#${DECK.MONSTER}`),
        document.querySelectorAll(`.${styles.deck}`),
        styles.chosen
      );
    } else {
      navigate("/firstMove");
    }
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
      <div onClick={handleExitGame}>Go back</div>
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

export default PlayersSetup;
