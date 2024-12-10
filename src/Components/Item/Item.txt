import { Link } from "react-router-dom";
import useStore from "../../Store/Store"; 
import './Item.css'; 

export default function Item({ id, name, price, img, stock }) {
    const addToCart = useStore((state) => state.addToCart); // Accede a la función addToCart desde Zustand

    const handleAddToCart = () => {
        const product = { id, name, price, img, stock }; 
        addToCart(product); // Llama a la función 'addToCart' para agregar el producto al carrito
    };

    return (
        <div className="item-container">
            <Link to={`/products/${id}`}>
                <img src={img} alt="Imagen Productos" className="item-image" />
            </Link>
            <Link to={`/products/${id}`} className="item-name">
                {name}
            </Link>
            <h4 className="item-price">$ {price}</h4>
            <p className="item-stock">Stock: {stock}</p> 
            <button onClick={handleAddToCart} className="add-to-cart-button">
                Agregar al Carrito
            </button>
        </div>
    );
}