'use client'
import useProductStore from '@/store/product'
import { ProductCard } from '@/components/widgets/ProductCard'
import Breadcrumb from '@/components/shared/Breadcrumb'
import { CloseIcon } from '@/components/shared/icons/closeIcon'
import useCartStore from '@/store/cart'

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCartStore()

  const totalItems = cart.reduce((total, product) => total + product.quantity, 0)

  return (
    <div className="mt-32 mx-4 md:mx-[80.5px] mb-[60px]">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="font-sans text-[32px] md:text-[56px] font-regular">
          корзина
          <span className="text-lg md:text-xl font-serif ml-4">{totalItems} шт</span>
        </h1>
        {cart.length > 0 && (
          <span
            className="cursor-pointer text-lg md:text-xl mt-4 md:mt-0"
            onClick={clearCart}
          >
            Удалить все
          </span>
        )}
      </div>
      {cart.length > 0 ? (
        cart.map((product) => (
          <div key={product.id} className="mb-6 mt-8 flex justify-between items-start">
            <ProductCard product={product} type="vertical" hidePlusIcon={true} hideLabels={true} />
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
