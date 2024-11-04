// Typ för huvudobjektet
export interface DataItem {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: Category; // Inbäddat objekt för kategori
}

// Typ för kategorin i objektet

export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}
