
// Platzi API

// interface Product {
//     id: number,
//     title: string;
//     price: number;
//     description: string;
//     images: string[];
//     createdAt: string;
//     updatedAt: string;
//     category: Category;
// }

// interface Category {
//     id: number;
//     name: string;
//     image: string;
//     createdAt: string;
//     updatedAt: string;
// }

// export { Product, Category, };

// Fake store APi

// src/types/types.ts
// export interface Rating {
//     rate: number; // Betyg för produkten
//     count: number; // Antal betyg
// }

// export interface Product {
//     id: number; // Unikt ID för produkten
//     title: string; // Titel på produkten
//     price: number; // Priset på produkten
//     description: string; // Beskrivning av produkten
//     category: string; // Kategori av produkten
//     image: string; // URL till produktens bild
//     rating: Rating; // Betyg och antal betyg
// }


// export { Product, Rating };

// src/types/types.ts
interface Rating {
    rate: number; // Betyg för produkten
    count: number; // Antal betyg
}

interface Image {
    url: string; // URL till bilden
}

interface Category {
    id: number; // Kategorins ID
    name: string; // Kategorins namn
    image: string; // URL till kategori bild
}

interface Product {
    id: number; // Unikt ID för produkten
    title: string; // Titel på produkten
    price: number; // Priset på produkten
    description: string; // Beskrivning av produkten
    images: string[]; // Array av bild-URL:er
    category: Category; // Kategori av produkten
    rating?: Rating; // Betyg och antal betyg (kan vara undefined)
}

interface ProductCard {
    product: Product;
}

export { Product, Rating, Image, Category, ProductCard };