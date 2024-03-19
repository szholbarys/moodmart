import { create } from "zustand";
import { Product } from "@/core/type/product.type";
import axios from "axios";

type ProductStore = {
    products: Product[];
    setProducts: (products: Product[]) => void;
    fetchProducts: () => Promise<void>;
    loading: boolean;
    error: string | null;
}

const useProductStore = create<ProductStore>((set) => ({
    products: [],
    loading: false,
    error: null,
    setProducts: (products) => set(() => ({ products })),
    fetchProducts: async () => {
        set((state) => ({ ...state, loading: true }));
        try {
            const apiUrl = "https://api.jsonbin.io/v3/b/65f88edbdc74654018b4cbee";
            const accessKey = "$2a$10$CmrenPJ2atGWpxfdVr2.He0wQFcCRP9NJ646abLURBO0XcP65im8a";
            const headers = {
                'X-Access-Key': accessKey,
            };
            const response = await axios.get(apiUrl, { headers });
            const data = response.data; // Assuming data is an array of products

            if (!data || data.length === 0) {
                throw new Error("No products found");
            }
            // console.log(data.record);

            set((state) => ({ ...state, products: data.record, loading: false }));
        } catch (error) {
            console.error("Error fetching products:", error);
            set((state) => ({ ...state, error: (error as Error).message, loading: false }));
        }
    },
}));

export default useProductStore;
