import React from 'react';
import { IconType } from '../../../core/type/icon.type';

export const DetailsIcon: React.FC<IconType> = ({
  size = 24,
  color = '#333333', 
  className,
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.2 5.6001H6.8H6V19.2001V20.0001H18V19.2001V5.6001H17.2Z"
        stroke={color}
        strokeWidth="1.2"
      />
      <path
        d="M9.59961 4V6.4"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="square"
      />
      <path
        d="M14.4004 4V6.4"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="square"
      />
      <path
        d="M8.80078 10H15.2008"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="square"
      />
      <path
        d="M8.80078 13.2H13.6008"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="square"
      />
      <path
        d="M8.80078 16.3999H12.0008"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
};
