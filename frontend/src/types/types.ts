export interface DataItem {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: Category;
    cartID?: string;
}

export interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

export interface ProductCardProps {
    product: DataItem;
}

export interface CartProps {
    isOpen: boolean;
    onClose: () => void; // Stänga cart
}

export interface CartProductCardProps {
    product: DataItem;
    onRemove: (id: string) => void; // Ta bort produkt
}

export interface CartContextType {
    cartItems: DataItem[];
    addToCart: (product: DataItem) => void;
    removeFromCart: (cartID : string) => void;
    clearCart: () => void;
}