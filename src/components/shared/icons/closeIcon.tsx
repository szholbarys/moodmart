import React from 'react'
import { IconType } from '../../../core/type/icon.type'


export const CloseIcon: React.FC<IconType> = ({ size = 20, color, className , onClick }) => {
  return (
    <svg width={size} height={size} className={`${className} group hover:cursor-pointer`} onClick={onClick} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="group-hover:stroke-primary transition duration-300 ease-in-out" d="M1 1L17 17" stroke={color} strokeLinecap="square" strokeLinejoin="round"/>
        <path className="group-hover:stroke-primary transition duration-300 ease-in-out" d="M1 17L17 1" stroke={color} strokeLinecap="square" strokeLinejoin="round"/>
    </svg>

  )
}