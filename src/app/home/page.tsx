import HeroCarousel from "@/components/widgets/HeroCarousel";
import Carousel from "@/components/widgets/Carousel";
import { ProductCard } from "@/components/widgets/ProductCard";
import { Stories } from "@/components/widgets/Stories";
import { Slide } from "@/core/interfaces/slide.interface";
import { Story } from "@/core/interfaces/story.interface";
import { Product } from "@/core/type/product.type";
import { Promo } from "@/core/type/promo.type";
import productsData from "../../../products.json";
import { PromoCard } from "@/components/widgets/PromoCard";

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

const promos: Promo [] = [
    {
      "ctaTitle": "Скидка 30% на продукцию L'Oreal",
      "ctaText": "Приобретайте продукцию L'Oreal со скидкой 30% до конца недели!",
      "image": "/images/promo1.svg",
      "time": 86400
    },
    {
      "ctaTitle": "Бесплатный подарок от Clinique",
      "ctaText": "Получите бесплатную косметичку Clinique при покупке любых двух средств ухода за кожей!",
      "image": "/images/promo2.svg",
      "time": 259200
    },
    {
      "ctaTitle": "Новая коллекция от Chanel",
      "ctaText": "Ознакомьтесь с новой коллекцией макияжа от Chanel и подчеркните свою красоту!",
      "image": "/images/promo1.svg",
      "time": 604800
    },
    {
      "ctaTitle": "Акция от Maybelline",
      "ctaText": "При покупке туши для ресниц Maybelline - подарок карандаш для глаз в подарок!",
      "image": "/images/promo2.svg",
      "time": 172800
    },
    {
      "ctaTitle": "Скидка 50% на весь ассортимент MAC",
      "ctaText": "Только сегодня и только для вас - скидка 50% на весь ассортимент косметики MAC!",
      "image": "/images/promo1.svg",
      "time": 432000
    }
]

export default function Home() {
    return (
        <>
            <HeroCarousel slides={slides} className="mb-14"/>
            <Stories stories={stories} className="mb-16"/>
            <div className="mx-[80.5px]">
                <Carousel title="Новинки" slidesToShow={4} className="mb-16">
                    {products.map((product, index) => (
                        <div key={index}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </Carousel>
                <Carousel title="Хиты"  slidesToShow={4} className="mb-16">
                    {products.map((product, index) => (
                        <div key={index}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </Carousel>
                <Carousel title="Акции" slidesToShow={2}>
                        {promos.map((promo, index) => (
                            <PromoCard key={index} promo={promo} />
                        ))}
                </Carousel>
            </div>
        </>

    )
}