import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from '../features/cardsSlice'

const Home = () => {
    const dispatch = useDispatch();
    const cardsObject = useSelector(state => state.cards);
    const {cards, monster, nilfgaard, skellige, scoiatael, northernRealms, neutral} = cardsObject;

    useEffect(() => {
        dispatch(fetchCards())
    }, []);

    return (
        <div>Home
            {cardsObject.loading && <div>Loading</div>}
            {cardsObject.error && <div>Error</div>}
            {cardsObject && console.log("All Cards:", cards)}
            {cardsObject && console.log("Monster", monster)}
            {cardsObject && console.log("Nilfgaard", nilfgaard)}
            {cardsObject && console.log("Skellige", skellige)}
            {cardsObject && console.log("Scoiatael", scoiatael)}
            {cardsObject && console.log("Northern Realms", northernRealms)}
            {cardsObject && console.log("Neutral", neutral)}
        </div>
        
    )
}

export default Home