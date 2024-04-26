import { Product } from "@/core/type/product.type";

export const storeViewedProducts = (product: Product) => {
    // Check if product is valid (not null or undefined) and if it has a valid ID
    if (product && product.id && product.id.trim() !== '') {
        // Get the previously viewed products from sessionStorage
        let viewedProducts: Product[] = JSON.parse(sessionStorage.getItem('viewedProducts') || '[]');
        
        // Check if the product ID is already in the viewed products array
        if (!viewedProducts.find((p) => p.id === product.id)) {
            // If not, add the product to the array
            viewedProducts.push(product);
            
            // Store the updated viewed products array back to sessionStorage
            sessionStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
        }
    }
}
