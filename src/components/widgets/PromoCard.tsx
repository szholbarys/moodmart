import React from "react";
import Timer from "../shared/Timer";
import { Promo } from "@/core/type/promo.type";
import Image from "next/image";

interface PromoCardProps {
    promo: Promo;
}

export const PromoCard: React.FC<PromoCardProps> = ({ promo }) => {
    return (
        <div className="w-[37.5rem] h-[32rem] relative">
            <Image width={598} height={518} className="brightness-[60%]" src={promo.image} alt={promo.ctaTitle}/>
            <div className="text-white pt-10 ml-6 absolute top-0 left-0">
                <h3 className="text-h3 font-bold">{promo.ctaTitle}</h3>
                <p className="text-18px font-regular">{promo.ctaText}</p>
            </div>
            <Timer className="absolute bottom-0 right-0 mr-6 mb-6" seconds={promo.time}/>
        </div>
    )
}