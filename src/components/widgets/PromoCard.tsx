import React from "react";
import Timer from "../shared/Timer";

interface PromoCardProps {
    ctaTitle: string,
    ctaText: string,
    image: string,
    time: number,
}

export const PromoCard: React.FC<PromoCardProps> = ({ ctaTitle, ctaText, image, time }) => {
    return (
        <div className="w-[37.5rem] h-[32rem] relative">
            <img className="brightness-[60%]" src={image}/>
            <div className="text-white pt-10 ml-6 absolute top-0 left-0">
                <h3 className="text-h3 font-bold">{ctaTitle}</h3>
                <p className="text-18px font-regular">{ctaText}</p>
            </div>
            <Timer className="absolute bottom-0 right-0 mr-6 mb-6" seconds={time}/>
        </div>
    )
}