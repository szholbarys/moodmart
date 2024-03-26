'use client'
import { FilterIcon } from '@/components/shared/icons/filterIcon';
import { useRouter, useSearchParams } from 'next/navigation';
import useProductStore from '@/store/product';
import { useState, useEffect } from 'react';
import { Product } from '@/core/type/product.type';

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
        <div className='mt-40 mx-20 h-screen'>
            <div className='flex flex items-center'>
                <p>результаты по запросу:</p>
                <h2 className='ml-4 text-h2 font-bold'>{query}</h2>
            </div>
            {filteredProducts.length === 0 ? (
                <div className='text-20px mt-10'>
                    Ничего не найдено. Попробуйте изменить запрос и мы поищем ещё раз.
                </div>
            ) : (
            <div>
                <div className='flex items-center'>
                    <FilterIcon color='var(--black)'/>
                    <button className='ml-1 text-18px font-bold primary-hover'>фильтр</button>
                    <p className='mx-6'>|</p>
                    <p>{filteredProducts.length} продуктов</p>
                </div>
                
            </div>
            )}
        </div>
    )
}

export default SearchResultsPage;
