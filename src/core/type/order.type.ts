export type OrderItem = {
    productId: string;
    quantity: number;
}

export type Order = {
    id: string;
    status: "delivered" | "delivery" | "awaiting";
    date: Date;
    items: OrderItem[];
    totalQuantity: number;
    totalPrice: number;
    customerId: string;
}