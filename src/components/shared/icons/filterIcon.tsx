import React from 'react'
import { IconType } from '../../../core/type/icon.type'


export const FilterIcon: React.FC<IconType> = ({ size = 16, color, className , onClick }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9698 0.674212L14.9696 0.6742M14.9698 0.674212L14.9696 0.6742M14.9698 0.674212L14.9696 0.6742M14.9698 0.674212L14.9696 0.6742" fill="#0B0B0B" stroke="#0B0B0B" stroke-width="2"/>
    </svg>
  )
}