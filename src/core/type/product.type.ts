export type Product = {
    id: string;
    name: string;
    cover: string;
    images: string[]
    description: string;
    category: string;
    volumes? : number[];
    shades?: string[];
    oldPrice?: number;
    price: number;
    rating: number;
    ratingCount: number;
    
    isNew: boolean;
    discount?: number;
    isHit: boolean;
} 