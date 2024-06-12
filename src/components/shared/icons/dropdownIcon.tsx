import React from 'react';
import { IconType } from '../../../core/type/icon.type';

export const DropdownIcon: React.FC<IconType> = ({
  size = 24,
  color = '#494949',
  className,
  onClick,
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={`${className} group hover:cursor-pointer`}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 14.498L12 8.49805L18 14.498"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};
