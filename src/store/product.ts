// import { create } from "zustand";
// import { Product } from "@/core/type/product.type";

// type ProductStore = {
//     product: Product;
//     setProduct: (product: Product) => void;
// }

// const useProductStore = create<ProductStore>((set) => ({
//     product: {
//         id: '',
//         name: '',
//         description: '',
//         category: '',
//         rating: 0,
//         ratingCount: 0,
//         price: 0,
//         isNew: false,
//         isHit: false,
//         image: '',
//     },
//     setProduct: (product) => set(() => ({product}))
// }))