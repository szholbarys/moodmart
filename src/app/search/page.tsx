'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import useProductStore from '@/store/product';
import { useState, useEffect, Fragment, Suspense } from 'react';
import { Product } from '@/core/type/product.type';
import { ProductCard } from '@/components/widgets/ProductCard';
import Filters from '@/components/widgets/Filters';

const sortingOptions = [
    { label: 'по новизне', value: 'by_date' },
    { label: 'по возрастанию', value: 'by_asc' },
    { label: 'по убыванию', value: 'by_desc' },
    { label: 'по рейтингу', value: 'by_rating' },
    { label: 'по популярности', value: 'by_popularity' }
];

const SearchResultsPage: React.FC = () => {
    const router = useRouter();
    const searchQuery = useSearchParams().get("q"); 
    const filterQuery = useSearchParams().get("f");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const { products } = useProductStore();
    
    useEffect(() => {
        if (searchQuery) {
            // Filter products based on the search query
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(searchQuery.toLowerCase())
                // You can add more conditions for brand or any other fields
            );
            setFilteredProducts(filtered);
        }
    }, [searchQuery, products]);

    return (
        <div className={`mt-40 mx-20 ${filteredProducts.length === 0 ? 'h-screen' : 'h-full'}`}>
            <div className='flex items-center'>
                <p>результаты по запросу:</p>
                <h2 className='ml-4 text-h2 font-bold'>{searchQuery}</h2>
            </div>
            {filteredProducts.length === 0 ? (
                <div className='text-20px mt-10'>
                    Ничего не найдено. Попробуйте изменить запрос и мы поищем ещё раз.
                </div>
            ) : (
                <Fragment>
                    <Filters quantity={filteredProducts.length}/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <div className='grid 2xl:grid-cols-5 gap-x-8 gap-y-8 my-10 xl:grid-cols-4'>
                            {filteredProducts.map((product, index) => (
                                <ProductCard 
                                    product={product} 
                                    type='horizontal'
                                    key={index}
                                />
                            ))}
                        </div>
                    </Suspense>
                </Fragment>     
            )}
        </div>
    );
};

export default SearchResultsPage;
