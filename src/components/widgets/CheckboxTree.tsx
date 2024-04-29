import React, { useState, useEffect } from 'react'
import DropdownFilter from '../shared/DropdownFilter'

interface Category {
  id: number
  name: string
  subcategories?: Category[]
}

interface CheckBoxTreeProps {
  className?: string
  setUncheck?: (fn: () => void) => void
  setMainCategoryCount: (count: number) => void
}

const categories: Category[] = [
  { id: 1, name: 'Категория 1' },
  {
    id: 2,
    name: 'Категория 2',
    subcategories: [
      { id: 3, name: 'Категория 2-1' },
      { id: 4, name: 'Категория 2-2' },
      { id: 5, name: 'Категория 2-3' },
    ],
  },
  { id: 6, name: 'Категория 6' },
  { id: 7, name: 'Категория 7' },
]

const CheckBoxTree: React.FC<CheckBoxTreeProps> = ({
  className = '',
  setUncheck,
  setMainCategoryCount,
}) => {
  const [checkedIds, setCheckedIds] = useState<number[]>([])
  const [partialIds, setPartialIds] = useState<number[]>([])

  const handleCheckboxChange = (id: number, hasSubcategories: boolean) => {
    setCheckedIds((currentIds) => {
      let newChecked = [...currentIds]
      const currentIndex = newChecked.indexOf(id)

      // Toggle the checked state of the category or subcategory
      if (currentIndex === -1) {
        newChecked.push(id)
      } else {
        newChecked.splice(currentIndex, 1)
      }

      const category = findCategoryById(categories, id)
      if (category && hasSubcategories && category.subcategories) {
        // Has subcategories and they are not undefined
        if (currentIndex === -1) {
          // Main category checked: check all its subcategories
          newChecked.push(...category.subcategories.map((sub) => sub.id))
        } else {
          // Main category unchecked: uncheck all its subcategories
          newChecked = newChecked.filter(
            (cid) => !category.subcategories!.some((sub) => sub.id === cid),
          )
        }
      } else if (category && !hasSubcategories) {
        // A subcategory is toggled, check if we should toggle the parent
        const parentCategory = categories.find((cat) =>
          cat.subcategories?.some((sub) => sub.id === id),
        )
        if (parentCategory && parentCategory.subcategories) {
          const areAllSubsChecked = parentCategory.subcategories.every((sub) =>
            newChecked.includes(sub.id),
          )
          if (areAllSubsChecked) {
            // All subcategories are checked: check the parent
            newChecked.push(parentCategory.id)
          } else if (
            parentCategory.subcategories.some(
              (sub) => !newChecked.includes(sub.id),
            )
          ) {
            // Some subcategories are unchecked: uncheck the parent
            newChecked = newChecked.filter((cid) => cid !== parentCategory.id)
          }
        }
      }
      return newChecked
    })
  }

  const calculateCheckedMainCategories = () => {
    let count = 0
    categories.forEach((category) => {
      // If the main category is checked, count it
      if (checkedIds.includes(category.id)) {
        count += 1
      } else if (category.subcategories) {
        // If any of the subcategories are checked, count the main category
        const isAnySubChecked = category.subcategories.some((sub) =>
          checkedIds.includes(sub.id),
        )
        if (isAnySubChecked) {
          count += 1
        }
      }
    })
    setMainCategoryCount(count)
    return count
  }

  useEffect(() => {
    const uncheckAll = () => {
      console.log('Uncheck all executed')
      setCheckedIds([])
    }

    // Make sure to call the parent's state setting function outside any rendering logic
    if (setUncheck) {
      setUncheck(uncheckAll)
    }
  }, [])

  useEffect(() => {
    const count = calculateCheckedMainCategories()
    setMainCategoryCount(count)
  }, [checkedIds])

  const renderCategories = (categories: Category[], depth = 0) => {
    return categories.map((category: Category) => (
      <div key={category.id} className={`ml-${depth * 7} category-item`}>
        {category.subcategories ? (
          <div className="gap-2 mb-1">
            <input
              type="checkbox"
              checked={checkedIds.includes(category.id)}
              onChange={() =>
                handleCheckboxChange(category.id, !!category.subcategories)
              }
              className={`${partialIds.includes(category.id) ? 'partial' : ''} float-left mt-[5.5px] mr-2`}
            />
            <DropdownFilter
              iconPosition="after"
              className="font-medium text-18px"
              initOpen={true}
              name={category.name}
            >
              {renderCategories(category.subcategories, depth + 1)}
            </DropdownFilter>
          </div>
        ) : (
          <label className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              checked={checkedIds.includes(category.id)}
              onChange={() => handleCheckboxChange(category.id, false)}
              className={`${partialIds.includes(category.id) ? 'partial' : ''} text-[24px]`}
            />
            <p className="font-medium text-18px">{category.name}</p>
          </label>
        )}
      </div>
    ))
  }

  return <div className={className}>{renderCategories(categories)}</div>
}

export default CheckBoxTree

// Utility function to find a category by ID
function findCategoryById(
  categories: Category[],
  id: number,
): Category | undefined {
  for (const category of categories) {
    if (category.id === id) return category
    if (category.subcategories) {
      const found = findCategoryById(category.subcategories, id)
      if (found) return found
    }
  }
  return undefined
}
