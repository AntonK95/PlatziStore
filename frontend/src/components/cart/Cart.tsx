

import {  CartProps } from '../../types/types'
import './cart.css'
import { motion } from 'framer-motion';
import CartProductCard from '../cartProductCard/CartProductCard';


import { useCart } from '../../context/CartContext';

function Cart({ isOpen, onClose }: CartProps) {
    const { cartItems, removeFromCart, clearCart } = useCart();

    return (
        <motion.div className='cart' initial={{ x: '100%' }} animate={{ x: isOpen ? 0 : '100%' }} transition={{ duration: 2, type: 'spring', stiffness: 80 }}>
            <nav className='cart__nav'>
                <h2>Cart</h2>
                <motion.button className='close__cart--btn' onClick={onClose} transition={{ duration: .3 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} style={{ boxShadow: ' black 2px 2px 5px'}}>X</motion.button>
            </nav>
            <ul>
                {cartItems.length === 0 ? (
                    <p>Kundvagnen är tom.</p>
                ) : (
                    <li>
                        {cartItems.map(item => (
                            <CartProductCard key={item.cartID} product={item} onRemove={removeFromCart} />
                        ))}
                    </li>
                )}
            </ul>
            <motion.button className='clearCartBtn' onClick={clearCart} transition={{ duration: .3 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} style={{ boxShadow: ' black 2px 2px 5px'}}>Clear cart</motion.button>
        </motion.div>
    );
}

export default Cart;
