import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Category/Ps4">Ps4</Link>
                </li>
                <li>
                    <Link to="/Category/Xbox">Xbox</Link>
                </li>
                <li>
                    <Link to="/Category/Pc">Pc</Link>
                </li>
                <li>
                    <Link to="/cart">carrito</Link>
                </li>
            </ul>
        </nav>
    );
}