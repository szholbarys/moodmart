import { Category } from "@/core/type/category.type"

const categories: Category []= [
    {
        id: 1,
        name: "Категория 1"
    },
    {
        id: 2,
        name: "Категория 2",
        subcategories: [
            {
                id: 3,
                name: "Категория 2-1"
            },
            {
                id: 4,
                name: "Категория 2-2"
            },
            {
                id: 5,
                name: "Категория 2-3"
            }
        ]
    },
    {
        id: 6,
        name: "Категория 6"
    },
    {
        id: 7,
        name: "Категория 7"
    }
]

interface CheckBoxTreeProps {
    categories: Category[]
}

const CheckBoxTree: React.FC<CheckBoxTreeProps> = ({ categories }) => {
    const renderCategories = (categories: Category[], depth = 0) => {
        return categories.map((category: Category) => (
            <div key={category.id} className={`ml-${depth * 4}`}>
                <label className={`flex items-center gap-2`}>
                    <input
                      type="checkbox"
                      disabled={category.subcategories && category.subcategories.length > 0}
                    />
                    {category.name}
                </label>
                {category.subcategories && renderCategories(category.subcategories, depth + 1)}
            </div>
        ))
    }
    return <div>{renderCategories(categories)}</div>;
}

export default CheckBoxTree;