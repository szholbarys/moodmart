import React from "react";
import { ProductCard } from "@/components/widgets/ProductCard";
import { Product } from "@/core/type/product.type";
import ProductCarousel from "@/components/widgets/ProductCarousel";

const products: Product[] = [
    {
        id: '1',
        name: 'UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon',
        description: '',
        category: 'уход за лицом',
        rating: 4.5,
        ratingCount: 122,
        oldPrice: 3441,
        price: 3441,
        isNew: true,
        discount: 66,
        isHit: true,
        image: "/images/product1.svg",
    },
    {
        id: '2',
        name: 'UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon',
        description: '',
        category: 'уход за лицом',
        rating: 3.9,
        ratingCount: 122,
        oldPrice: 3441,
        price: 3441,
        isNew: true,
        discount: 66,
        isHit: true,
        image: "/images/product2.svg",
    },
    {
        id: '3',
        name: 'UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon',
        description: '',
        category: 'уход за лицом',
        rating: 4.7,
        ratingCount: 122,
        oldPrice: 3441,
        price: 3441,
        isNew: true,
        discount: 66,
        isHit: true,
        image: "/images/product3.svg",
    },
    {
        id: '4',
        name: 'UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon',
        description: '',
        category: 'уход за лицом',
        rating: 4.2,
        ratingCount: 122,
        oldPrice: 3441,
        price: 3441,
        isNew: true,
        discount: 66,
        isHit: true,
        image: "/images/product4.svg",
    }
]

export default function Test() {
    return (
        <ProductCarousel products={products}/>
    )
}
