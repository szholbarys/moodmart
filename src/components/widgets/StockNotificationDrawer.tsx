'use client'
import { ChangeEvent, FC, useState } from 'react'
import EZDrawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

interface StockDrawerProps {
  isOpen: boolean
  toggleDrawer: () => void
}

const StockNotificationDrawer: FC<StockDrawerProps> = ({
  isOpen,
  toggleDrawer,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Regular expressions to validate phone numbers
    const phoneRegex1 = /^\+7\d{10}$/ // +7xxxxxxxxxx
    const phoneRegex2 = /^87\d{9}$/ // 87xxxxxxxxx

    const isValid = phoneRegex1.test(value) || phoneRegex2.test(value)
    setIsValid(isValid)
    setPhoneNumber(value)
  }
  return (
    <>
      <EZDrawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="stock-drawer"
        size={720}
      >
        <div className="my-52 mx-32">
          <h2 className="font-bold text-[40px]">Узнать о поступлении</h2>
          <p className="mt-6 text-20px text-grey font-medium">
            Оставьте свой номер, и оповестим вас, когда продукт появится
          </p>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="номер телефона"
            name="phone"
            id="phone"
            className="mt-[34px] py-4 text-18px placeholder-light_grey border-b-2 border-light_grey focus:border-black outline-none w-full"
          />
          {!isValid && (
            <p className="text-red-500 text-16px w-fit">
              Номер телефона неправильный
            </p>
          )}
          <div>
            <input
              type="checkbox"
              id="myCheckbox"
              className="w-4 h-4 border border-black rounded-none"
            />
          </div>
        </div>
      </EZDrawer>
    </>
  )
}

export default StockNotificationDrawer
