'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "@/core/interfaces/slide.interface";
import { FC } from "react";
import styles from "@/app/ui/home.module.css"
import Button from "../shared/Button";

interface SlideProps {
    slides: Slide[];
}

const Carousel: FC<SlideProps> = ( {slides} ) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
        arrows: false,
        appendDots: (dots: JSX.Element) => (
            <div
                style={{
                    margin: 0,
                    marginBottom: "2.5rem"
                }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i:number) => (
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              }}
            >
            </div>
          )
    };

    return (
        <Slider {...settings} className={`relative h-screen w-full`}>
            {slides.map((slide, index) => (
                <div key={index}>
                    <img
                        className={`${styles.custom} object-cover w-full h-screen`}
                        src={slide.image} 
                        alt={slide.title} 
                        />
                    <div className="top-64 absolute grid grid-cols-2 z-10 w-full">
                        <div className="col-span-1">

                        </div>

                        <div className="ml-24 float-end col-span-1">
                            <h1 className="font-semi-bold mb-2">{slide.title}</h1>
                            <p className="text-20px font-meduim  mb-4">{slide.description}</p>
                            <Button type="primary">Перейти</Button>
                        </div>
                    </div>
                </div> 
            ))}
        </Slider>
    )
}

export default Carousel;
