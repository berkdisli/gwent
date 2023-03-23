import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import logo from '../images/gwent.png';
import { fetchCards } from '../features/cardsSlice'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <div className='home'>
      <img className='gwent-logo' src={logo} alt='gwent' />
            <Link to='/cards'><button className='start-button'>Choose Your Deck</button></Link>
            <Footer />
    </div>
  );
};

export default Home
