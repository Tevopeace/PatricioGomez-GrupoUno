import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { getProductById } from '../../Data/asdMock.jsx';
import Loading from '../Loading/Loading.jsx';
import useStore from '../../Store/Store'; 
import './ItemDetail.css';

const ItemDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const addToCart = useStore((state) => state.addToCart); 

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProductById(productId);
            setProduct(data);
            setLoading(false);
        };
        fetchProduct();
    }, [productId]);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleIncrease = () => {
        if (product && quantity < product.stock) {
            setQuantity(prev => prev + 1);
        }
    };

    const totalPrice = product ? product.price * quantity : 0;

    const handleAddToCart = () => {
        if (product) {
            console.log("Stock disponible:", product.stock);
            console.log("Cantidad a agregar:", quantity);
            addToCart(product, quantity); 
            alert("Agregado al carrito");
        }
    };

    if (loading) {
        return <div className='container'><Loading /></div>;
    }
    if (!product) {
        return <div>No se encontró el producto</div>;
    }

    return (
        <div className='container'>
            <div className="grid">
                <div className="image-container">
                    <img src={product.img} alt="Imagen del producto" className='product-image' />
                </div>
                <div>
                    <h1 className='product-title'>{product.name}</h1>
                    <p className='product-description'>{product.description}</p>
                    <p className='stock-info'>Stock: {product.stock}</p>
                    <div className='quantity-controls'>
                        <button onClick={handleDecrease} className='quantity-button'> - </button>
                        <p className='quantity-display'>{quantity}</p>
                        <button onClick={handleIncrease} className='quantity-button'> + </button>
                    </div>
                    <p className='price-info'>Precio: ${product.price} por unidad</p>
                    <p className='price-info'>Precio Total: ${totalPrice}</p>
                    <button className='buy-button' onClick={handleAddToCart}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;