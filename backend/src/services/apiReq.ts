
import axios from "axios";
import { DataItem, Category } from "../interface/interface";


const API_URL = 'https://antonk95.github.io/dummy-api/data.json';

// Hämta all data
export const fetchData = async (): Promise<DataItem[]> => {
    const response = await axios.get<DataItem[]>(API_URL);
    return response.data;
}


// Hämta data baserat på ID
// Mitt api stödjer inte dynamiska id-baserade anrop. 
// För att kringå det så returnerar vi hela listan och sedan filtrerar/letar efter det id vi sökt på
export const fetchDataById = async (id: number): Promise<DataItem> => {
    const response = await axios.get<DataItem[]>(API_URL); // Hämta hela listan
    const item = response.data.find(data => data.id === id); // Filtrera baserat på ID

    if (!item) {
        throw new Error(`Item with ID ${id} not found`);
    }

    return item;
};

export const deleteDataById = async (id: number): Promise<DataItem> => {
    const response = await axios.get<DataItem[]>(API_URL);
    const data: DataItem[] = response.data;

    const itemIndex = data.findIndex(data => data.id === id);

    if (itemIndex === -1) {
        throw new Error(`Item with ID ${id} not found.. Could not delete`)
    } else {
        const [deletedItems] = data.splice(itemIndex, 1); // Ta bort item med id från array
        console.log(`Deleted item with ID ${id}`, deletedItems);
        return deletedItems;
    }

}

export const fetchDataByCategory = async (category: string): Promise<DataItem[]> => {
    const response = await axios.get<DataItem[]>(API_URL);
    return response.data.filter(item => item.category.name.toLowerCase() === category.toLowerCase())
}