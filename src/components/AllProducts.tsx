import React, { useEffect, useState } from 'react';
import getAllProducts from '../api/getAllProducts';
import { Product, Rating, Image, Category } from '../types/types';

function AllProducts() {                   // <Products> anger att tillståndet kommer vara en array av Product-objekt
    const [products, setProducts] = useState<Product[]>([]); // Skapa state för produkterna
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getProducts = async () => {
            // setLoading(true);
            const fetchedProducts = await getAllProducts();
            console.log('Fetched products:', fetchedProducts); // Logga alla produkter här
            setProducts(fetchedProducts) // Spara produkterna i state
        };

        getProducts(); // Kör funktion för att hämta produkter
    }, []); // Tom array för att useEffect skall köras en gång vid montering av komponenten

    return (
        <section>
            <h2>Available Products</h2>
            <ul>
                {products.length > 0 ? (
                    products.map(product => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price.toFixed(2)}</p>
                            <p>{product.description}</p>
                            {product.images && product.images.length > 0 ? (
                                product.images.map((image, index) => (
                                    <img key={index} src={image} alt={product.title} style={{ width: '100px' }} />
                                ))
                            ) : (
                                <p>No images available.</p>
                            )}
                            <div className='rating'>
                                {product.rating && (
                                    <span>Rating: {product.rating.rate} ({product.rating.count} reviews)</span>
                                )}
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </ul>
        </section>
    )
}

export default AllProducts;