'use client'
import useProductStore from '@/store/product'
import { ProductCard } from '@/components/widgets/ProductCard'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { CloseIcon } from '@/components/shared/icons/closeIcon'

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useProductStore()

  const totalItems = cart.reduce((total, product) => total + product.quantity, 0)

  return (
    <div className="mt-32 mx-[80.5px] mb-[60px]">
      <Breadcrumb />
      <div className="flex justify-between items-center">
        <h1 className="font-sans text-[56px] font-regular">
          корзина
          <span className="text-xl font-serif ml-4">{totalItems} шт</span>
        </h1>
        <div className="flex items-center">
          {cart.length > 0 && (
            <span
              className='cursor-pointer text-xl ml-4'
              onClick={clearCart}
            >
              Удалить все
            </span>
          )}
        </div>
      </div>
      {cart.length > 0 ? (
        cart.map((product) => (
          <div key={product.id} className="mb-6 mt-8 flex justify-between items-start">
            <ProductCard product={product} type="vertical" />
            <button
              className="mt-2 text-red-500"
              onClick={() => removeFromCart(product.id)}
            >
              <CloseIcon color='black'/>
            </button>
          </div>
        ))
      ) : (
        <p>Ваша корзина пуста</p>
      )}
    </div>
  )
}

export default CartPage
