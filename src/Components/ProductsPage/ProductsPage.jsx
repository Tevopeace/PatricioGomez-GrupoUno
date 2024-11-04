import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import { getProducts } from '../../Data/asdMock.jsx';
import Loading from '../Loading/Loading';
import './Products.css';

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="item-list flex flex-wrap">
                    {products.map((prod) => (
                        <Link to={`/products/${prod.id}`} key={prod.id}>
                            <Item {...prod} />
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}