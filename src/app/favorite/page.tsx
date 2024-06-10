'use client'
import React, { Fragment, Suspense } from 'react'
import Banner from '@/components/widgets/Banner'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { ProductCard } from '@/components/widgets/ProductCard'
import useProductStore from '@/store/product'
import Filters from '@/components/widgets/Filters'

const FavoritePage: React.FC = () => {
  const { favorites } = useProductStore()

  return (
    <div>
      <Banner image="/images/hearts.jpg" title="избранное" />
      <div className="mt-8 mx-[80.5px]">
        <Breadcrumb />
        <Fragment>
        <Suspense fallback={<div className="animate-pulse w-36 h-3"></div>}>
            <Filters className="mt-8" quantity={favorites.length} />
          </Suspense>
          <div className="grid 2xl:grid-cols-5 gap-x-8 gap-y-8 my-10 xl:grid-cols-4">
            {favorites.length > 0 ? (
              favorites.map((product, index) => (
                <ProductCard key={index} product={product} type="horizontal" />
              ))
            ) : (
              <p>Нет избранных товаров</p>
            )}
          </div>
        </Fragment>
      </div>
    </div>
  )
}

export default FavoritePage
