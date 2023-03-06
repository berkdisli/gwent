import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards, showCards } from '../features/cardsSlice'

const Home = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards);
    useEffect(() => {
        dispatch(fetchCards())
    }, [])

    cards.cards && dispatch(showCards())
    
    return (
        <div>Home
            {cards.loading && <div>Loading</div>}
            {cards.error && <div>Error</div>}
            {cards.cards && console.log(cards.cards)}
        </div>
        
    )
}

export default Home