'use client'
import Breadcrumb from '@/components/shared/Breadcrumb'
import PhotoCarousel from '@/components/widgets/PhotoCarousel'
import useProductStore from '@/store/product'
import Button from '@/components/shared/Button'
import { StarRating } from '@/components/shared/StarRating'
import VolumePicker from '@/components/shared/VolumePicker'
import { HeartIcon } from '@/components/shared/icons/heartIcon'
import ShadesDropdown from '@/components/shared/ShadesDropdown'
import ProductInfo from '@/components/widgets/ProductInfo'
import Carousel from '@/components/widgets/Carousel'
import { ProductCard } from '@/components/widgets/ProductCard'
import { getViewedProducts, storeViewedProducts } from '@/actions/api/product'
import { Product } from '@/core/type/product.type'
import { Fragment, useState } from 'react'
import StockNotificationDrawer from '@/components/widgets/StockNotificationDrawer'

export default function ProductPage({
  params,
}: {
  params: { productId: string }
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { findProductById, products, addFavorite, removeFavorite, favorites } = useProductStore()
  const product = findProductById(params.productId as string)

  product && storeViewedProducts(params.productId)

  const viewedProducts: Product[] = getViewedProducts()

  const breadcrumbs: Breadcrumb[] = [
    {
      label: product?.category,
      href: '/',
    },
  ]

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState)
  }

  const isFavorite = favorites.some(fav => fav.id === product?.id)

  const handleFavoriteClick = () => {
    if(product){
      if(isFavorite){
        removeFavorite(product.id)
      }else{
        addFavorite(product)
      }
    }
  }

  if (!product) {
    return (
      <div
        className="mt-20 mx-[80.5px] mb-[60px]"
        suppressHydrationWarning={true}
      >
        <Breadcrumb />
        <div className="skeleton-loading h-5/6 animate-pulse mt-4 flex">
          <div className="h-96 w-1/2 bg-light_grey mr-12"></div>
          <div className="mt-6 w-1/2">
            <div className="h-4 bg-light_grey w-1/2"></div>
            <div className="h-8 bg-light_grey mt-2"></div>
            <div className="flex items-center mt-2">
              <div className="h-4 bg-light_grey w-12"></div>
              <div className="ml-2 h-4 bg-light_grey w-20"></div>
            </div>
            <div className="mt-2 flex">
              <div className="h-4 bg-light_grey w-16"></div>
              <div className="ml-2 h-4 bg-light_grey w-20"></div>
            </div>
            <div className="mt-2 h-4 bg-light_grey w-24"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="mt-20 mx-[80.5px] mb-[60px]"
      suppressHydrationWarning={true}
    >
      <Breadcrumb customBreadcrumbs={breadcrumbs} className="mt-[111px]" />
      <div className="mt-10 flex">
        {product.images && product.images.length > 0 ? (
          <PhotoCarousel
            images={product.images}
            name={product.name}
            isHit={product.isHit}
            isNew={product.isNew}
            discount={product.discount}
            className="min-w-[50%]"
          />
        ) : (
          <h2 className="text-4xl font-bold mx-20 w-[30%]">
            Нет фотографий товара
          </h2>
        )}
        <div className="ml-[51px]">
          <p className="text-18px">{product.category}</p>
          <h2 className="mt-5 font-bold text-24px">{product.name}</h2>
          <div className="flex items-center mt-5">
            <StarRating rating={product.rating} />
            <p className="ml-3">{product.rating}</p>
          </div>
          {product.inStock && (
            <Fragment>
              <VolumePicker product={product} />
              {product.shades && product.shades.length > 0 && (
                <ShadesDropdown className="mt-7" shades={product.shades} />
              )}
            </Fragment>
          )}
          <div className={product.inStock ? '' : 'text-grey'}>
            <div className="flex mt-10">
              {product.oldPrice && product.oldPrice > 0 && (
                <p className="text-grey line-through text-18px mr-4">
                  {product.oldPrice} ₸
                </p>
              )}
              {product.discount && product.discount > 0 && (
                <p className="text-18px">{product.discount}% экономия</p>
              )}
            </div>
            <h3 className="mt-3 mb-10 font-semibold text-[40px]">
              {product.price}₸
            </h3>
          </div>
          {!product.inStock && (
            <h3 className="mb-4 font-bold text-[40px]">нет в наличии</h3>
          )}
          <div className="w-fit flex items-center border-[1px] border-black z-0 hover:border-primary duration-300">
            <Button
              onClick={toggleDrawer}
              type="primary"
              noArrow={false}
              className="px-8 py-3 z-10"
            >
              {!product.inStock ? 'Узнать о поступлении' : 'Добавить в корзину'}
            </Button>
            <HeartIcon color="var(--black)" className="mx-2 cursor-pointer" isActive={isFavorite} onClick={handleFavoriteClick}/>
          </div>
          <Button className="pl-0 mt-5" type="transparent">
            Наличие в магазине
          </Button>
        </div>
      </div>
      <ProductInfo
        productName={product.name}
        id={product.id}
        description={product.description}
        usage={product.usage}
        ingredients={product.ingredients}
        brandName="rhode"
        reviews={product.reviews}
        extraInfo={product.extraInfo}
      />
      <Carousel
        title="Похожие товары"
        slidesToShow={4}
        className="mb-16 mt-[107px]"
      >
        {products.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} type="horizontal" />
          </div>
        ))}
      </Carousel>
      {viewedProducts && viewedProducts.length > 0 && (
        <Carousel
          title="Вы недавно смотрели"
          slidesToShow={viewedProducts.length < 4 ? viewedProducts.length : 4}
          className="mb-16"
        >
          {viewedProducts.map((viewedProduct, index) => (
            <div key={index}>
              <ProductCard product={viewedProduct} type="horizontal" />
            </div>
          ))}
        </Carousel>
      )}
      <StockNotificationDrawer
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      />
    </div>
  )
}
