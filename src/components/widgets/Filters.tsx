'use client'
import { FilterIcon } from "../shared/icons/filterIcon";
import DropdownMenu from "../shared/Dropdown";
// import { Product } from "@/core/type/product.type";
import { useSearchParams } from "next/navigation";
import FilterDrawer from "../shared/FilterDrawer";
import { Suspense, useState } from "react";

const sortingOptions = [
    { label: 'по новизне', value: 'by_date' },
    { label: 'по возрастанию', value: 'by_asc' },
    { label: 'по убыванию', value: 'by_desc' },
    { label: 'по рейтингу', value: 'by_rating' },
    { label: 'по популярности', value: 'by_popularity' }
];

interface FiltersProps {
    quantity: number,
    className?: string,
}

const Filters: React.FC<FiltersProps> = ({ quantity, className = '' }) => {
    const filterQuery = useSearchParams().get("f");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(prevState => !prevState);
    };

    return (
        <Suspense>
            <div className={`flex items-start font-sans justify-between ${className}`}>
                <div className='flex items-center'>
                    <FilterIcon color='var(--black)'/>
                    <button onClick={toggleDrawer} className='ml-1 font-bold primary-hover'>фильтр</button>
                    <FilterDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
                    <p className='mx-6'>|</p>
                    <p>{quantity} продуктов</p>
                </div>
                <DropdownMenu options={sortingOptions}/>
            </div>
        </Suspense>
    )
}

export default Filters;