"use client";
import { Product } from "@/core/type/product.type";
import React from "react";
import Slider from "react-slick";
import { ProductCard } from "./ProductCard";
import { ArrowIcon } from "../shared/icons/arrowIcon";
import { PrevArrowIcon } from "../shared/icons/prevArrowIcon";

interface ProductCarouselProps {
    products: Product[],
    title?: string
}

const ProductCarousel:React.FC<ProductCarouselProps> = ( { products, title = '' } ) => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 1,
      nextArrow: <ArrowIcon color="var(--black)"/>,
      prevArrow: <PrevArrowIcon color="var(--black)"/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div>
            <h3>{title}</h3>
            <Slider  {...settings} className="w-[1440px]">
                {products.map((product, index) => (
                    <div key={index}>
                        <ProductCard product={product}/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProductCarousel;