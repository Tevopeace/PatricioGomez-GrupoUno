import Store from "../../Store/Store"; // Se importa el hook de Zustand para acceder al estado del carrito
import './Cart.css'; 

export default function Cart() {
    const cart = Store((state) => state.cart); // Obtener estado del carrito
    const removeFromCart = Store((state) => state.removeFromCart); // Función para eliminar productos del carrito desde el store
    const increaseQuantity = Store((state) => state.increaseQuantity); // Función para aumentar la cantidad
    const decreaseQuantity = Store((state) => state.decreaseQuantity); // Función para disminuir la cantidad
    const clearCart = Store((state) => state.clearCart); // Función para vaciar el carrito

    // Calcular el total del carrito
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); // Multiplica el precio por la cantidad

    const handleBuy = () => {
        if (cart.length === 0) {
            alert("No hay productos en el carrito para comprar.");
            return;
        }
        
        alert("Compra realizada con éxito!");
        clearCart(); // Vaciar el carrito después de la compra
    };

    return (
        <div className="container mx-auto max-w-[1170px]">
            <h2 className="text-[30px] font-bold">Carrito</h2>
            {cart.length === 0 ? ( 
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <img src={item.img} alt={item.name} className="w-20 h-20 object-cover mr-40" /> {/* Imagen del producto */}
                                    <span>{item.name} - {item.quantity} x ${item.price}</span>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => increaseQuantity(item.id)} className="button">+</button>
                                    <button onClick={() => decreaseQuantity(item.id)} className="button">-</button>
                                    <button onClick={() => removeFromCart(item.id)} className="button">Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between mt-4">
                        <h3>Total: ${total.toFixed(2)}</h3>
                        <button onClick={clearCart} className="text-red-500 button">Vaciar Carrito</button>
                    </div>
                    <button onClick={handleBuy} className="mt-4 bg-green-500 text-white py-2 px-4 rounded">
                        Comprar
                    </button>
                </div>
            )}
        </div>
    );
}