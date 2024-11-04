import { Link } from "react-router-dom";
import './Item.css'; 

export default function Item({ id, name, price, img, category }) {
    return (
        <div className="item-container"> 
            <Link to={`/products/${id}`}>
                <div className="item-image"> 
                    <img src={img} alt="Imagen Productos" />
                </div>
            </Link>

            <Link to={`/products/${id}`} className="item-name">
                {name}
            </Link>
            <p className="item-category">{category}</p>
            <h4 className="item-price">$ {price}</h4>
            
        </div>
    );
}