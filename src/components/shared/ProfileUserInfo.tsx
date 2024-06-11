import React from 'react';
import Image from 'next/image'
import profileDefaultImg from '../../../public/images/kendall.jpg'

const ProfileUserInfo: React.FC = () => {
    return (
        <div className='flex flex-col w-[387px] h-[158px]'> 
            <div className='flex items-center justify-between h-[80px] mb-[24px]'>
                <div className="relative aspect-square h-full">
                <Image 
                    src={profileDefaultImg} 
                    alt='Profile image'
                    fill
                    className='rounded-full object-cover'
                />
                </div>
                
                <p className='text-2xl'>Кенижан Дженнерқызы</p>
            </div>
            
            <div className='flex items-center justify-between bg-primary text-white py-2 px-4'>
                <div className='flex flex-col'>
                    <p className='font-medium text-[16px]'>Бонусы</p>
                    <p className='font-regular text-[14px]'>1 бонус = 1 ₸</p>
                </div>

                <p className='font-bold text-[18px]'>230 Б</p>
            </div>
        </div>
    )
}

export default ProfileUserInfo
