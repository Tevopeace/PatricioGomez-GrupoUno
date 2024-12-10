import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

function LogoFooter() {
    return (
        <div className="LogoFooter">
            <Link to="/">
                <img src="/logo11.png" alt="Logo" />
            </Link>
        </div>
    );
}

export default LogoFooter;