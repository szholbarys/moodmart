'use client'
import { FilterIcon } from '@/components/shared/icons/filterIcon';
import { useRouter, useSearchParams } from 'next/navigation';
import useProductStore from '@/store/product';
import { useState, useEffect, Fragment } from 'react';
import { Product } from '@/core/type/product.type';
import DropdownMenu from '@/components/shared/Dropdown';
import { ProductCard } from '@/components/widgets/ProductCard';

const sortingOptions = [
    { label: 'по новизне', value: 'by_date' },
    { label: 'по возрастанию', value: 'by_asc' },
    { label: 'по убыванию', value: 'by_desc' },
    { label: 'по рейтингу', value: 'by_rating' },
    { label: 'по популярности', value: 'by_popularity' }
];

const SearchResultsPage: React.FC = () => {
    const router = useRouter();
    const query = useSearchParams().get("q"); 
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const { products } = useProductStore();
    
    useEffect(() => {
        if (query) {
          // Filter products based on the search query
          const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(query.toString().toLowerCase()) ||
            product.category.toLowerCase().includes(query.toString().toLowerCase())
          // You can add more conditions for brand or any other fields
        );
          setFilteredProducts(filtered);
        }
      }, [query, products]);

    return (
        <div className={`mt-40 mx-20 ${filteredProducts.length === 0 ? 'h-screen' : 'h-full'}`}>
            <div className='flex flex items-center'>
                <p>результаты по запросу:</p>
                <h2 className='ml-4 text-h2 font-bold'>{query}</h2>
            </div>
            {filteredProducts.length === 0 ? (
                <div className='text-20px mt-10'>
                    Ничего не найдено. Попробуйте изменить запрос и мы поищем ещё раз.
                </div>
            ) : (
            <Fragment>
                <div className='flex items-start font-sans justify-between'>
                    <div className='flex items-center'>
                        <FilterIcon color='var(--black)'/>
                        <button className='ml-1 font-bold primary-hover'>фильтр</button>
                        <p className='mx-6'>|</p>
                        <p>{filteredProducts.length} продуктов</p>
                    </div>
                    <DropdownMenu options={sortingOptions}/>
                </div>
                <div className='grid 2xl:grid-cols-5 gap-x-8 gap-y-8 my-10 xl:grid-cols-4'>
                    {products.map((product, index) => (
                        <ProductCard product={product} type='horizontal'/>
                    ))}
                </div>
            </Fragment>    
            )}
        </div>
    )
}

export default SearchResultsPage;
