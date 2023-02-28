export type Product = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
};

export type BasketProduct = {
    id: number;
    title: string;
    price: string;
    image: string;
    quantity: number;
    rating: number;
    description: string;
    hasPrime: boolean;
};
