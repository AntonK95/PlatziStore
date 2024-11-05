import { ProductCardProps } from "../../types/types";
import './productcard.css'
import React from 'react'

function ProductCard({ product }) {
    // Funktion för att lägga till produkter i en kunvagn via localStorage
    const addToCart = () => { 
        // Hämta nuvarande kundvagn eller initiera en ny tom array
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(product)

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`Produkt ${product.tile} tillagd i kundvagn`);
    }

    return (
        <div className='productCard' key={product.id} >
            {product.images.length > 0 && <img src={product.images[0]} alt={product.title} />}
            <div>
                <h2>{product.title}</h2>
                <p className="price">Pris: {product.price} SEK</p>
                <p>{product.description}</p>
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard;