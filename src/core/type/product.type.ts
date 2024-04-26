export type Product = {
    id: string;
    name: string;
    brand: string;
    cover: string;
    images?: string[]
    category?: string;
    volumes? : number[];
    shades?: Shade[];
    oldPrice?: number;
    price: number;
    rating: number;
    ratingCount: number;
    isNew: boolean;
    discount?: number;
    isHit: boolean;
    description?: string;
    usage?: string;
    ingredients?: string[];
    reviews?: Review[];
    extraInfo?: string;
} 

export type Review = {
    rating: number;
    author: string;
    date: string;
    pros: string;
    cons: string;
    comment: string;
}

export type Shade = {
    name: string;
    hexColor: string;
}