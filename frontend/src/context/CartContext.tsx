// CartContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { DataItem } from '../types/types';

interface CartContextType {
    cartItems: DataItem[];
    addToCart: (product: DataItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState<DataItem[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(storedCart);
    }, []);

    const addToCart = (product: DataItem) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (id: number) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.setItem('cart', JSON.stringify([]));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
