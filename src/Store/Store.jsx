import { create } from 'zustand';

const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const useStore = create((set) => ({
    cart: loadCartFromLocalStorage(),
    addToCart: (product, quantity) => set((state) => {
        const existingItem = state.cart.find(item => item.id === product.id);
        let newCart;

        if (existingItem) {
            if (existingItem.quantity + quantity <= product.stock) {
                newCart = state.cart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return { cart: state.cart };
            }
        } else {
            if (product.stock >= quantity) {
                newCart = [...state.cart, { ...product, quantity }];
            } else {
                return { cart: state.cart };
            }
        }

        saveCartToLocalStorage(newCart);
        return { cart: newCart };
    }),
    removeFromCart: (id) => set((state) => {
        const newCart = state.cart.filter((item) => item.id !== id);
        saveCartToLocalStorage(newCart);
        return { cart: newCart };
    }),
    increaseQuantity: (id) => set((state) => {
        const item = state.cart.find(item => item.id === id);
        if (item && item.quantity < item.stock) {
            const newCart = state.cart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
            saveCartToLocalStorage(newCart);
            return { cart: newCart };
        } else {
            alert("No hay suficiente stock disponible.");
            return { cart: state.cart };
        }
    }),
    decreaseQuantity: (id) => set((state) => {
        const newCart = state.cart.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        saveCartToLocalStorage(newCart);
        return { cart: newCart };
    }),
    clearCart: () => set(() => {
        saveCartToLocalStorage([]);
        return { cart: [] };
    }),
}));

export default useStore;