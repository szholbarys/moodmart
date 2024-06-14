'use client'
import { Product } from '@/core/type/product.type'
import Image from 'next/image'
import React, { Fragment, useEffect, useState } from 'react'
import { PlusIcon } from '../shared/icons/plusIcon'
import { StarRating } from '../shared/StarRating'
import { useRouter } from 'next/navigation'
import useProductStore from '@/store/product'
import useCartStore from '@/store/cart'
import { HeartIcon } from '../shared/icons/heartIcon'
import { CloseIcon } from '../shared/icons/closeIcon'

interface ProductProps {
  product: Product
  className?: string
  type?: 'horizontal' | 'vertical'
  hidePlusIcon?: boolean
  hideLabels?: boolean
  cartLayout?: boolean
}

export const ProductCard: React.FC<ProductProps> = ({
  product,
  className,
  type = 'vertical',
  hidePlusIcon = false,
  hideLabels = false,
  cartLayout = false,
}) => {
  const [loading, setLoading] = useState(true)
  const { addFavorite, removeFavorite, favorites } = useProductStore()
  const { addToCart, removeFromCart } = useCartStore()
  const isFavorite = favorites.some(fav => fav.id === product.id)

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const router = useRouter()

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(product.id)
    } else {
      addFavorite(product)
    }
  }

  const handleAddToCartClick = () => {
    addToCart(product)
  }

  if (!product) {
    return null
  }

  if (cartLayout) {
    return (
      <div className={`flex items-center p-4 border border-gray-200 rounded-lg ${className}`}>
        <div className="relative w-24 h-24 mr-4">
          {product.cover ? (
            <Image
              src={product.cover}
              width={96}
              height={96}
              alt={product.name}
              className="object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
              <h3 className="text-22px font-semibold">Нет фотографий</h3>
            </div>
          )}
          <HeartIcon
            className="absolute top-0 right-0 m-2 cursor-pointer"
            color={isFavorite ? 'red' : 'var(--grey)'}
            isActive={isFavorite}
            onClick={handleFavoriteClick}
          />
        </div>
        <div className="flex-1">
          <p className="text-gray-500">{product.category}</p>
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.description}</p>
        </div>
        <div className="text-right">
          {product.oldPrice && (
            <p className="text-sm text-gray-500 line-through">{product.oldPrice}₸</p>
          )}
          <p className="text-lg font-bold">{product.price}₸</p>
          <button
            className="mt-2 text-red-500"
            onClick={() => removeFromCart(product.id)}
          >
            <CloseIcon color='black' />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`group ${className} ${type === 'vertical' ? '' : 'max-w-[302px]'}`}
    >
      {loading ? (
        <div className="skeleton-loading animate-pulse">
          <div className="h-[340px] w-full bg-light_grey"></div>
          <div className="mt-6">
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
      ) : (
        <div
          className={`${type === 'vertical' ? 'flex' : 'block'} cursor-pointer`}
        >
          <div
            className={`${type === 'vertical' ? 'mr-6' : 'mr-0'} relative max-w-[302px]`}
          >
            {product.cover ? (
              <Image
                src={product.cover}
                width={type === 'vertical' ? 200 : 302}
                height={type === 'vertical' ? 100 : 340}
                alt={product.name}
              />
            ) : (
              <div
                className={`w-[${type === 'vertical' ? 200 : 302}px] h-[${type === 'vertical' ? 100 : 340}px] flex items-center justify-center`}
              >
                <h3 className="text-22px font-semibold text-wrap">
                  Нет фотографий
                </h3>
              </div>
            )}
            {!hideLabels && (
              <Fragment>
                <div className="flex absolute top-0 left-0 font-sans font-meduim leading-5">
                  {product.isNew && (
                    <p className="bg-neon_green py-0.5 px-2">NEW</p>
                  )}
                  {product.discount && product.discount > 0 && (
                    <p className="bg-orange text-white py-0.5 px-2">
                      {product.discount}%
                    </p>
                  )}
                  {product.isHit && (
                    <p className="bg-gold text-black py-0.5 px-2">HIT</p>
                  )}
                </div>
              </Fragment>
            )}
            <HeartIcon
              className="absolute top-0 right-0 m-2 cursor-pointer"
              color={isFavorite ? 'red' : 'var(--grey)'}
              isActive={isFavorite}
              onClick={handleFavoriteClick}
            />
            {!hidePlusIcon && (
              <div
                className="absolute bottom-0 right-0 mb-2 w-10 h-10 hidden group-hover:flex justify-center items-center bg-primary rounded-full"
                onClick={handleAddToCartClick}
              >
                <PlusIcon color="white" />
              </div>
            )}
          </div>
          <div
            onClick={() => {
              router.push(`/product/${product.id}`)
            }}
            className="cursor-pointer"
          >
            <p className="text-18px font-meduim mt-6 mb-4 group-hover:text-primary hover:transition duration-200 ease-in-out">
              {product.category}
            </p>
            <h3 className="text-18px font-bold mb-3.5 group-hover:text-primary hover:transition duration-200 ease-in-out">
              {product.name}
            </h3>
            <div className="flex items-center mb-6">
              <StarRating rating={product.rating} />
              <div className="ml-3 leading-4 font-semi-bold group-hover:text-primary hover:transition duration-200 ease-in-out">
                {product.ratingCount}
              </div>
            </div>
            <div className="flex mb-2 ">
              {product.oldPrice && product.oldPrice > 0 && (
                <p className="mr-3 text-grey line-through text-18px group-hover:text-primary hover:transition duration-200 ease-in-out">
                  {product.oldPrice}₸
                </p>
              )}
              <p className="text-black text-18px font-semi-bold group-hover:text-primary hover:transition duration-200 ease-in-out">
                {product.price}₸
              </p>
            </div>
            {product.discount && product.discount > 0 && (
              <p className="text-16px text-green">
                {product.discount}% экономия
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
