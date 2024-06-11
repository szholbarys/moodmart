import { create } from 'zustand'
import { Product, Review, Shade } from '@/core/type/product.type'
import axios from 'axios'
import { createJSONStorage, persist } from 'zustand/middleware'

type CartItem = Product & { quantity: number }

type ProductStore = {
  products: Product[]
  favorites: Product[]
  cart: CartItem[]
  setProducts: (products: Product[]) => void
  fetchProducts: () => Promise<void>
  addFavorite: (product: Product) => void
  removeFavorite: (productId: string) => void
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
  loading: boolean
  error: string | null
  findProductById: (id: string) => Product | undefined
}

const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: [],
      favorites: [],
      cart: [],
      loading: false,
      error: null,
      setProducts: (products) => set({ products }),
      fetchProducts: async () => {
        set({ loading: true })
        try {
          const apiUrl = 'https://api.jsonbin.io/v3/b/65f88edbdc74654018b4cbee'
          const accessKey =
            '$2a$10$CmrenPJ2atGWpxfdVr2.He0wQFcCRP9NJ646abLURBO0XcP65im8a'
          const headers = {
            'X-Access-Key': accessKey,
          }
          const response = await axios.get(apiUrl, { headers })
          const data = response.data
          console.log(data.record)

          if (!data || !Array.isArray(data.record)) {
            throw new Error('Received data is not in the correct format')
          }

          if (data.record.some((product: any) => !isProduct(product))) {
            throw new Error('Some products do not match the expected type')
          }

          set({ products: data.record, loading: false })
        } catch (error) {
          console.error('Error fetching products:', error)
          set({ error: (error as Error).message, loading: false })
          throw error
        }
      },
      addFavorite: (product: Product) => {
        const favorites = get().favorites
        if (!favorites.find(fav => fav.id === product.id)) {
          set({ favorites: [...favorites, product] })
        }
      },
      removeFavorite: (productId: string) => {
        const favorites = get().favorites.filter(product => product.id !== productId)
        set({ favorites })
      },
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
      findProductById: (id: string) => {
        const product = get().products.find((product) => product.id === id)
        return product
      },
    }),
    {
      name: 'product-storage',
      storage: createJSONStorage<ProductStore>(() => sessionStorage),
    },
  ),
)

const isProduct = (obj: any): obj is Product =>
  typeof obj === 'object' &&
  typeof obj.id === 'string' &&
  typeof obj.name === 'string' &&
  typeof obj.brand === 'string' &&
  typeof obj.cover === 'string' &&
  Array.isArray(obj.images) &&
  obj.images.every((image: any) => typeof image === 'string') &&
  typeof obj.category === 'string' &&
  typeof obj.price === 'number' &&
  typeof obj.rating === 'number' &&
  typeof obj.ratingCount === 'number' &&
  typeof obj.isNew === 'boolean' &&
  typeof obj.isHit === 'boolean' &&
  Array.isArray(obj.reviews) &&
  obj.reviews.every(isReview) &&
  typeof obj.extraInfo === 'string' &&
  Array.isArray(obj.shades) &&
  obj.shades.every(isShade)

const isReview = (obj: any): obj is Review =>
  typeof obj === 'object' &&
  typeof obj.rating === 'number' &&
  typeof obj.author === 'string' &&
  typeof obj.date === 'string' &&
  typeof obj.pros === 'string' &&
  typeof obj.cons === 'string' &&
  typeof obj.comment === 'string'

const isShade = (obj: any): obj is Shade =>
  typeof obj === 'object' &&
  typeof obj.name === 'string' &&
  typeof obj.hexColor === 'string'

export default useProductStore
