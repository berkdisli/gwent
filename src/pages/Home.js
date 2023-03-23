import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import logo from '../images/gwent.png';
import { fetchCards } from '../features/cardsSlice'
import Footer from '../layouts/Footer'

const Home = () => {
    const dispatch = useDispatch();
    const cardsObject = useSelector(state => state.cards);
    const { cards, monster, nilfgaard, skellige, scoiatael, northernRealms, neutral } = cardsObject;

    useEffect(() => {
        dispatch(fetchCards())
    }, []);

    return (
        <div className="home">
            <img className="gwent-logo" src={logo} alt="gwent" />
            <Link to='/cards'><button className='start-button'>Choose Your Deck</button></Link>
            {cardsObject.loading && <div>Loading</div>}
            {cardsObject.error && <div>Error</div>}
            {cardsObject && console.log("All Cards:", cards)}
            {cardsObject && console.log("Monster", monster)}
            {cardsObject && console.log("Nilfgaard", nilfgaard)}
            {cardsObject && console.log("Skellige", skellige)}
            {cardsObject && console.log("Scoiatael", scoiatael)}
            {cardsObject && console.log("Northern Realms", northernRealms)}
            {cardsObject && console.log("Neutral", neutral)}
            <Footer />
        </div>

    )
}

export default Home
