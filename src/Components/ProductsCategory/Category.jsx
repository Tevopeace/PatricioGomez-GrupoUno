import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../../Data/asdMock.jsx";
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import Loading from "../Loading/Loading";

export default function ProductsCategory() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductByCategory(categoryId)
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error:", error);
                setLoading(false);
            });
    }, [categoryId]);

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