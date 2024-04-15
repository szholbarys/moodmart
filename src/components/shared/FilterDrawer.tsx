'use client'
import { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { CloseIcon } from './icons/closeIcon';
import DropdownFilter from './DropdownFilter';

interface FilterDrawerProps {
    isOpen: boolean,
    toggleDrawer: () => void,
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({ isOpen, toggleDrawer}) => {
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
                    <DropdownFilter initOpen={true} name='категории'>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                    </DropdownFilter>
                </div>
            </Drawer>
        </>
    )
}

export default FilterDrawer;