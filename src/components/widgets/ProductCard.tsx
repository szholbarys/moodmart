import { Product } from "@/core/type/product.type";
import Image from "next/image";
import React from "react";
import { HeartIcon } from "../shared/icons/heartIcon";
import { PlusIcon } from "../shared/icons/plusIcon";
import { StarRating } from "../shared/StarRating";

interface ProductProps {
    product: Product
}

export const ProductCard:React.FC<ProductProps> = ( { product } ) => {
    
    return (
        <div className="max-w-[302px] group ">
            <a href="#">
                <div className="relative max-w-[302px] mb-6">
                    <Image 
                        src={product.image}
                        width={302}
                        height={340}
                        alt={product.name}
                        priority
                    />
                    <div className="flex absolute top-0 left-0 font-sans font-meduim leading-5">
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
                    <HeartIcon className="absolute top-0 right-0 m-2" color="var(--grey)"/>
                    <div className="absolute bottom-0 right-0 mb-2 w-10 h-10 hidden group-hover:flex justify-center items-center bg-primary rounded-full">
                        <PlusIcon color="white"/>
                    </div>
                </div>
                <div >
                    <p className="text-18px font-meduim mb-4 group-hover:text-primary hover:transition duration-200 ease-in-out">{product.category}</p>
                    <h3 className="text-18px font-bold mb-3.5 group-hover:text-primary hover:transition duration-200 ease-in-out">{product.name}</h3>
                    <div className="flex items-center mb-6">
                        <StarRating rating={product.rating}/>
                        <div className="ml-3 leading-4 font-semi-bold group-hover:text-primary hover:transition duration-200 ease-in-out">{product.ratingCount}</div>
                    </div>
                    <div className="flex mb-2 ">
                        <p className="mr-3 text-grey line-through text-18px group-hover:text-primary hover:transition duration-200 ease-in-out">{product.oldPrice}₸</p>
                        <p className="text-black font-semi-bold group-hover:text-primary hover:transition duration-200 ease-in-out">{product.price}₸</p>
                    </div>
                    <p className="text-16px text-green">{product.discount}% экономия</p>
                </div>
            </a>
        </div>
    )
}