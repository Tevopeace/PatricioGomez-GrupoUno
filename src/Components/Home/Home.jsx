import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import './home.css'; 

export default function Home() {
    return (
        <div>
            <div className="banner">
                <img src="./B13.jpg" alt="Banner" className="banner-image" /> 
                <div className="banner-container">
                    <div className="banner-title-container">
                        <h2 className="banner-title">Compra</h2>
                        <h2 className="banner-title">tu producto</h2>
                        <h2 className="banner-title">favorito</h2>
                    </div>
                    <Link to="/products" className="shop-button">Ver catalogo</Link>
                </div>
            </div>
            <div className="item-list-container">
                <ItemList />
            </div>
        </div>
    );
}