'use client'
import Breadcrumb from "@/components/shared/Breadcrumb";
import PhotoCarousel from "@/components/widgets/PhotoCarousel";
import { Product } from "@/core/type/product.type";
import useProductStore from "@/store/product";
// import { useSearchParams } from "next/navigation";
import { FC } from "react";

const product: Product = {
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
        cover: "/images/product1.svg",
        images: ["/images/product1.svg", "/images/product1.svg", "/images/product1.svg", "/images/product1.svg", "/images/product1.svg"]
}


export default function ProductPage({ params }: { params: { productId: string } }) {
    const { findProductById } = useProductStore();
    
    const product = findProductById(params.productId as string);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="mt-20 mx-[80.5px] mb-[60px]">
            <Breadcrumb />
            <div className="mt-10">
                <PhotoCarousel />
            </div>
            <h1>{product.name}</h1>
        </div>
    )
}
