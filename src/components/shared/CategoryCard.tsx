import Image from "next/image"

export interface CategoryCardProps {
    image: string,
    title: string,
    quantity: number,
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, quantity }) => {
    return (
        <div className="w-fit flex items-center pl-5 rounded-3xl border-solid border-2 border-light_grey hover:border-black duration-300 cursor-pointer">
            <Image 
                src={image}
                width={64}
                height={64}
                alt=""
                className="mr-4 rounded-[8px] py-4"
            />
            <div className="font-sans pr-5">
                <h6 className="text-18px font-semi-bold">{title}</h6>
                <p>{quantity} продуктов</p>
            </div>
        </div>
    )
}

export default CategoryCard;