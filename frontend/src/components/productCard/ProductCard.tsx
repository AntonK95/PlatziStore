import { ProductCardProps } from "../../types/types";
import './productcard.css'
import { motion } from "framer-motion";

import { useCart } from '../../context/CartContext';

function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <div className='productCard' key={product.id}>
            {product.images.length > 0 && <img src={product.images[0]} alt={product.title} />}
            <div>
                <h2>{product.title}</h2>
                <p className="price">Pris: {product.price} SEK</p>
                <p>{product.description}</p>
                <motion.button onClick={() => addToCart(product)} transition={{ duration: .3 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} style={{ boxShadow: ' black 2px 2px 5px'}}>Add to cart</motion.button>
            </div>
        </div>
    );
}

export default ProductCard;
