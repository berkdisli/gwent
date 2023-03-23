import React from 'react';

import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const creatorLinks = [
        {
            name: 'Anna Kononchenko',
            link: 'https://github.com/AnyaKononchenko',
        },
        {
            name: 'Berk Disli',
            link: 'https://github.com/berkdisli',
        }
    ];

    return (
        <footer className='footer'>
            <div className='footer-center flex-centered'>
                Created by: {creatorLinks.map((creator) => (
                    <a href={creator.link} key={creator.name} target="_blank" rel="noopener noreferrer">{creator.name}</a>
                ))}
            </div>
            <div className='footer-right flex-centered'>
                <a href="https://www.youtube.com/watch?v=apVrGSP1WNI" target="_blank" rel="noopener noreferrer"> <FaYoutube className='icon' /></a>
                <a href="https://www.instagram.com/playgwent/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram className='icon' /></a>
            </div>
        </footer>
    );
}

export default Footer;
