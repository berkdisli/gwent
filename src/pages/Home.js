import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/gwent.png";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div className='home'>
      <img className='gwent-logo' src={logo} alt='gwent' />
      <Link to='/player'>
        <button className='start-button'>Choose Your Deck</button>
      </Link>
      <Footer />
    </div>
  );
};

export default Home;
