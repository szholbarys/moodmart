import { Product } from "@/core/type/product.type"
import React, { Fragment } from "react"
import Button from "../shared/Button";
import { ProductCard } from "./ProductCard";

interface BrandProps {
    brandName: string,
    poster: string,
    direction: 'horizontal' | 'vertical',
    products: Product[],

}

const BrandSection: React.FC<BrandProps> = ({brandName, poster, direction, products}) => {
    return (
        <div className="w-[84%]">
            <div className="flex mb-10">
                <h2 className="text-h2 font-bold">{brandName}</h2>
                <Button type="transparent">Перейти к бренду</Button>
            </div>
            <div className="flex items-start">
                {direction === 'horizontal' && (
                    <img src={poster} alt={brandName} className="mr-20" />
                )}
                <div className={`flex justify-between w-full ${direction === 'vertical' ? 'flex-col' : 'flex-row'}`}>
                    {products.map((product, index) => (
                        <div key={index}>
                            <ProductCard className="w-[230px]" product={product} />
                        </div>
                    ))}
                </div>
                {direction === 'vertical' && (
                    <img src={poster} alt={brandName} />
                )}
            </div>
        </div>
    )
}

export default BrandSection;