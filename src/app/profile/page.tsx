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
            <form className="space-y-6 w-[496px]">
                <div>
                  <label className="block text-[14px] mt-[18px] mb-2" htmlFor="firstName">имя</label>
                  <input
                    type="text"
                    id="firstName"
                    value="Кенижан"
                    className="w-full border border-gray-300 py-2 px-4 text-[16px] focus:outline-none"
                  />
                </div>
              
                <div>
                  <label className="block text-[14px] mt-[18px] mb-2" htmlFor="lastName">фамилия</label>
                  <input
                    type="text"
                    id="lastName"
                    value="Дженнерқызы"
                    className="w-full border border-gray-300 py-2 px-4 text-[16px] focus:outline-none"
                  />
                </div>
              
                <div>
                  <label className="block text-[14px] mt-[18px] mb-2" htmlFor="phoneNumber">номер телефона</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder='+7 (777) 111 00 00'
                    className="w-full border border-gray-300 py-2 px-4 text-[16px] focus:outline-none"
                  />
                </div>
              
                <div>
                  <label className="block text-[14px] mt-[18px] mb-2" htmlFor="email">email</label>
                  <input
                    type="text"
                    id="email"
                    value="kendal@gmail.com"
                    className="w-full border border-gray-300 py-2 px-4 text-[16px] focus:outline-none"
                  />
                </div>

                <button className='w-full bg-black font-bold text-white py-2 px-6 mb-4'>Сохранить</button>
              </form>
              
            )}

            {activeTab === 'orders' && (
                <div>
                    <div className="flex items-center justify-between">
                        <p className='text-[18px] mt-[18px]'>{orders.length} заказов</p>
                        <DropdownMenu options={sortingOptions} />
                    </div>
                    
                    {orders.map(ord => (
                      <ProfileOrderItem order={ord} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProfilePage
