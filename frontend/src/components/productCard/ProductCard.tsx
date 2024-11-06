import { ProductCardProps } from "../../types/types";
import './productcard.css'
import React from 'react'
import { motion } from "framer-motion";

function ProductCard({ product }: ProductCardProps) {
    // Funktion för att lägga till produkter i en kunvagn via localStorage
    const addToCart = (): void => { 
        // Hämta nuvarande kundvagn eller initiera en ny tom array
        const cart: ProductCardProps['product'][] = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(product)

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`Produkt ${product.title} tillagd i kundvagn`);
    }

    return (
        <div className='productCard' key={product.id} >
            {product.images.length > 0 && <img src={product.images[0]} alt={product.title} />}
            <div>
                <h2>{product.title}</h2>
                <p className="price">Pris: {product.price} SEK</p>
                <p>{product.description}</p>
                <motion.button onClick={addToCart}
                transition={{ duration : .3 }}
                whileHover={{ scale : 1.1 }}
                whileTap={{ scale : .9 }}
                style={{ boxShadow : ' black 2px 2px 5px'}}>Add to cart</motion.button>
            </div>
        </div>
    )
}

export default ProductCard;