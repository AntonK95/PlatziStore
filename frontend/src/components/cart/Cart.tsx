

import {useState, useEffect} from 'react'
import { DataItem, CartProps } from '../../types/types'
import ProductCard from '../productCard/ProductCard';
import './cart.css'
import { motion } from 'framer-motion';
import CartProductCard from '../cartProductCard/CartProductCard';

function Cart({ isOpen, onClose }: CartProps) {

    const [cartItems, setCartItems] = useState<DataItem[]>([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(cart);
    }, []);

    // Ta bort produkten från cartItems och uppdatera localStorage
    const handleRemove = (id: number): void => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    // Töm kundvagnen
    const handleClearCart = (): void => {
      localStorage.setItem('cart', JSON.stringify([]));
      setCartItems([]);
    }

  return (
    <motion.div className='cart'
    initial={{ x: '100%' }}
    animate={{ x: isOpen ? 0: '100%' }}
    transition={{ duration: 2, type: 'spring', stiffness: 80 }}>
    <nav className='cart__nav'>
        <h2>Cart</h2>
        <motion.button 
        className='close__cart--btn' 
        onClick={onClose}
        transition={{ duration : .3 }}
        whileHover={{ scale : 1.1 }}
        whileTap={{ scale : .9 }}
        style={{ boxShadow : ' black 2px 2px 5px'}}>X</motion.button>
    </nav>
    <ul>
    {cartItems.length === 0 ? (
      <p>Kundvagnen är tom.</p>
    ) : (
      <li>
        {cartItems.map(item => (
            <CartProductCard key={item.id} product={item} onRemove={handleRemove} />
        ))}
      </li>
    )}

    </ul>
    <motion.button className='clearCartBtn' 
    onClick={handleClearCart}
    transition={{ duration : .3 }}
    whileHover={{ scale : 1.1 }}
    whileTap={{ scale : .9 }}
    style={{ boxShadow : ' black 2px 2px 5px'}}>Clear cart</ motion.button>
  </motion.div>
  )
}

export default Cart