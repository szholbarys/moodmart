"use client";
import { Product } from "@/core/type/product.type";
import React from "react";
import Slider from "react-slick";
import { ProductCard } from "./ProductCard";

interface ProductCarouselProps {
    products: Product[],
}

const ProductCarousel:React.FC<ProductCarouselProps> = ( { products } ) => {
    const settings = {
        fade: true,
        dots: false,
        speed: 900,
        slidesToShow: 2,
        slidesToScroll: 4,
        arrows: false,
    };
    return (
        <Slider  {...settings}>
            {products.map((product, index) => (
                <div key={index}>
                    <ProductCard product={product}/>
                </div>
            ))}
        </Slider>
    )
}

export default ProductCarousel;