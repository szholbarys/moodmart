'use client'
import Breadcrumb from "@/components/shared/Breadcrumb";
import PhotoCarousel from "@/components/widgets/PhotoCarousel";
import { Product } from "@/core/type/product.type";
import useProductStore from "@/store/product";
import Button from "@/components/shared/Button";
import { FC } from "react";
import { StarRating } from "@/components/shared/StarRating";
import VolumePicker from "@/components/shared/VolumePicker";
import { HeartIcon } from "@/components/shared/icons/heartIcon";

export default function ProductPage({ params }: { params: { productId: string } }) {
    const { findProductById } = useProductStore();
    const product = findProductById(params.productId as string);
    const breadcrumbs: Breadcrumb[] = [
        {
            label: product?.category,
            href: "/"
        }
    ]

    if (!product) {
        return (
          <div className="mt-20 mx-[80.5px] mb-[60px]" >
            <Breadcrumb />
            <div className="skeleton-loading h-5/6 animate-pulse mt-4 flex">
              <div className="h-96 w-1/2 bg-light_grey mr-12"></div>
              <div className="mt-6 w-1/2">
                <div className="h-4 bg-light_grey w-1/2"></div>
                <div className="h-8 bg-light_grey mt-2"></div>
                <div className="flex items-center mt-2">
                  <div className="h-4 bg-light_grey w-12"></div>
                  <div className="ml-2 h-4 bg-light_grey w-20"></div>
                </div>
                <div className="mt-2 flex">
                  <div className="h-4 bg-light_grey w-16"></div>
                  <div className="ml-2 h-4 bg-light_grey w-20"></div>
                </div>
                <div className="mt-2 h-4 bg-light_grey w-24"></div>
              </div>
            </div>
          </div>
        );
    }

    return (
        <div className="mt-20 mx-[80.5px] mb-[60px]" suppressHydrationWarning>
            <Breadcrumb customBreadcrumbs={breadcrumbs}/>
            <div className="mt-10 flex">
                <PhotoCarousel 
                    images={product.images} 
                    name={product.name}
                    isHit={product.isHit}
                    isNew={product.isNew}
                    discount={product.discount}
                />
                <div className="ml-[51px]">
                    <p className="text-18px">{product.category}</p>
                    <h2 className="mt-5 font-bold text-24px">{product.name}</h2>
                    <div className="flex items-center mt-5">
                        <StarRating rating={product.rating}/>
                        <p className="ml-3">{product.rating}</p>
                    </div>
                    <VolumePicker product={product}/>
                    <div className="flex mt-10">
                        {product.oldPrice && product.oldPrice > 0 &&
                            <p className="text-grey line-through text-18px mr-4">{product.oldPrice} ₸</p>
                        } 
                        {product.discount && product.discount > 0 &&
                            <p className="text-18px">{product.discount}% экономия</p>
                        }  
                    </div>
                    <h3 className="mt-3 font-bold text-[40px]">{product.price}₸</h3>
                    <div className="mt-10 w-fit flex items-center border-[1px] border-black z-0 hover:border-primary duration-300">
                        <Button type="primary" noArrow={false} className="px-8 py-3 z-10">Добавить в корзину</Button>
                        <HeartIcon color="var(--black)" className="mx-2 cursor-pointer"/>
                    </div>
                    <Button className="pl-0 mt-5" type="transparent">Наличие в магазине</Button>
                </div>
            </div>
        </div>
    )
}
