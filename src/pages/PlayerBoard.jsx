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

const PlayerBoard = () => {
  const dispatch = useDispatch();
  const [currentDeck, setCurrentDeck] = useState(useSelector(selectMonsters));

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const monster = useSelector(selectMonsters);
  const nilfgaard = useSelector(selectNilfgaard);
  const skellige = useSelector(selectSkellige);
  const scoiatael = useSelector(selectScoiatael);
  const northernRealms = useSelector(selectNorthernRealms);
  const neutral = useSelector(selectNeutral);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const chooseDeck = (event) => {
    switch(event.target.innerText) {
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
  }

  return (
    <section className='player-board'>
      {error && <Error message={error} />}
      {loading ? (
        <Loading />
      ) : (
        <>
          <CardDecks chooseDeck={chooseDeck}/>
          <CardsList cards={currentDeck} />
        </>
      )}

      {/* {monster && console.log("Monster", monster)}
      {nilfgaard && console.log("Nilfgaard", nilfgaard)}
      {skellige && console.log("Skellige", skellige)}
      {scoiatael && console.log("Scoiatael", scoiatael)}
      {northernRealms && console.log("Northern Realms", northernRealms)}
      {neutral && console.log("Neutral", neutral)} */}
    </section>
  );
};

export default PlayerBoard;
