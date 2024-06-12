'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { PrevArrowIcon } from '@/components/shared/icons/prevArrowIcon';
import { DetailsIcon } from '@/components/shared/icons/detailsIcon';
import { VisaIcon } from '@/components/shared/icons/visaIcon';
import { AddressIcon } from '@/components/shared/icons/addressIcon';
import { DropdownIcon } from '@/components/shared/icons/dropdownIcon';
// import { Order } from '@/core/type/order.type';

// const order: Order = {
//     id: "1",
//     status: "awaiting",
//     date: new Date("2024-01-06"),
//     items: [{ productId: "3", quantity: 6 }],
//     customerId: "994100",
//     totalQuantity: 6,
//     totalPrice: 21321
// };

const Details: React.FC = () => {
    const searchParams = useSearchParams();
    const order_id = searchParams.get('order_id');

    return (
        <div className='mt-40 mb-16 mx-[80px]'>
            <a href="/profile" className='flex items-center mb-6'>
                <PrevArrowIcon size={16} color='black' />
                <p className='ml-2'>Назад</p>
            </a>

            <div className="container mx-auto p-4">
                <div className="flex justify-between items-start">
                    <div className="w-[640px]">
                        <p className="text-[24px] text-black font-medium mb-4">
                            Спасибо Кенижан!
                            <span className="text-[16px] text-primary font-normal ml-2">Заказ #{order_id}</span>
                        </p>

                        {/* {order.status === "awaiting" ? (
                            <button className='py-3 px-6 bg-[#919191] text-white rounded-3xl mb-4'>
                            Ожидает оплаты
                            </button>
                        ) : order.status === "delivery" ? (
                            <button className='py-3 px-6 bg-[#FFDC21] text-white rounded-3xl mb-4'>
                            Доставка
                            </button>
                        ) : order.status === "delivered" ? (
                            <button className='py-3 px-6 bg-[#1AD344] text-white rounded-3xl mb-4'>
                            Доставлен
                            </button>
                        ) : null
                        } */}
                        <button className='py-3 px-6 bg-[#1AD344] text-white rounded-3xl mb-4'>
                            Доставлен
                        </button>

                        {/* Order Details */}
                        <div className="mt-4 border-light_grey border  font-medium">
                            <div className="flex items-center py-3 px-4 bg-[#F4F4F4]">
                                <DetailsIcon color="black" />
                                <p className="text-[16px] ml-2">Детали оплаты</p>
                            </div>
                            
                            <div className="text-[14px]">
                                <div className="flex justify-between items-center border-b-[1px] py-3 px-4">
                                <p className="w-1/2">Способ оплаты</p>
                                <p className="flex items-center w-1/2 justify-start font-sans"><VisaIcon color='black' className="mr-2" />Картой: *3848</p>
                                </div>

                                <div className="flex justify-between items-center border-b-[1px] py-3 px-4">
                                <p className="w-1/2">Вид заказа</p>
                                <p className="w-1/2 justify-start font-sans">Доставка</p>
                                </div>

                                <div className="flex justify-between items-center border-b-[1px] py-3 px-4">
                                <p className="w-1/2">Номер телефона</p>
                                <p className="w-1/2 justify-start font-sans">+7 (777)-777-77-77</p>
                                </div>

                                <div className="flex justify-between items-center border-b-[1px] py-3 px-4">
                                <p className="w-1/2">Сумма</p>
                                <p className="w-1/2 justify-start font-sans">4 000 ₸</p>
                                </div>

                                <div className="flex justify-between items-center py-3 px-4">
                                <p className="w-1/2">Дата</p>
                                <p className="w-1/2 justify-start font-sans">04.03.2021</p>
                                </div>
                            </div>
                        </div>

                        
                        {/* Address */}
                        <div className="mt-4 border-light_grey border  font-medium">
                            <div className="flex items-center py-3 px-4 bg-[#F4F4F4]">
                                <AddressIcon color="black" />
                                <p className="text-[16px] ml-2">Адрес доставки</p>
                            </div>
                            
                            <div className="text-[14px]">
                                <div className="flex justify-between items-center border-b-[1px] py-3 px-4">
                                <p className="w-1/2">Город</p>
                                <p className="w-1/2 justify-start font-sans">Алматы</p>
                                </div>

                                <div className="flex justify-between items-center border-b-[1px] py-3 px-4">
                                <p className="w-1/2">Улица/микрорайон</p>
                                <p className="w-1/2 justify-start font-sans">Маркова</p>
                                </div>

                                <div className="flex justify-between items-center border-b-[1px] py-3 px-4">
                                <p className="w-1/2">Дом/строение</p>
                                <p className="w-1/2 justify-start font-sans">72/45</p>
                                </div>

                                <div className="flex justify-between items-center py-3 px-4">
                                <p className="w-1/2">ДОПОЛНИТЕЛЬНЫЕ ИНСТРУКЦИИ КУРЬЕРу</p>
                                <p className="w-1/2 justify-start font-sans">2-й этаж</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[335px] text-black">
                        <div className="py-8 px-5">
                            <div className='flex items-center justify-between font-bold text-[24px]'>
                                <p>Итог</p> 
                                <p>922 000 ₸</p>
                            </div>

                            <hr className='my-6' />
                                
                            <div className="text-[16px] font-medium">
                                <div className="flex justify-between py-2">
                                    <p>Товары, 6 шт</p>
                                    <p className='font-bold'>922 000 ₸</p>
                                </div>
                                <div className="flex justify-between py-2">
                                    <p>Доставка</p>
                                    <p className='font-bold'>2000 ₸</p>
                                </div>
                                <div className="flex justify-between py-2">
                                    <p>Скидка</p>
                                    <p className='font-bold'>- 23 000 ₸</p>
                                </div>
                                <div className="flex justify-between py-2">
                                    <p>Бонусы</p>
                                    <p className='font-bold'>- 1 000 ₸</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='py-6 px-5'>
                            <div className="flex items-center justify-between py-4">
                                <h2 className="text-[24px] font-bold my-4">Ваш заказ</h2>
                                <DropdownIcon color='black' />
                            </div>
                            
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between py-4">
                                    <img src="/images/order_item.png" alt="Product" className="w-16 h-16 object-cover"/>
                                    <div className="ml-4 text-black">
                                        <p className='text-[14px]'>UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon</p>
                                        <p className="text-[12px] font-bold">261 000 ₸</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <img src="/images/order_item.png" alt="Product" className="w-16 h-16 object-cover"/>
                                    <div className="ml-4 text-black">
                                        <p className='text-[14px]'>UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon</p>
                                        <p className="text-[12px] font-bold">261 000 ₸</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <img src="/images/order_item.png" alt="Product" className="w-16 h-16 object-cover"/>
                                    <div className="ml-4 text-black">
                                        <p className='text-[14px]'>UNLEASHIA Glacier Vegan Lip Balm No.2 Blue Lagoon</p>
                                        <p className="text-[12px] font-bold">261 000 ₸</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
