import React from "react";
import { Product } from "@/core/type/product.type";
import ProductCarousel from "@/components/widgets/Carousel";
import productsData from "../../../products.json";
import { PromoCard } from "@/components/widgets/PromoCard";
import BrandSection from "@/components/widgets/BrandSection";

// const products: Product[] = productsData as Product[];

const products: Product[] = [
    {
        id: '1',
        name: 'FUNKY MONKEY longlasting lip pencil',
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
        name: 'FUNKY MONKEY longlasting lip pencil',
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
        name: 'FUNKY MONKEY longlasting lip pencil',
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
    }
]

export default function Test() {
    return (
        <BrandSection brandName="Glossier" poster="/images/glossier.svg" direction="horizontal" products={products}/>
    )
}
