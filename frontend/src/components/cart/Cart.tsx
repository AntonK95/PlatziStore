

import {useState, useEffect} from 'react'
import { DataItem, CartProps } from '../../types/types'
import ProductCard from '../productCard/ProductCard';
import './cart.css'
import { motion } from 'framer-motion';
import CartProductCard from '../cartProductCard/CartProductCard';

function Cart({ isOpen, onClose }) {

    const [cartItems, setCartItems] = useState<DataItem[]>([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(cart);
    }, []);

    // Ta bort produkten från cartItems och uppdatera localStorage
    const handleRemove = (id: number) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

  return (
    <motion.div className='cart'
    initial={{ x: '100%' }}
    animate={{ x: isOpen ? 0: '100%' }}
    transition={{ duration: 2, type: 'spring', stiffness: 80 }}>
    <nav>
        <h2>Kundvagn</h2>
        <button className='close__cart--btn' onClick={onClose}>X</button>
    </nav>
    <ul>
    {cartItems.length === 0 ? (
      <p>Kundvagnen är tom.</p>
    ) : (
      <li>
        {cartItems.map(item => (
            <CartProductCard key={item.id} product={item} onRemove={handleRemove} />
        //   <div key={item.id} className="cart-item">
        //     <h3>{item.title}</h3>
        //     <p>Pris: {item.price} SEK</p>
        //     {item.images.length > 0 && <img src={item.images[0]} alt={item.title} />}
        //   </div>
        ))}
      </li>
    )}

    </ul>
  </motion.div>
  )
}

export default Cart