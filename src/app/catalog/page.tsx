'use client'
import Banner from '@/components/widgets/Banner'
import Breadcrumb from '@/components/shared/Breadcrumb'
import Filters from '@/components/widgets/Filters'
import useProductStore from '@/store/product'
import { Fragment, Suspense } from 'react'
import { ProductCard } from '@/components/widgets/ProductCard'
import Slider from 'react-slick'
import CategoryCard, {
  CategoryCardProps,
} from '@/components/shared/CategoryCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const categories: CategoryCardProps[] = [
  {
    image: '/images/clinique.svg',
    title: 'Очищающие средства',
    quantity: 355,
  },
  {
    image: '/images/clinique.svg',
    title: 'Очищающие средства',
    quantity: 355,
  },
  {
    image: '/images/clinique.svg',
    title: 'Очищающие средства',
    quantity: 355,
  },
  {
    image: '/images/clinique.svg',
    title: 'Очищающие средства',
    quantity: 355,
  },
  {
    image: '/images/clinique.svg',
    title: 'Очищающие средства',
    quantity: 355,
  },
]

const CatalogPage: React.FC = () => {
  const { products } = useProductStore()

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <div>
      <Banner image="/images/skincare.jpg" title="уход для лица" />
      <div className="mt-8 mx-[80.5px]">
        <Breadcrumb />
        <Slider className="mt-8 flex" {...settings}>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              image={category.image}
              title={category.title}
              quantity={category.quantity}
            />
          ))}
        </Slider>
        <Fragment>
          <Suspense fallback={<div className="animate-pulse w-36 h-3"></div>}>
            <Filters className="mt-8" quantity={products.length} />
          </Suspense>
          <div className="grid 2xl:grid-cols-5 gap-x-8 gap-y-8 my-10 xl:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} type="horizontal" />
            ))}
          </div>
        </Fragment>
      </div>
    </div>
  )
}

export default CatalogPage
