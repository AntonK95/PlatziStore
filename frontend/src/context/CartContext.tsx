// CartContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DataItem } from '../types/types';
import { v4 as uuid } from 'uuid';
import { CartContextType } from '../types/types';

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    // State-variabel för att lagra kundvagnens objekt
    const [cartItems, setCartItems] = useState<DataItem[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(storedCart); // Sätter cartItems till vädet från localStorage
    }, []);

    const addToCart = (product: DataItem) => {
        const productWithUuid = { ...product, cartID: uuid()}
        const updatedCart = [...cartItems, productWithUuid];
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (cartID : string) => {
        const updatedCart = cartItems.filter(item => item.cartID !== cartID);
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
