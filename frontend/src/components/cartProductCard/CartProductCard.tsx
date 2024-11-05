
import React from 'react'
import { DataItem, CartProductCardProps } from '../../types/types'
import './cartProductCard.css'


function CartProductCard({ product, onRemove}) {

  return (
    <div className='cart__product--card'>
        {product.images.length > 0 && <img src={product.images[0]} alt={product.title} />}
        <div className='cart__card--inner'>
          <p>{product.title}</p>
          <p>Price: {product.price}</p>
          <button className='remove__btn' onClick={() => onRemove(product.id)}>Remove</button>
        </div>
    </div>
  )
}

export default CartProductCard