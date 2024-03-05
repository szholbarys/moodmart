import HeroCarousel from "@/components/widgets/HeroCarousel";
import ProductCarousel from "@/components/widgets/ProductCarousel";
import { Stories } from "@/components/widgets/Stories";
import { Slide } from "@/core/interfaces/slide.interface";
import { Story } from "@/core/interfaces/story.interface";
import { Product } from "@/core/type/product.type";
import productsData from "../../../products.json";

const products: Product[] = productsData as Product[];

const slides: Slide[] = [
    {
        image: "/images/hero.png",
        title: "Идеи подарков",
        description: "Выбирайте подарок близким"
    },
    {
        image: "/images/hero.png",
        title: "Косметика",
        description: "Большой выбор"
    },
    {
        image: "/images/hero.png",
        title: "Идеи подарков",
        description: "Выбирайте подарок близким"
    },
];

const stories: Story[] = [
    {
        image: "/images/photo1.svg",
        text: "акции",
    },
    {
        image: "/images/photo1.svg",
        text: "акции",
    },
    {
        image: "/images/photo1.svg",
        text: "акции",
    },
    {
        image: "/images/photo1.svg",
        text: "акции",
    },
    {
        image: "/images/photo1.svg",
        text: "акции",
    },
    {
        image: "/images/photo1.svg",
        text: "акции",
    },
];

export default function Home() {
    return (
        <>
            <HeroCarousel slides={slides} className="mb-14"/>
            <Stories stories={stories} className="mb-16"/>
            <div className="mx-[80.5px]">
                <ProductCarousel products={products} title="Новинки" className="mb-16"/>
                <ProductCarousel products={products} title="Хиты"/>
            </div>
        </>

    )
}