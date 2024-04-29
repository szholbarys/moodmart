import { Product } from '@/core/type/product.type'
import useProductStore from '@/store/product'

export const storeViewedProducts = (productId: string) => {
  // Check if product is valid (not null or undefined) and if it has a valid ID
  if (productId && productId.trim() !== '') {
    // Get the previously viewed product IDs from sessionStorage
    const viewedProductIds: string[] = JSON.parse(
      sessionStorage.getItem('viewedProducts') || '[]',
    )

    // Check if the current product ID is not already in the viewed product IDs array
    if (!viewedProductIds.includes(productId)) {
      // Add the productId to the array
      viewedProductIds.push(productId)

      // Store the updated viewed product IDs back to sessionStorage
      sessionStorage.setItem('viewedProducts', JSON.stringify(viewedProductIds))
    }
  }
}

// Function to get viewed product IDs and retrieve product information
export const getViewedProducts = (): Product[] => {
  const { findProductById } = useProductStore()
  // Get the previously viewed product IDs from sessionStorage
  const viewedProductIds: string[] =
    typeof sessionStorage !== 'undefined'
      ? JSON.parse(sessionStorage.getItem('viewedProducts') || '[]')
      : []

  // Map through the viewed product IDs and retrieve product information using findProductById
  const viewedProducts: Product[] = viewedProductIds
    .map((id) => findProductById(id))
    .filter((product) => product !== undefined) as Product[]

  return viewedProducts
}
