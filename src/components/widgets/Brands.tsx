'use client'
import { Brand } from '@/core/type/brand.type'
import React from 'react'
import Button from '../shared/Button'
import { redirect } from 'next/navigation'

interface BrandsProps {
  brands: Brand[]
}

const Brands: React.FC<BrandsProps> = ({ brands }) => {
  return (
    <div>
      <div className="flex mb-10">
        <h2 className="text-h2 font-bold">Бренды</h2>
        <Button type="transparent">Перейти к бренду</Button>
      </div>
      <div className="grid grid-cols-4 gap-x-4 gap-y-10">
        {brands.map((brand, index) => (
          <button
            className="text-24px text-start hover:text-primary hover:transition duration-200 ease-in-out"
            key={index}
            onClick={() => redirect(`/brands/${brand.name}`)}
          >
            {brand.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Brands
