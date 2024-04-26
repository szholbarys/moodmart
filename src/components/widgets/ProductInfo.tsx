"use client"
import { Review } from "@/core/type/product.type";
import { FC, useEffect, useState } from "react";
import SupportBlock from "../shared/SupportBlock";
import { fetchBrandByName } from "@/actions/api/brand";
import { Brand } from "@/core/type/brand.type";
import Button from "../shared/Button";
import { useRouter } from "next/navigation";
import { StarRating } from "../shared/StarRating";

interface ProductInfoProps {
    productName: string,
    id: string,
    description?: string,
    usage?: string,
    ingredients?: string[],
    brandName: string,
    reviews?: Review[],
    extraInfo?: string,
}

const ProductInfo: FC<ProductInfoProps> = ({
    productName, description, usage, ingredients, brandName, reviews, extraInfo, id
}) => {
    const [selectedTab, setSelectedTab] = useState<string | null>("description");
    const [brand, setBrand] = useState<Brand | null>(null);

    useEffect(() => {
        const fetchBrand = async () => {
            const brandData = await fetchBrandByName(brandName);
            setBrand(brandData);
        };

        fetchBrand();
    }, [brandName]);

    const tabs = [
        { key: 'description', label: 'Описание', content: <Description productName={productName} id={id} description={description} /> },
        { key: 'usage', label: 'Применение', content: <Usage usage={usage} /> },
        { key: 'ingredients', label: 'Состав', content: ingredients },
        { key: 'brand', label: 'О бренде', content: brand && <BrandInfo brand={brand} /> },
        { key: 'reviews', label: `Отзывы ${reviews?.length || 0}`, content: reviews && <Reviews reviews={reviews}/> },
        { key: 'extraInfo', label: 'Дополнительная информация', content: extraInfo }
    ];

    const handleTabClick = (key: string) => {
        setSelectedTab(key);
    };

    return (
        <div className="flex flex-col mt-28 mx-72">
            <div className="flex gap-x-8">
                {tabs.map(tab => (
                    <div
                        key={tab.key}
                        className={`cursor-pointer`}
                        onClick={() => handleTabClick(tab.key)}
                    >
                        <span className={`border-transparent pb-2 hover:text-black ${selectedTab === tab.key ? 'border-b-[2px] border-b-black text-black font-bold' : ' text-grey'}`}>
                            {tab.label}
                        </span>
                    </div>
                ))}
            </div>
            <div className="mt-10" style={{ overflow: "hidden" }}>
                <div className="flex" style={{ width: `${tabs.length * 100}%`, transform: `translateX(-${tabs.findIndex(tab => tab.key === selectedTab) * (100 / tabs.length)}%)`, transition: "transform 0.3s ease" }}>
                    {tabs.map(tab => (
                        <div key={tab.key} style={{ width: `${100 / tabs.length}%` }}>
                            {tab.key === selectedTab && tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface DescriptionProps {
    productName: string;
    id: string;
    description?: string;
}

const Description: FC<DescriptionProps> = ({ productName, id, description }) => {
    return (
        <div>
            <h2 className='text-22px font-bold'>{productName}</h2>
            <p className="mt-4">артикул: {id}</p>
            <p className="mt-4">{description}</p>
        </div>
    )
}

interface UsageProps {
    usage?: string;
}

const Usage: FC<UsageProps> = ({ usage }) => {
    return (
        <div>
            {usage && <p className="text-18px">{usage}</p>}
            <SupportBlock 
                className="mt-10 w-1/3" 
                color='black' 
                headingClassName="text-20px first-letter:capitalize"
            />
        </div>
    );
}

interface BrandInfoProps {
    brand: Brand;
}

const BrandInfo: FC<BrandInfoProps> = ({ brand }) => {

    const router = useRouter();

    const handleButton = () => {
        router.push(`/brand/${brand.name.toLowerCase()}`)
    }

    return (
        <div>
            <h2>{brand.name}</h2>
            <p className="text-grey mt-3">{brand.country_of_origin}</p>
            <Button 
                className="pl-0 mt-3 text-[14px]" 
                type={"transparent"}
                onClick={handleButton}
            >
                Смотреть каталог бренда
            </Button>
            <SupportBlock 
                className="mt-10 w-1/3" 
                color='black' 
                headingClassName="text-20px first-letter:capitalize"
            />
        </div>
    );
}

interface ReviewProps {
    reviews: Review[]
}

const Reviews: FC<ReviewProps> = ({ reviews }) => {
    return (
        <div className="flex flex-col gap-y-10">
            {reviews.map((review, index) => (
                <div key={index} className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-y-2">
                        <StarRating rating={review.rating}/>
                        <h5 className="font-bold text-20px">{review.author}</h5>
                        <p className="text-20px text-grey">{review.date}</p>
                    </div>
                    <div className="text-20px flex flex-col gap-y-1 w-[65%]">
                        <div><strong>Достоинства: </strong>{review.pros}</div>
                        <div><strong>Недостатки: </strong>{review.cons}</div>
                        <div><strong>Комментарий: </strong>{review.comment}</div>    
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductInfo;
