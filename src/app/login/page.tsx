'use client'
import React, { useState, ChangeEvent } from 'react'

const LoginPage: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [isValid, setIsValid] = useState(true)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        // Regular expressions to validate phone numbers
        const phoneRegex1 = /^\+7\d{10}$/ // +7xxxxxxxxxx
        const phoneRegex2 = /^87\d{9}$/ // 87xxxxxxxxx

        const isValid = phoneRegex1.test(value) || phoneRegex2.test(value)
        setIsValid(isValid)
        setPhoneNumber(value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (isValid && phoneNumber) {
            setIsSubmitted(true)
        }
    }

    if (isSubmitted) {
        return (
            <div className='flex flex-col justify-center items-center h-screen mx-auto  w-[364px]'>
                <p className='text-4xl mb-5'>Потвердите номер</p>
                <p className='text-xl mb-4 self-start'>+7 707 777 77 77</p>
                <input
                    type='text'
                    className='text-lg leading-[18px] w-full bg-transparent border-b border-grey outline-none pb-[12px] pt-2.5 focus:text-black mb-4'
                    placeholder='код из смс'
                />
                <p className='text-black self-start text-[16px] mb-8'>
                    код отправлен, запросить повторный можно через 35 секунд
                </p>
                <button className='w-full bg-black text-white py-3 px-8 mb-4'>Потвердите номер</button>
                <p className='text-[#666666] text-center text-[14px] w-full'>
                    Нажимая на кнопку «Получить код», я соглашаюсь с политикой обработки <a className='underline' href='#policy'>персональных данных</a>
                </p>
            </div>
        )
    }

    return (
        <div>
            <form className='flex flex-col justify-center items-center h-screen mx-auto  w-[364px]' onSubmit={handleSubmit}>
                <p className='text-4xl mb-8'>Войти или зарегистрироваться</p>
                <input
                    type='tel' 
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className={`text-lg leading-[18px] w-full bg-transparent border-b pb-[12px] pt-2.5 focus:text-black ${isValid ? 'border-grey mb-4' : 'border-red-500'}`}
                    placeholder='номер телефона' 
                />
                {!isValid && (
                    <p className="mb-4 text-red-500 text-[14px] w-fit self-start">
                        Номер телефона неправильный
                    </p>
                )}
                <button type='submit' className='w-full bg-black text-white py-3 px-8 mb-4'>Получить код</button>
                <p className='text-[#666666] text-center text-[14px] w-full'>Нажимая на кнопку «Получить код», я соглашаюсь с политикой обработки <a className='underline' href='#policy'>персональных данных</a></p>
            </form>
        </div>
    )
}

export default LoginPage
