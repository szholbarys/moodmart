import { Order } from './order.type'

export type User = {
  id: string
  name: string
  surname: string
  phoneNumber: string
  avatar: string
  bonusCount: number
  orders: Order[]
  favorites: string[]
}
