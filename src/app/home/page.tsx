import HeroCarousel from "@/components/widgets/HeroCarousel";
import { Stories } from "@/components/widgets/Stories";
import { Slide } from "@/core/interfaces/slide.interface";
import { Story } from "@/core/interfaces/story.interface";

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
            <HeroCarousel slides={slides}/>
            <Stories stories={stories}/>
            
        </>

    )
}