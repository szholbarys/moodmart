import React from "react";
import { ProductCard } from "@/components/widgets/ProductCard";
import { Product } from "@/core/type/product.type";

const products: Product[] = [
    {
        id: '1',
        name: 'UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon',
        description: '',
        category: 'уход за лицом',
        rating: 2,
        ratingCount: 122,
        oldPrice: 3441,
        price: 3441,
        isNew: true,
        discount: 66,
        isHit: true,
        image: "/images/UnleashieGlacier.svg",
    }
]

export default function Test() {
    return (
        <>
            {products.map((product, index) => (
                <div key={index}>
                    <ProductCard product={product}/>
                </div>
            ))}
        </>
    )
}
