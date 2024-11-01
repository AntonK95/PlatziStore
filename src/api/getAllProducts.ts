import { Product } from "../types/types";
import axios from 'axios'; 

const API = 'https://api.escuelajs.co/api/v1/products';

// Definera att anropet skall returnera en arrat av Product. 
// Gör så att typeScript kontrollerar så att datan matchar Product-typen
const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(API);
        const data = await response.data.map(product => {
            if(typeof product.images === 'string') {
                product.images = JSON.parse(product.images);
            }
            console.log('Log of product', product);
            return product;
        })
        console.log(data);
        return data;
    } catch( error ) {
        console.error('Error fetching products:', error);
        console.log('Cannot get products');
        return []; // Returnera en tom array om anropet misslyckas
    }
}

export default getAllProducts;