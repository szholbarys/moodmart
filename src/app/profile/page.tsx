'use client'

import React, { useState, ChangeEvent } from 'react'
import { Order } from '@/core/type/order.type'
import DropdownMenu from '@/components/shared/Dropdown'
import { useSearchParams } from 'next/navigation'
import ProfileOrderItem from '@/components/shared/ProfileOrderItem'
import ProfileUserInfo from '@/components/shared/ProfileUserInfo'

const sortingOptions = [
    { label: 'сначала новые', value: 'by_date' },
    { label: 'сначала старые', value: 'by_date_old' },
    { label: 'сначала дешевые', value: 'by_price' },
]

const orders: Order[] = [
    {
      id: "1",
      status: "awaiting",
      date: new Date("2024-01-06"),
      items: [{ productId: "3", quantity: 6 }],
      customerId: "994100",
      totalQuantity: 6,
      totalPrice: 21321
    },
    {
      id: "2",
      status: "delivery",
      date: new Date("2024-05-25"),
      items: [{ productId: "3", quantity: 6 }],
      customerId: "772390",
      totalQuantity: 6,
      totalPrice: 1309849
    },
    {
      id: "3",
      status: "awaiting",
      date: new Date("2024-04-17"),
      items: [{ productId: "3", quantity: 6 }],
      customerId: "432432",
      totalQuantity: 6,
      totalPrice: 441234
    },
    {
      id: "4",
      status: "delivered",
      date: new Date("2024-05-16"),
      items: [{ productId: "3", quantity: 6 }],
      customerId: "930101",
      totalQuantity: 6,
      totalPrice: 570
    },
    {
      id: "5",
      status: "delivered",
      date: new Date("2024-02-01"),
      items: [{ productId: "3", quantity: 6 }],
      customerId: "489100",
      totalQuantity: 6,
      totalPrice: 2050
    }
  ]


  const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('orders');

    const filterQuery = useSearchParams().get('f')
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <div className='mt-40 mb-16 mx-[80px]'>
            <ProfileUserInfo />
            
            {/* Tabs */}
            <div className="flex border-b mt-[48px] mb-4">
                <button
                    className={`px-4 py-2 ${activeTab === 'orders' ? 'border-b-2 border-black font-bold' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('orders')}
                >
                    Мои заказы
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 'profile' ? 'border-b-2 border-black font-bold' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('profile')}
                >
                    Профиль
                </button>
            </div>

            {activeTab === 'profile' && (
                "Profile things"
            )}

            {activeTab === 'orders' && (
                <div>
                    <div className="flex items-center justify-between">
                        <p className='text-[18px] mt-[18px]'>{orders.length} заказов</p>
                        <DropdownMenu options={sortingOptions} />
                    </div>
                    
                    <ProfileOrderItem orders={orders} />
                </div>
            )}
        </div>
    )
}

export default ProfilePage
