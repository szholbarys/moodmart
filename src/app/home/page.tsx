import styles from "@/app/ui/home.module.css";
import Carousel from "@/components/widgets/Carousel";
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
    }
];

const stories: Story[] = [
    {
        image: "/images/photo1",
        text: "акции",
    },
    {
        image: "/images/photo2",
        text: "акции",
    },
    {
        image: "/images/photo3",
        text: "акции",
    },
    {
        image: "/images/photo1",
        text: "акции",
    },
    {
        image: "/images/photo1",
        text: "акции",
    },
    {
        image: "/images/photo1",
        text: "акции",
    },
];

export default function Home() {
    return (
        <>
            <Carousel slides={slides}/>
            <Stories stories={stories}/>
        </>

    )
}