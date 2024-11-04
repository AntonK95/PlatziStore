import { ProductCardProps } from "../../types/types";
import './productcard.css'
import React from 'react'

function ProductCard({ product }) {
    return (
        <div className='productCard' key={product.id} >
            {product.images.length > 0 && <img src={product.images[0]} alt={product.title} />}
            <div>
                <h2>{product.title}</h2>
                <p className="price">Pris: {product.price} SEK</p>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductCard;