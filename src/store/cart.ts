import { create } from 'zustand'
import { Product } from '@/core/type/product.type'
import { createJSONStorage, persist } from 'zustand/middleware'

type CartItem = Product & { quantity: number }

type CartStore = {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: Product) => {
        const cart = get().cart
        const existingItem = cart.find(item => item.id === product.id)
        if (existingItem) {
          set({
            cart: cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] })
        }
      },
      removeFromCart: (productId: string) => {
        const cart = get().cart.filter(product => product.id !== productId)
        set({ cart })
      },
      clearCart: () => {
        set({ cart: [] })
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage<CartStore>(() => sessionStorage),
    },
  ),
)

export default useCartStore