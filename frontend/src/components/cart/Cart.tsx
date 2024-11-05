

import {useState, useEffect} from 'react'
import { DataItem, CartProps } from '../../types/types'
import ProductCard from '../productCard/ProductCard';
import './cart.css'
import { motion } from 'framer-motion';

function Cart({ isOpen, onClose }) {

    const [cartItems, setCartItems] = useState<DataItem[]>([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(cart);
    }, []);

  return (
    <motion.div className='cart'
    initial={{ x: '100%' }}
    animate={{ x: isOpen ? 0: '100%' }}
    transition={{ duration: 2, type: 'spring', stiffness: 80 }}>
    <h2>Kundvagn</h2>
    <button onClick={onClose}>X</button>
    {cartItems.length === 0 ? (
      <p>Kundvagnen är tom.</p>
    ) : (
      <div>
        {cartItems.map(item => (
            <ProductCard key={item.id} product={item} />
        //   <div key={item.id} className="cart-item">
        //     <h3>{item.title}</h3>
        //     <p>Pris: {item.price} SEK</p>
        //     {item.images.length > 0 && <img src={item.images[0]} alt={item.title} />}
        //   </div>
        ))}
      </div>
    )}
  </motion.div>
  )
}

export default Cart