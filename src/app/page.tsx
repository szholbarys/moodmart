"use client"
import { useEffect } from "react";
import HeroCarousel from "@/components/widgets/HeroCarousel";
import Carousel from "@/components/widgets/Carousel";
import { ProductCard } from "@/components/widgets/ProductCard";
import { Stories } from "@/components/widgets/Stories";
import { Slide } from "@/core/interfaces/slide.interface";
import { Story } from "@/core/interfaces/story.interface";
import { Product } from "@/core/type/product.type";
import { Promo } from "@/core/type/promo.type";
// import productsData from "../../../products.json";
import { PromoCard } from "@/components/widgets/PromoCard";
import BrandSection from "@/components/widgets/BrandSection";
import Brands from "@/components/widgets/Brands";
import { Brand } from "@/core/type/brand.type";
import brandsData from "../../brands.json"
import useProductStore from "@/store/product";

const products2: Product[] = [
  {
      id: '1',
      name: 'FUNKY MONKEY longlasting lip pencil',
      description: '',
      category: 'уход за лицом',
      rating: 4.5,
      ratingCount: 122,
      // oldPrice: 3441,
      price: 3441,
      isNew: true,
      // discount: 66,
      isHit: true,
      image: "/images/product1.svg",
  },
  {
      id: '2',
      name: 'FUNKY MONKEY longlasting lip pencil',
      description: '',
      category: 'уход за лицом',
      rating: 3.9,
      ratingCount: 122,
      // oldPrice: 3441,
      price: 3441,
      isNew: true,
      // discount: 66,
      isHit: true,
      image: "/images/product2.svg",
  },
  {
      id: '3',
      name: 'FUNKY MONKEY longlasting lip pencil',
      description: '',
      category: 'уход за лицом',
      rating: 4.7,
      ratingCount: 122,
      // oldPrice: 3441,
      price: 3441,
      isNew: true,
      // discount: 66,
      isHit: true,
      image: "/images/product3.svg",
  }
]

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

const brands: Brand[] = brandsData as Brand[];

export default function Home() {

  const { products, fetchProducts, loading, error } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
            <HeroCarousel slides={slides} className="mb-14"/>
            <Stories stories={stories} className="mb-16"/>
            <div className="mx-[80.5px] mb-16">
                <Carousel title="Новинки" slidesToShow={4} className="mb-16">
                    {products.map((product, index) => (
                        <div key={index}>
                            <ProductCard product={product} type="horizontal"/>
                        </div>
                    ))}
                </Carousel>
                <Carousel title="Хиты"  slidesToShow={4} className="mb-16">
                    {products.map((product, index) => (
                        <div key={index}>
                            <ProductCard product={product} type="horizontal"/>
                        </div>
                    ))}
                </Carousel>
                <Carousel title="Акции" slidesToShow={2} className="mb-16">
                        {promos.map((promo, index) => (
                            <PromoCard key={index} promo={promo} />
                        ))}
                </Carousel>
                <BrandSection brandName="Glossier" poster="/images/glossier.svg" direction="horizontal" products={products2} className="mb-16"/>
                <BrandSection brandName="CLINIQUE" poster="/images/clinique.svg" direction="vertical" products={products2} className="mb-10"/>
                <Brands brands={brands} />
            </div>
        </>
  );
}
