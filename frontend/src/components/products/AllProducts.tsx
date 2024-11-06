import React, { useState, useEffect } from 'react';
import { DataItem, Category } from '../../types/types';
import ProductCard from '../productCard/ProductCard';
import './allproducts.css'

function AllProducts(): JSX.Element {
    const [products, setProducts] = useState<DataItem[]>([]);
    const [error, setError] = useState<string | null>(null);

    const [filteredProducts, setFilteredProducts] = useState<DataItem[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const fetchProducts = async (): Promise<void> => {
        try {
            const response = await fetch('http://localhost:3000/');
            if(!response.ok) {
                throw new Error('något gick fel vid hämtning av produkter...');
            }
            const data: DataItem[] = await response.json();
            setProducts(data);
            setFilteredProducts(data); // Spara hämtade produkter i state
            setFilteredProducts(data); // Initialt visas alla produkter
        } catch (error) {
            console.log('Could not get products', error);
            setError('Kunde inte hämta produkter');
        }
    };

    // Hämta kategorier från produkterna
    const getCategories = (data: DataItem[]): void => {
      const uniqueCategories: string[] = Array.from(new Set(data.map(product => product.category.name)));
      // Lägg till "All" kategori längst upp i listan
      setCategories([{ id: 0, name: 'All', image: '', creationAt: '', updatedAt: '' }, ...uniqueCategories.map((name, index) => ({ id: index + 1, name, image: '', creationAt: '', updatedAt: '' }))]);
  };

    useEffect((): void => {
        fetchProducts();
    }, []);

    useEffect((): void => {
        if(products.length > 0) {
            getCategories(products);
        }
    }, [products]);

    // Filtrera produkter baserat på vald kategori
    const handleCategoryChange = (category: string): void => {
      setSelectedCategory(category);
        if(category === 'All') {
            setFilteredProducts(products)
        } else {
            const filtered: DataItem[] = products.filter(product => product.category.name === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <section className='show__products'>
      {/* Visa felmeddelande om något gick fel */}
      {error && <p>{error}</p>}
      
    {/* <div className='select__category'> */}
      {/* Dropdown-meny för att välja kategori */}
      {/* <select onChange={(e) => handleCategoryChange(e.target.value)}>
        <option value="All">All</option>
        {categories.map(category => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select> 
    </div>*/}
    <nav className='category__container'>

      {categories.map(category => (
        <button key={category.name}
        className={`category-btn ${selectedCategory === category.name ? 'active' : ''}`}
        onClick={() => handleCategoryChange(category.name)}>
          {category.name}
        </button>
      ))}

    </nav>

      {/* Visa filtrerade produkter */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
    );
}

export default AllProducts;
