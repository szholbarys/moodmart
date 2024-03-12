import React from "react";
import { Product } from "@/core/type/product.type";
import ProductCarousel from "@/components/widgets/Carousel";
import productsData from "../../../products.json";
import { PromoCard } from "@/components/widgets/PromoCard";

const products: Product[] = productsData as Product[];

// const products: Product[] = [
//     {
//         id: '1',
//         name: 'UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon',
//         description: '',
//         category: 'уход за лицом',
//         rating: 4.5,
//         ratingCount: 122,
//         oldPrice: 3441,
//         price: 3441,
//         isNew: true,
//         discount: 66,
//         isHit: true,
//         image: "/images/product1.svg",
//     },
//     {
//         id: '2',
//         name: 'UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon',
//         description: '',
//         category: 'уход за лицом',
//         rating: 3.9,
//         ratingCount: 122,
//         oldPrice: 3441,
//         price: 3441,
//         isNew: true,
//         discount: 66,
//         isHit: true,
//         image: "/images/product2.svg",
//     },
//     {
//         id: '3',
//         name: 'UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon',
//         description: '',
//         category: 'уход за лицом',
//         rating: 4.7,
//         ratingCount: 122,
//         oldPrice: 3441,
//         price: 3441,
//         isNew: true,
//         discount: 66,
//         isHit: true,
//         image: "/images/product3.svg",
//     },
//     {
//         id: '4',
//         name: 'UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon',
//         description: '',
//         category: 'уход за лицом',
//         rating: 4.2,
//         ratingCount: 122,
//         oldPrice: 3441,
//         price: 3441,
//         isNew: true,
//         discount: 66,
//         isHit: true,
//         image: "/images/product4.svg",
//     }
// ]

export default function Test() {
    return (
        <PromoCard ctaTitle="Annayake −40%" ctaText="японский уход по суперценам" image="/images/promo1.svg" time={455520}/>
    )
}
