import React, { useState, useEffect } from 'react';
import { DataItem } from '../types/types';

function AllProducts() {
    const [products, setProducts] = useState<DataItem[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/');
            if (!response.ok) {
                throw new Error('Något gick fel vid hämtning av produkter...');
            }
            const data: DataItem[] = await response.json();
            setProducts(data);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Ett okänt fel inträffade.');
            console.log('Could not get products', error);
        }
    };

    // Hämta data när komponent laddas
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section>
            {error && <p>{error}</p>} {/* Visa felmeddelande */}
            <div>
                {products.map(product => (
                    <div key={product.id} className='productCard'>
                        {product.images.length > 0 && <img src={product.images[0]} alt={product.title} />}
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Pris: {product.price} SEK</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AllProducts;
