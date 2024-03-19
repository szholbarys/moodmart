'use client'
import { FilterIcon } from '@/components/shared/icons/filterIcon';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchResultsPage: React.FC = () => {
    const router = useRouter();
    const query = useSearchParams(); 

    return (
        <div className='mt-40 mx-20 flex items-center'>
            <p>результаты по запросу:</p>
            <h2 className='ml-4 text-h2 font-bold'>{query}</h2>
            <div>
                <div className='flex'>
                    <FilterIcon color='var(--black)'/>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default SearchResultsPage;
