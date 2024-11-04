import React from 'react';
import LogoFooter from '../LogoFooter/LogoFooter.jsx';
import './Footer.css';
import { FaInstagram } from 'react-icons/fa'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo-section">
                <a href="/public" className="footer__logo-link">
                    <LogoFooter />
                </a>
                <p className="footer__copyright">© 2024</p>
            </div>

            <div className="footer__nav-section">
                <div className="footer__nav-header">
                    <div className="footer__section-title">
                        <h5>Section</h5>
                        <a 
                            href="https://www.instagram.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer__icon-link"
                        >
                            <FaInstagram size={54} /> 
                        </a>
                    </div>
                </div>
                <ul className="footer__nav-list">
                    <li className="footer__nav-item"><a href="/" className="footer__nav-link">Home</a></li>
                    <li className="footer__nav-item"><a href="/contact" className="footer__nav-link">Contact</a></li>
                    <li className="footer__nav-item"><a href="/Shop" className="footer__nav-link">Pricing</a></li>
                    <li className="footer__nav-item"><a href="/About" className="footer__nav-link">About</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;