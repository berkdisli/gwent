import React from 'react'

import logo from '../images/error.gif';

const Error = ({ message }) => {
    return (
        <section className="error flex-centered">
            <img className="error__logo" src={logo} alt="error logo" />
            <p className="error__body">{message}</p>
        </section>
    );
}

export default Error;