'use client'
import { FC, useRef, useState } from "react";
import Slider from "react-slick";
import { PrevArrowIcon } from "../shared/icons/prevArrowIcon";
import { ArrowIcon } from "../shared/icons/arrowIcon";

// const PhotoCarouselProps {

// }

const PhotoCarousel: FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slider = useRef<Slider>(null);
    const countOfPhoto = 6

    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 1,
        vertical: true,
        verticalSwiping: true,
        afterChange: (current: number) => setCurrentSlide(current)
    }

    const prevButtonDisabled = currentSlide === 0;
    const nextButtonDisabled = currentSlide + 4 >= countOfPhoto;

    return (
        <div>
            <div>
                <button onClick={() => !prevButtonDisabled && slider?.current?.slickPrev()} disabled={prevButtonDisabled}><PrevArrowIcon className="rotate-90" color={prevButtonDisabled ? "var(--grey)" : "var(--black)"} /></button>
                <Slider {...settings}>
                    
                </Slider>
                <button onClick={() => !nextButtonDisabled && slider?.current?.slickNext()} disabled={nextButtonDisabled}><ArrowIcon className="rotate-90" size={32} color={nextButtonDisabled ? "var(--grey)" : "var(--black)"} /></button>
            </div>
        </div>
    )
}

export default PhotoCarousel;