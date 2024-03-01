import { Product } from "@/core/type/product.type";
import Image from "next/image";
import React from "react";
import { HeartIcon } from "../shared/icons/heartIcon";
import { PlusIcon } from "../shared/icons/plusIcon";

interface ProductProps {
    product: Product
}

export const ProductCard:React.FC<ProductProps> = ( { product } ) => {
    
    return (
        <div className="max-w-[302px]">
            <div className="relative max-w-[302px] mb-6">
                <Image 
                    src={product.image}
                    width={302}
                    height={340}
                    alt={product.name}
                />
                <div className="flex absolute top-0 left-0 flex">
                    {product.isNew && 
                        <p className="bg-neon_green py-0.5 px-2">NEW</p>
                    }
                    {product.discount && 
                        <p className="bg-orange text-white py-0.5 px-2">{product.discount}%</p>
                    }
                    {product.isHit && 
                        <p className="bg-gold text-black py-0.5 px-2">HIT</p>
                    }
                </div>
                <HeartIcon className="absolute top-0 right-0 m-2" color="black"/>
                <div className="absolute bottom-0 right-0 mb-2 w-10 h-10 bg-primary rounded-full flex justify-center items-center">
                    <PlusIcon color="white"/>
                </div>
            </div>
            <div>
                <p className="text-18px font-meduim mb-4">{product.category}</p>
                <h3 className="text-18px font-bold mb-3.5">{product.name}</h3>
                <div>
                </div>
                <div className="flex">
                    <p className="mr-3 text-grey line-through text-18px ">{product.oldPrice}₸</p>
                    <p className="text-black font-semi-bold">{product.price}₸</p>
                </div>
                <p className="text-16px text-green">{product.discount}% экономия</p>
            </div>
        </div>
    )
}