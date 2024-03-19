import { Product } from "@/core/type/product.type";
import { User } from "@/core/type/user.type";
import { create } from "zustand";

type UserStore = {
    user: User;
    setUser: (user: User) => void;
  };

const useUserStore = create<UserStore>((set) => ({
    user: {
        id: '',
        name: '',
        surname: '',
        phoneNumber: '',
        avatar: '',
        bonusCount: 0,
        orders: [],
        favorites: []
    },
    setUser: (user) => set(() => ({user})),
}))

