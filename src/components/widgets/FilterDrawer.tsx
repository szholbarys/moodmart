'use client'
import { useState, useCallback } from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { CloseIcon } from '../shared/icons/closeIcon'
import DropdownFilter from '../shared/DropdownFilter'
import CheckBoxTree from './CheckboxTree'
import PriceRange from '../shared/PriceRange'

interface FilterDrawerProps {
  isOpen: boolean
  toggleDrawer: () => void
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  toggleDrawer,
}) => {
  const [unCheck, setUncheck] = useState<() => void>(() => () => {
    console.log('Default noop function called')
  })
  const [countOfCheckedMainCategories, setCountOfCheckedMainCategories] = useState(0)
  const [countOfCheckedBrands, setCountOfCheckedBrands] = useState(0)

  // Handler to update the unCheck function
  const handleCallback = useCallback((fn: () => void) => {
    setUncheck(() => fn)
  }, [])

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="filter-drawer"
        size={501}
      >
        <div className="mt-4 mr-5 ml-10 font-serif">
          <div className="flex justify-end">
            <CloseIcon
              onClick={toggleDrawer}
              className=""
              color="var(--black)"
            />
          </div>
          <div className="flex items-baseline mb-5">
            <h3 className="text-[32px] mr-4">фильтры</h3>
            <button className="text-16px text-grey hover:text-black duration-300">
              сбросить
            </button>
          </div>
          <DropdownFilter // in progress
            initOpen={false}
            name="категории"
            button={true}
            unCheck={unCheck}
            count={countOfCheckedMainCategories}
          >
            <CheckBoxTree
              setUncheck={handleCallback}
              className="mt-4 ml-7 text-18px"
              setMainCategoryCount={setCountOfCheckedMainCategories}
            />
          </DropdownFilter>

          <DropdownFilter initOpen={true} name="цена" button={true}>
            <PriceRange />
          </DropdownFilter>

          <DropdownFilter initOpen={false} name="бренды" button={true} unCheck={unCheck} count={countOfCheckedBrands}>
            <div className="max-w-sm mx-auto">   
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300" placeholder="Поиск по 134 брендам" />
              </div>
          </div>


            <div>
              <p>0-9</p>
            </div>

          </DropdownFilter>
        </div>
      </Drawer>
    </>
  )
}

export default FilterDrawer
