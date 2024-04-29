import React from 'react'

interface StarIconProps {
  percentage: number
}

export const StarIcon: React.FC<StarIconProps> = ({ percentage }) => {
  const gradientId = `halfGradient_${Math.random().toString(36).substr(2, 9)}`
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId}>
          <stop offset={`${percentage}%`} stopColor="var(--black)" />
          <stop offset={`${percentage}%`} stopColor="var(--light_grey)" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9938 6.815L9 0.25L7.00625 6.815H0.25L5.71625 11.065L3.6875 17.75L9 13.6187L14.3125 17.75L12.2837 11.065L17.75 6.815H10.9938Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  )
}
