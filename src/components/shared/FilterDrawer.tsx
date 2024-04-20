'use client'
import { useState, useCallback } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { CloseIcon } from './icons/closeIcon';
import DropdownFilter from './DropdownFilter';
import CheckBoxTree from './CheckboxTree';
import PriceRange from './PriceRange';

interface FilterDrawerProps {
    isOpen: boolean,
    toggleDrawer: () => void,
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({ isOpen, toggleDrawer}) => {
    const [unCheck, setUncheck] = useState<() => void>(() => () => {
        console.log("Default noop function called");
    });
    const [countOfCheckedMainCategories, setCountOfCheckedMainCategories] = useState(0);

    // Handler to update the unCheck function
    const handleCallback = useCallback((fn: () => void) => {
        setUncheck(() => fn);
    }, []);

    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='filter-drawer'
                size={501}
            >
                <div className='mt-4 mr-5 ml-10 font-serif'>
                    <div className='flex justify-end'>
                        <CloseIcon onClick={toggleDrawer} className='' color='var(--black)'/>
                    </div>
                    <div className='flex items-baseline'>
                        <h3 className='text-[32px] mr-4'>фильтры</h3>
                        <button className='text-16px text-grey hover:text-black duration-300'>сбросить</button>
                    </div>
                    <DropdownFilter 
                        initOpen={true} 
                        name='категории' 
                        button={true} 
                        unCheck={unCheck} 
                        count={countOfCheckedMainCategories}
                    >
                        <CheckBoxTree 
                            setUncheck={handleCallback} 
                            className='mt-4 ml-7 text-18px'
                            setMainCategoryCount={setCountOfCheckedMainCategories}
                        />
                    </DropdownFilter>
                    <DropdownFilter initOpen={false} name='цена' button={true}>
                        <PriceRange />
                    </DropdownFilter>
                </div>
            </Drawer>
        </>
    )
}

export default FilterDrawer;