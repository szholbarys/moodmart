import React from 'react'
import { ArrowIcon } from './icons/arrowIcon';
import { Order } from '@/core/type/order.type';
import Image from 'next/image'
import orderItemImg from '../../../public/images/order_item.png'


type ProfileOrderItemProps = {
    order: Order;
};

const ProfileOrderItem: React.FC<ProfileOrderItemProps> = ({ order }) => {
  return (
    <>
      
        <div className='flex items-center justify-between h-[172px] border-b-[1px]'>
            <div className='flex flex-col w-[160px]'>
                <p className='text-black font-bold text-[24px]'>{order.date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}</p>
                <p className='text-[#919191] font-medium text-[18px]'>{`#${order.customerId}`}</p>
            </div>
            
            {order.status === "awaiting" ? (
                    <button className='w-[200px] bg-[#919191] text-white rounded-3xl h-10'>
                    Ожидает оплаты
                    </button>
                ) : order.status === "delivery" ? (
                    <button className='w-[200px] bg-[#FFDC21] text-white rounded-3xl h-10'>
                    Доставка
                    </button>
                ) : order.status === "delivered" ? (
                    <button className='w-[200px] bg-[#1AD344] text-white rounded-3xl h-10'>
                    Доставлен
                    </button>
                ) : null
                }


            <div className='w-[350px]'>
                <div className="flex items-center justify-between">
                    <div className='relative w-[106px] h-[120px]'>
                        <Image fill src={orderItemImg} alt='Product Image' />
                    </div>
                    <div className='relative w-[106px] h-[120px]'>
                        <Image fill src={orderItemImg} alt='Product Image' />
                    </div>
                    <div className='font-bold text-2xl bg-[#eeeeee] relative w-[106px] h-[120px] flex items-center justify-center'>
                        +3
                    </div>
                </div>
            </div>

            <p className='text-black font-bold text-[22px] w-[100px]'>{order.totalQuantity} шт</p>

            <div className='flex flex-col w-[200px]'>
                <p className='text-[#919191] font-medium text-[18px]'>сумма</p>
                <p className='text-black font-bold text-[32px]'>{`${order.totalPrice} ₸`}</p>
            </div>

            <a href={`/profile/details?order_id=${order.customerId}`} className='flex items-center'>
                <p className='mr-2'>Подробнее</p>
                <ArrowIcon size={16} color='black' />
            </a>
        </div> 
  </>
  )
}

export default ProfileOrderItem