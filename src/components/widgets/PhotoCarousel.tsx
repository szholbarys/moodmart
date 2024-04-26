'use client'
import { FC, useRef, useState } from "react";
import Slider from "react-slick";
import { PrevArrowIcon } from "../shared/icons/prevArrowIcon";
import { ArrowIcon } from "../shared/icons/arrowIcon";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PhotoCarouselProps {
    images: string[],
    name: string,
    isNew?: boolean,
    discount?: number,
    isHit?: boolean,
    className?: string,
}

const PhotoCarousel: FC<PhotoCarouselProps> = ({ 
    images, name, isNew, discount, isHit, className 
    }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [chosenSlide, setChosenSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);
    const countOfPhoto = images.length;

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,  // Changed from 1 to 0 to ensure it starts from the first item
        vertical: true,
        verticalSwiping: true,  // Set this to false to test horizontal swiping
        afterChange: setCurrentSlide
    };

    const prevButtonDisabled = currentSlide === 0;
    const nextButtonDisabled = currentSlide + 4 >= countOfPhoto;

    const handlePrev = () => sliderRef.current?.slickPrev();
    const handleNext = () => sliderRef.current?.slickNext();
    const chooseSlide = (index: number) => {
        setChosenSlide(index);
    };


    return (
        <div className={`flex ${className}`}>
            <div className="flex flex-col items-center mr-[53px] h-[110%]">
                <button onClick={handlePrev} disabled={currentSlide === 0}>
                    <PrevArrowIcon color={prevButtonDisabled ? "var(--grey)" : "var(--black)"} className="rotate-90 mb-6" />
                </button>
                <Slider ref={sliderRef} {...settings} className="w-28">
                    {images.map((img, index) => (
                        <div key={index} onClick={() => chooseSlide(index)}>
                            <Image 
                                src={img}
                                alt={name} 
                                width={104}   
                                height={112} 
                                className={`${index === chosenSlide ? "border-2 border-primary" : ""} cursor-pointer box-border`}
                            />
                        </div>
                    ))}
                </Slider>
                <button onClick={handleNext} disabled={currentSlide + 4 >= images.length}>
                    <ArrowIcon color={nextButtonDisabled ? "var(--grey)" : "var(--black)"}  className="rotate-90 mt-4" />
                </button>
            </div>
            <div className="relative">
                <Image src={images[chosenSlide]} alt={name} width={517} height={588} />
                <div className="flex absolute top-0 left-0 font-sans font-meduim leading-5">
                    {isNew && 
                        <p className="bg-neon_green py-0.5 px-2">NEW</p>
                    }
                    {discount && discount > 0 &&
                        <p className="bg-orange text-white py-0.5 px-2">{discount}%</p>
                    }
                    {isHit && 
                        <p className="bg-gold text-black py-0.5 px-2">HIT</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default PhotoCarousel;