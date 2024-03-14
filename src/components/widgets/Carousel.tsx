"use client";
import React, { ReactNode, useRef, useState } from "react";
import Slider from "react-slick";
import { ArrowIcon } from "../shared/icons/arrowIcon";
import { PrevArrowIcon } from "../shared/icons/prevArrowIcon";

interface CarouselProps {
    children: ReactNode,
    title?: string,
    slidesToShow: number,
    className?: string,
}

const Carousel:React.FC<CarouselProps> = ({ title, slidesToShow, className, children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slider = useRef<Slider>(null);
    const settings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToShow,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: slidesToShow - 1,
            slidesToScroll: slidesToShow - 1,
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
      ],
      afterChange: (current: number) => setCurrentSlide(current)
    };

    const prevButtonDisabled = currentSlide === 0;
    const nextButtonDisabled = currentSlide + slidesToShow >= React.Children.count(children);

    return (
        <div className={className}>
          <div className="flex items-baseline justify-between mb-10">
            <h2 className="text-h2 font-bold">{title}</h2>
            <div>
              <button onClick={() => !prevButtonDisabled && slider?.current?.slickPrev()} disabled={prevButtonDisabled}><PrevArrowIcon color={prevButtonDisabled ? "var(--grey)" : "var(--black)"} /></button>
              <button className="ml-3" onClick={() => !nextButtonDisabled && slider?.current?.slickNext()} disabled={nextButtonDisabled}><ArrowIcon size={32} color={nextButtonDisabled ? "var(--grey)" : "var(--black)"} /></button>
            </div>
          </div>
            <Slider ref={slider}  {...settings} className="w-[103%]">
                {React.Children.map(children, (child, index) => (
                    <div key={index}>
                        {child}
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel;