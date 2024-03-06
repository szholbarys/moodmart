"use client";
import { Product } from "@/core/type/product.type";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { ProductCard } from "./ProductCard";
import { ArrowIcon } from "../shared/icons/arrowIcon";
import { PrevArrowIcon } from "../shared/icons/prevArrowIcon";

interface ProductCarouselProps {
    products: Product[],
    title?: string,
    className?: string,
}

const ProductCarousel:React.FC<ProductCarouselProps> = ( { products, title, className } ) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slider = useRef<Slider>(null);
    const settings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 1,
            arrows: false,
            dots: false,
            infinite: false,
            speed: 500,
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
      ],
      afterChange: (current: number) => setCurrentSlide(current)
    };

    const prevButtonDisabled = currentSlide === 0;
    const nextButtonDisabled = currentSlide + 4 >= products.length;

    return (
        <div className={className}>
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-h2 font-bold">{title}</h2>
            <div>
              <button onClick={() => !prevButtonDisabled && slider?.current?.slickPrev()} disabled={prevButtonDisabled}><PrevArrowIcon color={prevButtonDisabled ? "var(--grey)" : "var(--black)"} /></button>
              <button onClick={() => !nextButtonDisabled && slider?.current?.slickNext()} disabled={nextButtonDisabled}><ArrowIcon color={nextButtonDisabled ? "var(--grey)" : "var(--black)"} /></button>
            </div>
          </div>
            <Slider ref={slider}  {...settings}>
                {products.map((product, index) => (
                    <div key={index}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProductCarousel;