// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="line"></div> 
            <p>&copy; {new Date().getFullYear()} Kalana de Silva. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
