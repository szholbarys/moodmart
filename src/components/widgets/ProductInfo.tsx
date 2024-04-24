import { Review } from "@/core/type/product.type";
import { FC, useState } from "react";

interface ProductInfoProps {
    description?: string,
    usage?: string,
    ingredients?: string[],
    brand?: string,
    reviews?: Review[],
    extraInfo?: string,
}

const ProductInfo: FC<ProductInfoProps> = ({
    description, usage, ingredients, brand, reviews, extraInfo
}) => {
    const [selectedTab, setSelectedTab] = useState<string | null>(null);

    const tabs = [
        { key: 'description', label: 'Описание', content: description },
        { key: 'usage', label: 'Применение', content: usage },
        { key: 'ingredients', label: 'Состав', content: ingredients },
        { key: 'brand', label: 'О бренде', content: brand },
        { key: 'reviews', label: `Отзывы ${reviews?.length || 0}`, content: null },
        { key: 'extraInfo', label: 'Дополнительная информация', content: extraInfo }
    ];

    const handleTabClick = (key: string) => {
        setSelectedTab(key);
    };

    return (
        <div className="flex justify-center mt-28">
            <div className="flex">
                {tabs.map(tab => (
                    <div
                        key={tab.key}
                        className={`cursor-pointer px-4 py-2 border-transparent`}
                        onClick={() => handleTabClick(tab.key)}
                    >
                        <span className={`border-transparent border-b-[2px] pb-2 hover:text-black duration-300 ${selectedTab === tab.key ? 'border-b-black text-black font-bold' : ' text-grey'}`}>
                            {tab.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductInfo;
