export type Product = {
    id: string;
    name: string;
    description: string;
    category: string;
    rating: number;
    ratingCount: number;
    oldPrice?: number;
    price: number;
    isNew: boolean;
    discount?: number;
    isHit: boolean;
    cover: string;
    images?: string[]
}